# Plasmo Extension Template README

This template is for creating browser extensions with Plasmo, supporting Tailwind CSS, Radix UI, and Shadcn UI for content script development.

## Quick Start

1. **Set up development environment**:
    - Run `pnpm dev` or `npm run dev`.
    - Open `build/chrome-mv3-dev` in the browser.

2. **Develop your extension**:
    - Modify `popup.tsx` for popup changes.
    - Add `options.tsx` for options UI.
    - Create `content.ts` for content scripts.

## Build and Deploy

- Build your extension with `pnpm build` or `npm run build`.
- Deploy using [bpp GitHub action](https://bpp.browser.market) following the [Plasmo submission guide](https://docs.plasmo.com/framework/workflows/submit).

## Resources

- Plasmo: [docs.plasmo.com](https://docs.plasmo.com/)
- Tailwind CSS: [tailwindui.com/documentation](https://tailwindui.com/documentation)
- Radix UI: [www.radix-ui.com](https://www.radix-ui.com/primitives/docs/overview/introduction)
- Shadcn UI: [ui.shadcn.com](https://ui.shadcn.com/)

This template accelerates development with built-in support for popular UI frameworks, simplifying the process of creating and deploying browser extensions.