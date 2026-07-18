# Landing Page — Tatielly Pereira · Automação Comercial e Residencial

Landing page interativa construída com **Next.js** (App Router) e **CSS próprio** (sem frameworks de CSS), seguindo a identidade visual dos materiais em `ref/` — navy profundo + dourado.

## Destaques interativos

- **Casa inteligente no hero** — passe o mouse ou toque nas janelas: os "sensores" acendem as luzes; clique para deixá-las acesas. Interruptor "Modo chegada" acende tudo.
- **Painel de demonstração** — liga/desliga iluminação do jardim, cascata da piscina (água animada), portão deslizante e câmera de segurança, com a cena reagindo em tempo real.
- **Luzes de seção** — cada seção "acende" (lâmpada do eyebrow + revelação) conforme a página rola.
- Acessível: controles com foco visível, `role="switch"`, e `prefers-reduced-motion` respeitado.

## Rodar

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de produção (estático)
```

## Estrutura

- `app/` — layout (fontes Montserrat + Great Vibes), página e `globals.css` com todos os tokens/estilos
- `components/` — Hero (casa SVG interativa), SmartPanel (cena do quintal), Pillars, Services, Process, Contact, Nav
- `components/contactInfo.js` — telefone/WhatsApp, Instagram e e-mail centralizados
- `ref/` — referências de design (flyers)
