const data = {
  values: ['Rigueur', 'Fiabilité', 'Professionnalisme'],
  commitments: ['Délais de rendez-vous réduits', 'Efficacité d’intervention', 'Solutions adaptées à chaque besoin'],
  clientTypes: ['Particuliers', 'Professionnels', 'Syndics'],
  coverageAreas: ['Essonne', 'Île-de-France'],
  company: {
    name: 'ELIPS',
    phoneDisplay: '01 69 22 56 51',
    mobileDisplay: '06 62 11 70 55',
    address: '18, rue Gustave Eiffel 91100 Corbeil-Essone',
    mapQuery: '18, rue Gustave Eiffel 91100 Corbeil-Essone',
    email: 'contact@elips.fr',
  },
  services: [
    {
      title: 'Électricité générale',
      text: 'Installation, maintenance, rénovation et mise en conformité de vos équipements électriques pour les environnements résidentiels, tertiaires et professionnels.',
      details: ['Installations neuves', 'Rénovation électrique', 'Maintenance et dépannage', 'Courant fort et courant faible'],
    },
    {
      title: 'Contrôle et gestion d’accès',
      text: 'Solutions de contrôle d’accès adaptées à vos besoins de sécurisation, de traçabilité et de gestion des flux.',
      details: ['Interphonie', 'Gestion de portes', 'Accès par badges', 'Contrôle des accès visiteurs'],
    },
    {
      title: 'Réseaux',
      text: 'Déploiement d’infrastructures réseau fiables pour garantir connectivité, performance et continuité de service.',
      details: ['Réseaux informatiques', 'Réseaux téléphoniques', 'Câblage', 'Infrastructure de communication'],
    },
    {
      title: 'Intrusion',
      text: 'Systèmes de détection et d’alerte pour renforcer la protection des personnes, des biens et des sites sensibles.',
      details: ['Alarmes intrusion', 'Détection', 'Sécurisation des accès', 'Protection des locaux'],
    },
    {
      title: 'Sécurité incendie',
      text: 'Mise en place de solutions de prévention et de sécurité incendie conformes aux exigences de protection et d’exploitation.',
      details: ['SSI', 'BAES', 'Alarmes incendie', 'Prévention et mise en sécurité'],
    },
    {
      title: 'Photovoltaïque',
      text: 'Accompagnement sur les installations photovoltaïques pour améliorer l’autonomie énergétique et valoriser des solutions durables.',
      details: ['Énergies renouvelables', 'Production d’énergie', 'Solutions durables', 'Accompagnement technique'],
    },
  ],
  achievements: [
    { title: 'Interventions multi-expertises', text: 'ELIPS intervient sur des problématiques techniques complémentaires pour proposer une réponse cohérente, fiable et adaptée au terrain.' },
    { title: 'Particuliers, professionnels et syndics', text: 'L’entreprise accompagne différents profils de clients avec une même exigence de sérieux, de lisibilité et de qualité d’exécution.' },
    { title: 'Maintenance, dépannage, rénovation et neuf', text: 'Les interventions couvrent l’ensemble du cycle de vie des installations, du besoin ponctuel au projet plus structurant.' },
  ],
  caseStudies: [
    {
      title: 'Remise en conformité électrique d’un local professionnel', sector: 'Tertiaire', icon: '⚡', visual: 'electricity', photoStyle: 'industrial-light',
      challenge: 'Sécuriser une installation vieillissante et fiabiliser l’alimentation électrique des espaces de travail.',
      solution: 'Diagnostic, remise en conformité du tableau, reprise des circuits prioritaires et amélioration de la distribution électrique.',
      result: 'Une installation plus sûre, plus lisible et mieux adaptée à l’exploitation quotidienne.',
    },
    {
      title: 'Mise en place d’un contrôle d’accès pour un immeuble', sector: 'Syndic / habitat collectif', icon: '🔐', visual: 'access', photoStyle: 'access-entry',
      challenge: 'Renforcer la sécurité des accès tout en simplifiant la gestion des entrées pour les occupants.',
      solution: 'Installation d’un système d’interphonie et de contrôle d’accès avec badges, paramétrage et sécurisation des points d’entrée.',
      result: 'Un accès mieux maîtrisé, plus sécurisé et plus confortable à gérer au quotidien.',
    },
    {
      title: 'Déploiement d’une infrastructure réseau pour des bureaux', sector: 'Professionnel', icon: '🌐', visual: 'network', photoStyle: 'network-cabling',
      challenge: 'Structurer le réseau informatique et téléphonique d’un site pour améliorer la continuité de service.',
      solution: 'Câblage, organisation des points de connexion, mise en place d’une architecture réseau claire et exploitable.',
      result: 'Une connectivité plus stable et une infrastructure plus propre pour les équipes et les usages métier.',
    },
    {
      title: 'Sécurisation intrusion d’un site d’activité', sector: 'Entreprise', icon: '🛡️', visual: 'intrusion', photoStyle: 'security-night',
      challenge: 'Réduire les risques d’intrusion sur un site nécessitant une protection renforcée des locaux.',
      solution: 'Installation de dispositifs d’alerte intrusion, détection sur zones sensibles et sécurisation des accès.',
      result: 'Un niveau de protection renforcé et une meilleure réactivité en cas d’événement.',
    },
    {
      title: 'Mise à niveau d’un dispositif de sécurité incendie', sector: 'ERP / tertiaire', icon: '🔥', visual: 'fire', photoStyle: 'safety-red',
      challenge: 'Fiabiliser la prévention incendie et améliorer la sécurité des occupants dans le respect des exigences d’exploitation.',
      solution: 'Intégration de composants de sécurité incendie, BAES et éléments de signalisation adaptés au site.',
      result: 'Une meilleure visibilité de l’installation et un environnement plus sécurisé pour les usagers.',
    },
    {
      title: 'Accompagnement sur une installation photovoltaïque', sector: 'Résidentiel / petit tertiaire', icon: '☀️', visual: 'solar', photoStyle: 'solar-roof',
      challenge: 'Étudier une solution d’énergie plus durable et cohérente avec les besoins du site.',
      solution: 'Analyse du besoin, accompagnement technique et mise en place d’une solution photovoltaïque adaptée.',
      result: 'Une réponse orientée performance énergétique et valorisation d’une solution durable.',
    },
  ],
  faqs: [
    { q: 'Quels types de prestations propose ELIPS ?', a: 'ELIPS intervient sur l’électricité générale, le contrôle et la gestion d’accès, les réseaux, l’intrusion, la sécurité incendie et le photovoltaïque.' },
    { q: 'À qui s’adressent vos services ?', a: 'Les prestations ELIPS s’adressent aux particuliers, professionnels et syndics ayant besoin de solutions techniques fiables et sécurisées.' },
    { q: 'Quels types d’interventions réalisez-vous ?', a: 'ELIPS prend en charge la maintenance, le dépannage, la rénovation et l’installation neuve en courant fort comme en courant faible.' },
    { q: 'Les devis sont-ils gratuits ?', a: 'Oui, les demandes de prix et devis peuvent être étudiés gratuitement selon la nature du besoin.' },
  ],
}

const routes = {
  home: '/',
  about: '/a-propos',
  services: '/services',
  projects: '/realisations',
  contact: '/contact',
}

function logoSvg(className) {
  return `<svg class="${className}" viewBox="0 0 420 120" role="img" aria-label="Logo ELIPS" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="elipsBlueStatic" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#45c2ff"></stop>
        <stop offset="100%" stop-color="#0d8fe6"></stop>
      </linearGradient>
    </defs>
    <path d="M28 84 C52 28, 122 18, 214 34 C284 46, 337 34, 391 10 C341 46, 278 78, 202 97 C126 116, 60 112, 28 84 Z" fill="url(#elipsBlueStatic)" opacity="0.96"></path>
    <path d="M349 22 L392 10 L365 41 L370 27 L349 22 Z" fill="url(#elipsBlueStatic)"></path>
    <text x="88" y="64" fill="#0a0a0a" font-family="Georgia, 'Times New Roman', serif" font-size="46" font-weight="700" letter-spacing="1.5">ELIP’S</text>
  </svg>`
}

function navLink(path, label, currentPath) {
  return `<a href="${path}" class="navLink ${currentPath === path ? 'active' : ''}">${label}</a>`
}

function shell(content, currentPath) {
  return `
    <div class="page">
      <header class="siteHeader">
        <div class="container nav navMobileAware">
          <div class="navTopRow">
            <a href="/" class="brandLogoLink">${logoSvg('logoSvg logoHeader')}</a>
            <button type="button" class="menuToggle" aria-label="Ouvrir le menu" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
          <nav class="navLinks">
            ${navLink(routes.home, 'Accueil', currentPath)}
            ${navLink(routes.about, 'À propos', currentPath)}
            ${navLink(routes.services, 'Services', currentPath)}
            ${navLink(routes.projects, 'Réalisations', currentPath)}
            ${navLink(routes.contact, 'Contact', currentPath)}
          </nav>
        </div>
      </header>
      <main>${content}</main>
      <footer class="siteFooter">
        <div class="container footerContent">
          <div class="footerBrandBlock">
            ${logoSvg('logoSvg logoFooter')}
            <p class="muted">Solutions techniques, sécurité, réseaux et énergie.</p>
          </div>
          <a class="btn btnGhost" href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  `
}

function homePage() {
  return `
    <section class="heroSection">
      <div class="heroGlow heroGlowOne"></div>
      <div class="heroGlow heroGlowTwo"></div>
      <div class="container heroGrid">
        <div class="heroContent panel">
          <div class="eyebrow">Énergie, sécurité et infrastructures techniques</div>
          <h1>Des solutions techniques fiables pour sécuriser, équiper et faire évoluer vos installations.</h1>
          <p class="lead">ELIPS accompagne les particuliers, professionnels et syndics avec une approche claire, rigoureuse et polyvalente autour de six domaines d’intervention complémentaires.</p>
          <div class="heroActions">
            <a class="btn btnPrimary" href="/contact">Nous contacter</a>
            <a class="btn btnGhost" href="/services">Découvrir nos services</a>
          </div>
          <div class="heroMeta">
            ${data.values.map((value) => `<span>${value}</span>`).join('')}
          </div>
        </div>
        <aside class="heroPanel panel">
          <div class="panelTop">
            <span class="panelTag">Présentation ELIPS</span>
            <span class="panelDot"></span>
          </div>
          <h3>Une expertise multi-domaines au service de vos installations et de votre sécurité.</h3>
          <p>ELIPS intervient sur des besoins techniques essentiels avec un objectif simple, proposer des solutions fiables, adaptées et efficaces sur le terrain.</p>
          <div class="panelList">
            <div><strong>6 catégories</strong><span>pour couvrir des besoins techniques complémentaires</span></div>
            <div><strong>Nos engagements</strong><span>${data.commitments.join(' · ')}</span></div>
          </div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="sectionIntro narrow">
          <span class="kicker">Notre approche</span>
          <h2>Une présence technique structurée, pensée pour répondre à des besoins réels sur le terrain.</h2>
          <p>ELIPS intervient en maintenance, dépannage, rénovation et installation neuve, en courant fort comme en courant faible, avec une logique de proximité, de lisibilité et d’efficacité.</p>
        </div>
        <div class="cards threeCols">
          ${data.services.slice(0, 3).map((item) => `<article class="card panel"><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}
        </div>
      </div>
    </section>
  `
}

function aboutPage() {
  return `
    <section class="section pageSection">
      <div class="container narrow">
        <div class="sectionIntro">
          <span class="kicker">À propos</span>
          <h1 class="pageTitle">ELIPS, une entreprise tournée vers les solutions techniques, la sécurité et la fiabilité.</h1>
          <p>ELIPS se présente comme un acteur capable d’intervenir sur plusieurs domaines techniques stratégiques, avec une offre structurée autour de l’énergie, des réseaux et de la sécurisation des installations.</p>
          <p>La marque s’appuie sur une approche professionnelle, claire et orientée terrain, afin de proposer des solutions adaptées aux besoins concrets de ses clients.</p>
          <p>Son positionnement repose sur trois fondamentaux, ${data.values.join(', ').toLowerCase()}, ainsi que sur des engagements simples, ${data.commitments.join(', ').toLowerCase()}.</p>
          <div class="infoBlocks">
            <div class="panel infoBlock"><h3>Clients accompagnés</h3><p>${data.clientTypes.join(' · ')}</p></div>
            <div class="panel infoBlock"><h3>Zone d’intervention</h3><p>${data.coverageAreas.join(' · ')}</p></div>
          </div>
        </div>
      </div>
    </section>
  `
}

function servicesPage() {
  return `
    <section class="section pageSection">
      <div class="container">
        <div class="sectionIntro narrow">
          <span class="kicker">Services</span>
          <h1 class="pageTitle">Les 6 catégories d’intervention ELIPS</h1>
          <p>Des prestations complémentaires pour accompagner les besoins en installation, sécurisation, connectivité et énergie.</p>
        </div>
        <div class="cards serviceGrid">
          ${data.services.map((service) => `
            <article class="card panel serviceCard">
              <h3>${service.title}</h3>
              <p>${service.text}</p>
              <ul class="serviceDetails">${service.details.map((detail) => `<li>${detail}</li>`).join('')}</ul>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `
}

function projectsPage() {
  return `
    <section class="section pageSection">
      <div class="container">
        <div class="sectionIntro narrow">
          <span class="kicker">Réalisations</span>
          <h1 class="pageTitle">Des cas d’intervention concrets, mis en scène comme un portfolio chantier premium.</h1>
          <p>ELIPS intervient sur des contextes variés. En attendant l’ajout de références clients documentées, cette page présente des cas typiques qui traduisent le niveau d’exigence, la nature des interventions et les résultats attendus sur le terrain.</p>
        </div>
        <div class="cards threeCols">
          ${data.achievements.map((item) => `<article class="card panel"><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}
        </div>
        <div class="sectionIntro narrow projectsIntroSpacing">
          <span class="kicker">Portfolio chantier</span>
          <h2>Des fiches plus immersives, plus lisibles, plus crédibles</h2>
          <p>Chaque réalisation met en avant un contexte, une réponse technique et un bénéfice concret, dans une présentation plus éditoriale et plus proche d’un portfolio professionnel.</p>
        </div>
        <div class="caseStudyGrid premiumCaseStudyGrid">
          ${data.caseStudies.map((item, index) => `
            <article class="panel caseStudyCard caseStudyCard-${item.visual} caseStudyPhoto-${item.photoStyle} ${index % 3 === 0 ? 'caseStudyCardWide' : ''}">
              <div class="caseStudyVisual">
                <div class="caseStudyTexture"></div>
                <div class="caseStudyIcon">${item.icon}</div>
                <div class="caseStudyOverlay"></div>
                <div class="caseStudyMetaBar">
                  <span class="caseBadge">${item.sector}</span>
                  <span class="caseRef">Cas ${String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div class="caseStudyContent">
                <h3>${item.title}</h3>
                <p class="caseLead">Une intervention conçue pour répondre à un besoin terrain avec une approche claire, fiable et structurée.</p>
                <div class="premiumCaseStudyBody">
                  <div class="caseBlock"><span class="caseBlockLabel">Besoin</span><p>${item.challenge}</p></div>
                  <div class="caseBlock"><span class="caseBlockLabel">Intervention</span><p>${item.solution}</p></div>
                  <div class="caseBlock caseBlockResult"><span class="caseBlockLabel">Résultat</span><p>${item.result}</p></div>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `
}

function contactPage() {
  return `
    <section class="section pageSection">
      <div class="container contactGrid">
        <div>
          <div class="sectionIntro narrow">
            <span class="kicker">Contact</span>
            <h1 class="pageTitle">Parlez-nous de votre besoin</h1>
            <p>Utilisez le formulaire ci-dessous pour prendre contact avec ELIPS. Vous pouvez aussi retrouver l’adresse de l’entreprise et sa localisation directement sur la carte.</p>
          </div>
          <form class="contactForm panel">
            <label><span>Nom</span><input type="text" placeholder="Votre nom" /></label>
            <label><span>Email</span><input type="email" placeholder="votre@email.com" /></label>
            <label><span>Téléphone</span><input type="tel" placeholder="Votre numéro" /></label>
            <label><span>Sujet</span><input type="text" placeholder="Objet de votre demande" /></label>
            <label><span>Message</span><textarea rows="6" placeholder="Décrivez votre besoin"></textarea></label>
            <button type="button" class="btn btnPrimary">Envoyer la demande</button>
          </form>
          <div class="contactInfo panel">
            <h3>Coordonnées</h3>
            <p class="muted"><strong>Adresse :</strong> ${data.company.address}</p>
            <p class="muted"><strong>Téléphone :</strong> ${data.company.phoneDisplay}</p>
            <p class="muted"><strong>Mobile :</strong> ${data.company.mobileDisplay}</p>
            <p class="muted"><strong>Email :</strong> ${data.company.email}</p>
            <p class="muted"><strong>Zone d’intervention :</strong> ${data.coverageAreas.join(', ')}</p>
            <p class="muted"><strong>Devis :</strong> demandes de prix et devis gratuits</p>
          </div>
        </div>
        <aside class="contactAside">
          <div class="panel mapCard">
            <h3>Adresse</h3>
            <p class="muted">${data.company.address}</p>
            <div class="mapEmbed">
              <iframe title="Carte ELIPS" src="https://www.google.com/maps?q=${encodeURIComponent(data.company.mapQuery)}&z=16&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
            </div>
          </div>
          <div class="panel faqCompact">
            <h3>Questions fréquentes</h3>
            <div class="faqList compact">
              ${data.faqs.map((faq) => `<article class="faqItem compactItem"><h4>${faq.q}</h4><p>${faq.a}</p></article>`).join('')}
            </div>
          </div>
        </aside>
      </div>
    </section>
  `
}

function renderRoute(path) {
  if (path === routes.about) return aboutPage()
  if (path === routes.services) return servicesPage()
  if (path === routes.projects) return projectsPage()
  if (path === routes.contact) return contactPage()
  return homePage()
}

function render() {
  const path = window.location.pathname === '/index.html' ? '/' : window.location.pathname
  document.getElementById('app').innerHTML = shell(renderRoute(path), path)

  const toggle = document.querySelector('.menuToggle')
  const nav = document.querySelector('.navLinks')
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open')
      nav.classList.toggle('open')
      toggle.setAttribute('aria-expanded', String(nav.classList.contains('open')))
    })
  }

  document.querySelectorAll('a[href^="/"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href')
      if (!href) return
      event.preventDefault()
      history.pushState({}, '', href)
      render()
    })
  })
}

window.addEventListener('popstate', render)
render()
