// Disable automatic scroll restoration to ensure every route change starts at the top
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const app = document.querySelector("#app");
const navLinks = document.querySelectorAll("[data-nav]");

const services = [
  {
    id: "attention",
    title: "Attention",
    icon: "🧿",
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
    icon: "🎯",
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
    icon: "⚡",
    tone: "purple",
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
    icon: "📐",
    tone: "",
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
    icon: "✦",
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
    icon: "📢",
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
    icon: "📝",
    tone: "green",
    text: "Content strategies are crafted to<br>engage audience and drive brand<br>awareness and customer loyalty.",
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
    icon: "📱",
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
    icon: "🎨",
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
    icon: "⚙️",
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

const serviceCard = (service, compact = false, isServicesPageCard = false, hrefOverride) => `
  <a class="service-card ${compact ? "service-list-card" : ""} ${isServicesPageCard ? "services-page-card" : ""}" href="${hrefOverride || `#service-${service.id}`}">
    ${isServicesPageCard && ["attention", "relevance", "friction"].includes(service.id) ? '<span class="card-badge">Limited time offer</span>' : ""}
    <span class="icon-box ${service.tone}">${service.icon}</span>
    ${compact ? '<span class="learn">Learn more →</span>' : ""}
    <h2>${service.title}</h2>
    ${OMIT_TEXT_IDS.includes(service.id) ? "" : `<p>${service.text}</p>`}
    ${isServicesPageCard ? `<span class="learn services-page-learn ${service.tone}">Learn More →</span>` : ""}
  </a>
`;

const footerAwareHash = () => window.location.hash.replace("#", "") || "home";

function setActiveNav(route) {
  navLinks.forEach((link) => {
    const key = link.dataset.nav;
    const isActive = route === key || (route.startsWith("service") && key === "services");
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function homePage() {
  const homeCards = [services[5], services[8], services[6], services[3]];
  // Ensure the icons and tones for home cards match the original design
  homeCards[0].icon = "📢"; // Social Media Advertising
  homeCards[0].tone = ""; // Default blue
  homeCards[1].icon = "🎨"; // Creative Design
  homeCards[1].tone = "cyan";
  homeCards[2].icon = "📝"; // Content Marketing
  homeCards[2].tone = "green";
  homeCards[3].icon = "📐"; // UI/UX Design
  homeCards[3].tone = "cyan";

  return `
    <section class="page home-page">
      <div class="hero-copy">
        <span class="badge"><span>◉</span> Powered by Digital Friction</span>
        <h1>Unlock Your<br>Digital Potential</h1>
        <p>ჩვენ ვართ Newtone - ციფრული სტრატეგების გუნდი, რომელიც მარკეტინგულ ქაოსს ზუსტ გათვლებად და შედეგებად აქცევს.</p>
        <div class="hero-actions">
          <a class="gradient-button" href="#services">Get Started →</a>
        </div>
      </div>
      <div class="hero-services">
        ${homeCards.map((service) => serviceCard(service)).join("")}
      </div>
      <div class="hero-actions hero-actions-mobile">
        <a class="gradient-button" href="#services">Get Started</a>
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
    { ...s0, icon: "🧿", tone: "blue" }, // Card 1: Attention
    { ...s1, icon: "🎯", tone: "green" }, // Card 2: Attention x Relevance
    { ...s2, icon: "⚡", tone: "cyan" }, // Card 3: Attention = Friction x Relevance
    { ...services[9], icon: "⚙️", tone: "cyan" }, // Card 4: Additional Services
  ];
  return `
    <section class="page">
      <div class="rule"></div> <!-- Divider Line -->
      <div class="upper-box"> 
        <a class="back-button" href="#home">← Back</a>
        <h1 class="page-title">Our Services</h1>
        <p class="subcopy">Comprehensive digital solutions tailored to transform your business</p>
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
        <a class="back-button" href="#services">← Back</a>
        <h1 class="page-title">Additional Services</h1>
        <p class="subcopy">Specialised offerings available as add-ons.</p>
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
  const GROUP_BENEFITS = {
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

  const isGrouped = Object.prototype.hasOwnProperty.call(GROUP_BENEFITS, service.id);
  const bullets = isGrouped ? GROUP_BENEFITS[service.id] : service.bullets;
  const priceHtml = isGrouped ? '' : `<span class="price">${service.price}</span>`;
  const connectHref = `#contact?from=${encodeURIComponent(service.title)}`;

  return `
    <section class="page">
      <div class="center-hero" style="position: relative;">
        <a class="back-button" href="${backHref}">← Back</a>
        <span class="badge"><span>✧</span> ${service.title}</span>
      </div>
      <div class="rule"></div>
      <article class="detail-card">
        ${["attention", "relevance", "friction"].includes(service.id) ? '<span class="card-badge">Limited time offer</span>' : ""}
        <span class="icon-box ${service.tone}">${service.icon}</span>
        <h2>${service.title}</h2>
        <ul class="check-list">
          ${bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
        </ul>
        <div class="detail-footer">
          <a class="small-cta" href="#contact">Let's connect →</a>
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
        <a class="back-button" href="${backHref}">← Back</a>
        <span class="badge"><span>✧</span> Full-Service Digital Agency</span>
        <h1 class="page-title">Contact Us</h1>
        <p class="subcopy">From branding and UX design to AI-powered automation and marketing, we transform brands with creative and intuitive digital solutions.</p>
      </div>
      <div class="rule"></div>
      <div class="contact-layout">
        <img class="contact-art" src="assets/figma-image-01.png" alt="" />
        <form class="contact-form" id="leadForm" novalidate>
          <label>
            <span>Name / Lastname</span>
            <input name="fullName" placeholder="Enter your full name" required />
          </label>
          <label>
            <span>Company Name</span>
            <input name="companyName" placeholder="Enter your company name" />
          </label>
          <label>
            <span>Phone Number</span>
            <input name="phone" type="tel" value="+995" placeholder="Enter your phone number" required />
          </label>
          <label>
            <span>Email Address</span>
            <input name="email" type="email" autocomplete="email" placeholder="Enter your email address" required />
          </label>
          <button class="gradient-button" type="submit">Send</button>
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
    const emailFilled = payload.email && payload.email.trim().length > 0;
    const phoneValue = payload.phone ? payload.phone.trim() : "";
    // Counts as empty if it only contains the +995 prefix
    const phoneFilled = phoneValue.length > 4;

    if (!nameFilled || (!emailFilled && !phoneFilled)) {
      setStatus("Please fill in your name and at least one contact method (Email or Phone).", "is-error");
      return;
    }

    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
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
      submitButton.textContent = "Sent!";
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
    gtag('config', 'G-HBKWN8VG6N', {
      'page_path': location.hash || '#home'
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
    btn.textContent = "Contact Us";
    footer.prepend(btn);
  }
})();
