# Nozoluxe Prompts Bundle

## 1) Master Build Prompt – للموقع كامل
انسخ هذا البرومبت إلى Cursor / Claude Code / GPT Coding:

```text
Build a premium Arabic-first RTL travel booking website called Nozoluxe.

Context:
- Market: Saudi / GCC travelers booking curated luxury hotels and resorts in Turkey.
- Positioning: nature-first, curated, Arabic-assisted booking, flexible payment, not a generic OTA.
- Public catalog must show only properties where cohort === "launch" from the provided seed file.
- Backend should ingest all 70 seed properties.
- The site must feel editorial, calm, premium, and not cluttered.

Tech:
- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma + PostgreSQL (or a clean mock data repository if DB is not configured yet)
- Arabic-first RTL layout
- Mobile-first
- SEO-ready metadata

Data:
Use the provided JSON seed file. Create typed models and repository helpers.

Pages to build:
1. Home page
2. Destinations index
3. Destination detail pages
4. Collections pages
5. Hotel detail page
6. Offers page
7. About page
8. Contact page
9. FAQ page
10. Admin placeholder pages for properties and inquiries

Home page requirements:
- Large premium hero with calm nature/coast visual mood
- Arabic headline about curated Turkish nature and luxury
- Search/request block with destination, dates, guests, trip type
- Trust strip under hero
- Destination cards section
- Collection cards section
- Featured hotels section (6 to 9 cards)
- How booking works section
- Why Nozoluxe section
- FAQ snippet
- WhatsApp floating CTA

Destination index:
- Filter by nature type, family fit, privacy, beach, thermal, mountain, lake, wellness
- Show curated destinations, not a dense directory

Hotel detail requirements:
- Hero gallery
- Name, destination, 3 to 5 badges
- “Why we chose it” block in Arabic
- “Who it suits” block in Arabic
- Saudi/GCC fit callout
- Highlights grid
- Room/accommodation section
- Dining section
- Wellness/spa section
- Location/access section
- Sticky inquiry card on desktop
- Sticky inquiry bar on mobile
- Inquiry form modal or inline card
- Related hotels section

Filters:
- destination
- trip type
- family / honeymoon
- lake / mountain / forest / beach / thermal
- private pool / villa / private beach / private bay
- spa / kids / all inclusive
- adults only

Design language:
- minimal, premium, high whitespace
- strong typography
- avoid OTA dashboard look
- cards should be simple and elegant
- use badges sparingly
- allow big imagery and emotional storytelling

Color palette suggestion:
- deep emerald / dark olive
- warm sand / off-white
- muted gold accents
- soft charcoal text

Components:
- Header, Footer, HeroSearch, TrustBar, DestinationCard, CollectionCard, HotelCard, HotelBadgeRow, HotelGallery, HighlightsGrid, RoomAccordion, InquiryCard, WhatsAppFloat, FilterSidebar, MobileFilterDrawer

Content rules:
- Arabic copy should focus on fit for GCC travelers, not generic translated hotel copy.
- Start every hotel page with why it matters to a Saudi traveler.
- Mention family fit, privacy, nature angle, wellness angle, and trip style.
- Avoid long marketing fluff.

Booking flow in MVP:
- This is request-to-confirm, not instant booking.
- User submits dates + guests + notes
- Save inquiry in DB
- Trigger email payload and WhatsApp-friendly summary
- Show thank-you state

Data modeling:
- properties
- property_media
- property_rooms
- inquiries
- offers
- suppliers

Implementation details:
- create seed import script
- create data mappers for tags and scores
- create static route generation for hotels and destinations
- implement metadata generation for SEO
- include JSON-LD for Hotel / LodgingBusiness where suitable
- create reusable Arabic copy blocks from the seed fields

Do not build:
- instant booking engine
- payments integration yet
- loyalty program
- review system
- generic destination blog clutter

Output:
- Full project scaffold
- Clean component structure
- Accessible RTL UI
- Seed import utility
- Example hotel pages from launch cohort
```

## 2) UI Prompt – للـ v0 / Figma / مولد واجهات
```text
Design a premium Arabic RTL website homepage for Nozoluxe, a curated Turkish luxury hotel and resort booking brand for Saudi/GCC travelers.

Mood:
- editorial luxury
- nature-first
- calm, premium, clean
- not like a crowded booking marketplace

Visual priorities:
- large nature or secluded coast hero
- elegant Arabic typography
- trust strip
- curated destination cards
- curated collection cards
- featured hotel cards with restrained badges
- how-booking-works section
- strong WhatsApp and request booking CTA

Color direction:
- deep emerald / dark olive
- warm off-white / sand
- subtle muted gold
- charcoal text

Required sections:
1. Header
2. Hero with search/request form
3. Trust strip
4. Favorite destinations section
5. Collections section
6. Featured hotels section
7. Why Nozoluxe section
8. Booking steps section
9. FAQ snippet
10. Footer

Arabic copy tone:
- clear
- premium
- helpful
- not verbose

Important:
- Keep spacing generous
- Use large imagery
- No dashboard feel
- Cards should look curated, not inventory-heavy
```

## 3) Official Site Extraction Prompt – لاستخراج بيانات الفندق
```text
You are extracting structured hotel data from the official website of a Turkish hotel/resort for Nozoluxe.

Rules:
- Use only the official website content provided.
- Do not hallucinate unavailable facts.
- If something is missing, return null.
- Output JSON only.
- Preserve exact source URLs for every extracted image or offer snippet.
- Separate raw facts from Arabic marketing copy.
- Mark whether the hotel seems family-friendly, honeymoon-friendly, privacy-oriented, wellness-oriented, or nature-first.

Input:
- Hotel name: {{name}}
- Official URL: {{official_url}}
- Destination: {{destination}}
- Cluster: {{cluster}}
- Crawl hints: {{crawl_hints}}

Output schema:
{
  "identity": {
    "name": "",
    "destination": "",
    "official_url": "",
    "brand_or_operator": null,
    "hotel_type": null
  },
  "fit": {
    "family": true,
    "honeymoon": false,
    "privacy": false,
    "wellness": true,
    "nature": true,
    "adults_only": false,
    "saudi_fit_notes": []
  },
  "highlights": [],
  "accommodation": [
    {
      "name": "",
      "summary": null,
      "private_pool": false,
      "villa": false,
      "family_fit": null,
      "source_url": ""
    }
  ],
  "dining": [
    {
      "name": "",
      "type": null,
      "source_url": ""
    }
  ],
  "wellness": {
    "spa": null,
    "thermal": null,
    "activities": [],
    "source_url": ""
  },
  "amenities": [],
  "offers": [
    {
      "title": "",
      "summary": null,
      "validity": null,
      "source_url": ""
    }
  ],
  "media": [
    {
      "kind": "hero|gallery|room|dining|spa",
      "image_url": "",
      "source_page": "",
      "alt": null
    }
  ],
  "location": {
    "notes": null,
    "airport_access": null,
    "source_url": ""
  },
  "policies": {
    "check_in": null,
    "check_out": null,
    "cancellation": null,
    "source_url": ""
  },
  "raw_notes": []
}
```

## 4) Arabic Hotel Page Copy Prompt
```text
Write premium Arabic copy for a Nozoluxe hotel page using structured hotel data.

Brand context:
- Nozoluxe is a curated Arabic brand for Saudi/GCC travelers booking premium hotels and resorts in Turkey.
- Tone is premium, clear, calm, practical, and non-generic.
- Do not overhype. Do not sound like a machine translation.

Goals:
- Explain why this hotel matters to a Saudi/GCC traveler.
- Make the difference between family fit, honeymoon fit, privacy fit, and nature fit very clear.
- Prioritize practical fit over generic luxury language.

Input JSON:
{{structured_hotel_json}}

Output sections:
1. one-line summary
2. why we chose it
3. who it suits
4. Saudi/GCC fit notes
5. top highlights (5 bullets max)
6. rooms/villas summary
7. dining summary
8. wellness summary
9. location summary
10. concise FAQs (4)

Rules:
- Arabic only
- short paragraphs
- no fabricated claims
- if a detail is missing, do not invent it
```

## 5) SEO Landing Page Prompt
```text
Write an Arabic SEO landing page for Nozoluxe.

Page intent:
{{page_intent}}
Examples:
- best luxury nature resorts in Turkey for Saudi families
- Sapanca luxury resorts
- Black Sea family resorts in Turkey
- Bodrum private beach luxury resorts
- thermal and wellness resorts in Turkey

Brand rules:
- Arabic-first
- curated premium tone
- no spammy keyword stuffing
- helpful, structured, conversion-aware

Output structure:
1. H1
2. intro paragraph
3. why this category matters to Gulf travelers
4. how to choose
5. featured property types
6. CTA paragraph for booking request
7. FAQ (4)
8. Meta title
9. Meta description
10. Suggested internal links
```
