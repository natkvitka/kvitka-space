/* =====================================================================
   «РИЗИКНИ БУТИ ЖИВОЮ» — редагувати тут.
   Для наступного набору групи зазвичай треба поміняти тільки блок GROUP.
   ===================================================================== */
const GROUP = {
  telegramUrl: "https://t.me/Kvitka7778",
  onlineDate: "16.10",
  offlineDate: "23.10",
  priceOnline: "700 Kč",
  priceOffline: "700 Kč",
  meetings: 17,
  sessionLength: "2,5 години", // ⚠️ в матеріалах зустрічалось і "3 години" — уточнити в Наталі, тоді поміняти тут
  everyWeeks: "раз на 2 тижні, по п'ятницях",
  openFor: "перші 3 зустрічі",
  insurance: "Страхова компенсує 80% вартості групової терапії. За деталями — пишіть мені в особисті."
};

const accordionTopics = [
  {
    title: "Ця група може бути про тебе, якщо ти...",
    icon: "./public/kvitka/icon-wilting-woman.png?v=1",
    items: [
      "втомилася постійно бути сильною",
      "часто живеш через «треба», а не через «хочу»",
      "не розумієш власних бажань і потреб",
      "звикла підлаштовуватися під інших",
      "боїшся конфліктів і тому мовчиш",
      "складно говориш про свої почуття",
      "відчуваєш емоційну втому або внутрішню порожнечу",
      "багато даєш іншим, але мало залишаєш собі",
      "повторюєш схожі сценарії у стосунках",
      "хочеш змін, але не знаєш, із чого почати",
      "сумуєш за собою справжньою",
      "хочеш більше живості, близькості, свободи та контакту із собою"
    ]
  },
  {
    title: "Що може змінитися",
    icon: "./public/kvitka/icon-seed-pod.png?v=1",
    items: [
      "краще чути себе та свої потреби",
      "розуміти, що з тобою відбувається",
      "вільніше проживати свої почуття",
      "помічати свої справжні бажання",
      "говорити про те, що тобі підходить, а що ні",
      "встановлювати та захищати свої межі",
      "помічати старі сценарії у стосунках",
      "дозволяти собі бути різною — не тільки сильною та зручною",
      "отримувати досвід живого контакту без необхідності грати роль"
    ],
    note: "І поступово повертати у своє життя більше живості."
  }
];

const pains = [
  "повернути контакт із собою та своїми відчуттями",
  "краще чути свої «хочу» і «не хочу», потреби та бажання",
  "знову відчути своє тіло та більше живості в ньому",
  "повернути жагу до життя, енергію та цікавість",
  "навчитися говорити: «Я не хочу», «Мені так не підходить», «Я хочу інакше»",
  "відстоювати свої межі та залишатися на своєму боці",
  "ризикувати бути собою навіть там, де страшно",
  "знайомитися з новими жінками та отримувати досвід живого, підтримувального контакту"
];

const explore = [
  { icon: "./public/kvitka/card-compass.png?v=1", text: "чого мені насправді хочеться" },
  { icon: "./public/kvitka/card-scales.png?v=1", text: "що допомагає і що заважає чути себе" },
  { icon: "./public/kvitka/card-heart-hand.png?v=1", text: "свої почуття, потреби та бажання" },
  { icon: "./public/kvitka/card-cocoon.png?v=1", text: "страх змін і невизначеності" },
  { icon: "./public/kvitka/card-hands.png?v=1", text: "довіру до себе та інших" },
  { icon: "./public/kvitka/card-spheres.png?v=1", text: "близькість і дистанцію у стосунках" },
  { icon: "./public/kvitka/card-dome.png?v=1", text: "страх відкидання та самотності" },
  { icon: "./public/kvitka/card-shell.png?v=1", text: "свої звичні способи захищатися й підтримувати себе" }
];

const groupStats = [
  { icon: "./public/kvitka/stat-lock.png?v=2", title: "Закритий формат", caption: "постійний склад групи" },
  { icon: "./public/kvitka/stat-group.png?v=2", title: "До 10 учасниць", caption: "камерний склад для довіри" },
  { icon: "./public/kvitka/stat-calendar.png?v=2", title: "Раз на 2 тижні", caption: "по п'ятницях" },
  { icon: "./public/kvitka/stat-door.png?v=2", title: "Перші 3 зустрічі", caption: "ще можна приєднатися" }
];

const format = [
  "Участь — після попередньої індивідуальної розмови зі мною.",
  "Пропуски зустрічей оплачуються."
];

function renderList(id, items) {
  document.querySelector(id).innerHTML = items.map((text) => `<article>${text}</article>`).join("");
}

function renderChips(id, items) {
  document.querySelector(id).innerHTML = items
    .map((item) => `<article><img src="${item.icon}" alt="" loading="lazy" /><p>${item.text}</p></article>`)
    .join("");
}

function renderStats(id, items) {
  document.querySelector(id).innerHTML = items
    .map((s) => `<article><img class="stat-icon" src="${s.icon}" alt="" loading="lazy" /><strong>${s.title}</strong><span>${s.caption}</span></article>`)
    .join("");
}

function renderAccordion(id, topics) {
  document.querySelector(id).innerHTML = topics.map((topic, index) => `
    <div class="acc-item" data-acc="${index}">
      <button class="acc-head" data-acc-toggle="${index}">
        ${topic.icon ? `<img class="acc-icon" src="${topic.icon}" alt="" loading="lazy" />` : ""}
        <span>${topic.title}</span>
        <b>+</b>
      </button>
      <div class="acc-body">
        <div class="acc-body-inner">
          <div class="bullet-list">${topic.items.map((item) => `<p>${item}</p>`).join("")}</div>
          ${topic.note ? `<p class="acc-note">${topic.note}</p>` : ""}
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("click", (event) => {
  const accToggle = event.target.closest("[data-acc-toggle]");
  if (accToggle) {
    const item = accToggle.closest(".acc-item");
    item.classList.toggle("open", !item.classList.contains("open"));
  }
});

renderList("#ryz-pains", pains);
renderChips("#ryz-explore", explore);
renderStats("#ryz-stats", groupStats);
renderList("#ryz-format", format);
renderAccordion("#ryz-accordion", accordionTopics);

const priceModes = [
  { mode: "ONLINE", price: GROUP.priceOnline, date: `старт ${GROUP.onlineDate}` },
  { mode: "OFFLINE · Прага", price: GROUP.priceOffline, date: `старт ${GROUP.offlineDate}` }
];
document.querySelector("#ryz-price").innerHTML = priceModes
  .map((p) => `<article><span class="price-mode">${p.mode}</span><strong>${p.price}</strong><span class="price-date">за зустріч · ${p.date}</span></article>`)
  .join("");

document.querySelector("#ryz-insurance-text").textContent = GROUP.insurance;

// той самий ефект "заголовок проявляється й підкреслюється при скролі", що й на головному сайті
function observeReveal() {
  const targets = document.querySelectorAll(".reveal:not(.revealed)");
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
observeReveal();

/* =====================================================================
   КВІЗ
   ===================================================================== */
const questions = [
  {
    icon: "🌀",
    label: "Автоматичне життя",
    q: "Чи буває так, що ти ніби живеш на автоматі?",
    options: ["Так, часто", "Іноді", "Майже ніколи"]
  },
  {
    icon: "🌫️",
    label: "Розуміння бажань",
    q: "Чи складно тобі зрозуміти, чого ти насправді хочеш?",
    options: ["Я часто не знаю, чого хочу", "Знаю, але не завжди дозволяю собі", "Добре відчуваю свої бажання"]
  },
  {
    icon: "⏳",
    label: "Дії через «треба»",
    q: "Як часто ти робиш те, що «треба», навіть коли всередині зовсім не хочеться?",
    options: ["Дуже часто", "Іноді", "Рідко"]
  },
  {
    icon: "🙅‍♀️",
    label: "Казати «ні»",
    q: "Чи легко тобі сказати: «Мені це не підходить» або «Я не хочу»?",
    options: ["Дуже складно", "Залежно від ситуації", "Так, я можу сказати «ні»"]
  },
  {
    icon: "🌊",
    label: "Почуття",
    q: "Що відбувається з твоїми почуттями?",
    options: ["Я їх часто стримую", "Не завжди розумію, що відчуваю", "Я дозволяю собі їх проживати"]
  },
  {
    icon: "🪞",
    label: "Підлаштування в стосунках",
    q: "Чи є у твоєму житті стосунки, де ти більше підлаштовуєшся, ніж можеш бути собою?",
    options: ["Так", "Іноді", "Ні"]
  },
  {
    icon: "🔥",
    label: "Дозволяти собі хотіти",
    q: "Чи дозволяєш ти собі хотіти більшого — у стосунках, сексуальності, реалізації, житті?",
    options: ["Мені складно навіть зрозуміти, чого я хочу", "Хочу, але боюся дозволити собі", "Так, я добре знаю свої бажання"]
  },
  {
    icon: "🤍",
    label: "Чого не вистачає найбільше",
    q: "Чого тобі зараз найбільше не вистачає?",
    options: ["Живості та енергії", "Контакту із собою", "Свободи бути собою", "Близькості та прийняття", "Розуміння своїх бажань", "Сміливості змінювати своє життя"]
  }
];

// step 0 = інтро, 1..8 = питання, 9 = впізнавання, 10 = фінал
const TOTAL_STEPS = questions.length + 2;
let step = 0;
const answers = {};

const overlay = document.querySelector("#quiz-overlay");
const body = document.querySelector("#quiz-body");
const stepLabel = document.querySelector("#quiz-step-label");
const backBtn = document.querySelector("#quiz-back");
const progressBar = document.querySelector("#quiz-progress-bar");

function openQuiz() {
  step = 0;
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  render();
}

function closeQuiz() {
  overlay.hidden = true;
  document.body.style.overflow = "";
}

function buildMessage() {
  const lines = questions.map((item, index) => `${index + 1}. ${item.label}: ${answers[index] || "—"}`);
  return (
    "Доброго дня! Пройшла тест про групу «Ризикни бути живою» на сайті.\n\n" +
    lines.join("\n") +
    "\n\nХочу записатися на безкоштовну консультацію-знайомство (15 хв) щодо участі в групі."
  );
}

function render() {
  progressBar.style.width = `${Math.round((step / (TOTAL_STEPS - 1)) * 100)}%`;
  backBtn.hidden = step === 0;

  if (step === 0) {
    stepLabel.textContent = "Ризикни бути живою";
    body.innerHTML = `
      <div class="quiz-hook">💔 → ❤️</div>
      <h2>А наскільки ти зараз жива у своєму житті?</h2>
      <p>Пройди короткий тест і дізнайся, що може заважати тобі відчувати себе собою — хотіти, відчувати, говорити «ні», проявлятися та бути близькою з іншими.</p>
      <button type="button" class="wide" id="quiz-start">Пройти тест</button>
    `;
    document.querySelector("#quiz-start").addEventListener("click", () => { step = 1; render(); });
    return;
  }

  if (step >= 1 && step <= questions.length) {
    const index = step - 1;
    const item = questions[index];
    stepLabel.textContent = `Крок ${step} з ${questions.length}`;
    body.innerHTML = `
      <h2><span class="quiz-icon-inline">${item.icon}</span>${item.q}</h2>
      <div class="quiz-options">
        ${item.options.map((opt, i) => `<button type="button" data-opt="${opt}" style="animation-delay:${i * 60}ms" class="${answers[index] === opt ? "active" : ""}">${opt}</button>`).join("")}
      </div>
      <button type="button" class="wide" id="quiz-next" ${answers[index] ? "" : "disabled"}>Далі</button>
    `;
    body.querySelectorAll(".quiz-options button").forEach((btn) => {
      btn.addEventListener("click", () => {
        answers[index] = btn.dataset.opt;
        render();
      });
    });
    document.querySelector("#quiz-next").addEventListener("click", () => {
      if (!answers[index]) return;
      step += 1;
      render();
    });
    return;
  }

  if (step === questions.length + 1) {
    stepLabel.textContent = "Трохи про тебе";
    body.innerHTML = `
      <h2>Можливо, ти давно навчилася бути сильною</h2>
      <p>Триматися. Встигати. Піклуватися про інших. Бути хорошою. Не конфліктувати. Не показувати зайвого. Не просити. Не злитися. Не хотіти «занадто багато».</p>
      <p>Але коли життя складається переважно з «треба», «правильно» і «зручно» — поступово можна втратити контакт із собою. І тоді виникає відчуття: «Я ніби живу… але не відчуваю себе живою».</p>
      <button type="button" class="wide" id="quiz-next-final">Далі</button>
    `;
    document.querySelector("#quiz-next-final").addEventListener("click", () => { step += 1; render(); });
    return;
  }

  // фінальний екран
  stepLabel.textContent = "Ризикни бути живою";
  body.innerHTML = `
    <h2>Можливо, настав час почати чути себе</h2>
    <p>Відчувати. Хотіти. Говорити. Відмовляти. Просити. Злитися. Сміятися. Плакати. Бути близькою. Бути собою.<br />Ризикнути бути живою.</p>
    <div class="quiz-final-meta">
      <div><strong>Терапевтична група «Ризикни бути живою»</strong></div>
      <div>${GROUP.meetings} зустрічей · ${GROUP.sessionLength} · жінки · терапевтичний формат</div>
      <div>ONLINE — від ${GROUP.onlineDate} · ${GROUP.priceOnline}/зустріч</div>
      <div>OFFLINE, Прага — від ${GROUP.offlineDate} · ${GROUP.priceOffline}/зустріч</div>
    </div>
    <p>Перед групою — безкоштовна 15-хвилинна консультація-знайомство: познайомимось, і я підкажу, чи підходить тобі саме цей формат.</p>
    <button type="button" class="wide" id="quiz-submit">Записатися на безкоштовну консультацію</button>
  `;
  document.querySelector("#quiz-submit").addEventListener("click", () => {
    window.open(`${GROUP.telegramUrl}?text=${encodeURIComponent(buildMessage())}`, "_blank");
  });
}

document.querySelectorAll("#open-quiz, #open-quiz-3").forEach((btn) => {
  btn.addEventListener("click", openQuiz);
});
document.querySelector("#quiz-close").addEventListener("click", closeQuiz);
document.querySelector("#quiz-back").addEventListener("click", () => {
  if (step > 0) { step -= 1; render(); }
});

/* =====================================================================
   "Стос карток" — рахуємо самі через transform, а не через CSS position:sticky.
   Нативний sticky в браузері ламається, коли багато елементів ділять один
   контейнер (перевірено точними вимірами) — тому рахуємо позицію кожної
   картки вручну при кожному скролі: natural-позиція береться з offsetTop
   (вона не залежить від нашого ж transform), і картка "тримається" на своєму
   top, поки контейнер не закінчиться.
   ===================================================================== */
function setupStack(containerId, topBase, topStep) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const cards = [...container.children];

  function update() {
    const rect = container.getBoundingClientRect();
    cards.forEach((card, i) => {
      const stickTop = topBase + i * topStep;
      const naturalTop = rect.top + card.offsetTop;
      const maxTop = rect.top + rect.height - card.offsetHeight;
      const effectiveStick = Math.min(stickTop, maxTop);
      const offset = Math.max(0, effectiveStick - naturalTop);
      card.style.transform = offset > 0.5 ? `translateY(${offset}px)` : "";
      card.style.zIndex = String(i + 1);
    });
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}
setupStack("ryz-pains", 90, 10);

// для реклами напряму на квіз: посилання виду ryzykny-buty-zhyvoyu.html?quiz=1
// одразу відкриває тест при заході на сторінку
if (new URLSearchParams(window.location.search).get("quiz") === "1") {
  openQuiz();
}
