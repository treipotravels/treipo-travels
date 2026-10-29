# Treipo Travels

Static HTML, CSS and JavaScript website, hosted using the existing public GitHub Pages repository. No build, paid dependency, backend or subscription is needed.

Site: https://treipotravels.github.io/treipo-travels/

## Activate booking contact

Edit **assets/config.js**, set `phone` to the confirmed business number in international format (digits only, country code included). Commit to main. Phone buttons then use `tel:+NUMBER` and WhatsApp links use `https://wa.me/NUMBER?text=...`. Until then these buttons point to a clear contact-status notice. The user subsequently supplied a brand guide showing 9878711912. It is configured as 919878711912. Address is also taken from that guide. The advertised treipotravels.com domain has not been connected or used as a canonical URL.

The enquiry form validates the fields and prepares a reviewable message. It neither sends nor stores enquiries. With a configured number, Continue on WhatsApp opens the message for the visitor to send themselves. Without one, the message can be copied. The form needs JavaScript. Test the configured number on a real phone and in WhatsApp before advertising bookings.

## Deploy for zero hosting cost

Repository Settings → Pages → Build and deployment: Deploy from a branch → main → / (root) → Save. Existing branch-based deployment is reused. Each main commit triggers Pages; see Actions → pages build and deployment. No custom domain is required. Index and all four HTML pages live at the repository root. Assets use relative paths so the project-site /treipo-travels/ prefix is preserved. `.nojekyll` requests plain static serving.

## Previous styling failure

Published HTML requested assets/style.css and assets/script.js, both returned 404. The files existed at /style.css and /script.js instead. Correct files are now at the requested assets/ paths. Old root files remain as compatibility shims. Old canonical, sitemap and structured data URLs pointed at a different hostname; corrected to the actual project URL. No unrelated files were deleted.

## Photos

Manufacturer model reference images are local optimized WebP files; they are not photos of Treipo's actual rental fleet. They must not imply a particular variant, seat layout or modified interior. Replace with your own fleet photos when available; keep accurate alt text and captions. Source and copyright remain with their respective manufacturers:

- Urbania: https://www.forcemotors.com/wp-content/uploads/2026/07/Urbania-home-2026.png
- Traveller: https://www.forcemotors.com/wp-content/uploads/2025/02/Traveller-3700WB-12D17D-Banner_Menu_1.webp
- Innova Crysta: https://static3.toyotabharat.com/images/showroom/innova-mmc/super-white-color-1600x600.webp

## Marketing setup later

Reserved empty fields are in assets/config.js. They are documentation points; adding a value alone does not install a tracker. No tracking IDs or analytics requests are currently enabled.

- Search Console: create a URL-prefix property for the exact site URL; place the supplied verification meta tag in every page head (or upload the exact verification file), then submit sitemap.xml. Publishing does not guarantee indexing. A project-level robots.txt cannot control the hostname root; this sitemap remains directly submit-able.
- GA4: obtain a real measurement ID, decide on visitor consent/privacy handling and install the official snippet on each page. Track a WhatsApp or phone click as an enquiry action, not a confirmed booking.
- Google Tag Manager: use the actual container ID and official head/body snippets. Avoid installing duplicate GA4 tracking through both GTM and direct snippets.
- Google Ads: use your conversion ID and label. Configure and test conversion events after defining what counts as a conversion. A message preview or click is not proof an enquiry was sent.
- Meta Pixel: use your actual pixel ID and official snippet only after deciding privacy and consent handling. Test events in the provider's tools.
- Google Business Profile: verify your real business information and eligibility in Google's own process, then add the confirmed profile URL and business details. Do not invent an address or opening hours.

Before enabling trackers, update the privacy text on contact.html to describe the actual behavior and any needed controls. When changing domain, update all canonical URLs, Open Graph URLs, structured data, sitemap and robots.txt together.

## Content still to confirm

Actual fleet photos, seat layouts, amenities, prices and booking/cancellation terms remain to be confirmed. Phone and address were supplied in the user’s brand guide. No reviews, ratings, licences, opening hours or promises of guaranteed availability have been invented.

## Brand redesign

Navy #061d42, red #ef0529, white and sky blue follow the user-supplied Treipo brand guide. The responsive SVG wordmark is a code-based recreation. Homepage mountain/vehicle artwork is an AI adaptation of the supplied promotional reference and is labelled as promotional artwork, not an actual fleet photograph. Generated using the built-in ImageGen tool.

Hero prompt: Preserve the mountain-road scene and three vehicle types from the supplied brand artwork; remove all poster typography, icons, frames, business information and vehicle lettering; leave bright sky space at left for HTML headings.

The site URL remains the verified GitHub Pages project address. A future custom domain needs separate ownership and DNS configuration.
