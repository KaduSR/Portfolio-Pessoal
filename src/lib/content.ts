export const siteContent = {
  name: "Kadu Ribeiro",
  role: "Desenvolvedor Full Stack | IA e Automação",
  headline: "Tecnologia, inteligência e experiência para transformar desafios em produtos digitais.",
  description:
    "Desenvolvedor Full Stack focado em IA aplicada, automação e produtos digitais, unindo experiência em telecom, visão de negócio e formação em UX para criar soluções úteis e escaláveis.",
  location: "Brasil",
  email: "kaduribeiro@kadudev.com",
};

export const navLinks = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#contato", label: "Contato" },
];

export const highlights = [
  {
    value: "9+",
    label: "anos em Tecnologia",
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
    title: "Analista de Sistemas Jr. — Telecom Fiber NET",
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
    description:
      "Interface inspirada em streaming para explorar filmes e séries com API do TMDB, busca inteligente e trailer.",
    image: "/images/myflix.png",
    imageAlt: "Tela do projeto MyFlix",
    tech: ["React", "TypeScript", "CSS", "Vite"],
    live: "https://myflix.kadudev.com/",
    github: "https://github.com/KaduSR/Myflix",
    accent: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
  },
  {
    title: "Gerenciador de Prompts",
    description:
      "Ferramenta para criar, salvar e organizar prompts reutilizáveis, tornando fluxos de trabalho apoiados por IA mais rápidos e consistentes.",
    image: "/images/prompts.png",
    imageAlt: "Tela do projeto Gerenciador de Prompts",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://prompts.kadudev.com/",
    github: "https://github.com/KaduSR/Gerenciador-de-Prompts",
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    title: "Fiber NET Telecom",
    description:
      "Otimização de performance em aplicações web (redução de 30% no tempo de carregamento), implementação de CI/CD com GitHub Actions (aumento de 20% na frequência de deploys) e melhoria de UX/UI em 25% para sistemas internos.",
    image: "/images/fibernet.png",
    imageAlt: "Tela do projeto Fiber NET Telecom",
    tech: ["React", "Next.js", "Node.js", "TypeScript", "Firebase"],
    live: "https://fibernettelecom.com/",
    github: "https://github.com/KaduSR/Fiber-NET-Telecom-Web",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    title: "Nexus Flow Tech",
    description:
      "Site institucional desenvolvido para apresentar soluções de automação de processos, integração de sistemas, inteligência artificial e gestão orientada por dados.",
    image: "/images/nexus-flow-tech.png",
    imageAlt: "Tela do site Nexus Flow Tech",
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
