// Disable automatic scroll restoration to ensure every route change starts at the top
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const i18n = {
  en: {
    home: "Home", services: "Services", connect: "Contact Us",
    hero_badge: "Powered by Digital Friction",
    hero_title: "Unlock Your<br>Digital Potential",
    hero_desc: "We are Newtone - a team of digital strategists turning marketing chaos into precise calculations and results.",
    get_started: "Get Started →",
    learn_more: "Learn more →",
    back: "← Back",
    our_services: "Our Services",
    serv_sub: "Comprehensive digital solutions tailored to transform your business",
    add_serv: "Additional Services",
    add_sub: "Specialised offerings available as add-ons.",
    contact_badge: "Full-Service Digital Agency",
    contact_title: "Contact Us",
    contact_sub: "From branding and UX design to AI-powered automation and marketing, we transform brands with creative and intuitive digital solutions.",
    form_name: "Name / Lastname",
    form_name_p: "Enter your full name",
    form_company: "Company Name",
    form_company_p: "Enter your company name",
    form_phone: "Phone Number",
    form_phone_p: "Enter your phone number",
    form_email: "Email Address",
    form_email_p: "Enter your email address",
    form_send: "Send",
    form_error: "Please fill in your name and at least one contact method (Email or Phone).",
    form_sending: "Sending...",
    form_sent: "Sent!",
    offer: "Limited Time Offer",
    coming_soon: "Coming Soon...",
    price_gel: "₾",
    connect_cta: "Let's connect →"
  },
  ka: {
    home: "მთავარი", services: "სერვისები", connect: "კონტაქტი",
    hero_badge: "Powered By Digital Friction",
    hero_title: "გახსენი შენი<br>ციფრული პოტენციალი",
    hero_desc: "ჩვენ ვართ Newtone - ციფრული სტრატეგების გუნდი, რომელიც მარკეტინგულ ქაოსს ზუსტ გამოთვლებად და შედეგებად გარდაქმნის.",
    get_started: "დაწყება →",
    learn_more: "გაიგე მეტი →",
    back: "← უკან",
    our_services: "ჩვენი სერვისები",
    serv_sub: "ციფრული გადაწყვეტილებები თქვენი ბიზნესისთვის.",
    add_serv: "დამატებითი სერვისები",
    add_sub: "სპეციალიზებული ციფრული სერვისები.",
    contact_badge: "სრული ციფრული სააგენტო",
    contact_title: "კონტაქტი",
    contact_sub: "ბრენდინგი, UX და AI ავტომატიზაცია — ვქმნით კრეატიულ ციფრულ პროდუქტებს.",
    form_name: "სახელი / გვარი",
    form_name_p: "შეიყვანეთ თქვენი სახელი და გვარი",
    form_company: "კომპანიის სახელი",
    form_company_p: "შეიყვანეთ კომპანიის სახელი",
    form_phone: "ტელეფონის ნომერი",
    form_phone_p: "შეიყვანეთ ტელეფონის ნომერი",
    form_email: "ელ-ფოსტა",
    form_email_p: "შეიყვანეთ ელ-ფოსტის მისამართი",
    form_send: "გაგზავნა",
    form_error: "შეავსეთ სახელი და საკონტაქტო ინფორმაცია.",
    form_sending: "მიმდინარეობს...",
    form_sent: "გაგზავნილია",
    offer: "სპეც. შეთავაზება",
    coming_soon: "მალე...",
    price_gel: "₾",
    connect_cta: "დაგვიკავშირდით →"
  }
};

const serviceTranslations = {
  attention: { en: "Attention", ka: "Attention" },
  relevance: { en: "Attention x Relevance", ka: "Attention x Relevance" },
  friction: { en: "Attention = Friction x Relevance", ka: "Attention = Friction x Relevance" },
  uiux: { en: "UI/UX Design", ka: "UI/UX Design" },
  logo: { en: "Logo & Brand Design", ka: "Logo & Brand Design" },
  "social-ads": { en: "Social Media Advertising", ka: "Social Media Advertising" },
  content: { en: "Content Marketing", ka: "Content Marketing" },
  social: { en: "Social Media", ka: "Social Media" },
  creative: { en: "Creative Design", ka: "Creative Design" },
  additional: { en: "Additional Services", ka: "Additional Services" }
};

const serviceDescTranslations = {
  uiux: { en: "We create intuitive, user-centric digital experiences that balance aesthetics with functionality.", ka: "ვქმნით თანამედროვე, ფუნქციურ და ესთეტიკურ ციფრულ გამოცდილებას, თქვეი ბიზნსესისთვის." },
  logo: { en: "Memorable identity systems for new brands, rebrands, and campaigns that need a clear visual voice.", ka: "დასამახსოვრებელი იდენტობის სისტემები ახალი ბრენდებისთვის, რებრენდინგისთვის და კამპანიებისთვის." },
  "social-ads": { en: "Paid social campaigns designed to reach the right audience and convert attention into real demand.", ka: "ფასიანი სოციალური კამპანიები, რომლებიც მიმართულია სწორ აუდიტორიაზე." },
  content: { en: "Content strategies are crafted to engage audience and drive brand awareness and customer loyalty.", ka: "კონტენტ სტრატეგიები შექმნილია აუდიტორიის ჩასართავად და ბრენდის ცნობადობის გასაზრდელად." },
  social: { en: "Enhance your brand's presence across social media platforms with our expert social media management services.", ka: "გააძლიერეთ თქვენი ბრენდის ყოფნა სოციალურ პლატფორმებზე ჩვენი მართვის სერვისებით." },
  creative: { en: "Bring your brand to life with unique visual identities, storytelling, and consistent design systems.", ka: "გააცოცხლეთ თქვენი ბრენდი უნიკალური ვიზუალური იდენტობით და სთორითელინგით." },
  additional: { en: "More focused digital solutions for growing brands.", ka: "უფრო ფოკუსირებული ციფრული გადაწყვეტილებები მზარდი ბრენდებისთვის." }
};

const bulletTranslations = {
  attention: {
    en: ["Social Media: 10 posts (8 static / 2 carousels)", "Copywriting: Post content preparation", "Advertising: Campaign setup via Ads Manager (Audience segmentation)", "Print Design: 1 print file per month"],
    ka: ["სოც. მედია: 10 პოსტი (8 სტატიკური დიზაინი / 2 კარუსელი)", "Copywriting: პოსტების ტექსტების მომზადება", "Advertising: სარეკლამო კამპანიის აწყობა Ads Manager-ით", "Print Design: თვეში 1 საბეჭდი ფაილის მომზადება"]
  },
  relevance: {
    en: ["Social Media: 10 posts (8 static / 2 carousels, 3 stories/week)", "Reels / TikTok: 2 video shoots (mobile) + professional editing", "Copywriting: Post content preparation", "Advertising: Campaign setup via Ads Manager", "Print Design: 1 print file per month", "Reporting: Brief summary of results"],
    ka: ["სოც. მედია: 10 პოსტი (8 სტატიკური / 2 კარუსელი, კვირაში 3 სთორი)", "Reels / TikTok: 2 ვიდეოს გადაღება + პროფესიონალური მონტაჟი", "Copywriting: პოსტების ტექსტების მომზადება", "Advertising: სარეკლამო კამპანიის აწყობა Ads Manager-ით", "Print Design: თვეში 1 საბეჭდი ფაილის მომზადება", "Reporting: თვის ბოლოს შედეგების მოკლე მიმოხილვა"]
  },
  friction: {
    en: ["Social Media: 10 posts (8 static / 2 carousels, 3 stories/week)", "Reels / TikTok: 4 video shoots or Motion Design (1/week)", "Copywriting: Post content preparation", "Meta & TikTok Advertising: Campaign setup via Ads Manager", "Print Design: 2 print files per month"],
    ka: ["სოც. მედია: 10 პოსტი (8 სტატიკური / 2 კარუსელი, კვირაში 3 სთორი)", "Reels / TikTok: 4 ვიდეოს გადაღება ან Motion Design", "Copywriting: პოსტების ტექსტების მომზადება", "Meta & TikTok Advertising: სარეკლამო კამპანიის აწყობა", "Print Design: თვეში 2 საბეჭდი ფაილის მომზადება"]
  }
};

let currentLang = localStorage.getItem('newtone_lang') || 'en';
const t = (key) => i18n[currentLang][key] || key;

const app = document.querySelector("#app");
const navLinks = document.querySelectorAll("[data-nav]");
const contactPill = document.querySelector(".contact-pill");

function injectLangSwitcher() {
  const navContainer = document.querySelector(".main-nav");
  if (!navContainer) return;

  let toggleBtn = document.querySelector(".lang-toggle-btn");
  if (!toggleBtn) {
    toggleBtn = document.createElement("button");
    toggleBtn.className = "lang-toggle-btn";
    toggleBtn.setAttribute("aria-label", "Toggle Language");
    toggleBtn.onclick = () => {
      const nextLang = currentLang === 'en' ? 'ka' : 'en';
      window.setLang(nextLang);
    };

    const divider = document.createElement("span");
    divider.className = "lang-divider";

    // Prepend divider first, then button so button is leftmost
    navContainer.prepend(divider);
    navContainer.prepend(toggleBtn);
  }

  toggleBtn.textContent = currentLang === 'en' ? 'ქარ' : 'Eng';
}

window.setLang = (lang) => {
  currentLang = lang;
  localStorage.setItem('newtone_lang', lang);
  document.body.className = `lang-${lang}`;
  document.documentElement.lang = lang;
  if (app) {
    app.lang = lang;
    app.style.display = 'none'; // Tiny hack to force Chrome to repaint locale-aware text
    setTimeout(() => app.style.display = '', 0);
  }
  render();
};

const UI_ICONS = {
  eye: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  target: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-2 10h8l-9 10 2-10H4l9-10z"/></svg>`,
  layout: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z"/></svg>`,
  megaphone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 13v-2Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
  fileText: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
  smartphone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
  palette: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-3.91 3.91-7.07 3.06-7.07 3.06s-.85-3.16 3.06-7.07"/><path d="M12.93 11.07l1.01 1.01"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`
};

const services = [
  {
    id: "attention",
    title: "Attention",
    icon: UI_ICONS.eye,
    tone: "",
    text: "",
    price: "GEL 420",
    bullets: [
      "სოც. მედია: 10 პოსტი (8 სტატიკური დიზაინი / 2 კარუსელი)",
      "Copywriting: პოსტების ტექსტების მომზადება",
      "Advertising: სარეკლამო კამპანიის აწყობა Ads Manager-ით (აუდიტორიის სეგმენტაცია)",
      "Print Design: თვეში 1 საბეჭდი ფაილის მომზადება (მაგ: სავიზიტო ბარათი ან ფლაერი)",
    ],
  },
  {
    id: "relevance",
    title: "Attention x Relevance",
    icon: UI_ICONS.target,
    tone: "green",
    text: "",
    price: "GEL 650",
    bullets: [
      "სოც. მედია: 10 პოსტი (8 სტატიკური დიზაინი / 2 კარუსელი, კვირაში 3 სთორი)",
      "Reels / TikTok: 2 ვიდეოს გადაღება (მობილურით) + პროფესიონალური მონტაჟი",
      "Copywriting: პოსტების ტექსტების მომზადება",
      "Advertising: სარეკლამო კამპანიის აწყობა Ads Manager-ით (აუდიტორიის სეგმენტაცია)",
      "Print Design: თვეში 1 საბეჭდი ფაილის მომზადება (მაგ: ბანერი ან მენიუს 1 გვერდი)",
      "Reporting: თვის ბოლოს შედეგების მოკლე მიმოხილვა",
    ],
  },
  {
    id: "friction",
    title: "Attention = Friction x Relevance",
    icon: UI_ICONS.zap,
    tone: "cyan",
    text: "",
    price: "GEL 850",
    bullets: [
      "სოც. მედია: 10 პოსტი (8 სტატიკური დიზაინი / 2 კარუსელი, კვირაში 3 სთორი)",
      "Reels / TikTok: 4 ვიდეოს გადაღება და მონტაჟი ან Motion Design (კვირაში 1 ვიდეო)",
      "Copywriting: პოსტების ტექსტების მომზადება",
      "Meta & TikTok Advertising: სარეკლამო კამპანიის აწყობა Ads Manager-ით (აუდიტორიის სეგმენტაცია)",
      "Print Design: თვეში 2 საბეჭდი ფაილის მომზადება (მაგ: ბანერი ან მენიუ, შეფუთვა/ეტიკეტი, 2 გვერდი)",
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: UI_ICONS.layout,
    tone: "cyan",
    text: "We create intuitive, user-centric digital experiences that balance aesthetics with functionality.",
    price: "GEL 420",
    bullets: [
      "ვებგვერდისა და აპლიკაციის UX სტრუქტურა",
      "პროტოტიპი და ვიზუალური დიზაინი",
      "მომხმარებლის გზის გაუმჯობესება",
      "დიზაინის სისტემის მომზადება",
    ],
  },
  {
    id: "logo",
    title: "Logo & Brand Design",
    icon: UI_ICONS.sparkles,
    tone: "green",
    text: "Memorable identity systems for new brands, rebrands, and campaigns that need a clear visual voice.",
    price: "GEL 400",
    bullets: [
      "ლოგოს დიზაინი",
      "ბრენდის ვიზუალური მიმართულება",
      "ფერებისა და ტიპოგრაფიის სისტემა",
      "ბრენდბუქის ძირითადი ელემენტები",
    ],
  },
  {
    id: "social-ads",
    title: "Social Media Advertising",
    icon: UI_ICONS.megaphone,
    tone: "",
    text: "Paid social campaigns designed to reach the right audience and convert attention into real demand.",
    price: "GEL 420",
    bullets: [
      "Meta და TikTok Ads",
      "სარეკლამო აუდიტორიების შექმნა",
      "კამპანიის ტექსტები და ვიზუალები",
      "შედეგების ანალიზი",
    ],
  },
  {
    id: "content",
    title: "Content Marketing",
    icon: UI_ICONS.fileText,
    tone: "green",
    text: "Content strategies are crafted to engage audience and drive brand awareness and customer loyalty.",
    price: "GEL 350",
    bullets: [
      "კონტენტის სტრატეგია",
      "სარეკლამო ტექსტები",
      "ბლოგისა და სოციალური ქსელების მასალები",
      "კამპანიების დაგეგმვა",
    ],
  },
  {
    id: "social",
    title: "Social Media",
    icon: UI_ICONS.smartphone,
    tone: "purple",
    text: "Enhance your brand's presence across social media platforms with our expert social media management services.",
    price: "GEL 350",
    bullets: [
      "Meta და TikTok Ads",
      "სოციალური ქსელების მართვა",
      "კონტენტ-გეგმა",
      "აუდიტორიის ჩართულობის ზრდა",
    ],
  },
  {
    id: "creative",
    title: "Creative Design",
    icon: UI_ICONS.palette,
    tone: "cyan",
    text: "Bring your brand to life with unique visual identities, storytelling, and consistent design systems.",
    price: "GEL 320",
    bullets: [
      "ბრენდის ვიზუალური კომუნიკაცია",
      "Motion Design",
      "სარეკლამო ბანერები",
      "სოციალური მედიის დიზაინები",
    ],
  },
  {
    id: "additional",
    title: "Additional Services",
    icon: UI_ICONS.plus,
    tone: "cyan", // Light blue/teal
    text: "More focused digital solutions for growing brands.",
    price: "GEL 300",
    bullets: [
      "დამატებითი სერვისების დეტალი 1",
      "დამატებითი სერვისების დეტალი 2",
      "დამატებითი სერვისების დეტალი 3",
    ],
  },
];

const routeMap = {
  "service-attention": "attention",
  "service-relevance": "relevance",
  "service-friction": "friction",
  "service-uiux": "uiux",
  "service-logo": "logo",
  "service-social-ads": "social-ads",
  "service-content": "content",
  "service-social": "social",
  "service-creative": "creative",
  "service-additional": "additional",
};

const logoPulse = `<span class="pulse-mark" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>`;

const OMIT_TEXT_IDS = ["attention", "relevance", "friction", "additional"];

const serviceCard = (service, compact = false, isServicesPageCard = false, hrefOverride) => {
  const isLimitedOffer = ["attention", "relevance", "friction"].includes(service.id);
  const displayPrice = service.price ? service.price.replace("GEL", "").trim() + " " + t('price_gel') : "";
  const badgeHtml = isServicesPageCard && isLimitedOffer 
    ? `<span class="card-badge">${t('offer')} - ${displayPrice}</span>` 
    : "";

  const title = serviceTranslations[service.id] ? serviceTranslations[service.id][currentLang] : service.title;
  const text = serviceDescTranslations[service.id] ? serviceDescTranslations[service.id][currentLang] : service.text;

  return `
  <a class="service-card ${compact ? "service-list-card" : ""} ${isServicesPageCard ? "services-page-card" : ""}" href="${hrefOverride || `#service-${service.id}`}">
    ${badgeHtml}
    <span class="icon-box ${service.tone}">${service.icon}</span>
    ${compact ? `<span class="learn">${t('learn_more')}</span>` : ""}
    <h2>${title}</h2>
    ${OMIT_TEXT_IDS.includes(service.id) ? "" : `<p>${text}</p>`}
    ${isServicesPageCard ? `<span class="learn services-page-learn ${service.tone}">${t('learn_more')}</span>` : ""}
  </a>
`;};

const footerAwareHash = () => window.location.hash.replace("#", "") || "home";

function setActiveNav(route) {
  document.body.className = `lang-${currentLang}`;
  document.documentElement.lang = currentLang;
  navLinks.forEach((link) => {
    const key = link.dataset.nav;
    // Force English labels for the upper navigation bar
    link.textContent = i18n.en[key] || key;
    const isActive = route === key || (route.startsWith("service") && key === "services");
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (contactPill) {
    // Force English label for the contact button in the upper bar
    contactPill.textContent = i18n.en.connect;
  }
}

function homePage() {
  const homeCards = [services[5], services[8], services[6], services[3]];
  return `
    <section class="page home-page">
      <div class="hero-copy">
        <span class="badge"><span>◉</span> ${t('hero_badge')}</span>
        <h1>${t('hero_title')}</h1>
        <p>${t('hero_desc')}</p>
        <div class="hero-actions">
          <a class="gradient-button" href="#services">${t('get_started')}</a>
        </div>
      </div>
      <div class="hero-services">
        ${homeCards.map((service) => serviceCard(service)).join("")}
      </div>
      <div class="hero-actions hero-actions-mobile">
        <a class="gradient-button" href="#services">${t('get_started')}</a>
      </div>
    </section>
  `;
}

function servicesPage() {
  const stripServicePrefix = (s) => {
    const copy = { ...s };
    if (typeof copy.title === 'string') copy.title = copy.title.replace(/^Service\s+/i, '');
    return copy;
  };

  const s0 = stripServicePrefix(services[0]);
  const s1 = stripServicePrefix(services[1]);
  const s2 = stripServicePrefix(services[2]);
  // Change title for the third card to use '=' as requested
  if (s2 && s2.title) s2.title = s2.title.replace(' x Friction x Relevance', ' = Friction x Relevance');

  const servicesForGrid = [
    { ...s0, tone: "" }, // Card 1: Attention (Default Blue)
    { ...s1, tone: "green" }, // Card 2: Attention x Relevance
    { ...s2, tone: "cyan" }, // Card 3: Attention = Friction x Relevance
    { ...services[9], tone: "cyan" }, // Card 4: Additional Services
  ];
  return `
    <section class="page">
      <div class="rule"></div> <!-- Divider Line -->
      <div class="upper-box"> 
        <a class="back-button" href="#home">${t('back')}</a>
        <h1 class="page-title">${t('our_services')}</h1>
        <p class="subcopy">${t('serv_sub')}</p>
      </div>
      <div class="bottom-box">
        <div class="services-grid">
          ${servicesForGrid.map((service) => {
            if (service.id === 'additional') {
              // Link Additional Services card to a grouped services page
              return serviceCard(service, false, true, '#services-additional');
            }
            return serviceCard(service, false, true);
          }).join("")}
        </div>
      </div>
    </section>
  `;
}

function additionalServicesPage() {
  const additionalItems = [
    services.find(s => s.id === 'social-ads'),
    services.find(s => s.id === 'content'),
    services.find(s => s.id === 'logo'),
    services.find(s => s.id === 'creative'),
    services.find(s => s.id === 'uiux'),
  ].filter(Boolean);

  return `
    <section class="page">
      <div class="rule"></div>
      <div class="upper-box">
        <a class="back-button" href="#services">${t('back')}</a>
        <h1 class="page-title">${t('add_serv')}</h1>
        <p class="subcopy">${t('add_sub')}</p>
      </div>
      <div class="bottom-box">
        <div class="services-grid">
          ${additionalItems.map(s => serviceCard(s, false, true)).join('')}
        </div>
      </div>
    </section>
  `;
}

function serviceDetailPage(service, backHref = "#services") {
  const GROUP_BENEFITS_EN = {
    'social-ads': [
      'Meta & TikTok Advertising',
      'სარეკლამო კამპანიის აწყობა Ads Manager-ით',
      'ბიუჯეტირება',
      'ანალიტიკა / რეპორტინგი',
    ],
    'content': [
      'ვიდეოების გადაღება',
      'მონტაჟი',
      'კონტენტ კალენდარის შექმნა',
      'სფიჩ ვიდეოები და ვოისოვერი',
    ],
    'logo': [
      'ლოგოს მომზადება/რებრენდინგი',
      'ბრენდის სახელმძღვანელოს შექმნა',
      'ბრენდის სახელმძღვანელოს შექმნა',
      'ტიპოგრაფია',
      'შეფუთვისა და ეტიკეტის დიზაინი',
    ],
    'creative': [
      'სოციალური მედიის პოსტების დიზაინი',
      'Motion Design',
      'საბეჭდი მასალის მომზადება',
    ],
    'uiux': [
      'ლენდინგ ფეიჯი',
      'ინტერაქციული პროტოტიპები (Figma)',
      'Complete User Flows',
      'სრული დიზაინერული სისტემა',
    ],
  };

  const GROUP_BENEFITS_KA = {
    'social-ads': ['Meta & TikTok Advertising', 'სარეკლამო კამპანიის აწყობა Ads Manager-ით', 'ბიუჯეტირება', 'ანალიტიკა / რეპორტინგი'],
    'content': ['ვიდეოების გადაღება', 'მონტაჟი', 'კონტენტ კალენდარის შექმნა', 'სფიჩ ვიდეოები და ვოისოვერი'],
    'logo': ['ლოგოს მომზადება/რებრენდინგი', 'ბრენდის სახელმძღვანელოს შექმნა', 'ტიპოგრაფია', 'შეფუთვისა და ეტიკეტის დიზაინი'],
    'creative': ['სოციალური მედიის პოსტების დიზაინი', 'Motion Design', 'საბეჭდი მასალის მომზადება'],
    'uiux': ['ლენდინგ ფეიჯი', 'ინტერაქციული პროტოტიპები (Figma)', 'Complete User Flows', 'სრული დიზაინერული სისტემა']
  };

  const isGrouped = Object.prototype.hasOwnProperty.call(GROUP_BENEFITS_EN, service.id);
  const isLimitedOffer = ["attention", "relevance", "friction"].includes(service.id);
  const displayPrice = service.price ? service.price.replace("GEL", "").trim() + " " + t('price_gel') : "";
  
  let bullets = [];
  if (isGrouped) {
    bullets = currentLang === 'ka' ? GROUP_BENEFITS_KA[service.id] : GROUP_BENEFITS_EN[service.id];
  } else {
    bullets = bulletTranslations[service.id] ? bulletTranslations[service.id][currentLang] : service.bullets;
  }

  // Hide footer price badge if it's a grouped service or a limited offer (since price is in the top badge)
  const priceHtml = (isGrouped || isLimitedOffer) ? '' : `<span class="price">${displayPrice}</span>`;
  const title = serviceTranslations[service.id] ? serviceTranslations[service.id][currentLang] : service.title;

  return `
    <section class="page">
      <div class="center-hero" style="position: relative;">
        <a class="back-button" href="${backHref}">${t('back')}</a>
        <span class="badge"><span>✧</span> ${title}</span>
      </div>
      <div class="rule"></div>
      <article class="detail-card">
        ${isLimitedOffer ? `<span class="card-badge">${t('offer')} - ${displayPrice}</span>` : ""}
        <span class="icon-box ${service.tone}">${service.icon}</span>
        <h2>${title}</h2>
        <ul class="check-list">
          ${bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
        </ul>
        <div class="detail-footer">
          <a class="small-cta" href="#contact">${t('connect_cta')}</a>
          ${priceHtml}
        </div>
      </article>
    </section>
  `;
}

function contactPage(backHref = "#home") {
  return `
    <section class="page">
      <div class="center-hero" style="position: relative;">
        <a class="back-button" href="${backHref}">${t('back')}</a>
        <span class="badge"><span>✧</span> ${t('contact_badge')}</span>
        <h1 class="page-title">${t('contact_title')}</h1>
        <p class="subcopy">${t('contact_sub')}</p>
      </div>
      <div class="rule"></div>
      <div class="contact-layout">
        <img class="contact-art" src="assets/figma-image-01.png" alt="" />
        <form class="contact-form" id="leadForm" novalidate>
          <label>
            <span>${t('form_name')}</span>
            <input name="fullName" placeholder="${t('form_name_p')}" required />
          </label>
          <label>
            <span>${t('form_company')}</span>
            <input name="companyName" placeholder="${t('form_company_p')}" />
          </label>
          <label>
            <span>${t('form_phone')}</span>
            <input name="phone" type="tel" value="+995" placeholder="${t('form_phone_p')}" required />
          </label>
          <label>
            <span>${t('form_email')}</span>
            <input name="email" type="email" autocomplete="email" placeholder="${t('form_email_p')}" required />
          </label>
          <button class="gradient-button" type="submit">${t('form_send')}</button>
          <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>
  `;
}

function statePage(title) {
  return `
    <section class="page state-page">
      <div>
        <h1>${title}</h1>
        ${logoPulse}
      </div>
    </section>
  `;
}

function attachFormHandler() {
  const form = document.querySelector("#leadForm");
  const statusEl = document.querySelector("#formStatus");

  if (!form || !statusEl) return;

  const setStatus = (message, type = "") => {
    statusEl.textContent = message;
    statusEl.className = `form-status ${type}`.trim();
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector("button");
    const formData = new FormData(form);
    
    // Extract source from URL hash (e.g., #contact?from=Service+Name)
    const urlParams = new URLSearchParams(window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '');
    const source = urlParams.get('from') || 'Direct / General';
    const payload = { ...Object.fromEntries(formData.entries()), source };

    const nameFilled = payload.fullName && payload.fullName.trim().length > 0;
    const emailFilled = payload.email && payload.email.trim().length > 0 && payload.email.includes('@'); // Basic email format check
    
    let phoneValue = payload.phone ? payload.phone.trim() : "";
    // Clean phone number: allow leading '+' then only digits
    phoneValue = phoneValue.replace(/[^+\d]/g, '');

    // Counts as empty if it only contains the +995 prefix
    const phoneFilled = phoneValue.length > 4; // Assuming +995 is the minimum valid prefix

    if (!nameFilled || (!emailFilled && !phoneFilled)) {
      setStatus(t('form_error'), "is-error");
      return;
    }

    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = t('form_sending');
    setStatus("");

    try {
      // Using API endpoint for security
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.status === 404) {
        throw new Error("API endpoint not found. Please check your server configuration.");
      }
      
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Server Error");
      }

      // Success logic
      form.reset();
      submitButton.textContent = t('form_sent');
      submitButton.classList.add("is-sent");

      // Track successful form submission as a conversion
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          'event_category': 'Contact Form',
          'event_label': source
        });
      }

      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.classList.remove("is-sent");
        submitButton.disabled = false;
      }, 3000);

    } catch (error) {
      console.error("Form Error:", error.message);
      setStatus(error.message, "is-error");
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  });
}

function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Targets headings, cards, and sections
  const elements = document.querySelectorAll('.service-card, h1, .detail-card, .contact-form, .upper-box, .bottom-box');
  elements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

let lastMainPage = "services";
let lastRoute = window.location.hash || "#home";

function render() {
  const route = footerAwareHash();
  const serviceId = routeMap[route];

  setActiveNav(route);

  if (route === "home") app.innerHTML = homePage();
  else if (route === "services") app.innerHTML = servicesPage();
  else if (route === "get-started") app.innerHTML = servicesPage();
  else if (serviceId) {
    const backHref = lastMainPage === "services-additional" ? "#services-additional" : "#services";
    app.innerHTML = serviceDetailPage(services.find((item) => item.id === serviceId), backHref);
  }
  else if (route.startsWith("contact")) app.innerHTML = contactPage(lastRoute);
  else if (route === "services-additional") app.innerHTML = additionalServicesPage();
  else app.innerHTML = statePage("Coming Soon...");
  
  setActiveNav(route);
  injectLangSwitcher();

  if (["home", "services", "services-additional"].includes(route)) {
    lastMainPage = route;
  }

  // Store the route to return to when navigating to Contact
  if (!route.startsWith("contact")) {
    lastRoute = window.location.hash || "#home";
  }

  attachFormHandler();
  initScrollReveal();

  // Track virtual page view for SPA routing
  if (typeof gtag === 'function') {
    gtag('event', 'page_view', {
      page_path: location.hash.replace('#', '/') || '/home',
      page_title: document.title,
      page_location: window.location.href
    });
  }

  window.scrollTo({ top: 0, behavior: "auto" });
}

window.addEventListener("hashchange", render);
render();

// Fix IG, FB, and TikTok icons in the footer with high-quality SVGs
(function fixSocialIcons() {
  const socialLinks = document.querySelectorAll('.social-row a');
  const icons = {
    facebook: `<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M22 12.083c0-5.523-4.477-10-10-10S2 6.56 2 12.083c0 4.99 3.656 9.128 8.438 9.878v-6.987h-2.54V12.08h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12.08h2.773l-.443 2.89h-2.33v6.988C18.343 21.21 22 17.073 22 12.083z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.774 4.919 4.851.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.075-1.664 4.704-4.919 4.851-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.775-4.919-4.851-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.075 1.664-4.704 4.919-4.851 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.981-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-5.838 2.435-5.838 5.838s2.435 5.838 5.838 5.838 5.838-2.435 5.838-5.838-2.435-5.838-5.838-5.838zm0 9.512c-2.029 0-3.673-1.645-3.673-3.674s1.644-3.673 3.673-3.673 3.673 1.644 3.673 3.673-1.644 3.674-3.673 3.674zm5.272-11.357c0 .73-.593 1.322-1.323 1.322s-1.322-.593-1.322-1.322.593-1.323 1.322-1.323 1.323.593 1.323 1.323z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-.99 0-1.49.18-1.76.91-3.44 2.12-4.73 1.37-1.44 3.3-2.27 5.27-2.36.13 0 .27 0 .4.02v4.03c-1.13.09-2.27.44-3.15 1.18-.86.72-1.42 1.76-1.57 2.86-.01.13-.01.26-.01.39 0 1.16.48 2.25 1.25 3.1 1.05 1.12 2.64 1.67 4.13 1.48 1.48-.11 2.82-.96 3.51-2.27.35-.61.53-1.28.56-1.98.02-3.41 0-6.82.01-10.23z"/></svg>`
  };

  socialLinks.forEach(link => {
    const href = link.href.toLowerCase();
    if (href.includes('facebook')) link.innerHTML = icons.facebook;
    else if (href.includes('instagram')) link.innerHTML = icons.instagram;
    else if (href.includes('tiktok')) link.innerHTML = icons.tiktok;
  });
})();

// Inject "Contact Us" button at the top of the footer for small screens
(function injectFooterContact() {
  const footer = document.querySelector(".site-footer");
  if (footer && !footer.querySelector(".footer-contact-btn")) {
    const btn = document.createElement("a");
    btn.href = "#contact?from=Footer";
    btn.className = "gradient-button footer-contact-btn"; 
    footer.prepend(btn);
  }
  const btn = document.querySelector(".footer-contact-btn");
  if (btn) btn.textContent = t('contact_title');
})();
