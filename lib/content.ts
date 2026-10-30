export const company = {
  name: "Membrán Mérnöki Kft.",
  short: "Membrán",
  founded: 1990,
  city: "Tatabánya",
  street: "Vadász utca 65.",
  postal: "2800 Tatabánya",
  email: "membran@membran-kft.hu",
  mapUrl: "https://maps.google.hu/maps?q=47.581686,18.388506",
  lat: 47.581686,
  lng: 18.388506,
  phones: [
    { label: "Iroda", display: "+36 34 312 339", href: "tel:+3634312339" },
    { label: "Mobil", display: "+36 70 329 1146", href: "tel:+36703291146" },
  ],
};

export const nav = [
  { href: "/#fooldal", id: "fooldal", label: "Főoldal" },
  { href: "/#cegunkrol", id: "cegunkrol", label: "Cégünkről" },
  { href: "/#tevekenyseg", id: "tevekenyseg", label: "Tevékenység" },
  { href: "/#munkatarsak", id: "munkatarsak", label: "Munkatársak" },
  { href: "/#referenciak", id: "referenciak", label: "Referenciák" },
] as const;

export type Token = { text: string; strong?: boolean };

export const manifesto: Token[] = [
  { text: "Ne" },
  { text: "kockáztasson.", strong: true },
  { text: "Lakásának," },
  { text: "családi" },
  { text: "házának" },
  { text: "tervezését,", strong: true },
  { text: "felülvizsgálatát" },
  { text: "bízza" },
  { text: "szakértő", strong: true },
  { text: "munkatársainkra," },
  { text: "akik" },
  { text: "több" },
  { text: "évtizedes", strong: true },
  { text: "tapasztalattal" },
  { text: "az" },
  { text: "Önnek" },
  { text: "leginkább" },
  { text: "megfelelő", strong: true },
  { text: "megoldást" },
  { text: "kínálják." },
];

export const profile =
  "Cégünk fő profilja a statikai és építészeti tervezés. Az engedélyezési és kiviteli tervek elkészítését vállaljuk. Kivitelező cégekkel is kapcsolatban vagyunk, így a kivitelezés lebonyolításában is részt veszünk.";

export const opinion =
  "Amennyiben épületén olyan károsodásokat lát, amelyek nyugtalanítóak, kérje segítségünket. Statikai szakvéleményünkben megállapítjuk az épületkárosodások okait, valamint javaslatot teszünk a helyreállításra. Ezzel nem érdemes várni, mivel a károsodások gyakran idővel súlyosabbá válnak, így a javítás költsége is megnövekedhet.";

export const earthquake =
  "A földrengésre való méretezés kötelező Magyarországon, sokan azonban úgy gondolják, hogy a földrengések kockázata olyan alacsony, hogy ezzel nem kell számolniuk. A kockázat azonban magas, hiszen az épületeket legalább 50 éves időtartamra kell tervezni, ami alatt egy erősebb rengés valószínűsége jelentős. Az utólagos javítás költsége pedig jóval magasabb, mint a már eleve földrengésteherre méretezett épület kialakítása.";

export const serviceIntro = [
  "Cégünk fő profilja a statikai és építészeti tervezés. Az engedélyezési és kiviteli tervek elkészítését vállaljuk.",
  "Munkáink jelentős részét képezi a meglévő építmények felülvizsgálata. Szakértői véleményeinkben feltárjuk a károsodások okait, meghatározzuk a szükséges javítási és megerősítési munkákat. A megrongálódott épületek rendbe hozatalával is foglalkozunk. Részletes statikai szakvéleményt készítünk a megrongálódott, megrepedt szerkezetekről, a helyreállítás módjára javaslatot teszünk. Lakások összenyitásához szükséges statikai számításokat elvégezzük, a nyíláskialakítást megtervezzük.",
  "Kivitelező cégekkel is kapcsolatban vagyunk, így a kivitelezés lebonyolításában is részt veszünk. Statikus tervezőink a kivitelezésnél is jelen vannak, hogy minden gyorsan, precízen, a kiviteli tervek alapján kerüljön kialakításra.",
  "Mérnöki tevékenységünket a megrendelői igény alapján végezzük el a tervezéstől a kulcsátadásig.",
];

export const serviceDisclaimer =
  "Családi házak, lakások vásárlása előtti szaktanácsadást, szakértői véleményezést nem vállalunk.";

export const serviceGroups = [
  {
    index: "01",
    title: "Épület, építmény tervezés",
    items: [
      "Megvalósíthatósági, költségelemző tanulmányok",
      "Épületfejlesztések tervezése",
      "Építmények építészeti tervezése",
      "Építmények statikai tervezése",
      "Mérnöki létesítmények (hidak, támfalak) tervezése",
      "Vízépítési műtárgyak tervezése",
      "Földművek tervezése",
      "Ideiglenes melléklétesítmények (munkagödör határolások) tervezése",
      "Darupálya tartók tervezése",
    ],
  },
  {
    index: "02",
    title: "Szakértői tevékenység",
    items: [
      "Építmények felülvizsgálatai",
      "Anyagvizsgálatok",
      "Szakértői vélemények",
      "Statikai szakvélemények",
    ],
  },
  {
    index: "03",
    title: "Egyéb mérnöki tevékenység",
    items: ["Műszaki ellenőrzés", "Felelős műszaki vezetés", "Szaktanácsadás"],
  },
] as const;

export const references = [
  "Millenium lakópark, Tatabánya: teljes körű statikai tervezés, engedélyeztetés.",
  "Komtak Kft. irodaházának kialakítása Tatán, az Ady utcában.",
  "Tatabánya, Tarjáni úti híd megerősítése.",
  "Budapest–Csepel, XXI. kerület, Ív utcai iskola átalakítása.",
  "1212 Budapest, Vágóhíd utcai óvoda átalakítása.",
  "Vita-Sütő Kft. kisbéri sütőüzemének tervezése.",
  "Vértesi Erőmű Zrt. oroszlányi technológiai épületének átalakítása.",
  "Tatabányán a volt Gerecse étterem üzletházzá történő áttervezése.",
  "Grundfos Kft., Tatabánya: irodaház és üzemcsarnok tervezése.",
  "Tatabánya, Réti úti lakópark többszintes épületeinek tervezése.",
];

export const clients = [
  { name: "E.ON", src: "/media/logos/eon.png" },
  { name: "UTB Envirotec", src: "/media/logos/utb-envirotec.png" },
  { name: "MKB Bank", src: "/media/logos/mkb.png" },
  { name: "Grundfos", src: "/media/logos/grundfos.png" },
  { name: "STRABAG", src: "/media/logos/strabag.png" },
  { name: "BÁV", src: "/media/logos/bav.png" },
  { name: "Foxconn", src: "/media/logos/foxconn.png" },
  { name: "Reckitt Benckiser", src: "/media/logos/reckitt.png" },
  { name: "MOL", src: "/media/logos/mol.png" },
  { name: "Szemerey Transport", src: "/media/logos/szemerey.png" },
  { name: "Vértesaszfalt", src: "/media/logos/vertesaszfalt.png" },
  { name: "IKR Bábolna", src: "/media/logos/ikr-babolna.png" },
  { name: "Georam", src: "/media/logos/georam.png" },
  { name: "Aranykocsi", src: "/media/logos/aranykocsi.png" },
  { name: "J&S Speed", src: "/media/logos/js-speed.png" },
  { name: "Danagrico", src: "/media/logos/danagrico.png" },
  { name: "Vértes-Út", src: "/media/logos/vertes-ut.png" },
  { name: "Tata Hűtőtechnika", src: "/media/logos/tata-huto.png" },
  { name: "Geoszféra", src: "/media/logos/geosfera.png" },
  { name: "STILL", src: "/media/logos/still.png" },
  { name: "Kristály Imperial Hotel", src: "/media/logos/kristaly.png" },
  { name: "Levendulakert", src: "/media/logos/levendulakert.png" },
  { name: "JAKO", src: "/media/logos/jako.png" },
  { name: "D'Omikron", src: "/media/logos/domikron.png" },
  { name: "Suoftec", src: "/media/logos/suoftec.png" },
  { name: "Geotech", src: "/media/logos/geotech.png" },
  { name: "Greif", src: "/media/logos/greif.png" },
  { name: "Komép Metál", src: "/media/logos/komep-metal.png" },
  { name: "MVM Vértesi Erőmű", src: "/media/logos/mvm-vertesi.png" },
  { name: "Tesco", src: "/media/logos/tesco.png" },
  { name: "Partner", src: "/media/logos/partner.png" },
  { name: "Old Lake Golf Club", src: "/media/logos/old-lake.png" },
  { name: "Sandu Fivérek", src: "/media/logos/sandu.png" },
  { name: "OVIT", src: "/media/logos/ovit.png" },
  { name: "Perfekt Motorfelújítás", src: "/media/logos/perfekt.png" },
];

export const aboutParagraphs = [
  "Tervezőirodánkat 1990-ben alapítottuk. Az elmúlt több, mint 20 év alatt számos statikai, építőmérnöki és építészeti tervet, szakvéleményt készítettünk.",
  "Korábban országos jelentőségű nagy tervezőiroda megyei kirendeltségén terveztünk. Ezek a nagyvállalatok az 1980-as évek második felétől egyre nehezebb helyzetbe kerültek, majd fokozatosan meg is szűntek. Ebben az átmenetinek nevezhető időszakban kisebb létszámú és szakosodott tervező vállalkozások alakultak. A cégünket mi két fővel alapítottuk meg 1990-ben. Irodánkat egy lakótelepi panelház fogadószinti közös helyiségeiből alakítottuk ki. A bérleményből jelenlegi saját tulajdonunkat képező irodánkba 1995-ben költöztünk, és itt 6 fővel végezzük mérnöki tevékenységünket.",
  "Nagyon fontosnak tartjuk az ügyfeleink elégedettségét. Ennek érdekében 2002-ben minőségirányítási rendszert vezettünk be az MSZ EN ISO 9001:2001 szerint. Informatikai rendszerünket folyamatosan fejlesztjük, a beérkezett anyagokat, terveket digitálisan, rendszerezetten tároljuk.",
];

export const timeline = [
  {
    year: "1990",
    title: "Alapítás",
    text: "Két fővel indult az iroda, egy lakótelepi panelház fogadószinti közös helyiségéből.",
  },
  {
    year: "1995",
    title: "Saját iroda",
    text: "A bérleményből a mai, saját tulajdonú irodába költöztünk, Tatabányán.",
  },
  {
    year: "2002",
    title: "ISO 9001",
    text: "Minőségirányítási rendszer az MSZ EN ISO 9001:2001 szerint. A terveket digitálisan, rendszerezetten tároljuk.",
  },
  {
    year: "Ma",
    title: "Hat mérnök",
    text: "Statikus tervezőink és szakértőink több évtizedes tapasztalattal dolgoznak.",
  },
];

export const team = [
  {
    name: "Stolczenbergerné Fülöp Hédi",
    roles: ["Okleveles építőmérnök"],
    phone: "+36 70 329 1146",
    href: "tel:+36703291146",
  },
  {
    name: "Gécsek Jenő",
    roles: ["Okleveles építőmérnök", "Eurotervező szakmérnök"],
    phone: "+36 30 957 3149",
    href: "tel:+36309573149",
  },
  {
    name: "Kókány Attila",
    roles: ["Okleveles építőmérnök"],
    phone: "+36 30 939 9756",
    href: "tel:+36309399756",
  },
  { name: "Fekete Tamás", roles: [], phone: "", href: "" },
  { name: "Szakál Helga", roles: [], phone: "", href: "" },
  { name: "Gécsek Máté", roles: [], phone: "", href: "" },
];

export const wideShots = [
  {
    src: "/media/crane.jpg",
    alt: "Acél rácsostartók és kék darupálya tartók egy ipari csarnok mennyezetén",
    caption: "Darupálya tartók",
    ratio: "aspect-[12/5]",
  },
  {
    src: "/media/hall.jpg",
    alt: "Ipari csarnok belső tere, polírozott padlóval és darupályával",
    caption: "Ipari csarnok",
    ratio: "aspect-[12/5]",
  },
  {
    src: "/media/millenium.jpg",
    alt: "Millenium lakópark Tatabánya, többszintes lakóépületek",
    caption: "Millenium lakópark, Tatabánya",
    ratio: "aspect-[12/5]",
  },
  {
    src: "/media/house.jpg",
    alt: "Családi ház látványterve kerttel és terasszal",
    caption: "Családi ház",
    ratio: "aspect-[12/5]",
  },
];

export const archive = [
  {
    src: "/media/ref/reti-ut-lakopark-epitomernok-terv.jpg",
    alt: "Réti út, Tatabánya, statikai tervezés",
    caption: "Réti úti lakópark",
  },
  {
    src: "/media/ref/ipari-park-tatabanya-statikai-terv.jpg",
    alt: "Statikai tervezés",
    caption: "Statikai tervezés",
  },
  {
    src: "/media/ref/statikai-szakvelemeny.jpg",
    alt: "Lakópark tervezés, építőmérnöki tervek",
    caption: "Lakópark",
  },
  {
    src: "/media/ref/epitomernok-tatabanya.jpg",
    alt: "Tatabánya Ipari Park",
    caption: "Ipari park",
  },
  {
    src: "/media/industrial.jpg",
    alt: "Ipari épületek statikai tervezése, műszaki ellenőrzés",
    caption: "Műszaki ellenőrzés",
  },
  {
    src: "/media/survey.jpg",
    alt: "Építőmérnök, statikus, építész tervező",
    caption: "Helyszíni munka",
  },
  {
    src: "/media/drawings.jpg",
    alt: "Statikai tervezés, statikus Tatabánya",
    caption: "Statikai terv",
  },
];
