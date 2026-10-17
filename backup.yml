// Daily backup of the public Yangban dictionary data from Firestore (REST API, public read).
// Writes backups/yangban-backup.json in the same format as the app's "Export data" file,
// so it can be restored with Menu -> Import data (.json).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const PROJECT = 'yanban-dictionary';
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;
const OUT = 'backups/yangban-backup.json';

function convert(v) {
  if ('stringValue' in v) return v.stringValue;
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return v.doubleValue;
  if ('booleanValue' in v) return v.booleanValue;
  if ('nullValue' in v) return null;
  if ('timestampValue' in v) return v.timestampValue;
  if ('referenceValue' in v) return v.referenceValue;
  if ('bytesValue' in v) return v.bytesValue;
  if ('geoPointValue' in v) return v.geoPointValue;
  if ('arrayValue' in v) return (v.arrayValue.values || []).map(convert);
  if ('mapValue' in v) return convertFields(v.mapValue.fields || {});
  return null;
}
function convertFields(fields) {
  const o = {};
  for (const k of Object.keys(fields)) o[k] = convert(fields[k]);
  return o;
}
export function convertDoc(doc) {
  return { id: doc.name.split('/').pop(), ...convertFields(doc.fields || {}) };
}

async function getJson(url) {
  let lastErr;
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch(url);
      if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
      return await r.json();
    } catch (e) { lastErr = e; await new Promise(res => setTimeout(res, 2000 * (i + 1))); }
  }
  throw lastErr;
}

async function listAll(collection) {
  const docs = [];
  let token = '';
  do {
    const url = `${BASE}/${collection}?pageSize=300${token ? `&pageToken=${encodeURIComponent(token)}` : ''}`;
    const page = await getJson(url);
    (page.documents || []).forEach(d => docs.push(convertDoc(d)));
    token = page.nextPageToken || '';
  } while (token);
  docs.sort((a, b) => a.id.localeCompare(b.id));
  return docs;
}

async function getDoc(path) {
  try {
    const r = await fetch(`${BASE}/${path}`);
    if (r.status === 404) return null;
    if (!r.ok) throw new Error(`HTTP ${r.status} for ${path}`);
    const d = convertDoc(await r.json());
    delete d.id;
    return d;
  } catch (e) { throw e; }
}

async function main() {
  const entries = await listAll('entries');
  const lessons = await listAll('lessons');
  const grammar = await listAll('grammar');
  const songs = await listAll('songs');
  const alphaDocs = await listAll('alphaAudio');
  const alphaAudio = {};
  alphaDocs.forEach(d => { alphaAudio[d.id] = d.src; });
  const about = await getDoc('meta/about');
  const configDoc = await getDoc('meta/config');
  const config = { developers: (configDoc && configDoc.developers) || [] };

  // Safety checks: never replace a good backup with an empty / partial one.
  if (entries.length < 100) throw new Error(`Only ${entries.length} entries fetched — refusing to overwrite backup.`);
  if (existsSync(OUT)) {
    try {
      const prev = JSON.parse(readFileSync(OUT, 'utf8'));
      const prevCount = (prev.entries || []).length;
      if (prevCount > 0 && entries.length < prevCount * 0.5)
        throw new Error(`Entries dropped from ${prevCount} to ${entries.length} — refusing to overwrite. Check the data first.`);
    } catch (e) { if (String(e.message).startsWith('Entries dropped')) throw e; }
  }

  const lines = (arr) => '[\n' + arr.map(x => JSON.stringify(x)).join(',\n') + '\n]';
  const text = '{\n' +
    `"entries": ${lines(entries)},\n` +
    `"lessons": ${lines(lessons)},\n` +
    `"grammar": ${lines(grammar)},\n` +
    `"songs": ${lines(songs)},\n` +
    `"about": ${JSON.stringify(about || {})},\n` +
    `"alphaAudio": ${JSON.stringify(alphaAudio)},\n` +
    `"config": ${JSON.stringify(config)}\n` +
    '}\n';
  mkdirSync('backups', { recursive: true });
  writeFileSync(OUT, text);
  const translated = entries.filter(e => (e.yanban || '').trim()).length;
  console.log(`Backup OK: ${entries.length} entries (${translated} translated), ${lessons.length} lessons, ${grammar.length} grammar, ${songs.length} songs, ${Object.keys(alphaAudio).length} audio clips.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(e => { console.error(e); process.exit(1); });
}
