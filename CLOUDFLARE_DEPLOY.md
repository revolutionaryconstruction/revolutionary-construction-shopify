# Cloudflare Pages deployment

This repository contains a Shopify Liquid starter theme and an independent static website in `docs/`. **Cloudflare Pages deploys only `docs/`**; Shopify Liquid files are not interpreted by Pages.

## Git integration

1. Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git.
2. Choose GitHub repository `revolutionaryconstruction/revolutionary-construction-shopify`.
3. Production branch: `main`.
4. Framework preset: None. Build command: (empty). Build output directory: `docs`.
5. Deploy and verify the automatic `*.pages.dev` preview, including `/privacy-policy` and `/terms-of-service`.
6. Connect `revolutionaryconstructions.net` only after checking existing Shopify/DNS routing. Do not overwrite active DNS records without planning migration.

## Custom domain

Cloudflare Pages → your project → Custom domains → Set up a custom domain. Check whether `www.revolutionaryconstructions.net` still points to Shopify before making changes.

## Site content

The HTML currently references third-party images (Unsplash) and Google Fonts. Confirm commercial usage rights and replace illustrative photos with verified company work where applicable.

The contact form prepares an SMS but does not submit to a server. Legal pages should be reviewed for actual data practices and terms before relying on them.
