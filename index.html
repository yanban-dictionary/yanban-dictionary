<!DOCTYPE html>
<html lang="my">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<title>Yanban-English Dictionary</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+Myanmar:wght@400;500;600&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
<style>
  html, body { margin: 0; padding: 0; background: #161a1f; }
  #root { min-height: 100vh; }
</style>
</head>
<body>
<div id="root"></div>

<script type="text/babel" data-presets="react">

    /* ---------- window.storage shim: real browser storage (per-device), same
       async get/set/delete/list interface the app code already expects.
       NOTE: this is per-phone/per-browser storage, not shared across the
       team. See the accompanying instructions for how to upgrade this to a
       shared cloud backend (e.g. Firebase) later without touching app code
       below this line. ---------- */
    (function installStorageShim() {
      function ns(key, shared) { return (shared ? "shared:" : "personal:") + key; }
      window.storage = {
        async get(key, shared) {
          const raw = localStorage.getItem(ns(key, shared));
          if (raw === null) throw new Error("not found");
          return { key, value: raw, shared: !!shared };
        },
        async set(key, value, shared) {
          localStorage.setItem(ns(key, shared), value);
          return { key, value, shared: !!shared };
        },
        async delete(key, shared) {
          localStorage.removeItem(ns(key, shared));
          return { key, deleted: true, shared: !!shared };
        },
        async list(prefix, shared) {
          const full = ns(prefix || "", shared);
          const keys = [];
          for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k && k.startsWith(full)) keys.push(k.slice((shared ? "shared:" : "personal:").length));
          }
          return { keys, prefix, shared: !!shared };
        },
      };
    })();


const { useState, useEffect, useMemo, useRef, useCallback } = React;

/* ---------- lightweight inline-SVG icon set (replaces lucide-react, no build step needed) ---------- */
function Icon({ path, size = 16, strokeWidth = 2, className = "", style, ...rest }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} {...rest}
    >
      {path}
    </svg>
  );
}
const Search = (p) => <Icon {...p} path={<><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>} />;
const Plus = (p) => <Icon {...p} path={<><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>} />;
const Pencil = (p) => <Icon {...p} path={<><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></>} />;
const Trash2 = (p) => <Icon {...p} path={<><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></>} />;
const X = (p) => <Icon {...p} path={<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>} />;
const BookOpen = (p) => <Icon {...p} path={<><path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2Z" /><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z" /></>} />;
const ArrowLeftRight = (p) => <Icon {...p} path={<><path d="M3 7h13" /><path d="M13 3l4 4-4 4" /><path d="M21 17H8" /><path d="M11 21l-4-4 4-4" /></>} />;
const Loader2 = (p) => <Icon {...p} path={<path d="M21 12a9 9 0 1 1-6.219-8.56" />} />;
const Menu = (p) => <Icon {...p} path={<><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>} />;
const Globe = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" /></>} />;
const Shield = (p) => <Icon {...p} path={<path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6Z" />} />;
const Users = (p) => <Icon {...p} path={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>} />;
const Music = (p) => <Icon {...p} path={<><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></>} />;
const GraduationCap = (p) => <Icon {...p} path={<><path d="M22 10L12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></>} />;
const Info = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></>} />;
const Volume2 = (p) => <Icon {...p} path={<><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M18.5 5.5a9 9 0 0 1 0 13" /></>} />;
const Upload = (p) => <Icon {...p} path={<><path d="M12 3v12" /><path d="M7 8l5-5 5 5" /><path d="M4 21h16" /></>} />;
const Check = (p) => <Icon {...p} path={<polyline points="20 6 9 17 4 12" />} />;
const XCircle = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></>} />;
const UserPlus = (p) => <Icon {...p} path={<><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></>} />;
const UserMinus = (p) => <Icon {...p} path={<><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="23" y1="11" x2="17" y2="11" /></>} />;
const Clock = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>} />;
const ChevronRight = (p) => <Icon {...p} path={<polyline points="9 18 15 12 9 6" />} />;
const Home = (p) => <Icon {...p} path={<><path d="M3 9l9-7 9 7" /><path d="M9 22V12h6v10" /></>} />;
const LogIn = (p) => <Icon {...p} path={<><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></>} />;

/* ---------- storage keys ---------- */
const ENTRIES_KEY = "yanban-dictionary-entries";
const CONFIG_KEY = "yanban-app-config";
const IDENTITY_KEY = "yanban-my-identity"; // personal
const LANG_KEY = "yanban-my-lang"; // personal
const LESSONS_KEY = "yanban-lessons";
const GRAMMAR_KEY = "yanban-grammar";
const SONGS_KEY = "yanban-songs";
const ABOUT_KEY = "yanban-about";
const ALPHABET_AUDIO_KEY = "yanban-alphabet-audio";
const BIBLE_SEED_FLAG_KEY = "yanban-bible-words-seeded-v1"; // shared: ensures the Bible vocabulary batch is merged into the shared dictionary exactly once

/* ---------- seed data ---------- */
const SEED_WORDS = ["a","about","above","abroad","absence","absolute","absolutely","accept","acceptable","access","accident","accompany","according","account","accurate","accuse","achieve","achievement","acknowledge","acquire","across","act","action","active","activity","actor","actress","actual","actually","adapt","add","addition","additional","address","adequate","adjust","admire","admission","admit","adopt","adult","advance","advanced","advantage","adventure","advertise","advertisement","advice","advise","affair","affect","afford","afraid","after","afternoon","afterward","again","against","age","agency","agenda","agent","aggressive","ago","agree","agreement","ahead","aid","aim","air","aircraft","airline","airport","alarm","album","alcohol","alert","alike","alive","all","allow","almost","alone","along","already","also","alter","although","always","amazed","amazing","ambassador","ambition","among","amount","analysis","ancient","and","anger","angle","angry","animal","ankle","anniversary","announce","annoy","annual","another","answer","ant","anxious","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","apologize","app","apparent","apparently","appeal","appear","appearance","apple","application","apply","appoint","appointment","appreciate","approach","appropriate","approval","approve","approximately","april","architect","area","argue","argument","arise","arm","armed","army","around","arrange","arrangement","arrest","arrival","arrive","art","article","artificial","artist","as","ashamed","ask","asleep","aspect","assess","assign","assist","assistant","associate","association","assume","assure","at","athlete","atmosphere","attach","attack","attempt","attend","attention","attitude","attract","attraction","attractive","audience","audio","august","aunt","author","authority","automatic","autumn","available","average","avoid","award","aware","away","awful","baby","back","background","backpack","backward","bacteria","bad","badge","badly","badminton","bag","baker","balance","ball","ban","banana","band","bank","bar","barber","barely","barrel","barrier","base","baseball","basic","basically","basis","basket","basketball","bath","bathroom","battery","battle","be","beach","bean","bear","beard","beat","beautiful","beauty","because","become","bed","bedroom","bee","beef","before","beg","begin","beginning","behave","behavior","behind","being","belief","believe","bell","belong","below","belt","bench","bend","beneath","benefit","bent","beside","best","bet","better","between","beyond","bicycle","big","bike","bill","billion","bin","bind","biology","bird","birth","birthday","bit","bite","bitter","black","blackboard","blade","blame","blank","blanket","blast","blend","bless","blind","block","blog","blood","blow","blue","board","boat","body","boil","bold","bomb","bond","bone","bonus","book","boot","border","bore","bored","born","borrow","boss","both","bother","bottle","bottom","boundary","bowl","box","boxing","boy","bracelet","brain","brake","branch","brand","brave","bread","break","breakfast","breast","breath","breathe","breed","bridge","brief","bright","brilliant","bring","broad","broadcast","broken","broom","brother","brown","browser","brush","budget","bug","build","building","bullet","bunch","burden","burn","burst","bury","bus","bush","business","busy","but","butter","butterfly","button","buy","by","cabin","cabinet","cable","cage","cake","calculate","calendar","call","calm","camera","camp","campaign","campus","can","cancel","cancer","candidate","candle","candy","cap","capable","capacity","capital","captain","capture","car","carbon","card","care","career","careful","careless","carry","cart","carve","case","cash","cashier","cast","cat","catch","category","cause","cave","ceiling","celebrate","celebration","celebrity","cell","cent","cen
ter","central","century","ceremony","certain","certainly","chain","chair","chairman","chalk","challenge","chamber","champion","championship","chance","change","channel","chapter","character","characteristic","charge","charger","charity","chart","chase","chat","cheap","cheat","check","cheek","cheese","chef","chemical","chemistry","chest","chicken","chief","child","childhood","chili","chin","chip","chocolate","choice","choose","chop","chopsticks","chorus","church","cigarette","circle","circuit","circumstance","cite","citizen","city","civil","civilization","claim","clarify","class","classic","classify","classroom","clause","clean","clear","clearly","clever","click","client","cliff","climate","climb","climbing","clock","close","closed","closet","cloth","clothes","clothing","cloud","cloudy","club","clue","cluster","coach","coal","coast","coat","coconut","code","coffee","coin","cold","collapse","colleague","collect","collection","college","colony","color","column","combination","combine","come","comedy","comfort","comfortable","command","comment","commercial","commission","commit","commitment","committee","common","communicate","communication","community","company","compare","comparison","compete","competition","competitive","competitor","complain","complaint","complete","completely","complex","complicated","component","compose","composition","comprehensive","compute","computer","concentrate","concept","concern","concerned","concert","conclude","conclusion","concrete","condition","conditioner","conduct","conference","confidence","confident","confirm","conflict","confuse","confused","confusion","congratulate","congress","connect","connection","conscious","consequence","conservative","consider","considerable","consist","consistent","constant","constantly","constitute","constitution","construct","construction","consult","consume","consumer","contact","contain","container","contemporary","content","contest","context","continent","continue","continuous","contract","contrast","contribute","contribution","control","controversy","convenient","conversation","convert","convince","cook","cookie","cool","cooperate","cope","copper","copy","core","corn","corner","corporate","corporation","correct","correspond","cost","costume","cottage","cotton","couch","could","council","count","counter","country","county","couple","courage","course","court","cousin","cover","cow","crab","crack","craft","crash","crawl","crazy","cream","create","creation","creative","creature","credit","crew","cricket","crime","criminal","crisis","criteria","critic","critical","criticism","criticize","crocodile","crop","cross","crowd","crown","crucial","crude","cruel","crush","cry","crystal","cultural","culture","cup","cure","curious","currency","current","currently","curriculum","curtain","curve","custom","customer","cut","cycle","cycling","dad","daily","damage","dance","dancer","danger","dangerous","dare","dark","darkness","data","database","date","daughter","dawn","day","dead","deadline","deal","dear","death","debate","debit","debt","decade","december","decent","decide","decision","declare","decline","decorate","decrease","deep","deeply","deer","default","defeat","defend","defense","define","definitely","definition","degree","delay","deliberate","delicate","delicious","delight","deliver","delivery","demand","democracy","democratic","demonstrate","deny","department","departure","depend","deposit","depression","depth","derive","describe","description","desert","deserve","design","designer","desire","desk","desperate","despite","dessert","destination","destroy","detail","detect","determine","develop","developer","development","device","devote","diagram","dial","diamond","diary","dictionary","die","diet","differ","difference","different","difficult","difficulty","dig","digital","digni
ty","dimension","dining","dinner","diploma","diplomat","direct","direction","directly","director","dirt","dirty","disagree","disappear","disappoint","disappointed","disaster","discipline","discount","discourse","discover","discovery","discuss","discussion","disease","dish","dishonest","dislike","dismiss","display","distance","distant","distinct","distinction","distinguish","distribute","distribution","district","disturb","dive","diverse","diversity","divide","division","divorce","do","doctor","document","dog","dollar","dolphin","domain","domestic","dominant","dominate","donate","door","dormitory","dot","double","doubt","down","download","downtown","dozen","draft","drag","drama","dramatic","draw","drawer","drawing","dream","dress","drift","drink","drive","driver","drop","drought","drug","drum","dry","duck","due","during","dust","duty","each","eager","eagle","ear","early","earn","earring","earth","earthquake","ease","east","eastern","easy","eat","economic","economics","economy","edge","edit","edition","editor","educate","education","effect","effective","efficient","effort","egg","eight","eighteen","eighty","either","elbow","elderly","elect","election","electric","electricity","elegant","element","elephant","eleven","eliminate","elite","else","elsewhere","email","embarrass","embarrassed","embassy","embrace","emerge","emergency","emotion","emotional","emphasis","employ","employee","employer","employment","empty","enable","encounter","encourage","end","enemy","energy","engage","engine","engineer","english","enhance","enjoy","enormous","enough","ensure","enter","enterprise","entertain","entertainment","enthusiasm","entire","entirely","entrance","entrepreneur","entry","envelope","environment","environmental","episode","equal","equally","equation","equipment","era","eraser","error","escape","especially","essay","essential","establish","estate","estimate","ethical","ethnic","evaluate","even","evening","event","eventually","ever","every","everybody","everyday","everyone","everything","everywhere","evidence","evil","evolution","evolve","exact","exactly","exam","examine","example","exceed","excellent","except","exception","exchange","excite","excited","exciting","exclude","exclusive","excuse","execute","executive","exercise","exhibit","exhibition","exist","existence","exit","expand","expansion","expect","expectation","expense","expensive","experience","experiment","expert","explain","explanation","explode","explore","explosion","export","expose","exposure","express","expression","extend","extension","extensive","extent","external","extra","extraordinary","extreme","extremely","eye","eyebrow","eyelash","fabric","face","facility","fact","factor","factory","faculty","fade","fail","failure","fair","fairly","faith","fall","false","familiar","family","famous","fan","fantasy","far","farm","farmer","fashion","fast","fat","fate","father","fault","favor","favorite","fear","feather","feature","february","federal","fee","feed","feel","feeling","fellow","female","fence","festival","fever","few","fiance","fiber","fiction","field","fifteen","fifth","fifty","fight","figure","file","fill","film","final","finally","finance","financial","find","fine","finger","finish","fire","firm","first","fish","fishing","fit","fitness","five","fix","flag","flame","flat","flavor","flee","flesh","flight","float","flood","floor","flow","flower","fluid","fly","focus","fog","foggy","fold","folder","folk","follow","following","food","fool","foolish","foot","football","for","force","forecast","foreign","forest","forever","forget","fork","form","formal","format","formation","former","formula","forth","fortune","forty","forum","forward","found","foundation","founder","four","fourteen","fourth","fox","frame","framework","free","freedom","freeze","french","frequency","frequent","fresh"
,"friday","friend","friendly","friendship","frog","from","front","frontier","fruit","frustrate","fry","fuel","full","fully","fun","function","fund","fundamental","funding","funeral","funny","fur","furniture","further","furthermore","future","gain","galaxy","gallery","game","gang","gap","garage","garden","garlic","gas","gasoline","gate","gather","gay","gaze","gear","gender","gene","general","generally","generate","generation","generous","genetic","genius","gentle","gentleman","genuine","geography","germ","gesture","get","ghost","giant","gift","ginger","girl","girlfriend","give","given","glad","glance","glass","glasses","global","glory","glove","go","goal","goat","god","gold","golden","golf","good","goods","govern","government","governor","grab","grade","gradually","graduate","grain","gram","grand","grandfather","grandmother","grant","grape","graph","grass","grateful","grave","gray","great","green","greet","grey","grief","grill","grip","grocery","gross","ground","group","grow","growth","guarantee","guard","guess","guest","guide","guideline","guilt","guilty","guitar","gun","guy","gym","habit","habitat","hair","half","hall","hand","handful","handle","hang","happen","happy","harbor","hard","hardly","hardware","harm","hat","hate","have","he","head","headline","headphone","headquarters","health","healthy","hear","hearing","heart","heat","heater","heaven","heavily","heavy","heel","height","helicopter","hell","hello","help","helpful","hence","her","herb","here","heritage","hero","herself","hey","hi","hide","high","highly","highway","hill","him","himself","hip","hire","his","historian","historic","historical","history","hit","hockey","hold","hole","holiday","holy","home","homework","honest","honey","honor","hook","hop","hope","hopeful","horizon","horn","horror","horse","hospital","host","hot","hotel","hour","house","household","housing","how","however","huge","human","humanity","humble","humid","humidity","humor","hundred","hunger","hungry","hunt","hunter","hurricane","hurry","hurt","husband","hypothesis","ice","idea","ideal","identical","identification","identify","identity","ignore","ill","illegal","illness","illustrate","image","imagination","imagine","immediate","immediately","immigrant","immigration","impact","impatient","implement","implication","imply","import","importance","important","impose","impossible","impress","impression","improve","improvement","in","incentive","incident","include","including","income","incorporate","increase","increasingly","incredible","indeed","independence","independent","index","indicate","indication","indirect","individual","industrial","industry","infant","infection","inflation","influence","inform","information","ingredient","initial","initially","initiative","injure","injury","inner","innocent","inquiry","insect","inside","insight","insist","inspire","install","instance","instead","institution","institutional","instruction","instructor","instrument","insurance","intellectual","intelligence","intend","intense","intensity","intention","interaction","interest","interested","interesting","internal","international","internet","interpret","interpretation","interview","into","introduce","introduction","invasion","invent","invest","investigate","investigation","investment","investor","invite","invoice","involve","involved","involvement","iron","island","issue","it","item","its","itself","jacket","jail","january","jar","jaw","jazz","jealous","jeans","jewelry","job","jogging","join","joint","joke","journal","journalist","journey","joy","judge","judgment","juice","july","jump","june","junior","jury","just","justice","justify","keen","keep","key","keyboard","kick","kid","kill","killer","kind","king","kiss","kitchen","knee","knife","knock","know","knowledge","known","lab","label","labor","laboratory","lack","lad
der","lady","lake","lamp","land","landscape","language","lap","laptop","large","largely","last","late","later","latter","laugh","laughter","launch","law","lawn","lawsuit","lawyer","lay","layer","lead","leader","leadership","leading","leaf","league","lean","learn","least","leather","leave","lecture","left","leg","legacy","legal","legend","legislation","legitimate","leisure","lemon","lend","length","less","lesson","let","letter","level","liberal","library","license","lie","life","lifestyle","lifetime","lift","light","lightning","like","likely","lime","limit","limited","line","link","lion","lip","liquid","list","listen","literally","literary","literature","little","live","liver","living","load","loan","local","locate","location","lock","log","logic","login","logout","lonely","long","look","loose","lose","loss","lost","lot","lots","loud","love","lovely","lover","low","lower","loyal","luck","lucky","luggage","lunch","lung","luxury","machine","mad","magazine","magic","mail","main","mainly","maintain","maintenance","major","majority","make","maker","makeup","male","mall","man","manage","management","manager","mango","manner","manufacturer","manufacturing","many","map","march","margin","mark","market","marketing","marriage","marry","mask","mass","massive","master","match","material","math","matter","mattress","maximum","may","maybe","mayor","me","meal","mean","meaning","meanwhile","measure","meat","mechanism","medal","media","medical","medication","medicine","medium","meet","meeting","member","membership","memory","mental","mention","menu","mere","merely","merge","mess","message","metal","method","microphone","middle","midnight","might","military","milk","million","mind","mine","minimum","minister","minor","minority","minute","miracle","mirror","miss","missile","mission","mist","mistake","mix","mixture","mode","model","moderate","modern","modest","modify","mom","moment","monday","money","monitor","monkey","month","monthly","mood","moon","moral","more","moreover","morning","mortgage","mosquito","most","mostly","mother","motion","motivate","motivation","motor","motorcycle","mount","mountain","mouse","mouth","move","movement","movie","mud","multiple","murder","muscle","museum","music","musical","musician","must","mutual","my","myself","mysterious","mystery","myth","nail","naked","name","napkin","narrative","narrow","nation","national","native","natural","naturally","nature","navy","near","nearby","nearly","necessarily","necessary","neck","necklace","need","negative","negotiate","negotiation","neighbor","neighborhood","neither","nephew","nerve","nervous","net","network","never","nevertheless","new","newly","news","newspaper","next","nice","niece","night","nightmare","nine","nineteen","ninety","nobody","nod","noise","noisy","nominate","none","nonetheless","noodles","noon","nor","normal","normally","north","northern","nose","not","note","notebook","nothing","notice","notion","novel","novelist","november","now","nowhere","nuclear","number","numerous","nurse","nut","object","objective","obligation","observation","observe","observer","obtain","obvious","obviously","occasion","occasionally","occupation","occupy","occur","ocean","odd","of","off","offense","offensive","offer","office","officer","official","often","oh","oil","ok","okay","old","olive","on","once","one","ongoing","onion","online","only","onto","open","opening","operate","operating","operation","operator","opinion","opponent","opportunity","oppose","opposite","opposition","option","or","orange","order","ordinary","organic","organization","organize","orientation","origin","original","originally","other","otherwise","ought","our","ourselves","out","outcome","outside","oven","over","overall","overcome","overlook","owe","owl","own","owner","ownership","pace","pack","package","page","pain","p
ainful","paint","painter","painting","pair","pajama","palace","pale","palm","pan","panel","panic","pants","papaya","paper","parent","park","parking","parliament","parrot","part","participant","participate","participation","particular","particularly","partly","partner","partnership","party","pass","passage","passenger","passion","passport","password","past","pastor","patch","path","patience","patient","pattern","pause","pay","payment","peace","peaceful","peak","peer","pen","penalty","pencil","pension","people","pepper","per","perceive","percentage","perception","perfect","perform","performance","perhaps","period","permanent","permission","permit","person","personal","personality","personally","personnel","perspective","persuade","pet","phase","phenomenon","philosophy","phone","photo","photograph","photographer","phrase","physical","physician","physics","piano","pick","picture","pie","piece","pig","pile","pillow","pilot","pin","pine","pineapple","pink","pipe","pitch","place","plan","plane","planet","planning","plant","plastic","plate","platform","play","player","pleasant","please","pleasure","plenty","plot","plus","pocket","poem","poet","poetry","point","pole","police","policy","polite","political","politically","politician","politics","poll","pollution","pool","poor","pop","popular","population","porch","pork","port","portion","portrait","pose","position","positive","possess","possibility","possible","possibly","post","pot","potato","potential","pound","pour","poverty","powder","power","powerful","practical","practice","pray","prayer","precisely","predict","prefer","preference","pregnant","preparation","prepare","presence","present","president","presidential","press","pressure","presumably","pretend","pretty","prevent","previous","previously","price","pride","priest","primarily","primary","prime","principal","principle","print","printer","prior","priority","prison","prisoner","privacy","private","probably","problem","procedure","proceed","process","produce","producer","product","production","profession","professional","professor","profile","profit","program","programmer","progress","project","prominent","promise","promote","prompt","proof","proper","properly","property","proportion","proposal","propose","prosecutor","prospect","protect","protection","protein","protest","proud","prove","provide","province","provision","psychological","psychologist","psychology","public","publication","publicly","publish","publisher","pull","punch","punishment","purchase","pure","purple","purpose","purse","pursue","push","put","qualify","quality","quarter","queen","question","quick","quickly","quiet","quietly","quit","quite","quote","rabbit","race","racial","radical","radio","rail","rain","rainy","raise","range","rank","rapid","rapidly","rare","rarely","rat","rate","rather","raw","reach","react","reaction","read","reader","reading","ready","real","reality","realize","really","reason","reasonable","recall","receipt","receive","recent","recently","recipe","recognition","recognize","recommend","recommendation","record","recover","recovery","recruit","red","reduce","reduction","refer","referee","reference","reflect","reform","refrigerator","refugee","refuse","regard","regarding","regardless","region","regional","register","regular","regularly","regulate","regulation","reinforce","reject","relate","relation","relationship","relative","relatively","relax","relaxed","release","relevant","relief","religion","religious","rely","remain","remaining","remarkable","remember","remind","remote","remove","repeat","repeatedly","replace","reply","report","reporter","represent","representation","representative","republic","republican","reputation","request","require","requirement","research","researcher","resemble","reservation","resident","resist","resolution","resolv
e","resort","resource","respect","respective","respond","response","responsibility","responsible","rest","restaurant","restore","restriction","result","retain","retire","retirement","return","reveal","revenue","review","revolution","rhythm","rice","rich","rid","ride","rifle","right","rights","ring","rise","risk","river","road","rock","role","roll","romantic","roof","room","root","rope","rough","roughly","round","route","routine","row","rub","rude","rugby","rule","ruler","run","running","rural","rush","sacred","sad","safe","safety","sake","salad","salary","sale","sales","salt","same","sample","sanction","sand","satellite","satisfaction","satisfied","satisfy","saturday","sauce","save","saving","say","scale","scandal","scared","scarf","scenario","scene","schedule","scheme","scholar","scholarship","school","science","scientific","scientist","scope","score","scream","screen","script","sea","search","season","seat","seatbelt","second","secret","secretary","section","sector","secure","security","see","seed","seek","seem","segment","seize","select","selection","self","selfish","sell","senate","senator","send","senior","sense","sensitive","sentence","separate","sequence","series","serious","seriously","serve","server","service","session","set","setting","settle","settlement","seven","seventeen","seventy","several","severe","sex","sexual","shade","shadow","shake","shall","shampoo","shape","share","shark","sheep","sheet","shelf","shift","shine","ship","shirt","shock","shoe","shoot","shooting","shop","shopping","shore","short","shortly","shot","should","shoulder","shout","show","shower","shrimp","shrug","shut","shy","sibling","sick","side","sigh","sight","sign","signal","significant","significantly","silence","silent","silk","silver","similar","similarly","simple","simply","since","sing","singer","single","sink","sir","sister","sit","site","situation","six","sixteen","sixty","size","skating","skiing","skill","skin","skirt","sky","slave","sleep","sleepy","slice","slide","slight","slightly","slip","slow","small","smart","smell","smile","smoke","smooth","snack","snake","snap","snow","so","soap","soccer","social","society","sock","sofa","soft","software","soil","solar","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometimes","somewhat","somewhere","son","song","soon","sophisticated","sorry","sort","soul","sound","soup","source","south","southern","space","speak","speaker","special","specialist","species","specific","specifically","specify","speech","speed","spend","sphere","spider","spirit","spiritual","spite","split","spokesman","spoon","sport","spot","spread","spring","square","stability","stable","stadium","staff","stage","stair","stake","stand","standard","star","stare","start","startup","state","statement","station","statistics","status","stay","steady","steal","steel","step","stick","still","stimulate","stir","stock","stomach","stone","stop","storage","store","storm","stormy","story","stove","straight","strange","stranger","strategic","strategy","stream","street","strength","strengthen","stress","stretch","strike","string","strip","stroke","strong","structure","struggle","student","studio","study","stuff","stupid","style","subject","submit","subscriber","subsequent","substance","substantial","subway","succeed","success","successful","successfully","such","sudden","suddenly","sue","suffer","sufficient","sugar","suggest","suggestion","suicide","suit","suitcase","summer","summit","sun","sunday","sunny","super","supermarket","supply","support","supporter","suppose","sure","surface","surfing","surgery","surprise","surprised","surround","survey","survival","survive","survivor","suspect","suspend","sustain","swear","sweater","sweep","sweet","swim","swimming","swing","switch","symbol","symptom","system","ta
ble","tablet","tackle","tail","tailor","take","tale","talent","talk","tall","tank","tap","tape","target","task","taste","tax","taxi","taxpayer","tea","teach","teacher","teaching","team","tear","technical","technique","technology","teen","teenager","telephone","television","tell","temperature","temporary","ten","tend","tendency","tennis","tension","tent","term","terms","terrible","territory","terror","terrorism","terrorist","test","testify","testimony","testing","text","textbook","than","thank","thanks","that","the","theater","their","them","theme","themselves","then","theory","therapy","there","therefore","these","they","thick","thigh","thin","thing","think","thinking","third","thirsty","thirteen","thirty","this","those","though","thought","thousand","threat","threaten","three","throat","through","throughout","throw","thumb","thunder","thursday","thus","ticket","tide","tie","tiger","tight","time","tiny","tip","tire","tired","tissue","title","to","tobacco","today","toe","together","tomorrow","tone","tongue","tonight","too","tool","tooth","toothbrush","toothpaste","top","topic","toss","total","touch","tough","tour","tourist","tournament","toward","towel","tower","town","toy","trace","track","trade","tradition","traditional","traffic","tragedy","trail","train","training","transfer","transform","transformation","transition","translate","transportation","trap","trash","travel","treat","treatment","treaty","tree","tremendous","trend","trial","tribe","trick","trigger","trip","troop","trophy","trouble","trousers","truck","true","truly","trust","truth","try","tube","tuesday","tuition","tunnel","turn","turtle","tv","twelve","twenty","twice","twin","twist","two","type","typhoon","typical","typically","ugly","ultimate","ultimately","umbrella","unable","uncle","uncomfortable","under","undergo","understand","understanding","underwear","unfortunately","uniform","union","unique","unit","united","universal","universe","university","unknown","unless","unlike","unlikely","until","unusual","up","update","upload","upon","upper","urban","urge","us","use","used","useful","user","username","usual","usually","utility","vacation","valid","valley","valuable","value","van","variable","variation","variety","various","vary","vast","vegetable","vehicle","venture","version","versus","very","vessel","veteran","via","victim","victory","video","view","viewer","village","violate","violence","violent","virtual","virtue","virus","visible","vision","visit","visitor","visual","vital","vitamin","voice","volcano","volleyball","volume","volunteer","vote","voter","voting","wage","waist","wait","waiter","waitress","wake","walk","wall","wallet","want","war","warm","warn","warning","wash","washing","waste","watch","water","watermelon","wave","way","we","weak","wealth","wealthy","weapon","wear","weather","web","website","wedding","wednesday","week","weekend","weekly","weigh","weight","weird","welcome","welfare","well","west","western","wet","whale","what","whatever","wheel","when","whenever","where","whereas","whether","which","while","whisper","white","whiteboard","who","whole","whom","whose","why","wide","widely","widespread","wife","wifi","wild","will","willing","win","wind","window","windy","wine","wing","winner","winter","wire","wisdom","wise","wish","with","withdraw","within","without","witness","wolf","woman","wonder","wonderful","wood","wooden","wool","word","work","worker","working","workplace","workshop","world","worm","worried","worry","worth","would","wound","wrap","wrestling","wrist","write","writer","writing","wrong","yard","yeah","year","yearly","yell","yellow","yes","yesterday","yet","yield","yoga","yogurt","you","young","your","yours","yourself","youth","zero","zipper","zone","zoo"];

/* ---------- Bible vocabulary (merged into the dictionary automatically on load) ----------
   Compiled to help with translating scripture into Yanban: named people, places,
   theological/religious terms, ritual objects, roles, animals/plants mentioned in
   scripture, and KJV-style vocabulary that shows up often in Bible translation work. */
const BIBLE_NAMES = ["Adam","Eve","Cain","Abel","Seth","Enosh","Kenan","Mahalalel","Jared","Enoch","Methuselah","Lamech","Noah","Shem","Ham","Japheth","Canaan","Cush","Mizraim","Put","Nimrod","Peleg","Reu","Serug","Nahor","Terah","Abram","Abraham","Sarai","Sarah","Hagar","Ishmael","Isaac","Rebekah","Laban","Bethuel","Esau","Jacob","Israel","Leah","Rachel","Bilhah","Zilpah","Reuben","Simeon","Levi","Judah","Dan","Naphtali","Gad","Asher","Issachar","Zebulun","Dinah","Joseph","Benjamin","Er","Onan","Shelah","Perez","Zerah","Tamar","Ephraim","Manasseh","Potiphar","Potipherah","Asenath","Jochebed","Amram","Moses","Aaron","Miriam","Nadab","Abihu","Eleazar","Ithamar","Phinehas","Jethro","Reuel","Zipporah","Gershom","Eliezer","Hobab","Caleb","Joshua","Hur","Bezalel","Oholiab","Korah","Dathan","Abiram","Balaam","Balak","Og","Sihon","Rahab","Achan","Othniel","Ehud","Shamgar","Deborah","Barak","Jael","Gideon","Jerubbaal","Abimelech","Tola","Jair","Jephthah","Ibzan","Elon","Abdon","Samson","Manoah","Delilah","Micah","Elimelech","Naomi","Ruth","Orpah","Boaz","Obed","Jesse","Eliab","Abinadab","Shammah","David","Saul","Kish","Jonathan","Merab","Michal","Abner","Ishbosheth","Abigail","Nabal","Ahinoam","Bathsheba","Uriah","Nathan","Amnon","Absalom","Adonijah","Solomon","Zadok","Abiathar","Joab","Abishai","Asahel","Hushai","Ahithophel","Shimei","Mephibosheth","Ziba","Rehoboam","Jeroboam","Abijah","Asa","Baasha","Elah","Zimri","Omri","Ahab","Jezebel","Ahaziah","Jehoram","Jehu","Jehoahaz","Jehoash","Zechariah","Shallum","Menahem","Pekahiah","Pekah","Hoshea","Jehoshaphat","Athaliah","Joash","Amaziah","Uzziah","Azariah","Jotham","Ahaz","Hezekiah","Amon","Josiah","Jehoiakim","Jehoiachin","Zedekiah","Elijah","Elisha","Obadiah","Micaiah","Naaman","Gehazi","Jehoiada","Huldah","Isaiah","Jeremiah","Baruch","Ezekiel","Daniel","Shadrach","Meshach","Abednego","Hananiah","Mishael","Belshazzar","Nebuchadnezzar","Nebuzaradan","Cyrus","Darius","Ahasuerus","Xerxes","Esther","Mordecai","Haman","Vashti","Zerubbabel","Ezra","Nehemiah","Sanballat","Tobiah","Haggai","Malachi","Job","Eliphaz","Bildad","Zophar","Elihu","Hosea","Gomer","Joel","Amos","Jonah","Nahum","Habakkuk","Zephaniah","Melchizedek","Lot","Milcah","Ephron","Keturah","Zimran","Jokshan","Medan","Midian","Ishbak","Shuah","Uz","Buz","Kemuel","Bethuel","Jemimah","Keziah","Keren-happuch","Mary","Elizabeth","John the Baptist","Jesus","Simon Peter","Andrew","James","John","Philip","Bartholomew","Nathanael","Thomas","Matthew","Levi","Thaddaeus","Simon the Zealot","Judas Iscariot","Mary Magdalene","Martha","Lazarus","Nicodemus","Joseph of Arimathea","Pontius Pilate","Herod","Herod Antipas","Herod Agrippa","Caiaphas","Annas","Barabbas","Simon of Cyrene","Stephen","Saul","Paul","Barnabas","Silas","Timothy","Titus","Luke","Mark","Priscilla","Aquila","Apollos","Lydia","Cornelius","Ananias","Sapphira","Gamaliel","Jude","Anna","Elymas","Sergius Paulus","Felix","Festus","Agrippa","Bernice","Onesimus","Philemon","Epaphras","Demas","Archippus","Tychicus","Trophimus","Erastus","Sosthenes","Crispus","Gaius","Phoebe","Junia","Andronicus","Epaphroditus","Clement","Diotrephes","Demetrius","Zacchaeus","Bartimaeus","Jairus","Malchus","Cleopas","Salome","Susanna","Joanna","Nicanor","Prochorus","Timon","Parmenas","Nicolas"];

const BIBLE_PLACES = ["Eden","Nod","Ararat","Babel","Babylon","Ur","Haran","Canaan","Shechem","Bethel","Ai","Sodom","Gomorrah","Zoar","Mamre","Hebron","Beersheba","Gerar","Moriah","Peniel","Succoth","Egypt","Goshen","Pithom","Rameses","Midian","Sinai","Horeb","Rephidim","Kadesh","Kadesh-barnea","Edom","Moab","Ammon","Bashan","Gilead","Jordan","Jericho","Gibeon","Ashkelon","Gaza","Gath","Ekron","Ashdod","Shiloh","Mizpah","Ramah","Gilgal","Bethlehem","Ephrath","Jerusalem","Zion","Ziklag","Endor","Gilboa","Jezreel","Samaria","Megiddo","Carmel","Tishbe","Zarephath","Shunem","Dothan","Nineveh","Tarshish","Joppa","Damascus","Aram","Assyria","Chaldea","Susa","Persia","Media","Elam","Padan-aram","Tyre","Sidon","Phoenicia","Philistia","Ephesus","Smyrna","Pergamum","Thyatira","Sardis","Philadelphia","Laodicea","Antioch","Iconium","Lystra","Derbe","Tarsus","Cilicia","Cyprus","Crete","Malta","Rome","Corinth","Athens","Thessalonica","Berea","Philippi","Colossae","Galatia","Cappadocia","Bithynia","Pontus","Macedonia","Achaia","Nazareth","Capernaum","Bethsaida","Chorazin","Cana","Tiberias","Galilee","Judea","Perea","Decapolis","Gadara","Emmaus","Bethany","Bethphage","Gethsemane","Golgotha","Calvary","Kidron","Hinnom","Patmos","Havilah","Pishon","Gihon","Tigris","Euphrates","Nile","Jabbok","Kishon","Arnon","Jabesh-gilead","Mahanaim","Penuel","Tirzah","Beth-shan","Beth-shemesh","Kiriath-jearim","Gibeah","Ramoth-gilead","Hazor","Kedesh","Laish","Ashtaroth","Golan","Zarethan","Zoan","Migdol","Baal-zephon","Marah","Elim","Taberah","Kibroth-hattaavah","Hazeroth","Dibon","Nebo","Pisgah","Shittim","Ebal","Gerizim","Kirjath-sepher","Debir","Anathoth","Nob","Adullam","Keilah","Maon","En-gedi","Ziph","Aphek","Dor","Rehob","Ijon","Michmash","Aijalon","Abel-meholah"];

const BIBLE_BOOKS = ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Samuel","Kings","Chronicles","Nehemiah","Esther","Proverbs","Ecclesiastes","Lamentations","Ezekiel","Hosea","Obadiah","Micah","Habakkuk","Zephaniah","Zechariah","Matthew","Romans","Corinthians","Galatians","Ephesians","Philippians","Colossians","Thessalonians","Philemon","Hebrews","Revelation"];

const BIBLE_THEOLOGY = ["covenant","redemption","salvation","atonement","sacrifice","offering","altar","tabernacle","temple","sanctuary","holy","holiness","righteousness","righteous","sin","sinner","iniquity","transgression","repentance","repent","forgiveness","forgive","grace","mercy","faith","faithful","faithfulness","belief","trust","hope","worship","praise","prayer","fasting","blessing","curse","cursed","prophecy","prophet","prophesy","vision","revelation","gospel","evangelism","evangelist","disciple","apostle","apostleship","ministry","minister","priest","priesthood","levite","scribe","pharisee","sadducee","elder","deacon","bishop","overseer","shepherd","flock","lamb","pastor","congregation","assembly","synagogue","church","kingdom","eternal life","resurrection","resurrect","ascension","incarnation","messiah","christ","anointed","anointing","baptism","baptize","communion","passover","unleavened bread","feast","festival","sabbath","jubilee","tithe","firstfruits","firstborn","circumcision","circumcise","gentile","israelite","hebrew","promised land","exodus","wilderness","manna","cherubim","seraphim","angel","archangel","demon","devil","satan","evil spirit","unclean spirit","exorcism","miracle","sign","wonder","parable","beatitude","commandment","law","statute","ordinance","judgment","justice","wrath","vengeance","glory","glorify","majesty","sovereignty","almighty","creator","creation","providence","predestination","election","sanctification","sanctify","justification","justify","reconciliation","reconcile","propitiation","ransom","deliverance","deliver","savior","redeemer","mediator","intercessor","intercession","advocate","comforter","counselor","trinity","godhead","deity","divine","divinity","spirit","soul","flesh","conscience","wisdom","understanding","discernment","virtue","temptation","tempt","tempter","trial","tribulation","persecution","persecute","martyr","martyrdom","testimony","witness","confession","confess","doctrine","teaching","tradition","heresy","apostasy","backslide","idolatry","idol","idolater","graven image","false prophet","false teacher","antichrist","second coming","rapture","millennium","judgment day","heaven","paradise","hell","hades","sheol","gehenna","lake of fire","new heaven","new earth","new jerusalem","throne of god","book of life","seal","trumpet","plague","day of the lord","remnant","suffering servant","son of man","son of god","lamb of god","bread of life","living water","light of the world","good shepherd","vine","branches","salt of the earth","narrow gate","mustard seed","pearl of great price","prodigal son","good samaritan","lost sheep","lost coin","talents","sower","tares","wedding feast","vineyard","tenants"];

const BIBLE_OBJECTS = ["ark","ark of the covenant","incense","censer","lampstand","menorah","showbread","veil","holy of holies","laver","brazen sea","ephod","breastplate","urim","thummim","mitre","turban","girdle","phylactery","tassel","fringe","anointing oil","frankincense","myrrh","spices","leaven","grain offering","burnt offering","sin offering","guilt offering","peace offering","drink offering","wave offering","scapegoat","red heifer","sackcloth","shofar","cymbal","harp","lyre","timbrel","tambourine","psaltery","flute","pipe","lute"];

const BIBLE_ANIMALS_PLANTS = ["lion","lamb","goat","ram","ewe","ox","bull","calf","heifer","donkey","camel","dove","pigeon","sparrow","raven","eagle","owl","hawk","vulture","locust","grasshopper","serpent","viper","scorpion","wolf","bear","leopard","fox","jackal","hyena","deer","gazelle","hart","hind","coney","whale","dragon","behemoth","leviathan","unicorn","swine","mule","olive tree","fig tree","vine","grape","pomegranate","palm tree","cedar","cypress","oak","terebinth","myrtle","hyssop","thistle","thorn","bramble","lily","rose of sharon","mandrake","wheat","barley","flax","mustard seed","cummin","mint","dill","anise","rue","gourd","cucumber","leek","honey","manna","quail","balm of gilead","aloes","cinnamon","saffron","cassia","calamus"];

const BIBLE_TITLES = ["king","queen","prince","princess","governor","ruler","judge","chief","captain","centurion","tetrarch","procurator","proconsul","high priest","levite","prophetess","pharisee","sadducee","zealot","tax collector","publican","shepherd","fisherman","tentmaker","carpenter","physician","evangelist","deaconess","steward","servant","bondservant","master","master builder","wise man","magi","sorcerer","magician","soothsayer","diviner","astrologer","eunuch","chamberlain","cupbearer","butler","armorbearer","standard-bearer","watchman","gatekeeper","treasurer","lawyer","rabbi"];

const BIBLE_FAMILY_MISC = ["patriarch","matriarch","firstborn","birthright","inheritance","heir","concubine","betrothal","betroth","dowry","bridegroom","bride","widow","orphan","fatherless","sojourner","stranger","alien","kinsman","kinsman-redeemer","tribe","clan","lineage","genealogy","descendant","offspring","seed","generation","nomad","herdsman","husbandman","vinedresser","reaper","harvest","harvester","gleaner","threshing floor","winnowing","chaff","sheaf","famine","drought","pestilence","exile","captivity","diaspora","dispersion","restoration","rebuild","fortress","stronghold","citadel","throne","scepter","crown","sandal","staff","rod","sling","spear","shield","armor","breastplate of righteousness","helmet of salvation","sword of the spirit","shield of faith","belt of truth","gospel of peace"];

const BIBLE_ARCHAIC = ["thee","thou","thy","thine","ye","hath","hast","doth","dost","art","wilt","shalt","shouldst","wouldst","couldst","verily","behold","lo","hearken","whence","whither","hither","thither","hitherto","thence","wherefore","whereof","whereby","wherein","thereof","thereby","therein","thereupon","hereafter","henceforth","forasmuch","notwithstanding","peradventure","nay","yea","betwixt","amongst","whilst","unto","howbeit","sith","anon","straightway","exceeding","exceedingly","marvel","marvelous","wroth","abide","abode","sojourn","tarry","smite","smote","smitten","slay","slew","slain","rend","rent","girded","loins","bowels","countenance","visage","raiment","vesture","apparel","mantle","cloak","tunic","chariot","chariots","horsemen","host","hosts","multitude","oracle","oracles","statutes","ordinances","precepts","testimonies"];

const BIBLE_VIRTUES_EMOTIONS = ["humility","humble","arrogance","meekness","meek","gentleness","gentle","patience","longsuffering","forbearance","kindness","goodness","self-control","temperance","joy","joyful","peace","peaceful","compassion","merciful","gracious","wise","foolishness","folly","envy","jealousy","malice","hatred","bitterness","strife","discord","contention","dissension","sedition","adultery","fornication","uncleanness","lasciviousness","witchcraft","sorcery","variance","emulation","drunkenness","revelling","covetousness","greed","lust","gluttony","sloth","deceit","deceitful","hypocrisy","hypocrite","falsehood","integrity","purity","chastity","loyalty","devotion","reverence","awe","zeal","zealous","courage","boldness","cowardice","despair","hopelessness","comfort","consolation","sorrow","grief","mourning","lamentation","weeping","gladness","rejoicing","thanksgiving","gratitude","contentment"];

const BIBLE_MEASURES = ["cubit","span","handbreadth","homer","ephah","omer","seah","hin","log","bath","shekel","talent","mina","gerah","denarius","drachma","mite","farthing","furlong","watch","new moon","feast of trumpets","feast of tabernacles","feast of weeks","day of atonement","pentecost"];

const BIBLE_WORDS = [...new Set([
  ...BIBLE_NAMES, ...BIBLE_PLACES, ...BIBLE_BOOKS, ...BIBLE_THEOLOGY,
  ...BIBLE_OBJECTS, ...BIBLE_ANIMALS_PLANTS, ...BIBLE_TITLES,
  ...BIBLE_FAMILY_MISC, ...BIBLE_ARCHAIC, ...BIBLE_VIRTUES_EMOTIONS,
  ...BIBLE_MEASURES,
])];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const DEFAULT_GRAMMAR = [
  { id: "g1", title_en: "Parts of Speech", content_en: "English words fall into a few basic jobs: nouns name people/places/things (dog, city), verbs show action or state (run, is), adjectives describe nouns (happy, tall), adverbs describe verbs/adjectives (quickly, very), and pronouns replace nouns (he, they). Example: 'The happy dog runs quickly.'", content_my: "" },
  { id: "g2", title_en: "Basic Word Order", content_en: "A basic English sentence follows Subject + Verb + Object (SVO). Example: 'She (subject) reads (verb) books (object).' Unlike some languages, the order usually cannot be rearranged freely.", content_my: "" },
  { id: "g3", title_en: "The Verb 'To Be'", content_en: "'Be' changes form with the subject: I am, you/we/they are, he/she/it is. Example: 'I am a student. She is a teacher. They are friends.'", content_my: "" },
  { id: "g4", title_en: "Present Simple Tense", content_en: "Used for facts, habits, and routines. Add -s/-es for he/she/it. Example: 'I work every day. She works every day.'", content_my: "" },
  { id: "g5", title_en: "Past Simple Tense", content_en: "Used for finished actions. Regular verbs add -ed (walk → walked). Many common verbs are irregular (go → went, eat → ate). Example: 'Yesterday I walked to school. He went home.'", content_my: "" },
  { id: "g6", title_en: "Future Tense", content_en: "Use 'will' for decisions/predictions, and 'going to' for plans. Example: 'I will call you later.' / 'We are going to visit Bagan next month.'", content_my: "" },
  { id: "g7", title_en: "Plural Nouns", content_en: "Most nouns add -s (book → books). Words ending in -s, -x, -ch, -sh add -es (box → boxes). Some are irregular (child → children, man → men).", content_my: "" },
  { id: "g8", title_en: "Articles: a / an / the", content_en: "Use 'a' before consonant sounds and 'an' before vowel sounds for a non-specific noun (a dog, an apple). Use 'the' for a specific, already-known noun (the dog we saw yesterday).", content_my: "" },
  { id: "g9", title_en: "Asking Questions", content_en: "Yes/No questions usually flip the verb and subject: 'Are you ready?' Wh-questions start with what/where/when/why/who/how: 'Where do you live?'", content_my: "" },
  { id: "g10", title_en: "Negative Sentences", content_en: "Add 'not' after be-verbs (I am not) or use don't/doesn't/didn't with other verbs. Example: 'She is not here. I don't like coffee. He didn't call.'", content_my: "" },
];

const DEFAULT_ABOUT = {
  content_en: "Yanban is a constructed language project built by phonetically adapting English sounds. This dictionary and learning space is a living, collaborative project — words, lessons, and songs are added over time by the project team.",
  content_my: "Yanban ဟာ English အသံများကို အခြေခံပြီး တီထွင်ထားတဲ့ ဘာသာစကားတစ်ခု ဖြစ်ပါတယ်။ ဒီ app ဟာ စာလုံးများ၊ သင်ခန်းစာများ၊ သီချင်းများကို အဖွဲ့သားများနဲ့ တစ်ဖြည်းဖြည်း တည်ဆောက်နေတဲ့ project တစ်ခု ဖြစ်ပါတယ်။",
};

/* ---------- i18n ---------- */
const STR = {
  dictionary: { en: "Dictionary", my: "အဘိဓာန်" },
  alphabet: { en: "Yanban Alphabet", my: "Yanban အက္ခရာ" },
  lessons: { en: "Yanban Literature", my: "Yanban စာပေ" },
  grammar: { en: "English Grammar", my: "အင်္ဂလိပ် သဒ္ဒါ" },
  songs: { en: "Songs", my: "သီချင်းများ" },
  about: { en: "About", my: "အကြောင်း" },
  team: { en: "Team & Review", my: "အဖွဲ့ & စီစစ်ခြင်း" },
  menu: { en: "Menu", my: "မီနူး" },
  entries: { en: "entries", my: "လုံး" },
  addWord: { en: "Add word", my: "စာလုံးအသစ်" },
  save: { en: "Save", my: "သိမ်းမည်" },
  cancel: { en: "Cancel", my: "ပယ်ဖျက်" },
  submitForReview: { en: "Submit for review", my: "တင်ပြမည်" },
};

function useLang(personalLangDefault) {
  const [lang, setLang] = useState(personalLangDefault || "my");
  return [lang, setLang];
}

function uid(prefix = "") {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// Prevents any storage call from blocking the UI forever: races the real
// operation against a timeout. If storage hangs, we give up on that call
// (data may not have saved) but the UI always moves on.
function withTimeout(promise, ms = 5000) {
  return new Promise((resolve) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (!settled) { settled = true; resolve({ __timedOut: true }); }
    }, ms);
    Promise.resolve(promise)
      .then((v) => { if (!settled) { settled = true; clearTimeout(timer); resolve(v); } })
      .catch(() => { if (!settled) { settled = true; clearTimeout(timer); resolve({ __error: true }); } });
  });
}

function letterOf(str) {
  const c = (str || "").trim().charAt(0).toUpperCase();
  return c || "#";
}

/* ---------- small shared UI ---------- */
function Modal({ onClose, children, wide }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div
        className={`bg-[#1c2128] border border-[#333a45] rounded-lg w-full ${wide ? "max-w-2xl" : "max-w-md"} p-6 max-h-[85vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-wide text-[#8b93a1] block mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputCls =
  "font-body w-full bg-[#161a1f] border border-[#333a45] rounded-md px-3 py-2 text-sm text-[#EDE7DA] focus:outline-none focus:ring-2 fc-ring-gold";
const btnGold =
  "font-body bg-[#C9A24B] text-[#161a1f] font-semibold text-sm py-2 px-4 rounded-md hv-bg-goldlight transition-colors";
const btnGhost =
  "font-body px-4 py-2 rounded-md text-sm text-[#c7cdd8] border border-[#333a45] hv-border-slate transition-colors";

/* ================= ERROR BOUNDARY ================= */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-[#161a1f] text-[#EDE7DA] flex items-center justify-center p-6">
          <div className="max-w-md text-center">
            <p className="font-display text-lg text-[#e0685a] mb-2">App error တစ်ခု ဖြစ်ပွားနေပါသည်</p>
            <p className="font-mono text-xs text-[#8b93a1] break-words whitespace-pre-wrap">{String(this.state.error && this.state.error.message)}</p>
            <button
              onClick={() => this.setState({ error: null })}
              className="mt-4 font-body bg-[#C9A24B] text-[#161a1f] font-semibold text-sm py-2 px-4 rounded-md"
            >
              ပြန်ကြိုးစားရန်
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

/* ================= MAIN APP ================= */
function YanbanAppWrapped() {
  return (
    <ErrorBoundary>
      <YanbanApp />
    </ErrorBoundary>
  );
}

function YanbanApp() {
  const [view, setView] = useState("dictionary");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [lang, setLang] = useState("my");
  const [identity, setIdentity] = useState(null); // {name, role}
  const [showOnboard, setShowOnboard] = useState(false);

  const [entries, setEntries] = useState([]);
  const [config, setConfig] = useState({ ownerPin: null, developers: [], joinRequests: [] });
  const [lessons, setLessons] = useState([]);
  const [grammar, setGrammar] = useState(DEFAULT_GRAMMAR);
  const [songs, setSongs] = useState([]);
  const [about, setAbout] = useState(DEFAULT_ABOUT);
  const [alphaAudio, setAlphaAudio] = useState({});

  const t = useCallback((key) => (STR[key] ? STR[key][lang] : key), [lang]);

  /* ---- initial load (all in parallel, each capped by withTimeout, with a hard failsafe) ---- */
  useEffect(() => {
    let finished = false;
    const finish = () => { if (!finished) { finished = true; setLoading(false); } };
    // Absolute failsafe: no matter what happens above, never stay stuck past 7s.
    const failsafe = setTimeout(finish, 7000);

    (async () => {
      try {
        await Promise.all([
          (async () => {
            try {
              const idRes = await withTimeout(window.storage.get(IDENTITY_KEY, false), 4000);
              if (idRes && idRes.value) setIdentity(JSON.parse(idRes.value));
              else setShowOnboard(true);
            } catch (e) { setShowOnboard(true); }
          })(),
          (async () => {
            try {
              const langRes = await withTimeout(window.storage.get(LANG_KEY, false), 4000);
              if (langRes && langRes.value) setLang(JSON.parse(langRes.value));
            } catch (e) {}
          })(),
          (async () => {
            try {
              const cfgRes = await withTimeout(window.storage.get(CONFIG_KEY, true), 4000);
              if (cfgRes && cfgRes.value) setConfig(JSON.parse(cfgRes.value));
            } catch (e) {}
          })(),
          (async () => {
            try {
              const entRes = await withTimeout(window.storage.get(ENTRIES_KEY, true), 4000);
              if (entRes && entRes.value) {
                const parsed = JSON.parse(entRes.value);
                if (parsed && parsed.length > 0) { setEntries(parsed); return; }
              }
              await seedEntries();
            } catch (e) {
              await seedEntries();
            }
          })(),
          (async () => {
            try {
              const lesRes = await withTimeout(window.storage.get(LESSONS_KEY, true), 4000);
              if (lesRes && lesRes.value) setLessons(JSON.parse(lesRes.value));
            } catch (e) {}
          })(),
          (async () => {
            try {
              const gramRes = await withTimeout(window.storage.get(GRAMMAR_KEY, true), 4000);
              if (gramRes && gramRes.value) setGrammar(JSON.parse(gramRes.value));
              else withTimeout(window.storage.set(GRAMMAR_KEY, JSON.stringify(DEFAULT_GRAMMAR), true), 4000);
            } catch (e) {
              withTimeout(window.storage.set(GRAMMAR_KEY, JSON.stringify(DEFAULT_GRAMMAR), true), 4000).catch(() => {});
            }
          })(),
          (async () => {
            try {
              const songRes = await withTimeout(window.storage.get(SONGS_KEY, true), 4000);
              if (songRes && songRes.value) setSongs(JSON.parse(songRes.value));
            } catch (e) {}
          })(),
          (async () => {
            try {
              const aboutRes = await withTimeout(window.storage.get(ABOUT_KEY, true), 4000);
              if (aboutRes && aboutRes.value) setAbout(JSON.parse(aboutRes.value));
              else withTimeout(window.storage.set(ABOUT_KEY, JSON.stringify(DEFAULT_ABOUT), true), 4000);
            } catch (e) {
              withTimeout(window.storage.set(ABOUT_KEY, JSON.stringify(DEFAULT_ABOUT), true), 4000).catch(() => {});
            }
          })(),
          (async () => {
            try {
              const audRes = await withTimeout(window.storage.get(ALPHABET_AUDIO_KEY, true), 4000);
              if (audRes && audRes.value) setAlphaAudio(JSON.parse(audRes.value));
            } catch (e) {}
          })(),
        ]);
      } catch (e) {
        // even if something above throws unexpectedly, fall through to finish()
      } finally {
        clearTimeout(failsafe);
        finish();
      }
    })();

    return () => clearTimeout(failsafe);
    // eslint-disable-next-line
  }, []);

  // One-time merge of the Bible vocabulary batch into the shared dictionary.
  // Runs once loading finishes; guarded by a shared flag so it never re-runs
  // or duplicates words, and never touches existing entries/translations.
  useEffect(() => {
    if (loading) return;
    let cancelled = false;
    (async () => {
      let alreadySeeded = false;
      try {
        const flagRes = await withTimeout(window.storage.get(BIBLE_SEED_FLAG_KEY, true), 4000);
        if (flagRes && flagRes.value) alreadySeeded = true;
      } catch (e) {
        // key not found yet -> not seeded
      }
      if (alreadySeeded || cancelled) return;

      setEntries((current) => {
        const existing = new Set(current.map((it) => it.en.trim().toLowerCase()));
        const additions = [];
        for (const w of BIBLE_WORDS) {
          const key = w.trim().toLowerCase();
          if (!existing.has(key)) {
            existing.add(key);
            additions.push({ id: uid(), en: w, yanban: "", meaning: "", example: "", createdAt: Date.now() });
          }
        }
        if (additions.length === 0) return current;
        const next = [...current, ...additions];
        withTimeout(window.storage.set(ENTRIES_KEY, JSON.stringify(next), true)).catch(() => {});
        return next;
      });

      try {
        await withTimeout(window.storage.set(BIBLE_SEED_FLAG_KEY, JSON.stringify(true), true));
      } catch (e) {}
    })();
    return () => { cancelled = true; };
  }, [loading]);

  async function seedEntries() {
    const seeded = SEED_WORDS.map((w) => ({
      id: uid(), en: w, yanban: "", meaning: "", example: "", createdAt: Date.now(),
    }));
    setEntries(seeded);
    try { await withTimeout(window.storage.set(ENTRIES_KEY, JSON.stringify(seeded), true)); } catch (e) {}
  }

  async function persistEntries(next) {
    setEntries(next);
    try { await withTimeout(window.storage.set(ENTRIES_KEY, JSON.stringify(next), true)); } catch (e) { console.error(e); }
  }
  async function persistConfig(next) {
    setConfig(next);
    try { await withTimeout(window.storage.set(CONFIG_KEY, JSON.stringify(next), true)); } catch (e) { console.error(e); }
  }
  async function persistLessons(next) {
    setLessons(next);
    try { await withTimeout(window.storage.set(LESSONS_KEY, JSON.stringify(next), true)); } catch (e) { console.error(e); }
  }
  async function persistGrammar(next) {
    setGrammar(next);
    try { await withTimeout(window.storage.set(GRAMMAR_KEY, JSON.stringify(next), true)); } catch (e) { console.error(e); }
  }
  async function persistSongs(next) {
    setSongs(next);
    try { await withTimeout(window.storage.set(SONGS_KEY, JSON.stringify(next), true)); } catch (e) { console.error(e); }
  }
  async function persistAbout(next) {
    setAbout(next);
    try { await withTimeout(window.storage.set(ABOUT_KEY, JSON.stringify(next), true)); } catch (e) { console.error(e); }
  }
  async function persistAlphaAudio(next) {
    setAlphaAudio(next);
    try { await withTimeout(window.storage.set(ALPHABET_AUDIO_KEY, JSON.stringify(next), true)); } catch (e) { console.error(e); }
  }
  async function persistIdentity(next) {
    setIdentity(next);
    try { await withTimeout(window.storage.set(IDENTITY_KEY, JSON.stringify(next), false)); } catch (e) { console.error(e); }
  }
  async function persistLang(next) {
    setLang(next);
    try { await withTimeout(window.storage.set(LANG_KEY, JSON.stringify(next), false)); } catch (e) {}
  }

  const role = identity?.role || "guest";
  const isOwner = role === "owner";
  const isDeveloper = role === "developer";
  const canEditContent = isOwner; // lessons/grammar/songs/about
  const pendingCount = useMemo(() => entries.filter((e) => e.pending).length, [entries]);
  const joinReqCount = config.joinRequests?.length || 0;

  const NAV = [
    { key: "dictionary", label: t("dictionary"), icon: BookOpen },
    { key: "alphabet", label: t("alphabet"), icon: GraduationCap },
    { key: "lessons", label: t("lessons"), icon: BookOpen },
    { key: "grammar", label: t("grammar"), icon: GraduationCap },
    { key: "songs", label: t("songs"), icon: Music },
    { key: "about", label: t("about"), icon: Info },
  ];
  if (isOwner) NAV.push({ key: "team", label: t("team"), icon: Shield, badge: pendingCount + joinReqCount });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#161a1f] flex items-center justify-center text-[#8b93a1] font-body">
        <Loader2 size={18} className="animate-spin mr-2" /> Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#161a1f] text-[#EDE7DA] flex flex-col" style={{ fontFamily: "'Iowan Old Style','Georgia',serif" }}>
      <GlobalStyle />

      {showOnboard && (
        <OnboardModal
          config={config}
          onDone={async (result) => {
            if (result.type === "identity") {
              await persistIdentity(result.identity);
              if (result.configUpdate) await persistConfig(result.configUpdate);
            }
            setShowOnboard(false);
          }}
        />
      )}

      <TopBar
        t={t}
        onMenu={() => setMenuOpen(true)}
        entriesCount={entries.length}
        view={view}
      />

      {menuOpen && (
        <MenuPanel
          nav={NAV}
          view={view}
          setView={(v) => { setView(v); setMenuOpen(false); }}
          onClose={() => setMenuOpen(false)}
          lang={lang}
          setLang={(l) => persistLang(l)}
          identity={identity}
          onChangeIdentity={() => { setMenuOpen(false); setShowOnboard(true); }}
          t={t}
        />
      )}

      <main className="flex-1">
        {view === "dictionary" && (
          <DictionaryView
            entries={entries}
            persistEntries={persistEntries}
            role={role}
            identity={identity}
            t={t}
          />
        )}
        {view === "alphabet" && (
          <AlphabetView
            alphaAudio={alphaAudio}
            persistAlphaAudio={persistAlphaAudio}
            canEdit={isOwner || isDeveloper}
            t={t}
          />
        )}
        {view === "lessons" && (
          <LessonsView
            lessons={lessons}
            persistLessons={persistLessons}
            canEdit={canEditContent}
            onOpenAlphabet={() => setView("alphabet")}
            t={t}
          />
        )}
        {view === "grammar" && (
          <GrammarView grammar={grammar} persistGrammar={persistGrammar} canEdit={canEditContent} t={t} />
        )}
        {view === "songs" && (
          <SongsView songs={songs} persistSongs={persistSongs} canEdit={canEditContent} t={t} />
        )}
        {view === "about" && (
          <AboutView about={about} persistAbout={persistAbout} canEdit={canEditContent} t={t} />
        )}
        {view === "team" && isOwner && (
          <TeamView
            config={config}
            persistConfig={persistConfig}
            entries={entries}
            persistEntries={persistEntries}
            t={t}
          />
        )}
      </main>

      <footer className="px-6 sm:px-10 py-3 border-t border-[#2c323c] font-mono text-[10px] text-[#5c6472] flex items-center justify-between">
        <span>Yanban Project</span>
        <span>{identity ? `${identity.name} · ${role}` : "guest"}</span>
      </footer>
    </div>
  );
}

function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+Myanmar:wght@400;500;600&display=swap');
      .font-display { font-family: 'Fraunces', 'Noto Sans Myanmar', serif; }
      .font-mono { font-family: 'IBM Plex Mono', 'Noto Sans Myanmar', monospace; }
      .font-body { font-family: 'Noto Sans Myanmar', 'Georgia', serif; }
      .card-edge { position: relative; }
      .card-edge::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: #C9A24B; opacity: 0.85; }
      .hv-text-gold:hover { color: #C9A24B; }
      .hv-text-red:hover { color: #e0685a; }
      .hv-text-cream:hover { color: #EDE7DA; }
      .hv-border-gold:hover { border-color: #C9A24B; }
      .hv-border-slate:hover { border-color: #4a5261; }
      .hv-border-dark2:hover { border-color: #3a4250; }
      .hv-bg-goldlight:hover { background-color: #dab161; }
      .hv-bg-dark1:hover { background-color: #22262e; }
      .hv-bg-dark2:hover { background-color: #252b33; }
      .hv-bg-coral:hover { background-color: #e87f73; }
      .fc-ring-gold:focus { outline: none; box-shadow: 0 0 0 2px #C9A24B; }
      /* Menu panel — colors pinned with CSS variables + attribute selectors
         instead of relying purely on arbitrary-value Tailwind classes, so
         the menu never renders with mismatched/default colors even if a
         Tailwind content-scan misses this file. */
      .menu-panel { background-color: #1c2128; border-left: 1px solid #333a45; }
      .menu-title { color: #F5EFDF; }
      .menu-close { color: #8b93a1; }
      .menu-item { color: #c7cdd8; background-color: transparent; }
      .menu-item.active { color: #C9A24B; background-color: #2a3038; }
      .menu-badge { background-color: #C9A24B; color: #161a1f; }
      .menu-footer-btn { color: #c7cdd8; }
    `}</style>
  );
}

/* ---------- Top bar + menu ---------- */
function TopBar({ t, onMenu, entriesCount, view }) {
  return (
    <header className="border-b border-[#2c323c] px-6 py-4 sm:px-10">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-[#C9A24B] flex items-center justify-center text-[#C9A24B]">
            <BookOpen size={17} />
          </div>
          <div>
            <h1 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#F5EFDF]">Yanban-English Dictionary</h1>
            <p className="font-mono text-[10px] sm:text-xs text-[#8b93a1] tracking-wide uppercase mt-0.5">
              {entriesCount} {t("entries")}
            </p>
          </div>
        </div>
        <button
          onClick={onMenu}
          className="w-9 h-9 flex items-center justify-center rounded-md border border-[#333a45] text-[#c7cdd8] hv-border-gold hv-text-gold transition-colors"
          aria-label="Menu"
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}

function MenuPanel({ nav, view, setView, onClose, lang, setLang, identity, onChangeIdentity, t }) {
  // NOTE: colors here are pinned via inline style (and the .menu-* helper
  // classes defined in GlobalStyle) rather than Tailwind arbitrary-value
  // classes like bg-[#1c2128]. Those arbitrary classes depend on Tailwind's
  // content scanner picking up this exact file/pattern; if it doesn't
  // (e.g. this component lives outside the configured `content` globs, or
  // gets tree-shaken/purged), the class silently becomes a no-op — no
  // background color, no text color — which is exactly why the panel was
  // showing as a dark overlay with unreadable dark-on-dark text. Inline
  // styles always apply regardless of the Tailwind build/scan config.
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(9, 11, 14, 0.97)" }}
        onClick={onClose}
      />
      <div
        className="menu-panel relative w-full max-w-xs h-full p-5 flex flex-col"
        style={{ backgroundColor: "#1c2128", borderLeft: "1px solid #333a45" }}
      >
        <div className="flex items-center justify-between mb-6">
          <span className="menu-title font-display text-lg" style={{ color: "#F5EFDF" }}>{t("menu")}</span>
          <button onClick={onClose} className="menu-close hv-text-cream" style={{ color: "#8b93a1" }}>
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-1">
          {nav.map((n) => {
            const active = view === n.key;
            return (
              <button
                key={n.key}
                onClick={() => setView(n.key)}
                className={`menu-item hv-bg-dark1 w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-md text-sm font-body transition-colors ${active ? "active" : ""}`}
                style={{
                  backgroundColor: active ? "#2a3038" : "transparent",
                  color: active ? "#C9A24B" : "#c7cdd8",
                }}
              >
                <span className="flex items-center gap-2.5"><n.icon size={16} />{n.label}</span>
                {!!n.badge && n.badge > 0 && (
                  <span
                    className="menu-badge text-[10px] font-mono rounded-full w-5 h-5 flex items-center justify-center"
                    style={{ backgroundColor: "#C9A24B", color: "#161a1f" }}
                  >
                    {n.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="pt-4 mt-4 space-y-3" style={{ borderTop: "1px solid #2c323c" }}>
          <button
            onClick={() => setLang(lang === "en" ? "my" : "en")}
            className="menu-footer-btn hv-bg-dark1 w-full flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-body transition-colors"
            style={{ color: "#c7cdd8" }}
          >
            <Globe size={16} /> {lang === "en" ? "English" : "မြန်မာ"}
          </button>
          <button
            onClick={onChangeIdentity}
            className="menu-footer-btn hv-bg-dark1 w-full flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-body transition-colors"
            style={{ color: "#c7cdd8" }}
          >
            <LogIn size={16} /> {identity ? `${identity.name} (${identity.role})` : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Onboarding: identity + role ---------- */
function OnboardModal({ config, onDone }) {
  const [step, setStep] = useState("choose"); // choose | owner-pin | dev-name
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [pendingNotice, setPendingNotice] = useState(false);

  async function asGuest() {
    setSubmitting(true);
    await onDone({ type: "identity", identity: { name: name.trim() || "Guest", role: "guest" } });
    setSubmitting(false);
  }

  async function submitOwner() {
    setError("");
    if (!name.trim()) { setError("နာမည် ထည့်ပါ"); return; }
    if (!config.ownerPin) {
      // becoming genesis owner
      if (pin.trim().length < 4) { setError("PIN အနည်းဆုံး ၄ လုံး ထည့်ပါ"); return; }
      setSubmitting(true);
      await onDone({
        type: "identity",
        identity: { name: name.trim(), role: "owner" },
        configUpdate: { ...config, ownerPin: pin.trim() },
      });
      setSubmitting(false);
    } else {
      if (pin.trim() !== config.ownerPin) { setError("PIN မှားနေပါသည်"); return; }
      setSubmitting(true);
      await onDone({ type: "identity", identity: { name: name.trim(), role: "owner" } });
      setSubmitting(false);
    }
  }

  async function submitDeveloper() {
    setError("");
    if (!name.trim()) { setError("နာမည် ထည့်ပါ"); return; }
    const match = (config.developers || []).some((d) => d.name.toLowerCase() === name.trim().toLowerCase());
    if (match) {
      setSubmitting(true);
      await onDone({ type: "identity", identity: { name: name.trim(), role: "developer" } });
      setSubmitting(false);
    } else {
      // Not on the developer list yet — register a join request but DO NOT close the modal.
      // Owner needs to add this name in Team & Review first.
      setPendingNotice(true);
    }
  }

  async function continueAsGuestAfterRequest() {
    setSubmitting(true);
    const already = (config.joinRequests || []).some((r) => r.name.toLowerCase() === name.trim().toLowerCase());
    const joinRequests = already
      ? config.joinRequests
      : [...(config.joinRequests || []), { name: name.trim(), requestedAt: Date.now() }];
    await onDone({
      type: "identity",
      identity: { name: name.trim(), role: "guest" },
      configUpdate: { ...config, joinRequests },
    });
    setSubmitting(false);
  }

  return (
    <Modal onClose={() => {}}>
      <h2 className="font-display text-lg font-semibold text-[#F5EFDF] mb-1">Yanban မှ ကြိုဆိုပါတယ်</h2>
      <p className="font-body text-xs text-[#8b93a1] mb-5">သင့်ရဲ့ role ကို ရွေးချယ်ပါ</p>

      {step === "choose" && (
        <div className="space-y-2.5">
          <button onClick={() => setStep("owner-pin")} className={`${btnGhost} w-full text-left flex items-center gap-2`}>
            <Shield size={15} /> Owner (project owner)
          </button>
          <button onClick={() => { setStep("dev-name"); setPendingNotice(false); setError(""); }} className={`${btnGhost} w-full text-left flex items-center gap-2`}>
            <Users size={15} /> Developer (translation team)
          </button>
          <button onClick={asGuest} disabled={submitting} className={`${btnGhost} w-full text-left flex items-center gap-2`}>
            {submitting ? <Loader2 size={15} className="animate-spin" /> : <BookOpen size={15} />} Guest (view only)
          </button>
        </div>
      )}

      {step === "owner-pin" && (
        <div className="space-y-3.5">
          <Field label="Name"><input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} /></Field>
          <Field label={config.ownerPin ? "Owner PIN" : "Set a new Owner PIN (min 4 digits)"}>
            <input type="password" className={inputCls} value={pin} onChange={(e) => setPin(e.target.value)} />
          </Field>
          {error && <p className="text-xs text-[#e0685a] font-body">{error}</p>}
          <div className="flex gap-2 pt-1">
            <button onClick={submitOwner} disabled={submitting} className={`${btnGold} flex-1 flex items-center justify-center gap-2`}>
              {submitting && <Loader2 size={14} className="animate-spin" />} Continue
            </button>
            <button onClick={() => setStep("choose")} className={btnGhost}>Back</button>
          </div>
        </div>
      )}

      {step === "dev-name" && !pendingNotice && (
        <div className="space-y-3.5">
          <Field label="Name (owner ထံမှာ မှတ်ပုံတင်ထားတဲ့ အတိုင်း)">
            <input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} />
          </Field>
          {error && <p className="text-xs text-[#e0685a] font-body">{error}</p>}
          <div className="flex gap-2 pt-1">
            <button onClick={submitDeveloper} disabled={submitting} className={`${btnGold} flex-1 flex items-center justify-center gap-2`}>
              {submitting && <Loader2 size={14} className="animate-spin" />} Continue
            </button>
            <button onClick={() => setStep("choose")} className={btnGhost}>Back</button>
          </div>
        </div>
      )}

      {step === "dev-name" && pendingNotice && (
        <div className="space-y-3.5">
          <div className="bg-[#252b1f] rounded-md p-3.5" style={{ border: "1px solid rgba(218,177,97,0.4)" }}>
            <p className="font-body text-sm text-[#dab161]">
              "{name.trim()}" နာမည်ဟာ Owner ရဲ့ developer list ထဲမှာ မတွေ့ပါ။
            </p>
            <p className="font-body text-xs text-[#b3bac6] mt-1.5">
              Owner ဆီ join request ပို့ပေးလိုက်ပါပြီ — Owner က Team & Review ထဲကနေ Approve လုပ်ပေးမှ Developer အဖြစ် ဝင်ရောက် ပြင်ဆင်နိုင်ပါမယ်။ ယခုအတွက် Guest အနေနဲ့ ကြည့်ရှုနိုင်ပါတယ်။
            </p>
          </div>
          <div className="flex gap-2 pt-1">
            <button onClick={continueAsGuestAfterRequest} disabled={submitting} className={`${btnGold} flex-1 flex items-center justify-center gap-2`}>
              {submitting && <Loader2 size={14} className="animate-spin" />} Guest အနေနဲ့ ဆက်သွားမည်
            </button>
            <button onClick={() => { setStep("choose"); setPendingNotice(false); }} className={btnGhost}>Back</button>
          </div>
        </div>
      )}
    </Modal>
  );
}

/* ---------- Dictionary View ---------- */
function DictionaryView({ entries, persistEntries, role, identity, t }) {
  const [query, setQuery] = useState("");
  const [direction, setDirection] = useState("en");
  const [onlyUntranslated, setOnlyUntranslated] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ en: "", yanban: "", meaning: "", example: "" });
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [visibleCount, setVisibleCount] = useState(150);

  const isOwner = role === "owner";
  const isDeveloper = role === "developer";
  const canAdd = isOwner;
  const canEdit = isOwner || isDeveloper;

  const untranslatedCount = useMemo(() => entries.filter((it) => !it.yanban.trim()).length, [entries]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = entries;
    if (onlyUntranslated) list = list.filter((it) => !it.yanban.trim());
    if (q) {
      list = list.filter((it) => {
        const target = direction === "en" ? it.en : it.yanban;
        const other = direction === "en" ? it.yanban : it.en;
        return target.toLowerCase().includes(q) || other.toLowerCase().includes(q) || (it.meaning || "").toLowerCase().includes(q);
      });
    }
    return [...list].sort((a, b) => {
      const av = direction === "en" ? a.en : a.yanban;
      const bv = direction === "en" ? b.en : b.yanban;
      return av.localeCompare(bv);
    });
  }, [entries, query, direction, onlyUntranslated]);

  // Reset how many rows are shown whenever the filter changes, so we never
  // dump thousands of DOM nodes into one render (that's what was freezing
  // the page on load with all ~3,259 words rendered at once).
  useEffect(() => { setVisibleCount(150); }, [query, direction, onlyUntranslated]);

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);

  const grouped = useMemo(() => {
    const map = {};
    for (const it of visible) {
      const key = letterOf(direction === "en" ? it.en : it.yanban);
      if (!map[key]) map[key] = [];
      map[key].push(it);
    }
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [visible, direction]);

  function openAdd() {
    setEditingId(null);
    setForm({ en: "", yanban: "", meaning: "", example: "" });
    setFormOpen(true);
  }
  function openEdit(entry) {
    setEditingId(entry.id);
    if (isOwner) {
      setForm({ en: entry.en, yanban: entry.yanban, meaning: entry.meaning || "", example: entry.example || "" });
    } else {
      const p = entry.pending;
      setForm({
        en: entry.en,
        yanban: p ? p.yanban : entry.yanban,
        meaning: p ? p.meaning : entry.meaning || "",
        example: p ? p.example : entry.example || "",
      });
    }
    setFormOpen(true);
  }
  function closeForm() { setFormOpen(false); setEditingId(null); }

  function submitForm(e) {
    e.preventDefault();
    if (!form.en.trim()) return;
    if (editingId) {
      if (isOwner) {
        persistEntries(entries.map((it) => (it.id === editingId ? { ...it, en: form.en.trim(), yanban: form.yanban.trim(), meaning: form.meaning.trim(), example: form.example.trim() } : it)));
      } else {
        persistEntries(entries.map((it) => (it.id === editingId ? {
          ...it,
          pending: { yanban: form.yanban.trim(), meaning: form.meaning.trim(), example: form.example.trim(), submittedBy: identity?.name || "unknown", submittedAt: Date.now() },
        } : it)));
      }
    } else if (canAdd) {
      persistEntries([...entries, { id: uid(), en: form.en.trim(), yanban: form.yanban.trim(), meaning: form.meaning.trim(), example: form.example.trim(), createdAt: Date.now() }]);
    }
    closeForm();
  }

  function doDelete(id) {
    persistEntries(entries.filter((it) => it.id !== id));
    setConfirmDelete(null);
  }

  return (
    <>
      <div className="px-6 sm:px-10 py-5 border-b border-[#2c323c] bg-[#13161b]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6f7787]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={direction === "en" ? "English စာလုံးရှာရန်..." : "Yanban စာလုံးရှာရန်..."}
              className={`${inputCls} pl-10`}
            />
          </div>
          <button
            onClick={() => setDirection((d) => (d === "en" ? "yb" : "en"))}
            className="font-mono flex items-center justify-center gap-2 text-xs uppercase tracking-wide border border-[#333a45] rounded-md px-4 py-2.5 text-[#c7cdd8] hv-border-gold hv-text-gold transition-colors"
          >
            <ArrowLeftRight size={14} />
            {direction === "en" ? "English → Yanban" : "Yanban → English"}
          </button>
          {canAdd && (
            <button onClick={openAdd} className={`${btnGold} flex items-center gap-1.5 justify-center`}>
              <Plus size={16} strokeWidth={2.5} /> {t("addWord")}
            </button>
          )}
        </div>
        {untranslatedCount > 0 && (
          <div className="max-w-4xl mx-auto mt-3 flex items-center gap-2">
            <label className="font-body flex items-center gap-2 text-xs text-[#b3bac6] cursor-pointer select-none">
              <input type="checkbox" checked={onlyUntranslated} onChange={(e) => setOnlyUntranslated(e.target.checked)} className="accent-[#C9A24B]" />
              ဘာသာမပြန်ရသေးသော စာလုံးများသာ ({untranslatedCount})
            </label>
          </div>
        )}
      </div>

      <div className="px-6 sm:px-10 py-8">
        <div className="max-w-4xl mx-auto">
          {filtered.length === 0 ? (
            <p className="font-body text-sm text-[#8b93a1] text-center py-16">"{query}" နှင့် ကိုက်ညီသော စာလုံး မတွေ့ပါ</p>
          ) : (
            <div className="space-y-8">
              {grouped.map(([letter, items]) => (
                <section key={letter}>
                  <div className="font-mono text-xs tracking-widest text-[#C9A24B] mb-3 pb-1 border-b border-[#2c323c]">{letter}</div>
                  <div className="grid gap-2.5">
                    {items.map((it) => {
                      const showPending = it.pending && (identity?.role === "owner" || it.pending.submittedBy === identity?.name);
                      const displayYanban = direction === "en" ? it.yanban : it.en;
                      return (
                        <div key={it.id} className="card-edge bg-[#1c2128] border border-[#2c323c] rounded-md pl-4 pr-3 py-3 flex items-start justify-between gap-3 hv-border-dark2 transition-colors">
                          <div className="min-w-0">
                            <div className="flex items-baseline gap-2 flex-wrap">
                              <span className="font-display text-base font-semibold text-[#F5EFDF]">{direction === "en" ? it.en : it.yanban}</span>
                              <span className="text-[#5c6472]">→</span>
                              {displayYanban ? (
                                <span className="font-mono text-sm text-[#dab161]">{displayYanban}</span>
                              ) : (
                                <span className="font-mono text-xs text-[#6f7787] italic">ဘာသာမပြန်ရသေးပါ</span>
                              )}
                              {showPending && (
                                <span className="font-mono text-[10px] uppercase text-[#dab161] rounded px-1.5 py-0.5 flex items-center gap-1" style={{ border: "1px solid rgba(218,177,97,0.4)" }}>
                                  <Clock size={10} /> pending: {it.pending.yanban}
                                </span>
                              )}
                            </div>
                            {it.meaning && <p className="font-body text-sm text-[#b3bac6] mt-1">{it.meaning}</p>}
                            {it.example && <p className="font-body text-xs text-[#7d8492] mt-1 italic">"{it.example}"</p>}
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            {canEdit && (
                              <button onClick={() => openEdit(it)} className="p-1.5 rounded text-[#8b93a1] hv-text-gold hv-bg-dark2"><Pencil size={14} /></button>
                            )}
                            {isOwner && (
                              <button onClick={() => setConfirmDelete(it.id)} className="p-1.5 rounded text-[#8b93a1] hv-text-red hv-bg-dark2"><Trash2 size={14} /></button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
              {visibleCount < filtered.length && (
                <button
                  onClick={() => setVisibleCount((c) => c + 150)}
                  className="w-full font-body text-sm text-[#C9A24B] border border-[#333a45] rounded-md py-2.5 hv-border-gold transition-colors"
                >
                  {visible.length} / {filtered.length} ပြထားသည် — နောက်ထပ် ပြရန်
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {formOpen && (
        <Modal onClose={closeForm}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-lg font-semibold text-[#F5EFDF]">{editingId ? "စာလုံးပြင်ရန်" : "စာလုံးအသစ်ထည့်ရန်"}</h2>
            <button onClick={closeForm} className="text-[#8b93a1] hv-text-cream"><X size={18} /></button>
          </div>
          <form onSubmit={submitForm} className="space-y-3.5">
            <Field label="English word">
              <input value={form.en} onChange={(e) => setForm({ ...form, en: e.target.value })} className={inputCls} disabled={!!editingId && !isOwner} required />
            </Field>
            <Field label="Yanban word">
              <input value={form.yanban} onChange={(e) => setForm({ ...form, yanban: e.target.value })} className={inputCls} placeholder="Yanban ဘာသာ" />
            </Field>
            <Field label="အဓိပ္ပာယ် (ဗမာလို) — optional">
              <input value={form.meaning} onChange={(e) => setForm({ ...form, meaning: e.target.value })} className={inputCls} />
            </Field>
            <Field label="ဥပမာဝါကျ — optional">
              <input value={form.example} onChange={(e) => setForm({ ...form, example: e.target.value })} className={inputCls} />
            </Field>
            <div className="flex gap-2 pt-2">
              <button type="submit" className={`${btnGold} flex-1`}>
                {editingId && !isOwner ? t("submitForReview") : t("save")}
              </button>
              <button type="button" onClick={closeForm} className={btnGhost}>{t("cancel")}</button>
            </div>
          </form>
        </Modal>
      )}

      {confirmDelete && (
        <Modal onClose={() => setConfirmDelete(null)}>
          <p className="font-body text-sm text-[#EDE7DA] mb-5">ဒီစာလုံးကို ဖျက်မှာ သေချာပါသလား?</p>
          <div className="flex gap-2">
            <button onClick={() => doDelete(confirmDelete)} className="font-body flex-1 bg-[#e0685a] text-[#161a1f] font-semibold text-sm py-2 rounded-md hv-bg-coral">ဖျက်မည်</button>
            <button onClick={() => setConfirmDelete(null)} className={btnGhost}>မဖျက်တော့ပါ</button>
          </div>
        </Modal>
      )}
    </>
  );
}

/* ---------- Alphabet View ---------- */
function AlphabetView({ alphaAudio, persistAlphaAudio, canEdit, t }) {
  const fileInputs = useRef({});
  const audioRefs = useRef({});
  const [uploadingLetter, setUploadingLetter] = useState(null);

  function play(letter) {
    const src = alphaAudio[letter];
    if (!src) return;
    if (!audioRefs.current[letter]) audioRefs.current[letter] = new Audio(src);
    audioRefs.current[letter].currentTime = 0;
    audioRefs.current[letter].play().catch(() => {});
  }

  async function handleFile(letter, file) {
    if (!file) return;
    if (file.size > 400 * 1024) {
      alert("Audio file ကို 400KB အောက် သုံးပါ (short clip)");
      return;
    }
    setUploadingLetter(letter);
    const reader = new FileReader();
    reader.onload = async () => {
      const next = { ...alphaAudio, [letter]: reader.result };
      await persistAlphaAudio(next);
      setUploadingLetter(null);
    };
    reader.onerror = () => setUploadingLetter(null);
    reader.readAsDataURL(file);
  }

  return (
    <div className="px-6 sm:px-10 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-xl text-[#F5EFDF] mb-1">{t("alphabet")}</h2>
        <p className="font-body text-sm text-[#8b93a1] mb-6">စာလုံးကို နှိပ်ပြီး အသံနားထောင်ပါ{canEdit ? " · upload icon ကနေ အသံ ထည့်နိုင်ပါတယ်" : ""}</p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
          {ALPHABET.map((letter) => {
            const hasAudio = !!alphaAudio[letter];
            return (
              <div key={letter} className="relative bg-[#1c2128] border border-[#2c323c] rounded-lg aspect-square flex flex-col items-center justify-center hv-border-gold transition-colors">
                <button onClick={() => play(letter)} className="flex flex-col items-center justify-center w-full h-full">
                  <span className="font-display text-2xl font-semibold text-[#F5EFDF]">{letter}{letter.toLowerCase()}</span>
                  {hasAudio ? (
                    <Volume2 size={13} className="text-[#C9A24B] mt-1.5" />
                  ) : (
                    <span className="font-mono text-[8px] text-[#5c6472] mt-1.5">no audio</span>
                  )}
                </button>
                {canEdit && (
                  <label className="absolute bottom-1 right-1 w-5 h-5 rounded bg-[#252b33] flex items-center justify-center cursor-pointer text-[#8b93a1] hv-text-gold">
                    {uploadingLetter === letter ? <Loader2 size={11} className="animate-spin" /> : <Upload size={11} />}
                    <input type="file" accept="audio/*" className="hidden" onChange={(e) => handleFile(letter, e.target.files[0])} />
                  </label>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------- Lessons View (Yanban Literature) ---------- */
function LessonsView({ lessons, persistLessons, canEdit, onOpenAlphabet, t }) {
  const [openId, setOpenId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title: "", body: "" });

  function openNew() {
    setEditingId("new");
    setForm({ title: "", body: "" });
  }
  function openEdit(l) {
    setEditingId(l.id);
    setForm({ title: l.title, body: l.body });
  }
  function save() {
    if (!form.title.trim()) return;
    if (editingId === "new") {
      persistLessons([...lessons, { id: uid("l"), title: form.title.trim(), body: form.body, createdAt: Date.now() }]);
    } else {
      persistLessons(lessons.map((l) => (l.id === editingId ? { ...l, title: form.title.trim(), body: form.body } : l)));
    }
    setEditingId(null);
  }
  function remove(id) {
    persistLessons(lessons.filter((l) => l.id !== id));
  }

  return (
    <div className="px-6 sm:px-10 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl text-[#F5EFDF]">{t("lessons")}</h2>
          {canEdit && (
            <button onClick={openNew} className={`${btnGold} flex items-center gap-1.5`}><Plus size={15} /> Add Lesson</button>
          )}
        </div>

        <div className="space-y-2.5">
          <button onClick={onOpenAlphabet} className="card-edge w-full text-left bg-[#1c2128] border border-[#2c323c] rounded-md pl-4 pr-3 py-3 flex items-center justify-between hv-border-dark2">
            <div>
              <span className="font-mono text-[10px] text-[#C9A24B] uppercase">Lesson 1</span>
              <p className="font-display text-base text-[#F5EFDF]">Yanban Alphabet</p>
            </div>
            <ChevronRight size={16} className="text-[#6f7787]" />
          </button>

          {lessons.map((l, idx) => (
            <div key={l.id} className="card-edge bg-[#1c2128] border border-[#2c323c] rounded-md pl-4 pr-3 py-3">
              <div className="flex items-center justify-between">
                <button className="text-left flex-1" onClick={() => setOpenId(openId === l.id ? null : l.id)}>
                  <span className="font-mono text-[10px] text-[#C9A24B] uppercase">Lesson {idx + 2}</span>
                  <p className="font-display text-base text-[#F5EFDF]">{l.title}</p>
                </button>
                {canEdit && (
                  <div className="flex items-center gap-1 shrink-0">
                    <button onClick={() => openEdit(l)} className="p-1.5 rounded text-[#8b93a1] hv-text-gold"><Pencil size={14} /></button>
                    <button onClick={() => remove(l.id)} className="p-1.5 rounded text-[#8b93a1] hv-text-red"><Trash2 size={14} /></button>
                  </div>
                )}
              </div>
              {openId === l.id && l.body && (
                <p className="font-body text-sm text-[#b3bac6] mt-3 whitespace-pre-wrap">{l.body}</p>
              )}
            </div>
          ))}
          {lessons.length === 0 && (
            <p className="font-body text-sm text-[#8b93a1] py-6">Lesson 2 နှင့် ဆက်လက် ရေးသားနိုင်ပါပြီ</p>
          )}
        </div>
      </div>

      {editingId && (
        <Modal onClose={() => setEditingId(null)} wide>
          <h2 className="font-display text-lg text-[#F5EFDF] mb-4">{editingId === "new" ? "Add Lesson" : "Edit Lesson"}</h2>
          <div className="space-y-3.5">
            <Field label="Title"><input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></Field>
            <Field label="Content">
              <textarea rows={10} className={inputCls} value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} />
            </Field>
            <div className="flex gap-2 pt-1">
              <button onClick={save} className={`${btnGold} flex-1`}>{t("save")}</button>
              <button onClick={() => setEditingId(null)} className={btnGhost}>{t("cancel")}</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ---------- Grammar View ---------- */
function GrammarView({ grammar, persistGrammar, canEdit, t }) {
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title_en: "", content_en: "", content_my: "" });

  function openNew() { setEditingId("new"); setForm({ title_en: "", content_en: "", content_my: "" }); }
  function openEdit(g) { setEditingId(g.id); setForm({ title_en: g.title_en, content_en: g.content_en, content_my: g.content_my || "" }); }
  function save() {
    if (!form.title_en.trim()) return;
    if (editingId === "new") {
      persistGrammar([...grammar, { id: uid("g"), ...form }]);
    } else {
      persistGrammar(grammar.map((g) => (g.id === editingId ? { ...g, ...form } : g)));
    }
    setEditingId(null);
  }
  function remove(id) { persistGrammar(grammar.filter((g) => g.id !== id)); }

  return (
    <div className="px-6 sm:px-10 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl text-[#F5EFDF]">{t("grammar")}</h2>
          {canEdit && <button onClick={openNew} className={`${btnGold} flex items-center gap-1.5`}><Plus size={15} /> Add</button>}
        </div>
        <div className="space-y-3">
          {grammar.map((g) => (
            <div key={g.id} className="card-edge bg-[#1c2128] border border-[#2c323c] rounded-md pl-4 pr-3 py-3.5">
              <div className="flex items-start justify-between gap-2">
                <p className="font-display text-base text-[#F5EFDF]">{g.title_en}</p>
                {canEdit && (
                  <div className="flex items-center gap-1 shrink-0">
                    <button onClick={() => openEdit(g)} className="p-1.5 rounded text-[#8b93a1] hv-text-gold"><Pencil size={14} /></button>
                    <button onClick={() => remove(g.id)} className="p-1.5 rounded text-[#8b93a1] hv-text-red"><Trash2 size={14} /></button>
                  </div>
                )}
              </div>
              <p className="font-body text-sm text-[#b3bac6] mt-2">{g.content_en}</p>
              {g.content_my ? (
                <p className="font-body text-sm text-[#dab161] mt-2 border-t border-[#2c323c] pt-2">{g.content_my}</p>
              ) : (
                <p className="font-mono text-[10px] text-[#5c6472] mt-2 italic">Yanban ဘာသာပြန် မထည့်ရသေးပါ</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {editingId && (
        <Modal onClose={() => setEditingId(null)} wide>
          <h2 className="font-display text-lg text-[#F5EFDF] mb-4">{editingId === "new" ? "Add Grammar Point" : "Edit"}</h2>
          <div className="space-y-3.5">
            <Field label="Title"><input className={inputCls} value={form.title_en} onChange={(e) => setForm({ ...form, title_en: e.target.value })} /></Field>
            <Field label="English explanation"><textarea rows={4} className={inputCls} value={form.content_en} onChange={(e) => setForm({ ...form, content_en: e.target.value })} /></Field>
            <Field label="Yanban translation"><textarea rows={4} className={inputCls} value={form.content_my} onChange={(e) => setForm({ ...form, content_my: e.target.value })} /></Field>
            <div className="flex gap-2 pt-1">
              <button onClick={save} className={`${btnGold} flex-1`}>{t("save")}</button>
              <button onClick={() => setEditingId(null)} className={btnGhost}>{t("cancel")}</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ---------- Songs View ---------- */
function SongsView({ songs, persistSongs, canEdit, t }) {
  const [openId, setOpenId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title: "", lyrics: "", note: "" });

  function openNew() { setEditingId("new"); setForm({ title: "", lyrics: "", note: "" }); }
  function openEdit(s) { setEditingId(s.id); setForm({ title: s.title, lyrics: s.lyrics, note: s.note || "" }); }
  function save() {
    if (!form.title.trim()) return;
    if (editingId === "new") persistSongs([...songs, { id: uid("s"), ...form, createdAt: Date.now() }]);
    else persistSongs(songs.map((s) => (s.id === editingId ? { ...s, ...form } : s)));
    setEditingId(null);
  }
  function remove(id) { persistSongs(songs.filter((s) => s.id !== id)); }

  return (
    <div className="px-6 sm:px-10 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl text-[#F5EFDF]">{t("songs")}</h2>
          {canEdit && <button onClick={openNew} className={`${btnGold} flex items-center gap-1.5`}><Plus size={15} /> Add Song</button>}
        </div>
        <div className="space-y-2.5">
          {songs.map((s) => (
            <div key={s.id} className="card-edge bg-[#1c2128] border border-[#2c323c] rounded-md pl-4 pr-3 py-3">
              <div className="flex items-center justify-between">
                <button className="text-left flex-1 flex items-center gap-2" onClick={() => setOpenId(openId === s.id ? null : s.id)}>
                  <Music size={14} className="text-[#C9A24B]" />
                  <span className="font-display text-base text-[#F5EFDF]">{s.title}</span>
                </button>
                {canEdit && (
                  <div className="flex items-center gap-1 shrink-0">
                    <button onClick={() => openEdit(s)} className="p-1.5 rounded text-[#8b93a1] hv-text-gold"><Pencil size={14} /></button>
                    <button onClick={() => remove(s.id)} className="p-1.5 rounded text-[#8b93a1] hv-text-red"><Trash2 size={14} /></button>
                  </div>
                )}
              </div>
              {openId === s.id && (
                <div className="mt-3 border-t border-[#2c323c] pt-3">
                  <p className="font-body text-sm text-[#dab161] whitespace-pre-wrap">{s.lyrics}</p>
                  {s.note && <p className="font-body text-xs text-[#8b93a1] mt-2 italic">{s.note}</p>}
                </div>
              )}
            </div>
          ))}
          {songs.length === 0 && <p className="font-body text-sm text-[#8b93a1] py-6">Song စာရင်း မရှိသေးပါ</p>}
        </div>
      </div>

      {editingId && (
        <Modal onClose={() => setEditingId(null)} wide>
          <h2 className="font-display text-lg text-[#F5EFDF] mb-4">{editingId === "new" ? "Add Song" : "Edit Song"}</h2>
          <div className="space-y-3.5">
            <Field label="Title"><input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></Field>
            <Field label="Lyrics (Yanban)"><textarea rows={8} className={inputCls} value={form.lyrics} onChange={(e) => setForm({ ...form, lyrics: e.target.value })} /></Field>
            <Field label="Note / translation — optional"><textarea rows={3} className={inputCls} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} /></Field>
            <div className="flex gap-2 pt-1">
              <button onClick={save} className={`${btnGold} flex-1`}>{t("save")}</button>
              <button onClick={() => setEditingId(null)} className={btnGhost}>{t("cancel")}</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ---------- About View ---------- */
function AboutView({ about, persistAbout, canEdit, t }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(about);

  useEffect(() => setForm(about), [about]);

  function save() { persistAbout(form); setEditing(false); }

  return (
    <div className="px-6 sm:px-10 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl text-[#F5EFDF]">{t("about")}</h2>
          {canEdit && !editing && <button onClick={() => setEditing(true)} className={btnGhost}><Pencil size={14} className="inline mr-1.5" />Edit</button>}
        </div>
        {!editing ? (
          <div className="space-y-4">
            <p className="font-body text-sm text-[#b3bac6] leading-relaxed">{about.content_en}</p>
            <p className="font-body text-sm text-[#dab161] leading-relaxed border-t border-[#2c323c] pt-4">{about.content_my}</p>
          </div>
        ) : (
          <div className="space-y-3.5">
            <Field label="English"><textarea rows={5} className={inputCls} value={form.content_en} onChange={(e) => setForm({ ...form, content_en: e.target.value })} /></Field>
            <Field label="Myanmar / Yanban"><textarea rows={5} className={inputCls} value={form.content_my} onChange={(e) => setForm({ ...form, content_my: e.target.value })} /></Field>
            <div className="flex gap-2 pt-1">
              <button onClick={save} className={`${btnGold} flex-1`}>{t("save")}</button>
              <button onClick={() => { setEditing(false); setForm(about); }} className={btnGhost}>{t("cancel")}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Team & Review View (owner only) ---------- */
function TeamView({ config, persistConfig, entries, persistEntries, t }) {
  const [newDev, setNewDev] = useState("");
  const pending = entries.filter((e) => e.pending);

  function addDeveloper() {
    if (!newDev.trim()) return;
    const exists = (config.developers || []).some((d) => d.name.toLowerCase() === newDev.trim().toLowerCase());
    if (exists) { setNewDev(""); return; }
    persistConfig({ ...config, developers: [...(config.developers || []), { name: newDev.trim(), addedAt: Date.now() }] });
    setNewDev("");
  }
  function removeDeveloper(name) {
    persistConfig({ ...config, developers: (config.developers || []).filter((d) => d.name !== name) });
  }
  function approveJoin(name) {
    persistConfig({
      ...config,
      developers: [...(config.developers || []), { name, addedAt: Date.now() }],
      joinRequests: (config.joinRequests || []).filter((r) => r.name !== name),
    });
  }
  function dismissJoin(name) {
    persistConfig({ ...config, joinRequests: (config.joinRequests || []).filter((r) => r.name !== name) });
  }
  function approvePending(id) {
    persistEntries(entries.map((e) => (e.id === id ? { ...e, yanban: e.pending.yanban, meaning: e.pending.meaning, example: e.pending.example, pending: null } : e)));
  }
  function rejectPending(id) {
    persistEntries(entries.map((e) => (e.id === id ? { ...e, pending: null } : e)));
  }

  return (
    <div className="px-6 sm:px-10 py-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <section>
          <h2 className="font-display text-xl text-[#F5EFDF] mb-4 flex items-center gap-2"><Clock size={17} className="text-[#C9A24B]" /> Pending translations ({pending.length})</h2>
          {pending.length === 0 ? (
            <p className="font-body text-sm text-[#8b93a1]">စောင့်ဆိုင်းနေသော တင်ပြချက် မရှိပါ</p>
          ) : (
            <div className="space-y-2.5">
              {pending.map((e) => (
                <div key={e.id} className="card-edge bg-[#1c2128] border border-[#2c323c] rounded-md pl-4 pr-3 py-3">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-display text-base text-[#F5EFDF]">{e.en}</span>
                    <span className="text-[#5c6472]">→</span>
                    <span className="font-mono text-sm text-[#dab161]">{e.pending.yanban}</span>
                  </div>
                  {e.pending.meaning && <p className="font-body text-sm text-[#b3bac6] mt-1">{e.pending.meaning}</p>}
                  <p className="font-mono text-[10px] text-[#8b93a1] mt-1.5">by {e.pending.submittedBy}</p>
                  <div className="flex gap-2 mt-2.5">
                    <button onClick={() => approvePending(e.id)} className="flex items-center gap-1 text-xs font-body bg-[#4a8f6b] text-[#161a1f] font-semibold px-3 py-1.5 rounded"><Check size={13} /> Approve</button>
                    <button onClick={() => rejectPending(e.id)} className="flex items-center gap-1 text-xs font-body border border-[#e0685a] text-[#e0685a] px-3 py-1.5 rounded"><XCircle size={13} /> Reject</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <h2 className="font-display text-xl text-[#F5EFDF] mb-4 flex items-center gap-2"><UserPlus size={17} className="text-[#C9A24B]" /> Join requests ({(config.joinRequests || []).length})</h2>
          <div className="space-y-2">
            {(config.joinRequests || []).map((r) => (
              <div key={r.name} className="flex items-center justify-between bg-[#1c2128] border border-[#2c323c] rounded-md px-4 py-2.5">
                <span className="font-body text-sm text-[#EDE7DA]">{r.name}</span>
                <div className="flex gap-2">
                  <button onClick={() => approveJoin(r.name)} className="text-xs font-body bg-[#4a8f6b] text-[#161a1f] font-semibold px-3 py-1 rounded">Approve</button>
                  <button onClick={() => dismissJoin(r.name)} className="text-xs font-body border border-[#333a45] text-[#8b93a1] px-3 py-1 rounded">Dismiss</button>
                </div>
              </div>
            ))}
            {(config.joinRequests || []).length === 0 && <p className="font-body text-sm text-[#8b93a1]">Join request မရှိပါ</p>}
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl text-[#F5EFDF] mb-4 flex items-center gap-2"><Users size={17} className="text-[#C9A24B]" /> Developers ({(config.developers || []).length})</h2>
          <div className="flex gap-2 mb-3">
            <input className={inputCls} placeholder="Developer name ထည့်ပါ" value={newDev} onChange={(e) => setNewDev(e.target.value)} />
            <button onClick={addDeveloper} className={btnGold}>Add</button>
          </div>
          <div className="space-y-2">
            {(config.developers || []).map((d) => (
              <div key={d.name} className="flex items-center justify-between bg-[#1c2128] border border-[#2c323c] rounded-md px-4 py-2.5">
                <span className="font-body text-sm text-[#EDE7DA]">{d.name}</span>
                <button onClick={() => removeDeveloper(d.name)} className="text-xs font-body text-[#e0685a] flex items-center gap-1"><UserMinus size={13} /> Remove</button>
              </div>
            ))}
            {(config.developers || []).length === 0 && <p className="font-body text-sm text-[#8b93a1]">Developer မရှိသေးပါ</p>}
          </div>
        </section>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<YanbanAppWrapped />);

</script>
</body>
</html>
