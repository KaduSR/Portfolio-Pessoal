# Prioridade 1 — Portfólio KaduDev: Conversão e Confiança

**Site:** https://kadudev.com/  
**Repo:** https://github.com/KaduSR/Portfolio-Pessoal  
**Data:** 2026-07-27  

## Objetivo

Melhorar o portfólio para passar mais confiança profissional e gerar mais oportunidades de trabalho, freelas, conexões e conversas comerciais.

A prioridade não é mudar todo o visual. O site já tem uma identidade forte. A prioridade é corrigir pontos que podem reduzir credibilidade: links quebrados, CTAs fracos, falta de SEO básico e excesso de projetos sem destaque claro.

---

## Pontos positivos identificados

1. **Identidade visual forte**
   - Fundo escuro, dourado, logo com guitarra e linguagem própria.
   - O site não parece genérico.

2. **Boa base de estrutura**
   - Tem hero, projetos, sobre, stack e contato.
   - A navegação é simples.

3. **Boa variedade técnica**
   - Mostra React, Next.js, TypeScript, Node.js, Tailwind, UX/UI, IA, automação, dashboards e telecom.

4. **Projetos com intenção de mostrar impacto**
   - Os cards têm métricas, stack e descrição do problema resolvido.

5. **Contato visível**
   - Tem e-mail, LinkedIn, GitHub e agendamento.

---

## Pontos negativos / erros encontrados

1. **Links quebrados ou falsos**
   - Vários botões usam `href="#"`.
   - `https://myflix.kadudev.com/` retornou HTTP 402.
   - `https://kadudev.com/projects/isp-monitor/` retornou 404.
   - `https://calendly.com/kaduribeiro/30min` retornou 404.

2. **Projetos demais sem hierarquia**
   - O site mostra 21 projetos, mas não deixa claro quais são os principais.
   - Isso pode cansar o visitante e diluir os melhores cases.

3. **Hero pode vender melhor o perfil profissional**
   - O texto atual tem personalidade, mas poderia explicar melhor o valor: Full Stack, IA, automação, UX/UI e experiência em telecom.

4. **SEO básico incompleto**
   - Falta canonical.
   - Falta OG image.
   - Falta `robots.txt`.
   - Falta `sitemap.xml`.
   - Falta schema `Person`.

5. **Foto de perfil pesada**
   - `assets/images/foto-perfil.jpg` tem cerca de 599 KB e dimensões grandes para o uso visual atual.

6. **Erros de HTML detectados**
   - `html-validate` encontrou 36 problemas.
   - Principais: `button` sem `type`, caracteres `&` e `<` não escapados, roles redundantes e iframe com `width="100%"`.

7. **Erro de digitação**
   - Texto atual: `estro praticando guitarra`.
   - Correto: `estou praticando guitarra`.

---

# Spec em 6 etapas

## Etapa 1 — Corrigir links quebrados e placeholders

### Objetivo
Garantir que todo botão clicável leve para um destino real.

### Arquivo principal
- `index.html`

### Modificações

1. Substituir todos os links `href="#"` por uma das opções:
   - link real do projeto;
   - link específico do repositório;
   - página de case;
   - botão desabilitado com texto `Em breve`.

2. Corrigir ou remover temporariamente:
   - `https://myflix.kadudev.com/`
   - `projects/isp-monitor/`
   - `https://calendly.com/kaduribeiro/30min`

3. Para projetos sem demo real, usar texto claro:
   - `Case em breve`
   - `Código geral`
   - `Ver GitHub`

### Critério de aceite
- Nenhum botão de projeto pode apontar para `#`.
- O link do Calendly não pode retornar 404.
- O link do ISP Monitor não pode retornar 404.
- O link do MyFlix não pode retornar 402.

---

## Etapa 2 — Reorganizar projetos por importância

### Objetivo
Fazer o visitante entender rapidamente quais são os melhores cases.

### Arquivo principal
- `index.html`

### Modificações

1. Criar uma seção no topo dos projetos chamada:

```text
Cases em Destaque
```

2. Destacar 3 projetos principais:
   - Fiber NET Telecom
   - ISP Monitor
   - Assistente IA ou Landing Kit

3. Depois criar uma seção menor:

```text
Outros Projetos
```

4. Reduzir o peso visual dos projetos secundários.

### Critério de aceite
- Os 3 projetos principais aparecem antes do grid completo.
- Cada projeto destaque explica:
  - problema;
  - solução;
  - stack;
  - resultado;
  - link real.

---

## Etapa 3 — Melhorar o texto do hero

### Objetivo
Comunicar melhor quem é o Kadu e qual valor ele entrega.

### Arquivo principal
- `index.html`

### Texto sugerido para o hero

```text
Tech Lead Full Stack focado em IA, automação e produtos digitais.
```

### Subtexto sugerido

```text
Sou Kadu Ribeiro. Crio aplicações web, dashboards, integrações e interfaces com React, Next.js, TypeScript, Node.js e UX/UI — unindo engenharia, design e visão de negócio para resolver problemas reais.
```

### CTAs sugeridos

```text
Ver cases principais
Falar comigo
Baixar CV
```

### Critério de aceite
- O hero deve deixar claro:
  - quem é Kadu;
  - o que ele faz;
  - quais tecnologias usa;
  - qual problema resolve;
  - como entrar em contato.

---

## Etapa 4 — Criar seção “Como posso ajudar”

### Objetivo
Transformar o portfólio em uma página mais comercial e menos apenas expositiva.

### Arquivo principal
- `index.html`

### Nova seção sugerida

```text
Como posso ajudar
```

### Cards sugeridos

1. **Desenvolvimento Full Stack**
   - React, Next.js, TypeScript, Node.js, APIs e sistemas web.

2. **IA e Automação**
   - Agentes, integrações, automações internas e fluxos inteligentes.

3. **Dashboards e Dados**
   - Métricas, painéis operacionais, dados e visualização para decisão.

4. **UX/UI e Design de Produto**
   - Interfaces modernas, protótipos, design systems e melhoria de experiência.

### Critério de aceite
- A seção deve aparecer antes do contato.
- O visitante deve entender em poucos segundos quais tipos de trabalho pode contratar ou conversar com Kadu.

---

## Etapa 5 — Corrigir SEO básico

### Objetivo
Melhorar indexação no Google e aparência ao compartilhar o site.

### Arquivos
- `index.html`
- `robots.txt`
- `sitemap.xml`

### Modificações no `index.html`

Adicionar no `<head>`:

```html
<link rel="canonical" href="https://kadudev.com/">
<meta property="og:image" content="https://kadudev.com/assets/images/og-kadudev.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://kadudev.com/assets/images/og-kadudev.jpg">
```

Adicionar schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kadu Ribeiro",
  "url": "https://kadudev.com/",
  "jobTitle": "Tech Lead Full Stack Developer",
  "sameAs": [
    "https://github.com/KaduSR",
    "https://www.linkedin.com/in/kaduesr/"
  ],
  "knowsAbout": [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "UX/UI Design",
    "Artificial Intelligence",
    "Automation"
  ]
}
</script>
```

Criar `robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://kadudev.com/sitemap.xml
```

Criar `sitemap.xml`:

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kadudev.com/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Critério de aceite
- `https://kadudev.com/robots.txt` deve retornar 200.
- `https://kadudev.com/sitemap.xml` deve retornar 200.
- A home deve ter canonical, OG image e schema `Person`.

---

## Etapa 6 — Corrigir detalhes técnicos e conteúdo

### Objetivo
Melhorar qualidade técnica e acabamento profissional.

### Arquivos
- `index.html`
- `assets/images/foto-perfil.jpg`
- opcional: `assets/images/foto-perfil.webp`
- opcional: `assets/css/style.css`

### Modificações

1. Corrigir digitação:

```text
estro -> estou
```

2. Padronizar contagem:

```text
20 projetos -> 21 projetos
```

Ou trocar para:

```text
Projetos, cases e experimentos práticos
```

3. Corrigir botão mobile:

```html
<button type="button" class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">
```

4. Escapar caracteres no HTML:

```html
& -> &amp;
< -> &lt;
```

5. Otimizar foto:
   - converter para WebP;
   - reduzir para 700x700 ou 800x800;
   - tentar manter abaixo de 150 KB.

6. Ajustar iframe do Spotify:
   - remover `style="border-radius: 12px"`;
   - remover `width="100%"`;
   - controlar por CSS.

### Critério de aceite
- `html-validate` deve ter menos erros do que os 36 atuais.
- A foto otimizada deve carregar corretamente.
- O texto do “Sobre” não deve ter erro de digitação.

---

## Ordem recomendada de execução

1. **Links quebrados e placeholders**
2. **Correções rápidas de texto e HTML**
3. **Hero novo**
4. **Cases em destaque**
5. **Seção “Como posso ajudar”**
6. **SEO e otimização de imagem**

---

## Resultado esperado

Depois dessas mudanças, o portfólio deve passar a mensagem:

```text
Kadu Ribeiro é um Tech Lead Full Stack com visão de produto, experiência real em telecom, capacidade de criar sistemas web, automações, IA, dashboards e interfaces profissionais.
```

O objetivo é o visitante sair do site pensando:

```text
Esse profissional sabe construir produto de verdade e eu consigo falar com ele agora.
```
