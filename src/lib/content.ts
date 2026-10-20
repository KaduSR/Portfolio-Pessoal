export const siteContent = {
  name: "Kadu Ribeiro",
  role: "AI Engineer | AI Integration | Full Stack Development",
  headline: "Construo software útil conectando engenharia, inteligência artificial e negócio.",
  description:
    "Profissional de software com experiência em desenvolvimento Full Stack, integração de APIs, automação e IA aplicada. Combino engenharia de software, experiência operacional em telecomunicações e visão de negócio para transformar problemas reais em soluções digitais.",
  location: "Brasil",
  email: "kaduribeiro@kadudev.com",
};

export const navLinks = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#certificacoes", label: "Formação" },
  { href: "/#contato", label: "Contato" },
];

export const highlights = [
  {
    value: "10+",
    label: "anos em tecnologia e operações",
  },
  {
    value: "Full Stack",
    label: "web e integrações",
  },
  {
    value: "IA + UX",
    label: "foco em evolução",
  },
];

export const hardSkills = [
  { name: "React", category: "Frontend", description: "Interfaces componentizadas e experiências interativas" },
  { name: "Next.js", category: "Frontend", description: "App Router, renderização e exportação estática" },
  { name: "TypeScript", category: "Frontend", description: "Aplicações tipadas, previsíveis e escaláveis" },
  { name: "Tailwind CSS", category: "Frontend", description: "Interfaces responsivas e sistemas visuais consistentes" },
  { name: "Node.js", category: "Backend", description: "APIs, automações e integração de serviços" },
  { name: "APIs REST", category: "Backend", description: "Consumo e integração entre plataformas" },
  { name: "Firebase", category: "Backend", description: "Autenticação, dados e serviços gerenciados" },
  { name: "Automação", category: "Backend", description: "Otimização de processos e fluxos operacionais" },
  { name: "Git e GitHub", category: "Engenharia", description: "Versionamento e colaboração no desenvolvimento" },
  { name: "GitHub Actions", category: "Engenharia", description: "Integração, entrega e publicação contínuas" },
  { name: "Docker", category: "Engenharia", description: "Ambientes reproduzíveis e containerização" },
  { name: "Figma e UX/UI", category: "Produto", description: "Pesquisa, prototipação e design centrado nas pessoas" },
  { name: "Design Systems", category: "Produto", description: "Componentes, padrões visuais e consistência de produto" },
  { name: "Telecom e redes", category: "Domínio", description: "Operações, suporte técnico e fibra óptica" },
];

export const softSkills = [
  {
    name: "Resolução de problemas",
    description: "Investigo causas, conecto contexto técnico e operacional e proponho soluções viáveis.",
  },
  {
    name: "Comunicação técnica",
    description: "Traduzo decisões e necessidades entre equipes, negócio e pessoas usuárias.",
  },
  {
    name: "Liderança e colaboração",
    description: "Alinho prioridades, compartilho conhecimento e contribuo para entregas em equipe.",
  },
  {
    name: "Visão de negócio",
    description: "Avalio impacto, eficiência e valor antes de transformar demandas em produto.",
  },
  {
    name: "Pensamento crítico",
    description: "Questiono premissas, comparo alternativas e tomo decisões com base em evidências.",
  },
  {
    name: "Aprendizado contínuo",
    description: "Evoluo práticas de engenharia, automação, IA e experiência do usuário.",
  },
];

export const journey = [
  {
    title: "UX Design — UX Unicórnio",
    period: "Cursando",
    description:
      "Formação prática em pesquisa, estratégia, experiência do usuário, prototipação e construção de produtos digitais centrados nas pessoas.",
  },
  {
    title: "Engenharia de Software — Anhanguera",
    period: "Fev/2024 — Jun/2027 (Cursando)",
    description:
      "Bacharelado com foco em desenvolvimento de software, arquitetura de sistemas e qualidade de produtos digitais.",
  },
  {
    title: "Administração — Estácio",
    period: "Jan/2021 — Out/2024",
    description:
      "Bacharelado concluído, fortalecendo visão de negócio, gestão, estratégia e tomada de decisão.",
  },
  {
    title: "Tech Lead — Nexus Flow Tech",
    period: "Mai/2026 — Atualmente",
    description:
      "Liderança técnica de produtos digitais, conectando desenvolvimento Full Stack, IA, automação e decisões de arquitetura.",
  },
  {
    title: "Desenvolvimento de Sistemas — Telecom Fiber NET",
    period: "Dez/2024 — Atualmente",
    description:
      "Desenvolvimento Full Stack, integração de serviços, automação de processos, performance e evolução da experiência do usuário.",
  },
  {
    title: "Consultor em Tecnologia — Telecom Fiber NET",
    period: "Ago/2020 — Dez/2024",
    description:
      "Consultoria técnica, desenvolvimento de soluções digitais e transformação de necessidades operacionais em produtos e processos mais eficientes.",
  },
  {
    title: "Técnico em Telecomunicações — Telecom Fiber NET",
    period: "Nov/2015 — Ago/2020",
    description:
      "Atuação em implantação e manutenção de redes de fibra óptica, suporte técnico e treinamento de equipes.",
  },
];

export const projects = [
  {
    title: "MyFlix",
    category: "Frontend",
    year: "2025",
    summary: "Catálogo de filmes e séries com dados reais",
    description:
      "Interface inspirada em streaming para explorar títulos populares, pesquisar conteúdos e consultar trailers usando a API do TMDB.",
    image: "/images/myflix.webp",
    imageAlt: "Tela do MyFlix exibindo catálogos de filmes e séries",
    tech: ["React", "TypeScript", "CSS", "Vite"],
    github: "https://github.com/KaduSR/Myflix",
    accent: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
  },
  {
    title: "Gerenciador de Prompts",
    category: "Ferramenta",
    year: "2025",
    summary: "Organização de prompts reutilizáveis",
    description:
      "Ferramenta para criar, salvar e organizar prompts, reduzindo a repetição em fluxos de trabalho apoiados por inteligência artificial.",
    image: "/images/prompts.png",
    imageAlt: "Tela do Gerenciador de Prompts com prompts organizados",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/KaduSR/Gerenciador-de-Prompts",
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    title: "Fiber NET Telecom",
    category: "Full Stack",
    year: "2025",
    summary: "Presença digital para uma operação de telecom",
    description:
      "Aplicação web para apresentar serviços, planos e canais de atendimento da Fiber NET Telecom em uma experiência responsiva.",
    image: "/images/fibernet.png",
    imageAlt: "Tela do site Fiber NET Telecom",
    tech: ["React", "Next.js", "Node.js", "TypeScript", "Firebase"],
    live: "https://fibernettelecom.com/",
    github: "https://github.com/KaduSR/Fiber-NET-Telecom-Web",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    title: "Nexus Flow Tech",
    category: "Site institucional",
    year: "2026",
    summary: "Tecnologia e automação apresentadas com clareza",
    description:
      "Site institucional desenvolvido para apresentar soluções de automação de processos, integração de sistemas, inteligência artificial e gestão orientada por dados.",
    image: "/images/nexus-flow-tech.png",
    imageAlt: "Tela do site institucional Nexus Flow Tech",
    tech: ["Site institucional", "Automação", "IA", "Integrações"],
    live: "https://nexusflowtech.com.br/",
    ctaLabel: "Site",
    accent: "from-violet-500/20 via-cyan-500/10 to-transparent",
  },
];

export const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kaduesr/",
  },
  {
    label: "GitHub",
    href: "https://github.com/KaduSR",
  },
  {
    label: "Email",
    href: "mailto:kaduribeiro@kadudev.com",
  },
];


export const certifications = [
  {
    title: "MBA em Inteligência Artificial e Gestão de Pessoas",
    issuer: "Faculdade Bookplay",
    workload: "480 horas",
    type: "Pós-graduação",
    category: "IA",
  },
  {
    title: "MBA em Web Design",
    issuer: "Faculdade Bookplay",
    workload: "560 horas",
    type: "Pós-graduação",
    category: "Design & Produto",
  },
  {
    title: "Pós-graduação em Gestão Empresarial",
    issuer: "Faculdade Bookplay",
    workload: "360 horas",
    type: "Pós-graduação",
    category: "Negócios",
  },
  {
    title: "Java e IA para Iniciantes com a NTT DATA",
    issuer: "DIO / NTT DATA",
    workload: "1 hora",
    type: "Curso",
    category: "IA & Desenvolvimento",
  },
  {
    title: "Fundamentos de Engenharia de Dados",
    issuer: "LinkedIn Learning",
    workload: "1h 5min",
    type: "Curso",
    category: "Dados",
  },
  {
    title: "Introdução à Inteligência Artificial",
    issuer: "LinkedIn Learning",
    workload: "1h 42min",
    type: "Curso",
    category: "IA",
  },
  {
    title: "Fundamentos de React",
    issuer: "LinkedIn Learning",
    workload: "2h 38min",
    type: "Curso",
    category: "Frontend",
  },
  {
    title: "Fundamentos de HTTP para Desenvolvedores",
    issuer: "LinkedIn Learning",
    workload: "1h 38min",
    type: "Curso",
    category: "Backend & APIs",
  },
  {
    title: "Full Stack Weekend — SaaS do zero ao deploy",
    issuer: "Full Stack Weekend",
    workload: "12 horas",
    type: "Workshop",
    category: "Full Stack",
  },
  {
    title: "Discover",
    issuer: "Rocketseat",
    workload: "12 horas",
    type: "Formação",
    category: "Desenvolvimento Web",
  },
  {
    title: "Java Essencial e Desenvolvimento Colaborativo com Git",
    issuer: "DIO",
    workload: "9 horas",
    type: "Curso",
    category: "Java & Engenharia",
  },
  {
    title: "Versionamento de Código com Git e GitHub",
    issuer: "DIO",
    workload: "2 horas",
    type: "Curso",
    category: "Engenharia",
  },
];
