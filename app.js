/* =====================================================================
   КОНТАКТИ — редагувати тут.
   Ці ж посилання продубльовані в index.html (блок «Контакт» і SEO-теги) —
   при зміні онови в обох місцях.
   ===================================================================== */
const telegramUrl  = "https://t.me/Kvitka7778";        // особистий Telegram — сюди йдуть заготовлені повідомлення «Написати»
const whatsappUrl  = "https://wa.me/420722295445";     // WhatsApp (кнопка в блоці «Контакт», в index.html)
const instagramUrl = "https://www.instagram.com/kvitka__nata/"; // (кнопка в index.html)
const communityUrl = "https://t.me/+DEG7VpOJ6SNiMzY0"; // Telegram-канал KVITKA Space (кнопка «Анонси…» на сторінках груп/кола/гри)

const certManifest = [
  "certificate_08_landscape.jpg",
  "certificate_18_landscape.jpg",
  "certificate_16_landscape.jpg",
  "certificate_13_landscape.jpg",
  "certificate_15_landscape.jpg",
  "certificate_12_landscape.jpg",
  "certificate_17_landscape.jpg",
  "certificate_04_landscape.jpg",
  "certificate_07_landscape.jpg",
  "certificate_11_landscape.jpg",
  "certificate_09_portrait.jpg",
  "certificate_10_portrait.jpg",
  "certificate_14_landscape.jpg",
  "certificate_02_landscape.jpg",
  "certificate_03_portrait.jpg",
  "certificate_20_landscape.jpg",
  "certificate_01_portrait.jpg",
  "certificate_05_landscape.jpg",
  "certificate_06_landscape.jpg"
];

const painTopics = [
  {
    title: "Тривога, виснаження, втрата сил",
    items: [
      "Тіло і психіка виснажені, ніби сил вистачає лише на «протриматись» (хронічна втома, психосоматика)",
      "Тривога, яка з'являється без очевидної причини, іноді — панічні атаки",
      "Відчуття «щось зі мною не так», втрата контакту із собою"
    ]
  },
  {
    title: "Стосунки, близькість і кордони",
    items: [
      "Стосунки, з яких важко вийти, навіть коли боляче (емоційна залежність, аб'юзивний досвід)",
      "Важко відстоювати особисті кордони, важко сказати «ні»",
      "Страх близькості"
    ]
  },
  {
    title: "Самооцінка та контакт із собою",
    items: [
      "Занижена самооцінка, постійне порівняння себе з іншими",
      "Пошук внутрішньої опори й самоцінності",
      "Складно відділитися від батьківських сценаріїв (сепарація)"
    ]
  },
  {
    title: "Еміграція, втрати та життєві зміни",
    items: [
      "Складні періоди: еміграція, втрата, розлучення",
      "Втрата звичних опор і себе в новій реальності"
    ]
  },
  {
    title: "Їжа та складні стосунки з тілом",
    items: [
      "Їжа стала способом впоратись, а потім приходить сором (розлади харчової поведінки)"
    ]
  }
];

const changes = [
  "З'являється більше контакту зі своїми відчуттями й довіри до себе",
  "Тривога поступово перестає бути єдиною внутрішньою опорою",
  "Кордони стають яснішими — без постійної провини за власне «ні»",
  "Старі сценарії у стосунках стають помітними, а значить — їх можна змінювати",
  "Самоцінність повертається не як ідея, а як відчуття всередині",
  "У повсякденності стає більше свободи, спокою й живої радості"
];

const picker = [
  ["Мені тривожно або я виснажена", "individual", "Почніть з індивідуальної терапії. Це найбільш бережний формат, де можна розібратися з тим, що зараз болить, без поспіху й без необхідності пояснювати себе групі."],
  ["Болить тема стосунків", "couples", "Якщо ви хочете працювати сама — підійде індивідуальна терапія. Якщо запит спільний із партнером або родиною — парна чи сімейна терапія."],
  ["Хочу коло або групу", "circle", "Жіноче коло підійде для живого контакту й окремої теми. Терапевтична група — для регулярнішої роботи, підтримки й глибшого процесу."],
  ["Не знаю, що мені потрібно", "individual", "Це нормальна точка входу. Можна написати без ідеально сформульованого запиту — я допоможу знайти перший крок."]
];

const services = [
  {
    id: "individual",
    title: "Індивідуальна терапія",
    meta: "онлайн і наживо",
    price: "50 EUR",
    duration: "50 хвилин, перша зустріч — 60 хвилин",
    image: "./public/kvitka/individual-session.jpg?v=1",
    intro: "Місце для того, про що важко говорити — і з чим не хочеться залишатися наодинці. Ми розбираємо те, що турбує саме вас: тривогу, виснаження, життєві кризи, складнощі у стосунках, самоцінність, кордони, еміграцію чи відчуття, що ви втратили контакт із собою.",
    forWhom: ["тривога, виснаження, внутрішня напруга", "складно зрозуміти себе та свої почуття", "повторюються труднощі у стосунках", "криза, переїзд або важливі життєві зміни"],
    process: "Перша зустріч — знайомство, ваш запит і визначення напряму роботи. Далі рухаємося у комфортному для вас темпі. Для глибоких і стійких змін зазвичай рекомендую 10-15 зустрічей, але завжди орієнтуємося на ваші потреби.",
    result: "Більше ясності й внутрішньої опори, краще розуміння своїх потреб, кордонів і способів бути у стосунках із собою та іншими.",
    important: ["Конфіденційність — усе, що відбувається на сесії, залишається між нами.", "Онлайн або наживо, за вашою домовленістю з Наталією.", "Скасування менш ніж за 24 години — 50% вартості, неявка — 100%.", "Оплата в кронах за поточним курсом, до початку зустрічі."],
    ctaLabel: "Написати мені",
    message: "Доброго дня, хочу записатися на індивідуальну сесію."
  },
  {
    id: "group",
    title: "Терапевтична група",
    meta: "онлайн і наживо",
    price: "анонси в каналі KVITKA Space",
    duration: "регулярні зустрічі",
    image: "./public/kvitka/group-session.jpg?v=1",
    intro: "Простір, де зміни відбуваються не лише через розмову, а й через досвід контакту з іншими. Тут можна досліджувати себе, бути почутою та пробувати нові способи взаємодії.",
    forWhom: ["хочеться краще розуміти себе та свої емоції", "складно довіряти, зближуватися чи проявляти себе", "повторюються схожі сценарії у стосунках", "бракує підтримки й безпечного контакту"],
    process: "У невеликій групі працюємо з актуальними запитами учасниць: через розмову, взаємодію, власні реакції та досвід контакту з іншими.",
    result: "Більше свободи бути собою, говорити про свої потреби, вибудовувати кордони та створювати ближчі й безпечніші стосунки.",
    ctaLabel: "Написати про групу",
    message: "Доброго дня, цікавить терапевтична група — підкажіть, будь ласка, деталі, дати й вартість."
  },
  {
    id: "circle",
    title: "Жіноче коло",
    meta: "наживо",
    price: "анонси в каналі KVITKA Space",
    duration: "близько 4 годин",
    image: "./public/kvitka/circle.jpg?v=2",
    intro: "Кілька годин, у яких не потрібно поспішати, відповідати очікуванням чи бути «правильною». Живий контакт, практики та щирі розмови в колі жінок.",
    forWhom: ["хочеться паузи й теплого жіночого простору", "відгукується тема конкретної зустрічі", "важливо краще почути себе та свої потреби", "хочеться не лише говорити, а проживати"],
    process: "Кожне коло присвячене окремій темі: самоцінності, внутрішній дитині, жіночності, кордонам, довірі до себе чи стосункам. Поєднуємо розмову, практики, рефлексію та живу взаємодію.",
    result: "Більше контакту із собою, своїми почуттями й потребами, новий погляд на важливу тему та відчуття підтримки.",
    ctaLabel: "Написати про коло",
    message: "Доброго дня, цікавить жіноче коло — підкажіть, будь ласка, деталі, дати й вартість."
  },
  {
    id: "game",
    title: "Трансформаційна гра",
    meta: "онлайн і наживо",
    price: "анонси в каналі KVITKA Space",
    duration: "індивідуально або в малій групі",
    image: "./public/kvitka/game-field.jpg?v=5",
    intro: "Формат для ситуацій, коли питання вже є, а відповіді поки немає. Через символи, образи та метафори можна побачити свою ситуацію з іншого боку й помітити те, що раніше залишалося поза увагою.",
    forWhom: ["є питання, але бракує ясності", "стоїте перед важливим вибором", "відчуваєте, що ходите по колу", "відгукується образний і метафоричний формат"],
    process: "Починаємо з вашого запиту й досліджуємо його через процес гри, образи, асоціації та ваші реакції. Це не передбачення майбутнього, а спосіб знайти власні відповіді та можливі рішення.",
    result: "Більше ясності, новий погляд на ситуацію та розуміння, на що можна спертися і куди рухатися далі.",
    ctaLabel: "Написати мені",
    message: "Доброго дня, цікавить трансформаційна гра."
  },
  {
    id: "couples",
    title: "Сімейна та парна терапія",
    meta: "онлайн і наживо",
    price: "75 EUR",
    duration: "перша зустріч триває довше за наступні",
    image: "./public/kvitka/couples.jpg?v=2",
    intro: "Простір не для пошуку винного, а для можливості почути одне одного. Працюємо з конфліктами, віддаленням, втратою довіри та ситуаціями, коли старі способи домовлятися більше не працюють.",
    forWhom: ["ті самі конфлікти повторюються знову", "розмови закінчуються образами або мовчанням", "стало менше близькості й довіри", "важко домовитися про важливе"],
    process: "Дивимося не лише на те, через що виникають конфлікти, а й на те, як ви взаємодієте в ці моменти. Моє завдання — не стати на чийсь бік, а допомогти кожному бути почутим і знайти інший спосіб взаємодії.",
    result: "Більше взаєморозуміння, чеснішої комунікації та можливості проходити конфлікти без руйнування близькості.",
    ctaLabel: "Написати мені",
    message: "Доброго дня, хочу записатися на сімейну/парну терапію."
  }
];

/* Готові Q&A — поки не виводяться на сайті. Якщо треба секція «Часті питання» —
   додати екран і рендер, дані вже є тут. */
const faqText = [
  ["Чи потрібно готуватися до першої зустрічі?", "Ні. Достатньо прийти такою, якою ви є зараз."],
  ["Скільки триває терапія?", "Залежить від вашого запиту та цілей. На першій консультації разом визначимо формат роботи, який буде найкращим саме для вас."],
  ["Що таке гештальт-терапія?", "Допомагає краще зрозуміти себе, свої почуття, потреби та способи взаємодії зі світом. Працюємо не лише з думками, а й з емоціями, тілом і вашим реальним досвідом, щоб зміни ставали частиною життя, а не залишалися лише знанням."],
  ["Чи буде незручно серед незнайомих людей у групі чи колі?", "Це природне хвилювання. Більшість учасниць приходять із такими ж переживаннями. Я створюю безпечний простір із правилами конфіденційності, взаємної поваги та підтримки. Часто саме група стає місцем, де жінка вперше відчуває: «я не одна»."],
  ["А що, якщо мені стане важче після того, як я почну говорити про це?", "Це нормальне побоювання, і ви маєте право його мати. Ми йдемо в темпі, який ви можете витримати — не туди, куди ви не готові. Якщо на сесії стане занадто важко, ми завжди можемо зупинитися й подбати про вашу стійкість, перш ніж рухатись далі."],
  ["Чи покриває страхова вартість терапії?", "Так, частково. Напишіть мені — допоможу розібратися з умовами саме вашої страхової."],
  ["З чим ви не працюєте?", "Не працюю з алкогольною та наркотичною залежністю."]
];

const reviews = [
  { service: "individual", name: "Вікторія", text: "Я дуже вдячна за шлях, який ми проходимо разом. З тобою я поступово вчуся обирати себе — не різко, не боляче, а з турботою й повагою. На сесіях завжди багато тепла, прийняття й водночас глибини. Я бачу, як моє життя змінюється: більше ясності, більше любові до себе, більше внутрішнього світла." },
  { service: "individual", name: "Людмила", text: "Я прийшла в терапію із запитом про конфлікти — не розуміла, чому вони постійно трапляються в моєму житті. За ці до 10 сесій я отримала багато цінних усвідомлень про себе, свої реакції та внутрішні причини того, що зі мною відбувається. Я почала краще розуміти свої емоції, свої кордони та інакше дивитися на конфлікти і взаємини з близькими." },
  { service: "individual", name: "Марина", text: "Я довго не наважувалась на терапію, думаючи, що впораюся сама. Але навіть коли ми пропрацьовували найболючіші теми, після сліз на терапії завжди ставало легше. Ситуації, які я не могла зрозуміти чи вирішити роками, вирішувалися за одну сесію, залишаючи усвідомлення, що життя змінюється на краще." },
  { service: "individual", name: "Еля", text: "Я втратила особисті кордони, самооцінка й самоцінність впали. З Наталею було легко, по-домашньому. Я могла говорити, запитувати, а вона слухала й підтримувала. Вона допомогла мені подивитися навколо й побачити ситуацію по-іншому. Обирати себе, любити себе, цінувати себе. Я справді ожила." },
  { service: "individual", name: "Анастасія", text: "Це той рідкісний спеціаліст, поруч з яким почуваєшся в безпеці, прийнятою та по-справжньому почутою. Кожна зустріч — це простір без осуду, де можна бути собою, зі всіма почуттями, страхами й сумнівами. Дякую за чуйність, щиру участь і відчуття, що я не одна." },
  { service: "individual", name: "Клієнтка", text: "Я потрапила до Наталі у дуже складний період свого життя. Щодня плакала й не розуміла, що зі мною відбувається. Уже через два місяці нашої роботи я стала почуватися набагато краще. А через рік можу сказати, що в мене з'явилися внутрішні опори. Я стала впевненішою, сильнішою і ніби краще пізнала себе." },
  { service: "individual", name: "Клієнтка", text: "Сесії допомогли впоратися з великою й основною частиною проблем, які до цього досить сильно заважали. Завдяки можливості регулярно зустрічатися й проговорювати те, що відбувається, я стала інакше сприймати свою реальність. Протягом терапії я усвідомила свої справжні потреби й погляди на стосунки, а внутрішній критик став значно тихішим." },
  { service: "group", name: "Учасниця групи", text: "Від початку участі я помітила значні зміни у своєму житті: навчилася прислухатися до себе, краще розуміти свої потреби та емоції, а також відчула підтримку й розуміння від учасниць нашої групи. Це місце, де можна бути собою та безпечно досліджувати себе, де тепло й затишно." },
  { service: "group", name: "Учасниця групи", text: "Коли я тільки прийшла, не знала, чого очікувати. Але вже після перших зустрічей відчула, що це місце, де можна розслабитися, говорити відкрито й отримувати справжню підтримку. Після кожної зустрічі я виходжу ніби легшою, з новими силами та бажанням рухатися далі." },
  { service: "group", name: "Учасниця групи", text: "Дякую за таку можливість. Це справді важлива робота, що змінює життя людей. Дуже хотілося б, щоб такі групи продовжували працювати й надалі. Вони потрібні всім нам — щоб мати місце, де можна говорити щиро, знаходити силу й відчувати, що ми не самі." },
  { service: "game", name: "Учасниця гри", text: "Я мала досвід роботи з іншими іграми й очікувала, що під час гри натраплю на якусь тверду стіну несприйняття чи страждання. Але цього не відбулося. Гра пролетіла цікаво, легко та дуже приємно. Після гри я стала помічати набагато спокійнішу реакцію на буденні справи. З'явилося більше віри в себе, любові й цінності." },
  { service: "circle", name: "Оксана", text: "Дякую тобі за мою нову версію — за мою справжню версію, яка завжди була в мені, тільки я боялася бути справжньою. А тепер не боюся. Тепер я вмію виставляти кордони, говорити «ні», обирати себе. Я ще вчуся бути справжньою жінкою." },
  { service: "circle", name: "Вікторія", text: "З тобою я поступово вчуся обирати себе — не різко, не боляче, а з турботою й повагою. Поруч стає спокійніше всередині, з'являється відчуття опори й віри в себе. Я бачу, як моє життя змінюється: більше ясності, більше любові до себе, більше внутрішнього світла." },
  { service: "circle", name: "Клієнтка", text: "Ви дуже допомогли мені передусім у розумінні та прийнятті самої себе. Завдяки нашій роботі я розібралася у своєму стані, зрозуміла, чого хочу та на що заслуговую. Тепер я відчуваю себе по-справжньому вільною, щасливою та просто насолоджуюся життям." },
  { service: "couples", name: "Марина", text: "Я навчилася обирати й чути себе, свої бажання та потреби. Завдяки нашій роботі я навчилася будувати здорові стосунки із собою, з дітьми, з чоловіком та з оточуючими." },
  { service: "couples", name: "Клієнтка", text: "Завдяки нашій роботі змінилися мої стосунки з татом. Раніше в нас ніколи не було таких стосунків, як зараз. Зараз між нами є повага, розуміння і якась справжня близькість. Для мене це величезна зміна, і я дуже ціную, що завдяки нашій роботі це стало можливим." }
];

const screens = [...document.querySelectorAll(".screen")];
const navButtons = [...document.querySelectorAll(".nav button")];

// Заготовлені повідомлення відкриваються в Telegram (t.me/username?text=…
// підставляє текст у поле вводу в застосунку Telegram).
function link(message) {
  return `${telegramUrl}?text=${encodeURIComponent(message)}`;
}

function wireContactLinks() {
  document.querySelectorAll("[data-contact]").forEach((el) => {
    el.href = link(el.dataset.contact);
    el.target = "_blank";
    el.rel = "noreferrer";
  });
}

function showScreen(id) {
  screens.forEach((screen) => {
    const isTarget = screen.id === id;
    screen.classList.toggle("active", isTarget);
    if (isTarget) {
      screen.classList.remove("screen-enter");
      void screen.offsetWidth;
      screen.classList.add("screen-enter");
    }
  });
  navButtons.forEach((button) => button.classList.toggle("active", button.dataset.screen === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
  const activeScreen = screens.find((screen) => screen.id === id);
  if (activeScreen) observeReveal(activeScreen);
}

function observeReveal(root = document) {
  const targets = root.querySelectorAll(".reveal:not(.revealed)");
  if (!("IntersectionObserver" in window) || !targets.length) {
    targets.forEach((el) => el.classList.add("revealed"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  targets.forEach((el) => io.observe(el));
}

function renderBasics() {
  document.querySelector("#pain-accordion").innerHTML = painTopics.map((topic, index) => `
    <div class="acc-item" data-acc="${index}">
      <button class="acc-head" data-acc-toggle="${index}">
        <span>${topic.title}</span>
        <b>+</b>
      </button>
      <div class="acc-body">
        <div class="acc-body-inner bullet-list">${topic.items.map((item) => `<p>${item}</p>`).join("")}</div>
      </div>
    </div>
  `).join("");
  document.querySelector("#change-list").innerHTML = changes.map((text) => `<article>${text}</article>`).join("");
  document.querySelector("#cert-list").innerHTML = certManifest
    .map((name) => `<img src="./public/kvitka/certs/${name}?v=1" alt="Сертифікат Наталії Квітки" loading="lazy" decoding="async" data-cert="./public/kvitka/certs/${name}?v=1" />`)
    .join("");
}

let lightboxEl = null;

function openLightbox(src) {
  if (!lightboxEl) {
    lightboxEl = document.createElement("div");
    lightboxEl.className = "lightbox";
    lightboxEl.innerHTML = `<button class="lightbox-close" aria-label="Закрити">×</button><img alt="Документ" />`;
    document.body.appendChild(lightboxEl);
    lightboxEl.addEventListener("click", closeLightbox);
  }
  lightboxEl.querySelector("img").src = src;
  lightboxEl.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.classList.remove("open");
  document.body.style.overflow = "";
}

function renderPicker(active = 0) {
  const item = picker[active];
  document.querySelector("#picker-list").innerHTML = picker.map((entry, index) => `<button class="${index === active ? "active" : ""}" data-picker="${index}">${entry[0]}</button>`).join("");
  document.querySelector("#picker-result").innerHTML = `
    <h3>${item[0]}</h3>
    <p>${item[2]}</p>
    <button data-service="${item[1]}">Детальніше про формат</button>
    <a href="${link("Доброго дня, хочу зрозуміти, який формат мені підійде.")}" target="_blank" rel="noreferrer">Написати мені</a>
  `;
}

function renderServices() {
  const priceHtml = (item) => `<b>${item.price}</b>`;

  document.querySelector("#service-list").innerHTML = services.map((item) => `
    <button class="service-card service-${item.id}" data-service="${item.id}">
      <img src="${item.image}" alt="" loading="lazy" decoding="async" />
      <span>${item.meta}</span>
      <strong>${item.title}</strong>
      ${priceHtml(item)}
    </button>
  `).join("");
}

function renderHomeHighlights() {
  const featured = ["individual", "group", "circle", "couples"];
  document.querySelector("#home-format-list").innerHTML = featured.map((id) => {
    const item = services.find((service) => service.id === id);
    const priceShort = channelFormats.includes(item.id) ? "у KVITKA Space" : item.price;
    return `
      <button data-service="${item.id}">
        <span>${item.meta}</span>
        <strong>${item.title}</strong>
        <b>${priceShort}</b>
      </button>
    `;
  }).join("");
}

const channelFormats = ["group", "circle", "game"];

function renderService(id) {
  const item = services.find((service) => service.id === id) || services[0];
  const isChannel = channelFormats.includes(item.id);
  const bookingNote = item.id === "group"
    ? "Дати наборів — у каналі KVITKA Space. Напишіть мені, щоб узгодити участь: якщо ви вперше йдете в терапевтичну групу, перед стартом буде коротке ознайомче інтерв'ю 15–20 хвилин."
    : isChannel
    ? "Дати й анонси зустрічей — у каналі KVITKA Space. Напишіть мені, щоб забронювати місце або підібрати зручний час."
    : "Напишіть мені — і ми узгодимо зручний день, час і формат зустрічі.";
  const accItems = [
    { key: "who", title: "Для кого", body: `<div class="bullet-list">${item.forWhom.map((t) => `<p>${t}</p>`).join("")}</div>` },
    { key: "process", title: "Як проходить", body: `<p>${item.process}</p>` },
    { key: "result", title: "Що може змінитися", body: `<p>${item.result}</p>` }
  ];
  if (item.important) {
    accItems.push({ key: "important", title: "Умови та важливі деталі", body: `<div class="bullet-list">${item.important.map((t) => `<p>${t}</p>`).join("")}</div>` });
  }
  document.querySelector("#service-detail-content").innerHTML = `
    <img class="service-detail-image service-${item.id}-image" src="${item.image}" alt="${item.title}" decoding="async" />
    <span class="service-meta">${item.meta} · ${item.duration.replace("перша зустріч", "<br />перша зустріч")}</span>
    <h2>${item.title}</h2>
    <p>${item.intro}</p>
    ${item.id === "group" ? `
    <a class="service-group-note" href="./ryzykny-buty-zhyvoyu.html">
      <span>🌿 Зараз триває набір: «Ризикни бути живою»</span>
      <b>Дізнатись більше →</b>
    </a>` : ""}
    <div class="payment-note">
      <span>Як записатися</span>
      <p>${bookingNote}</p>
    </div>
    <div class="accordion service-accordion">
      ${accItems.map((acc) => `
        <div class="acc-item" data-acc="svc-${acc.key}">
          <button class="acc-head" data-acc-toggle="svc-${acc.key}" data-acc-group="svc-${item.id}">
            <span>${acc.title}</span>
            <b>+</b>
          </button>
          <div class="acc-body">
            <div class="acc-body-inner">${acc.body}</div>
          </div>
        </div>
      `).join("")}
      ${item.id === "individual" ? `
        <div class="acc-item" data-acc="svc-insurance">
          <button class="acc-head" data-acc-toggle="svc-insurance" data-acc-group="svc-${item.id}">
            <span>Страхове відшкодування в Чехії</span>
            <b>+</b>
          </button>
          <div class="acc-body">
            <div class="acc-body-inner">
              <p>Мої клієнтки можуть скористатися частковою компенсацією вартості психотерапії від медичних страхових компаній Чехії: VZP, ČPZP, OZP, ZP Škoda, ZPMV, RBP — приблизно 500 крон за сесію, 10 зустрічей.</p>
              <p>Напишіть мені — допоможу розібратися з умовами саме вашої програми.</p>
            </div>
          </div>
        </div>` : ""}
    </div>
    ${isChannel ? "" : `<b>${item.price}</b>`}
    ${isChannel ? `<a class="channel-cta" href="${communityUrl}" target="_blank" rel="noreferrer">Анонси в каналі KVITKA Space ↗</a>` : ""}
    <a href="${link(item.message)}" target="_blank" rel="noreferrer">${item.ctaLabel}</a>
    ${reviewsCarouselHtml(item.id)}
  `;
  showScreen("service-detail");
}

function reviewsCarouselHtml(serviceId) {
  const list = reviews.filter((r) => r.service === serviceId);
  if (!list.length) return "";
  return `
    <div class="review-carousel-wrap">
      <h3>Відгуки клієнток</h3>
      <div class="review-carousel">
        ${list.map((r) => `
          <article class="review-card review-slide">
            <p>«${r.text}»</p>
            <span>${r.name}</span>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

document.addEventListener("click", (event) => {
  const screenButton = event.target.closest("[data-screen]");
  if (screenButton) showScreen(screenButton.dataset.screen);

  const contact = event.target.closest("[data-contact]");
  if (contact) {
    contact.href = link(contact.dataset.contact);
    contact.target = "_blank";
    contact.rel = "noreferrer";
  }

  const pickerButton = event.target.closest("[data-picker]");
  if (pickerButton) renderPicker(Number(pickerButton.dataset.picker));

  const serviceButton = event.target.closest("[data-service]");
  if (serviceButton) renderService(serviceButton.dataset.service);

  const certImg = event.target.closest("[data-cert]");
  if (certImg) openLightbox(certImg.dataset.cert);

  const accToggle = event.target.closest("[data-acc-toggle]");
  if (accToggle) {
    const item = accToggle.closest(".acc-item");
    const group = accToggle.dataset.accGroup;
    const isOpen = item.classList.contains("open");
    if (group) {
      item.closest(".accordion").querySelectorAll(`.acc-item`).forEach((el) => el.classList.remove("open"));
    }
    item.classList.toggle("open", !isOpen);
  }
});

renderBasics();
renderPicker();
renderServices();
renderHomeHighlights();
wireContactLinks();

function initMotionPolish() {
  document.querySelectorAll(".heading").forEach((el) => el.classList.add("reveal"));
  document.querySelector("#home")?.classList.add("screen-enter");
  observeReveal(document);
}

initMotionPolish();
observeReveal();

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

/* =====================================================================
   Попап «Ризикни бути живою» на головній — показуємо один раз, коли
   людина доскролила до блоку «Оберіть, з чого почати» (видно, що вона
   саме зараз цікавиться форматами), з невеликою паузою 1.5с, щоб не
   вискакував різко під час самого скролу. Показуємо раз на день.
   ===================================================================== */
(function setupRyzyknyPopup() {
  const overlay = document.querySelector("#ryzykny-popup");
  if (!overlay) return;

  const STORAGE_KEY = "ryzykny-popup-dismissed";
  const today = new Date().toISOString().slice(0, 10);

  function dismiss() {
    overlay.hidden = true;
    try { localStorage.setItem(STORAGE_KEY, today); } catch (e) {}
  }

  let alreadyDismissedToday = false;
  try { alreadyDismissedToday = localStorage.getItem(STORAGE_KEY) === today; } catch (e) {}
  if (!alreadyDismissedToday) {
    setTimeout(() => {
      if (document.querySelector("#home")?.classList.contains("active")) {
        overlay.hidden = false;
      }
    }, 5000);
  }

  document.querySelector("#ryzykny-popup-close")?.addEventListener("click", dismiss);
  document.querySelector("#ryzykny-popup-dismiss")?.addEventListener("click", dismiss);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) dismiss();
  });
})();
