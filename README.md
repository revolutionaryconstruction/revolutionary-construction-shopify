# Revolutionary Construction — Shopify Homepage Theme

Source code for the Revolutionary Construction LLC expanded Shopify homepage theme.

## What's included

- Four-slide homepage hero (two hosted videos, two hosted images)
- Services and customer option cards
- Project gallery, testimonials, and construction process sections
- Booking/contact section
- Responsive CSS and lightweight JavaScript

## Theme structure

- `layout/theme.liquid` — Shopify theme shell
- `templates/index.json` — homepage section order
- `sections/` — customizable homepage sections
- `assets/` — theme stylesheet and JavaScript
- `config/` — theme settings

## Logo asset

The original supplied project ZIP includes `assets/revolutionary-logo.png`. This binary logo is **not yet in this GitHub repository**; upload it separately at that path to ensure the default logo renders. Alternatively, select a custom logo in the Shopify theme editor.

## Upload to Shopify

1. Compress the **contents** of the complete project folder into a ZIP, keeping `assets/`, `config/`, `layout/`, `sections/`, and `templates/` at the ZIP root.
2. In Shopify Admin, open **Online Store → Themes → Add theme → Upload zip file** (wording may vary).
3. Preview the uploaded theme before publishing. In Customize, replace sample imagery/video URLs and edit copy, contact information, and other settings.

**Important:** This is a homepage-focused starter theme, not a complete storefront. Additional templates for product, collection, cart, search, and other pages may be needed. It has not been verified against a live Shopify store.

## GitHub

Repository: https://github.com/revolutionaryconstruction/revolutionary-construction-shopify

```bash
git clone https://github.com/revolutionaryconstruction/revolutionary-construction-shopify.git
```

## Notes

Some default image and video URLs point to external services and can stop working; replace them with owned content. No Shopify credentials or store-specific secrets are included in the archive.
