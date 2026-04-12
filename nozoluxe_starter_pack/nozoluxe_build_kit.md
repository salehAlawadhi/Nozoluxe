# Nozoluxe Build Kit

## قرار تنفيذي سريع
- **ابدأ بـ 30 فندق/منتجع ظاهرين في الموقع**، وليس 25.
- **خزّن 70 منشأة في الـ seed/backend** من أول يوم حتى يكون عندك عمق للمحتوى والتوسّع والـ CRM.
- **الترتيب البصري للموقع يجب أن يكون: الطبيعة أولًا، ثم الخصوصية، ثم الفخامة، ثم المدينة آخرًا.**
- لا تطلق الموقع على شكل OTA مزدحم. أطلقه كمنصة عربية منتقاة: **Nature-first, Saudi-fit, Arabic-assisted booking**.

## كيف نقسم الـ 70
- **30 إطلاق**: تظهر في الواجهة العامة من أول نسخة.
- **40 توسّع**: تبقى في قاعدة البيانات واللوحة، وتُفعل لاحقًا حسب الأداء.

## لماذا 30 أفضل من 25؟
- 25 قليل إذا أردت تغطية سابانجا + الشمال + بودروم + غوجك/فتحية + أنطاليا/كمير.
- 30 تعطيك عمقًا كافيًا للفلترة والـ SEO بدون أن تدخل في فوضى.
- 30 تكفي لتظهر أنك متخصص، و70 في الخلفية تكفي لتجهّز التوسّع من دون إعادة هندسة البيانات.

## فلسفة الكتالوج
رتّب الواجهة العامة بهذه النسبة:
- **40% طبيعة باردة / بحيرات / غابات / شلالات / حراري**
- **25% ساحل راقٍ هادئ بخلجان خاصة**
- **20% منتجعات عائلية فاخرة**
- **10% خصوصية / فيلل / مسابح خاصة / شهر عسل**
- **5% تجارب أيقونية مختلفة مثل كبادوكيا**

## هوية الموقع
- **الاسم:** Nozoluxe
- **الوعد:** منتجعات وفنادق تركية مختارة للعائلات الخليجية والباحثين عن تجربة أهدأ وأفخم.
- **نبرة المحتوى:** راقية، واضحة، عربية، بعيدة عن الحشو، تركّز على الملاءمة لا على الوصف السياحي العام.
- **هوية الواجهة:** minimal editorial luxury.

## المبدأ الأهم في الـ UI
لا تبنِ صفحة مزدحمة مثل منصات الحجز العامة. ابنِ **واجهة قصة + فلترة ذكية + مساعدة بشرية واضحة**:
- صورة كبيرة أو فيديو هادئ في الـ hero
- نتائج قليلة لكن منتقاة
- كروت نظيفة مع 3–5 badges فقط
- زر **اطلب السعر** و**واتساب** أوضح من زر “احجز الآن” في الـ MVP
- مساحات بيضاء كثيرة
- RTL محترم من أول يوم

## نظام الصفحات (Sitemap)
### عام
- `/`
- `/destinations`
- `/destinations/[slug]`
- `/collections/[slug]`
- `/hotels/[slug]`
- `/offers`
- `/about`
- `/contact`
- `/faq`
- `/privacy`
- `/terms`

### صفحات المجموعات الأساسية
- `/collections/nature-escapes`
- `/collections/family-resorts`
- `/collections/private-pool-and-villas`
- `/collections/thermal-and-wellness`
- `/collections/honeymoon`
- `/collections/beach-nature`

### صفحات الوجهات التي أبدأ بها
- `/destinations/sapanca`
- `/destinations/black-sea`
- `/destinations/bodrum`
- `/destinations/gocek-fethiye`
- `/destinations/antalya-kemer`
- `/destinations/cappadocia`

### Admin / Backoffice
- `/admin`
- `/admin/properties`
- `/admin/inquiries`
- `/admin/offers`
- `/admin/media`
- `/admin/suppliers`

## ما يظهر في الهيدر
- الرئيسية
- الوجهات
- المجموعات
- العروض
- من نحن
- تواصل
- زر CTA ثابت: **اطلب حجزك**

## الصفحة الرئيسية – Blueprint
### Hero
**عنوان مقترح 1:**
> تركيا الطبيعية… بحجز أهدأ وأفخم

**عنوان مقترح 2:**
> منتجعات وفنادق تركية مختارة بذوق خليجي

**Subtitle:**
> نوصل لك فنادق ومنتجعات تركية مختارة، مع خدمة عربية، ودفع مرن، ومتابعة من الحجز حتى الوصول.

**حقول البحث:**
- الوجهة
- تاريخ الوصول
- تاريخ المغادرة
- عدد الضيوف
- نوع الرحلة: عائلة / شهر عسل / طبيعة / بحر / سبا

**CTA أساسي:** اطلب السعر الآن
**CTA ثانوي:** تحدث معنا على واتساب

### Trust Strip تحت الـ Hero مباشرة
- فنادق مختارة بعناية
- دعم عربي
- دفع مرن
- شركاء تشغيل محليون
- تركيز على الطبيعة والخصوصية

### Section 1: وجهات يحبها المسافر الخليجي
- سابانجا
- الشمال التركي
- بودروم
- غوجك وفتحية
- أنطاليا وكمير
- كبادوكيا

### Section 2: مجموعات مختارة
- طبيعة باردة وخضراء
- شواطئ وخلجان خاصة
- منتجعات عائلية راقية
- فيلل ومسابح خاصة
- حراري وسبا
- شهر عسل

### Section 3: كيف يتم الحجز؟
1. اختر الفندق أو أرسل طلبك
2. نؤكد السعر والتوفر بسرعة
3. تدفع العربون أو كامل المبلغ حسب الخطة
4. تستلم التأكيد + المتابعة قبل الوصول

### Section 4: أفضل الفنادق المختارة
استخدم grid من 6 إلى 9 كروت فقط في الصفحة الرئيسية، وليس 30 دفعة واحدة.

### Section 5: لماذا Nozoluxe؟
- لا نعرض كل شيء، نعرض المناسب فقط
- نترجم اختيار الفندق إلى لغة تناسب العائلة الخليجية
- نوضح الخصوصية والطبيعة والملاءمة بدل الوصف التسويقي العام
- عندنا مسار حجز عربي واضح بدل الضياع بين مئات الخيارات

### Section 6: الأسئلة الشائعة
- هل أقدر أدفع عربون فقط؟
- هل عندكم خدمة واتساب؟
- هل الفنادق مناسبة للعائلات؟
- هل تساعدون في النقل أو الخدمات الإضافية؟
- كيف أعرف سياسة الإلغاء؟

## ما يجب أن يركز عليه المحتوى للفندق الواحد
كل صفحة فندق يجب أن تبدأ بـ **ملاءمة الفندق للعميل الخليجي** لا بتاريخ الفندق.

### الترتيب الصحيح لصفحة الفندق
1. اسم الفندق + شارة الوجهة + 3 badges واضحة
2. لماذا اخترناه؟
3. لمن يناسب؟
4. أبرز ما يهتم به السعودي/الخليجي:
   - هل هو عائلي؟
   - هل فيه خصوصية؟
   - هل فيه kids club؟
   - هل فيه beach / lake / mountain / thermal؟
   - هل يصلح لشهر العسل؟
5. الصور
6. الغرف/الفيلات
7. المطاعم
8. السبا والعافية
9. الموقع والوصول
10. طلب الحجز / واتساب
11. FAQ قصير

## مكوّنات الـ UI الأساسية
- `HeroSearch`
- `TrustBar`
- `DestinationCard`
- `CollectionCard`
- `HotelCard`
- `HotelBadgeRow`
- `HotelHighlights`
- `HotelGallery`
- `RoomTypeAccordion`
- `BookingRequestCard`
- `WhatsappFloatingButton`
- `StickyMobileInquiryBar`
- `FilterDrawerMobile`
- `DesktopSidebarFilters`

## تصميم الكروت
### كرت الفندق
اعرض فقط:
- صورة رئيسية
- اسم الفندق
- الوجهة
- 3 إلى 5 شارات مثل: عائلي / شاطئ خاص / طبيعة / سبا / مسبح خاص
- سطر واحد “لماذا اخترناه”
- CTA: اطلب السعر

**لا تعرض من أول يوم:**
- تقييمات معقدة
- مقارنة 20 ميزة
- تفاصيل أسعار معقّدة
- 8 أزرار

## الفلاتر التي تهم السعودي أكثر
رتّب الفلاتر بهذه الأولوية:
1. الوجهة
2. نوع الرحلة
3. عائلي / شهر عسل
4. طبيعة: بحيرة / جبل / غابة / شاطئ / حراري
5. خصوصية: فيلا / مسبح خاص / خليج خاص
6. المرافق: سبا / kids club / all inclusive
7. مستوى الفخامة
8. Adults only

## قواعد المحتوى العربي
- لا تنسخ وصف الفندق الإنجليزي حرفيًا.
- ابدأ دائمًا بـ **الفائدة العملية** للمسافر الخليجي.
- استخدم جمل قصيرة وواضحة.
- اشرح المكان من منظور الإقامة، لا من منظور المدونة العامة.
- إذا كان الفندق على البحر، قل هل هو هادئ أم حيوي.
- إذا كان الفندق في الشمال، قل هل يناسب العائلة الطويلة أو الرحلات القصيرة.
- إذا كان فيلا/مسبح خاص، أبرز الخصوصية في أول سطر.

## الـ Data Model المقترح
```ts
export type Property = {
  id: number;
  slug: string;
  name: string;
  cluster: string;
  clusterAr: string;
  destination: string;
  type: string;
  officialUrl: string;
  officialDomain: string;
  tags: string[];
  familyScore: 1 | 2 | 3 | 4 | 5;
  honeymoonScore: 1 | 2 | 3 | 4 | 5;
  privacyScore: 1 | 2 | 3 | 4 | 5;
  natureScore: 1 | 2 | 3 | 4 | 5;
  luxuryScore: 1 | 2 | 3 | 4 | 5;
  audienceSegments: string[];
  saudiFitReasonAr: string;
  contentAngleAr: string;
  crawlHints: string[];
  cohort: 'launch' | 'expansion';
  launchPriority?: number;
  dataStatus: 'ready_for_ingestion';
};
```

## الجداول التي أنصح بها في الـ MVP
- `properties`
- `property_media`
- `property_rooms`
- `property_offers`
- `property_tags`
- `inquiries`
- `suppliers`
- `booking_requests`
- `audit_notes`

## صياغة حالة الحجز في النظام
- `new`
- `awaiting_supplier_confirmation`
- `priced`
- `awaiting_payment`
- `deposit_paid`
- `confirmed`
- `cancelled`
- `refund_in_progress`
- `completed`

## ما تبنيه غدًا أولًا
1. استيراد seed الـ 70
2. فلترة الواجهة على **launch only**
3. الصفحة الرئيسية
4. صفحة Destination listing
5. صفحة Hotel detail
6. نموذج طلب الحجز
7. إرسال الطلب إلى البريد + واتساب + قاعدة البيانات
8. صفحة بسيطة للعروض

## ما لا تبنيه غدًا
- Instant booking engine كامل
- مقارنة فنادق معقدة
- تطبيق جوال
- نظام عضويات معقد
- مراجعات مستخدمين حقيقية قبل أن تكون عندك بيانات

## الـ Top 30 للإطلاق
| # | الفندق | الوجهة | لماذا في الإطلاق |
|---|---|---|---|
| 1 | NG Sapanca | Sapanca | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة، ويصلح كخيار قريب نسبيًا لمن يريد طبيعة سهلة الوصول بعد إسطنبول. |
| 2 | Elite World Grand Sapanca | Sapanca | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة، ويصلح كخيار قريب نسبيًا لمن يريد طبيعة سهلة الوصول بعد إسطنبول. |
| 3 | Richmond Nua Wellness Spa | Sapanca | ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة، ويصلح كخيار قريب نسبيًا لمن يريد طبيعة سهلة الوصول بعد إسطنبول. |
| 4 | Ramada Resort by Wyndham Sapanca Thermal | Sapanca | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة، ويصلح كخيار قريب نسبيًا لمن يريد طبيعة سهلة الوصول بعد إسطنبول. |
| 5 | Dedeman Village Sapanca | Sapanca | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويقدّم خصوصية أعلى تناسب الحجوزات الراقية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، ويصلح كخيار قريب نسبيًا لمن يريد طبيعة سهلة الوصول بعد إسطنبول. |
| 6 | World Dreams Sapanca | Sapanca | ويقدّم خصوصية أعلى تناسب الحجوزات الراقية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، ويصلح كخيار قريب نسبيًا لمن يريد طبيعة سهلة الوصول بعد إسطنبول. |
| 7 | Swissotel Uludag Bursa | Uludag / Bursa | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة. |
| 8 | Abant Palace | Abant / Bolu | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة. |
| 9 | Royal Uzungol Hotel | Uzungol / Trabzon | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة، ويخدم الطلب العالي على الشمال التركي والجو الأبرد. |
| 10 | Ricosta Hotel | Rize | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة، ويخدم الطلب العالي على الشمال التركي والجو الأبرد. |
| 11 | Ridos Thermal Hotel and Spa | Ikizdere / Rize | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة، ويخدم الطلب العالي على الشمال التركي والجو الأبرد. |
| 12 | Babillon Hotel and Spa and Restaurant | Rize | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة، ويخدم الطلب العالي على الشمال التركي والجو الأبرد. |
| 13 | Hancioglu Camburnu Orman Evleri and Hotel | Surmene / Trabzon | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، ويخدم الطلب العالي على الشمال التركي والجو الأبرد. |
| 14 | Ayder Doga Resort Hotel | Ayder / Rize | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، ويخدم الطلب العالي على الشمال التركي والجو الأبرد. |
| 15 | Kackar Resort Hotel | Ayder / Rize | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة، ويخدم الطلب العالي على الشمال التركي والجو الأبرد. |
| 16 | Sera Lake Resort Hotel | Trabzon | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة، ويخدم الطلب العالي على الشمال التركي والجو الأبرد. |
| 17 | Mandarin Oriental Bodrum | Bodrum | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويقدّم خصوصية أعلى تناسب الحجوزات الراقية، وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، ويصلح لرحلات الصيف الفاخرة أو شهر العسل. |
| 18 | Caresse Luxury Collection Bodrum | Bodrum | وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة، ويصلح لرحلات الصيف الفاخرة أو شهر العسل. |
| 19 | Titanic Luxury Collection Bodrum | Bodrum | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويقدّم خصوصية أعلى تناسب الحجوزات الراقية، وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة. |
| 20 | Rixos Premium Bodrum | Bodrum | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة، ويصلح لرحلات الصيف الفاخرة أو شهر العسل. |
| 21 | Amanruya | Bodrum | ويقدّم خصوصية أعلى تناسب الحجوزات الراقية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، ويصلح لرحلات الصيف الفاخرة أو شهر العسل. |
| 22 | Six Senses Kaplankaya | Milas / Bodrum Region | ويقدّم خصوصية أعلى تناسب الحجوزات الراقية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة. |
| 23 | D Maris Bay | Marmaris / Hisaronu Bay | ويقدّم خصوصية أعلى تناسب الحجوزات الراقية، وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، ويصلح لرحلات الصيف الفاخرة أو شهر العسل. |
| 24 | D Resort Gocek | Gocek | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، ويصلح لرحلات الصيف الفاخرة أو شهر العسل. |
| 25 | Yazz Collective | Gocek | ويقدّم خصوصية أعلى تناسب الحجوزات الراقية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، ويصلح لرحلات الصيف الفاخرة أو شهر العسل. |
| 26 | Hillside Beach Club | Fethiye | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة. |
| 27 | Liberty Lykia | Oludeniz / Fethiye | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، ويصلح لرحلات الصيف الفاخرة أو شهر العسل. |
| 28 | Maxx Royal Belek Golf Resort | Belek | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويقدّم خصوصية أعلى تناسب الحجوزات الراقية، وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، ويصلح لرحلات الصيف الفاخرة أو شهر العسل. |
| 29 | Gloria Serenity Resort | Belek | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويقدّم خصوصية أعلى تناسب الحجوزات الراقية، وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، مع عنصر سبا/استرخاء مهم في الرحلات الطويلة. |
| 30 | NG Phaselis Bay | Kemer | مناسب للعائلات الخليجية بفضل المساحات والمرافق العائلية، ويركّز على الطبيعة والهدوء بعيدًا عن زحمة المدن، وفيه تجربة ساحلية هادئة بخليج أو شاطئ خاص، ويصلح لرحلات الصيف الفاخرة أو شهر العسل. |

## الـ 40 للتوسّع
| الفندق | الوجهة | الشريحة |
|---|---|---|
| Cabir Deluxe Hotel Sapanca | Sapanca | family / wellness / mountain_lake_nature |
| NG Enjoy | Sapanca | family / wellness / mountain_lake_nature |
| Kaya Uludag | Uludag / Bursa | family / mountain_lake_nature |
| Karinna Hotel Convention Center and Spa | Uludag / Bursa | family / wellness / mountain_lake_nature |
| BOF Hotel Uludag Ski and Luxury Resort | Uludag / Bursa | family / mountain_lake_nature |
| Limak Thermal Boutique Hotel | Yalova Termal | honeymoon / wellness / mountain_lake_nature |
| Buyuk Abant Hotel | Abant / Bolu | family / mountain_lake_nature |
| Radisson Blu Hotel Trabzon | Trabzon | family |
| Ramada Plaza by Wyndham Trabzon | Trabzon | family / wellness / beach_nature |
| Lujo Hotel Bodrum | Bodrum | family / beach_nature |
| Kempinski Hotel Barbaros Bay Bodrum | Bodrum | family / wellness / beach_nature |
| Vogue Hotel Bodrum | Bodrum | family / beach_nature |
| The Plaza Bodrum | Bodrum | family / wellness / beach_nature |
| Swissotel Resort Bodrum Beach | Turgutreis / Bodrum | family / wellness / beach_nature |
| Hyde Bodrum | Bodrum | honeymoon |
| Voyage Torba | Bodrum | family / beach_nature |
| Maxx Royal Bodrum Resort | Bodrum | family / wellness / beach_nature |
| Xanadu Island | Akyarlar / Bodrum | family |
| Rixos Premium Gocek | Gocek | honeymoon / wellness |
| Club Prive by Rixos Gocek | Gocek | honeymoon |
| Liberty Fabay | Fethiye | family / beach_nature |
| Club Hotel Letoonia | Fethiye | family / beach_nature |
| Hilton Dalaman Sarigerme Resort and Spa | Dalaman / Sarigerme | family / wellness / beach_nature |
| Regnum Carya | Belek | family / beach_nature |
| Cullinan Belek | Belek | family / beach_nature |
| Kaya Palazzo Golf Resort Belek | Belek | family / beach_nature |
| Voyage Belek Golf and Spa | Belek | family / wellness / beach_nature |
| Ela Excellence Resort Belek | Belek | family / beach_nature |
| Rixos Premium Belek | Belek | family / beach_nature |
| Titanic Deluxe Golf Belek | Belek | family / beach_nature |
| Cornelia Diamond Luxury Golf Resort and Spa | Belek | family / wellness / beach_nature |
| Rixos Premium Tekirova | Tekirova / Kemer | family / beach_nature / mountain_lake_nature |
| Maxx Royal Kemer Resort | Kemer | family / beach_nature / mountain_lake_nature |
| Akra Kemer | Kemer | family / beach_nature / mountain_lake_nature |
| Gloria Verde Resort | Belek | family / wellness / beach_nature |
| Museum Hotel | Cappadocia | honeymoon |
| Argos in Cappadocia | Cappadocia | honeymoon |
| Kayakapi Premium Caves | Cappadocia | family / honeymoon |
| AJWA Cappadocia | Cappadocia | family / wellness |
| Ariana Sustainable Luxury Lodge | Cappadocia | honeymoon |

## سياسة الصور والبيانات
- للتطوير الداخلي: خزّن `source_url`, `image_url`, `alt`, `section`, `captured_at`.
- لا تعتمد hotlinking دائم في الإنتاج.
- قبل النشر التجاري النهائي، ثبّت فقط الصور المسموح لكم استخدامها عبر اتفاق الفندق/المورد أو media kit رسمي.
- في الإدخال اليدوي، استخرج أيضًا:
  - Hero image
  - Gallery images
  - Room images
  - Dining images
  - Spa images
  - Offer text
  - Amenities
  - Family fit notes
  - Cancellation snippets

## Workflow إدخال الفندق
1. افتح الرابط الرسمي
2. استخرج من: homepage + rooms + gallery + offers + dining + spa + location
3. خزّن البيانات الخام في JSON
4. مرّر JSON على prompt المحتوى العربي
5. راجع الصور وحقوق الاستخدام
6. انشر الفندق في staging
7. راجعه على الجوال

## مسار يومين عملي
### Day 1
- Seed data
- Home page
- Destination pages
- Hotel card + filters
- Hotel detail basic
- Inquiry form

### Day 2
- Offers page
- CMS fields
- Media ingestion helpers
- Arabic copy refinement
- FAQ pages
- SEO metadata لكل صفحة

## المخرجات المرفقة مع هذا الملف
- `nozoluxe_property_seed_70.json`
- `nozoluxe_property_seed_70.csv`
- `nozoluxe_prompts_bundle.md`

- `nozoluxe_launch_30.json`
- `nozoluxe_launch_30.csv`
- `nozoluxe_ui_copy_ar.json`
