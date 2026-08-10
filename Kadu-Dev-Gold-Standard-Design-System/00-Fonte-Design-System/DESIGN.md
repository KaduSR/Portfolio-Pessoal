---
name: Gold Standard Engineering
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#16161a'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d4d4d8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9c8f7a'
  outline-variant: '#4f4634'
  surface-tint: '#f6be3b'
  primary: '#ffe1aa'
  on-primary: '#402d00'
  primary-container: '#daa520'
  on-primary-container: '#6d4f00'
  inverse-primary: '#7a5900'
  secondary: '#c8c5cd'
  on-secondary: '#303036'
  secondary-container: '#47464d'
  on-secondary-container: '#b7b4bc'
  tertiary: '#d8e6ff'
  on-tertiary: '#01315c'
  tertiary-container: '#a8cbff'
  on-tertiary-container: '#315583'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea1'
  primary-fixed-dim: '#f6be3b'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5c4200'
  secondary-fixed: '#e4e1e9'
  secondary-fixed-dim: '#c8c5cd'
  on-secondary-fixed: '#1b1b21'
  on-secondary-fixed-variant: '#47464d'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a6c9fc'
  on-tertiary-fixed: '#001c39'
  on-tertiary-fixed-variant: '#224874'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#3a342a'
  primary-bright: '#c4941d'
typography:
  headline-xl:
    fontFamily: Archivo Narrow
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  2xl: 3rem
  3xl: 5rem
---

## Brand & Style
The brand identity is rooted in **technical precision** and **premium craftsmanship**. It targets a high-end developer and corporate audience, evoking a sense of reliability and architectural excellence. 

The visual style is a sophisticated blend of **Minimalism** and **Glassmorphism**, set against a deep, OLED-inspired background. The interface uses a "Golden Flow" aesthetic—a combination of sharp typography, high-contrast metallic accents, and a subtle noise texture that gives the digital interface a tactile, cinematic quality. Interaction is marked by precision, with micro-transitions and backdrop blurs that suggest depth without using traditional heavy shadows.

## Colors
The palette is dominated by a deep, neutral "OLED Black" (#0f0f0f) to maximize contrast and focus. The **Primary** color is a warm, metallic gold (#f9c03d), used sparingly for high-impact calls to action and technical highlights. 

**Secondary** tones are muted greys and silvers, used for body text and supporting information to maintain a clean hierarchy. **Tertiary** accents provide a cool counterpoint in specific technical contexts (e.g., tags or code blocks). The interface utilizes a high-contrast ratio for accessibility while maintaining a "dimmed" aesthetic for professional use-cases.

## Typography
The system uses a tri-font strategy to differentiate content intent:
- **Headlines (Archivo Narrow):** A condensed, impactful sans-serif for high-level structure and major titles.
- **Body (Space Grotesk):** A geometric sans-serif with technical quirks, ensuring legibility and a modern feel for descriptions and long-form text.
- **Labels & Data (JetBrains Mono):** A monospaced font used for navigation, tags, and technical metrics, reinforcing the "engineering" brand pillar.

Vertical rhythm is strictly maintained with defined line heights, and large headlines use negative letter-spacing for a more editorial, tight appearance.

## Layout & Spacing
The system employs a **Fixed Grid** approach for large displays, centered at a maximum width of 1200px. 

**Desktop (1024px+):** 12-column grid with `lg` (24px) gutters and `xl` (32px) margins.
**Mobile (< 768px):** Single column layout with `md` (16px) margins.

Spacing follows a geometric progression. A 16px (`md`) base unit is used for standard gaps, while `3xl` (80px) is reserved for major section transitions to ensure significant whitespace and visual breathing room.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows. 

The primary surface is the background (#0f0f0f). Above this, cards and navigation bars use `surface-container-low` with a 90% opacity and a `backdrop-blur-md` (blur-sm or md). Borders are used as "ghost outlines"—1px thick, using `surface-container` or `primary/20` to define boundaries without adding visual weight. 

A global **Noise Texture** (3% opacity) is applied to the top layer to unify all surfaces and prevent banding on deep dark gradients.

## Shapes
The shape language is "Soft-Mechanical." Standard UI elements like buttons and input fields use a `0.125rem` radius for a sharp, precise look. Container elements (Cards, Bento items) use more generous rounding:
- **Small (Buttons/Tags):** 2px (Sharp)
- **Medium (Cards/Bento):** 8px (`rounded-lg`)
- **Large (Sections/Modals):** 12px (`rounded-xl`)
- **Full:** Reserved for active navigation indicators or specific decorative icons.

## Components
- **Buttons:** 
  - *Primary:* Solid `primary` background with `on-primary` (dark) text. Rectangular with minimal rounding.
  - *Secondary:* `surface-container` background with a 1px border. Uses `backdrop-blur`.
- **Cards (Bento Grid):** Semi-transparent surfaces with thin borders. Hover states should trigger a border color change to `primary/50`.
- **Tags/Chips:** Monospaced text in `label-sm`. Uses `primary/10` background and 1px borders for high-tech categorization.
- **Navigation:**
  - *Desktop:* Fixed top bar with backdrop blur and a bottom-border indicator for active links.
  - *Mobile:* Bottom navigation bar with an active pill-shaped background for the current item.
- **Inputs:** Dark backgrounds with subtle `outline-variant` borders. Focus state should use a `primary` border glow.
- **Decorative Elements:** Use thin, 1px lines and wireframe-style geometry (rotating squares/borders) at low opacity (20%) to fill whitespace with "technical" artifacts.