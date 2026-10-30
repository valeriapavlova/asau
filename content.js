/* =========================================================
   CONTINGUT DEL WEB · КОНТЕНТ САЙТУ
   Тут лежать усі тексти. Щоб додати зін — скопіюй один об'єкт
   у масиві ZINES і зміни поля. Мови: va (головна), es, uk, en.
   ========================================================= */

const UI = {
  va: {
    nav_pubs: "Publicacions", nav_about: "Qui som", nav_collab: "Col·laboracions", nav_contact: "Contacte",
    hero_kicker: "Autoedició · València",
    hero_title: "Fanzines contra l'oblit.",
    hero_text: "Fem fanzines sobre llengua, memòria i cultura ucraïnesa. Els imprimim, els grapem i els perforem a mà.",
    pubs_title: "Publicacions",
    pubs_note: "Aviat, fanzines per donatiu.",
    by: "de", see_inside: "Mira per dins", lang_label: "Fanzine en castellà",
    soon: "Pròximament",
    about_title: "Qui som",
    about_text: "ASAU és l'Assemblea Solidaritat Antifeixista amb Ucraïna, a València. Creiem que la solidaritat també es fa amb paper, tinta i grapes: contant històries que algú va intentar esborrar.",
    collab_title: "Col·laboracions",
    rk_text: "Iniciativa sobre la realitat i el passat de Rússia, contat des de les ruïnes.",
    contact_title: "Contacte",
    contact_text: "Escriu-nos per Instagram o per correu. Ens trobaràs també a fires d'autoedició.",
    footer: "Fet a València amb paper, tinta i grapes.",
  },
  es: {
    nav_pubs: "Publicaciones", nav_about: "Quiénes somos", nav_collab: "Colaboraciones", nav_contact: "Contacto",
    hero_kicker: "Autoedición · València",
    hero_title: "Fanzines contra el olvido.",
    hero_text: "Hacemos fanzines sobre lengua, memoria y cultura ucraniana. Los imprimimos, los grapamos y los perforamos a mano.",
    pubs_title: "Publicaciones",
    pubs_note: "Pronto, fanzines por donativo.",
    by: "de", see_inside: "Mira por dentro", lang_label: "Fanzine en castellano",
    soon: "Próximamente",
    about_title: "Quiénes somos",
    about_text: "ASAU es la Assemblea Solidaritat Antifeixista amb Ucraïna, en València. Creemos que la solidaridad también se hace con papel, tinta y grapas: contando historias que alguien intentó borrar.",
    collab_title: "Colaboraciones",
    rk_text: "Iniciativa sobre la realidad y el pasado de Rusia, contado desde las ruinas.",
    contact_title: "Contacto",
    contact_text: "Escríbenos por Instagram o por correo. También nos encontrarás en ferias de autoedición.",
    footer: "Hecho en València con papel, tinta y grapas.",
  },
  uk: {
    nav_pubs: "Видання", nav_about: "Хто ми", nav_collab: "Колаборації", nav_contact: "Контакти",
    hero_kicker: "Самвидав · Валенсія",
    hero_title: "Зіни проти забуття.",
    hero_text: "Ми робимо зіни про українську мову, пам'ять і культуру. Друкуємо, скріплюємо й перфоруємо їх власноруч.",
    pubs_title: "Видання",
    pubs_note: "Незабаром — зіни за донат.",
    by: "від", see_inside: "Подивитися всередину", lang_label: "Зін іспанською",
    soon: "Незабаром",
    about_title: "Хто ми",
    about_text: "ASAU — Асамблея антифашистської солідарності з Україною у Валенсії. Ми віримо, що солідарність робиться також папером, фарбою і скобами: розповідаючи історії, які хтось намагався стерти.",
    collab_title: "Колаборації",
    rk_text: "Ініціатива про реальність і минуле Росії, розказані з руїн.",
    contact_title: "Контакти",
    contact_text: "Пишіть нам в Instagram або на пошту. Нас також можна знайти на фестивалях самвидаву.",
    footer: "Зроблено у Валенсії з паперу, фарби і скоб.",
  },
  en: {
    nav_pubs: "Publications", nav_about: "About", nav_collab: "Collaborations", nav_contact: "Contact",
    hero_kicker: "Self-publishing · València",
    hero_title: "Zines against forgetting.",
    hero_text: "We make zines about Ukrainian language, memory and culture. We print, staple and punch them by hand.",
    pubs_title: "Publications",
    pubs_note: "Zines by donation, coming soon.",
    by: "by", see_inside: "Look inside", lang_label: "Zine in Spanish",
    soon: "Coming soon",
    about_title: "About",
    about_text: "ASAU is the Assemblea Solidaritat Antifeixista amb Ucraïna (Antifascist Solidarity Assembly with Ukraine) in València. We believe solidarity is also made with paper, ink and staples: by telling stories someone tried to erase.",
    collab_title: "Collaborations",
    rk_text: "An initiative about Russia's reality and past, told from the ruins.",
    contact_title: "Contact",
    contact_text: "Write to us on Instagram or by email. You'll also find us at self-publishing fairs.",
    footer: "Made in València with paper, ink and staples.",
  },
};

/* Contactes — ЗАМІНИ на справжні */
const CONTACT = {
  instagram: "https://www.instagram.com/antifaucrania.vlc/",   // TODO: перевір, чи це акаунт ASAU
  instagramHandle: "@antifaucrania.vlc",
  email: "",                                                    // TODO: колективна пошта, напр. asau@riseup.net
};

/* Publicacions. color = акцент картки, ink2 = друга фарба */
const ZINES = [
  {
    id: "g",
    by: "ASAU",
    title: "Ґ. La letra desterrada",
    series: { va: "Sèrie Alfabet desterrat · nº 1", es: "Serie Alfabeto desterrado · nº 1", uk: "Серія «Вигнана абетка» · № 1", en: "Exiled Alphabet series · no. 1" },
    desc: {
      va: "La història de la Ґ, la lletra que el poder soviètic va esborrar el 1933 i que va tornar a casa el 1990. Contada per ella mateixa.",
      es: "La historia de la Ґ, la letra que el poder soviético borró en 1933 y que volvió a casa en 1990. Contada por ella misma.",
      uk: "Історія літери Ґ, яку радянська влада викреслила 1933 року і яка повернулася додому 1990-го. Розказана нею самою.",
      en: "The story of Ґ, the letter Soviet power erased in 1933, which came home in 1990. Told by the letter herself.",
    },
    specs: { va: "A5 · 12 pàg. · riso 2 tintes", es: "A5 · 12 págs. · riso 2 tintas", uk: "A5 · 12 с. · різо, 2 фарби", en: "A5 · 12 pp. · 2-colour riso" },
    color: "#1F3FA8", ink2: "#FF5F2E",
    cover: "img/g-cover.jpg",
    spreads: ["img/g-2-3.jpg", "img/g-4-5.jpg", "img/g-6-7.jpg", "img/g-8-9.jpg", "img/g-10-11.jpg", "img/g-back.jpg"],
  },
  {
    id: "i",
    by: "ASAU",
    title: "Ї. Dos puntos",
    series: { va: "Sèrie Alfabet desterrat · nº 2", es: "Serie Alfabeto desterrado · nº 2", uk: "Серія «Вигнана абетка» · № 2", en: "Exiled Alphabet series · no. 2" },
    desc: {
      va: "Una lletra amb dos punts que són forats de veritat. Kyiv, la ï valenciana i una llengua viva.",
      es: "Una letra con dos puntos que son agujeros de verdad. Kyiv, la ï valenciana y una lengua viva.",
      uk: "Літера, дві крапки якої — справжні дірки. Київ, валенсійська ï і жива мова.",
      en: "A letter whose two dots are real holes. Kyiv, the Valencian ï and a living language.",
    },
    specs: { va: "A5 · 12 pàg. · perforat a mà · riso 2 tintes", es: "A5 · 12 págs. · perforado a mano · riso 2 tintas", uk: "A5 · 12 с. · перфоровано вручну · різо, 2 фарби", en: "A5 · 12 pp. · hand-punched · 2-colour riso" },
    color: "#1E7A4C", ink2: "#FF4FA3",
    cover: "img/i-cover.jpg",
    spreads: ["img/i-2-3.jpg", "img/i-4-5.jpg", "img/i-6-7.jpg", "img/i-8-9.jpg", "img/i-10-11.jpg", "img/i-back.jpg"],
  },
  {
    id: "narbut",
    by: "ASAU",
    title: "NARBUT",
    series: { va: "Còmic", es: "Cómic", uk: "Комікс", en: "Comic" },
    desc: {
      va: "Còmic absurd sobre com Heorhiy Narbut va dibuixar l'abecedari ucraïnés el 1917 mentre tot s'enfonsava.",
      es: "Cómic absurdo sobre cómo Heorhiy Narbut dibujó el alfabeto ucraniano en 1917 mientras todo se venía abajo.",
      uk: "Абсурдний комікс про те, як Георгій Нарбут малював українську абетку 1917 року, коли все навколо валилося.",
      en: "An absurd comic about how Heorhiy Narbut drew the Ukrainian alphabet in 1917 while everything fell apart.",
    },
    specs: { va: "A5 · 12 pàg. · riso 2 tintes", es: "A5 · 12 págs. · riso 2 tintas", uk: "A5 · 12 с. · різо, 2 фарби", en: "A5 · 12 pp. · 2-colour riso" },
    color: "#1F5FBF", ink2: "#FF48B0",
    cover: "img/narbut-cover.jpg",
    spreads: ["img/narbut-2-3.jpg", "img/narbut-4-5.jpg", "img/narbut-6-7.jpg", "img/narbut-8-9.jpg", "img/narbut-10-11.jpg", "img/narbut-back.jpg"],
  },
];

/* Col·laboracions: кожен колектив має СВОЮ секцію і свої зіни (zines: [...]) */
const COLLABS = [
  {
    name: "Ruinas del Kremlin",
    textKey: "rk_text",
    links: [["Instagram", "https://www.instagram.com/ruinasdelkremlin/"], ["lnk.bio", "https://lnk.bio/ruinasdelkremlin"]],
    zines: [
      {
        /* TODO: зін Ruinas del Kremlin — заміни title/desc/specs/cover/spreads і ВИДАЛИ рядок soon: true */
        id: "rk1",
        by: "Ruinas del Kremlin",
        soon: true,
        title: "Ruinas del Kremlin",
        series: { va: "Fanzine", es: "Fanzine", uk: "Зін", en: "Zine" },
        desc: { va: "", es: "", uk: "", en: "" },
        specs: { va: "", es: "", uk: "", en: "" },
        color: "#E8452C", ink2: "#E8452C",
        cover: "",
        spreads: [],
      },
    ],
  },
];
