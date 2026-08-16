/* ============================================================
   Cash4Value — i18n (English / हिंदी / मराठी)
   ============================================================ */
(function () {
  'use strict';

  var translations = {
    /* -------------------- ENGLISH -------------------- */
    en: {
      'a11y.skip': 'Skip to content',
      'meta.title': 'Cash4Value — Turn Your Valuables Into Instant Cash',
      'meta.desc': 'Need cash urgently? Cash4Value buys your valuable items quickly at fair market prices — electronics, gold, jewelry, watches, laptops and more. Transparent, secure, and fast. Get a free offer today.',

      'topbar.badge': 'Fast, fair, and confidential valuations — usually within the hour.',

      'nav.how': 'How It Works',
      'nav.what': 'What We Buy',
      'nav.why': 'Why Us',
      'nav.faq': 'FAQ',
      'nav.cta': 'Get an Offer',
      'nav.mobileCta': 'Need Cash Urgently? Contact Us',
      'nav.language': 'Language',

      'hero.badge': 'Trusted valuations · Paid the same day',
      'hero.title1': 'Turn Your Valuables Into',
      'hero.title2': 'Instant Cash',
      'hero.sub': 'Need money urgently? Cash4Value buys the things you already own — quickly, fairly, and with complete transparency. Share a few details and receive a no-obligation offer, often within the hour.',
      'hero.sell': 'Sell an Item',
      'hero.contact': 'Contact Us',
      'hero.card.title': 'Your Valuation',
      'hero.card.live': 'Live',
      'hero.card.est': 'Estimated offer',
      'hero.card.fair': 'Fair market value · 82% of retail',
      'hero.card.item': 'Item',
      'hero.card.itemVal': 'Luxury Watch',
      'hero.card.cond': 'Condition',
      'hero.card.condVal': 'Excellent',
      'hero.card.payout': 'Payout',
      'hero.card.payoutVal': 'Same day',
      'hero.float.accepted': 'Offer accepted',
      'hero.float.paid': 'Paid in minutes',
      'hero.float.noOblig': 'No obligation',
      'hero.float.decline': 'Decline anytime',

      'trust.secure': 'Verified & Secure',
      'trust.payout': 'Same-Day Payouts',
      'trust.confidential': 'Confidential Process',
      'trust.fair': 'Fair Market Pricing',

      'how.eyebrow': 'How it works',
      'how.title': 'Cash in three simple steps',
      'how.sub': 'No queues, no pressure, no jargon. Just a clear, dignified process designed around you.',
      'how.s1.title': 'Contact Us',
      'how.s1.desc': 'Reach out through our simple form. It takes less than a minute to get started.',
      'how.s2.title': 'Share the Details',
      'how.s2.desc': 'Tell us about your item — a few photos and a short description are all we need to evaluate it.',
      'how.s3.title': 'Get an Offer & Get Paid',
      'how.s3.desc': 'Accept our fair, no-obligation offer and receive your cash quickly — often the very same day.',
      'how.cta': 'Start Your Valuation',

      'buy.eyebrow': 'What we buy',
      'buy.title': 'A wide range of valuables welcome',
      'buy.sub': "These are examples of the categories we accept — not products for sale. If you own it and it holds value, we'll happily take a look.",

      'cat.electronics': 'Electronics',        'catd.electronics': 'Tablets, TVs, audio & smart devices',
      'cat.gold': 'Gold & Jewelry',            'catd.gold': 'Ornaments, silver & fine pieces',
      'cat.watches': 'Luxury Watches',         'catd.watches': 'Designer & premium timepieces',
      'cat.laptops': 'Laptops',                'catd.laptops': 'Ultrabooks, MacBooks & PCs',
      'cat.smartphones': 'Smartphones',        'catd.smartphones': 'All major brands & models',
      'cat.cameras': 'Cameras',                'catd.cameras': 'DSLR, mirrorless & lenses',
      'cat.gaming': 'Gaming',                  'catd.gaming': 'Consoles & premium accessories',
      'cat.appliances': 'Appliances',          'catd.appliances': 'Premium home & kitchen goods',
      'cat.music': 'Musical Instruments',      'catd.music': 'Guitars, keyboards & more',
      'cat.collectibles': 'Collectibles',      'catd.collectibles': 'Rare items & fine memorabilia',
      'cat.luxury': 'Luxury Items',            'catd.luxury': 'Designer bags & premium goods',
      'cat.more': 'And More…',                 'catd.more': "Don't see it? Just ask us.",

      'why.eyebrow': 'Why Cash4Value',
      'why.title': 'A better way to unlock cash',
      'why.sub': 'We built Cash4Value to feel less like a transaction and more like help — with the fairness and discretion you deserve.',
      'why.1.title': 'Instant Cash Offers',   'why.1.desc': 'Get a clear offer fast — no drawn-out back-and-forth or waiting games.',
      'why.2.title': 'Fair Market Valuation', 'why.2.desc': 'Transparent pricing based on real market data — never lowball tactics.',
      'why.3.title': 'Fast Response',         'why.3.desc': 'We reply quickly because we know urgent means urgent.',
      'why.4.title': 'Trusted Service',       'why.4.desc': 'Thousands helped with a process people genuinely recommend.',
      'why.5.title': 'Secure Transactions',   'why.5.desc': 'Your details and your payment are handled safely, every step.',
      'why.6.title': 'Transparent Process',   'why.6.desc': "No hidden fees, no surprises — you'll always know where you stand.",
      'why.7.title': 'Hassle-Free',           'why.7.desc': 'Skip the queues and paperwork. We keep it refreshingly simple.',
      'why.8.title': 'Personalized Help',     'why.8.desc': 'A real person guides you — with patience, warmth, and respect.',

      'faq.eyebrow': 'FAQ',
      'faq.title': 'Questions, answered',
      'faq.sub': 'Everything you need to know before reaching out.',
      'faq.q1': 'What items do you buy?',
      'faq.a1': "A broad range of valuables — including electronics, gold and silver, jewelry, luxury watches, laptops, smartphones, cameras, gaming gear, appliances, musical instruments, collectibles, and more. If you're unsure, just ask; we're happy to take a look.",
      'faq.q2': 'How quickly will I receive payment?',
      'faq.a2': 'Most offers are made within the hour, and once you accept, we aim to pay you the same day. Timing can vary slightly depending on the item and your preferred payment method.',
      'faq.q3': 'Is there any obligation?',
      'faq.a3': "None at all. Our valuations are completely free and no-obligation. You're welcome to decline any offer with no cost and no pressure.",
      'faq.q4': "How is the item's value determined?",
      'faq.a4': "We assess current market demand, the item's condition, brand, model, and comparable sales. We'll always explain how we reached your offer so it's fully transparent.",
      'faq.q5': 'Do you purchase damaged items?',
      'faq.a5': "Often, yes. Many items still hold value even with wear or damage. Share a few honest photos and we'll let you know what we can offer.",
      'faq.q6': 'Can you help me find an item to buy?',
      'faq.a6': 'Absolutely. Tell us what you’re looking for and we’ll source it through our trusted network. Just choose "Looking to Buy" in the contact form below.',

      'contact.eyebrow': 'Get started',
      'contact.title1': 'Need Cash Urgently?',
      'contact.title2': 'Contact Cash4Value today.',
      'contact.sub': "Fill out the form and we'll get back to you fast with a fair, no-obligation offer.",
      'contact.privacy': 'Your information stays private and is never shared. Confidential, always.',

      'form.fullName': 'Full Name',
      'form.mobile': 'Mobile Number',
      'form.email': 'Email',
      'form.city': 'City',
      'form.intent': 'What would you like to do?',
      'form.sell': 'Sell an Item',
      'form.buy': 'Looking to Buy',
      'form.category': 'Item Category',
      'form.selectCat': 'Select a category',
      'form.other': 'Other',
      'form.price': 'Expected Price',
      'form.optional': '(optional)',
      'form.description': 'Brief Description',
      'form.contactMethod': 'Preferred Contact Method',
      'form.cm.phone': 'Phone Call',
      'form.cm.whatsapp': 'Text / WhatsApp',
      'form.cm.email': 'Email',
      'form.submit': 'Get My Free Offer',
      'form.sending': 'Sending…',
      'form.disclaimer': 'By submitting, you agree to be contacted about your request. No spam, ever.',
      'form.successTitle': "Thank you — we've got it!",
      'form.successDesc': 'A Cash4Value specialist will reach out to you shortly with your offer.',
      'form.err.name': 'Please enter your name.',
      'form.err.mobileReq': 'Please enter a mobile number.',
      'form.err.mobileValid': 'Please enter a valid number.',
      'form.err.email': 'Please enter a valid email.',
      'form.ph.fullName': 'Jane Doe',
      'form.ph.mobile': '+1 800 555 0199',
      'form.ph.email': 'jane@email.com',
      'form.ph.city': 'Your city',
      'form.ph.price': 'e.g. $500',
      'form.ph.description': "Tell us about the item — brand, model, condition, or what you're looking for.",

      'cta.title': "Need cash urgently? We're ready to help.",
      'cta.sub': 'Get a fair, no-obligation offer today and turn what you own into the cash you need — with dignity and speed.',
      'cta.btn': 'Contact Cash4Value Today',

      'footer.about': 'Helping people unlock the value of what they own — quickly, fairly, and with respect. A trusted partner in urgent moments.',
      'footer.quick': 'Quick Links',
      'footer.whyLink': 'Why Choose Us',
      'footer.services': 'Services',
      'footer.sell': 'Sell Your Items',
      'footer.freeVal': 'Free Valuation',
      'footer.sameDay': 'Same-Day Payout',
      'footer.touch': 'Get in Touch',
      'footer.hours': 'Available Mon–Sat · 8am–8pm',
      'footer.fast': 'Fast, confidential responses',
      'footer.getOffer': 'Get an Offer',
      'footer.rights': 'All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
    },

    /* -------------------- हिंदी (HINDI) -------------------- */
    hi: {
      'a11y.skip': 'सामग्री पर जाएं',
      'meta.title': 'Cash4Value — अपनी कीमती चीज़ों को तुरंत नकद में बदलें',
      'meta.desc': 'तुरंत पैसों की ज़रूरत है? Cash4Value आपकी कीमती चीज़ें — इलेक्ट्रॉनिक्स, सोना, आभूषण, घड़ियाँ, लैपटॉप और बहुत कुछ — उचित बाज़ार भाव पर जल्दी खरीदता है। पारदर्शी, सुरक्षित और तेज़। आज ही मुफ़्त ऑफ़र पाएं।',

      'topbar.badge': 'तेज़, निष्पक्ष और गोपनीय मूल्यांकन — आमतौर पर एक घंटे के भीतर।',

      'nav.how': 'यह कैसे काम करता है',
      'nav.what': 'हम क्या खरीदते हैं',
      'nav.why': 'हम ही क्यों',
      'nav.faq': 'सामान्य प्रश्न',
      'nav.cta': 'ऑफ़र पाएं',
      'nav.mobileCta': 'तुरंत पैसे चाहिए? हमसे संपर्क करें',
      'nav.language': 'भाषा',

      'hero.badge': 'भरोसेमंद मूल्यांकन · उसी दिन भुगतान',
      'hero.title1': 'अपनी कीमती चीज़ों से पाएं',
      'hero.title2': 'तुरंत नकद',
      'hero.sub': 'तुरंत पैसों की ज़रूरत है? Cash4Value आपकी पहले से मौजूद चीज़ें खरीदता है — जल्दी, निष्पक्षता और पूरी पारदर्शिता के साथ। कुछ जानकारी साझा करें और बिना किसी बाध्यता के ऑफ़र पाएं, अक्सर एक घंटे के भीतर।',
      'hero.sell': 'वस्तु बेचें',
      'hero.contact': 'संपर्क करें',
      'hero.card.title': 'आपका मूल्यांकन',
      'hero.card.live': 'लाइव',
      'hero.card.est': 'अनुमानित ऑफ़र',
      'hero.card.fair': 'उचित बाज़ार मूल्य · खुदरा का 82%',
      'hero.card.item': 'वस्तु',
      'hero.card.itemVal': 'लक्ज़री घड़ी',
      'hero.card.cond': 'स्थिति',
      'hero.card.condVal': 'उत्कृष्ट',
      'hero.card.payout': 'भुगतान',
      'hero.card.payoutVal': 'उसी दिन',
      'hero.float.accepted': 'ऑफ़र स्वीकृत',
      'hero.float.paid': 'मिनटों में भुगतान',
      'hero.float.noOblig': 'कोई बाध्यता नहीं',
      'hero.float.decline': 'कभी भी मना करें',

      'trust.secure': 'सत्यापित और सुरक्षित',
      'trust.payout': 'उसी दिन भुगतान',
      'trust.confidential': 'गोपनीय प्रक्रिया',
      'trust.fair': 'उचित बाज़ार मूल्य',

      'how.eyebrow': 'यह कैसे काम करता है',
      'how.title': 'तीन आसान चरणों में नकद',
      'how.sub': 'कोई कतार नहीं, कोई दबाव नहीं, कोई जटिल शब्द नहीं। बस एक स्पष्ट, सम्मानजनक प्रक्रिया जो आपके लिए बनी है।',
      'how.s1.title': 'संपर्क करें',
      'how.s1.desc': 'हमारे आसान फ़ॉर्म के ज़रिए संपर्क करें। शुरू करने में एक मिनट से भी कम समय लगता है।',
      'how.s2.title': 'विवरण साझा करें',
      'how.s2.desc': 'अपनी वस्तु के बारे में बताएं — मूल्यांकन के लिए हमें बस कुछ तस्वीरें और एक संक्षिप्त विवरण चाहिए।',
      'how.s3.title': 'ऑफ़र पाएं और भुगतान लें',
      'how.s3.desc': 'हमारा निष्पक्ष, बिना बाध्यता वाला ऑफ़र स्वीकार करें और अपना पैसा जल्दी पाएं — अक्सर उसी दिन।',
      'how.cta': 'अपना मूल्यांकन शुरू करें',

      'buy.eyebrow': 'हम क्या खरीदते हैं',
      'buy.title': 'कई तरह की कीमती चीज़ों का स्वागत है',
      'buy.sub': 'ये उन श्रेणियों के उदाहरण हैं जिन्हें हम स्वीकार करते हैं — बिक्री के लिए उत्पाद नहीं। अगर वह आपके पास है और उसकी कोई कीमत है, तो हम खुशी से देखेंगे।',

      'cat.electronics': 'इलेक्ट्रॉनिक्स',       'catd.electronics': 'टैबलेट, टीवी, ऑडियो और स्मार्ट डिवाइस',
      'cat.gold': 'सोना और आभूषण',              'catd.gold': 'आभूषण, चांदी और बेहतरीन चीज़ें',
      'cat.watches': 'लक्ज़री घड़ियाँ',           'catd.watches': 'डिज़ाइनर और प्रीमियम घड़ियाँ',
      'cat.laptops': 'लैपटॉप',                  'catd.laptops': 'अल्ट्राबुक, मैकबुक और पीसी',
      'cat.smartphones': 'स्मार्टफ़ोन',           'catd.smartphones': 'सभी प्रमुख ब्रांड और मॉडल',
      'cat.cameras': 'कैमरे',                   'catd.cameras': 'DSLR, मिररलेस और लेंस',
      'cat.gaming': 'गेमिंग',                   'catd.gaming': 'कंसोल और प्रीमियम एक्सेसरीज़',
      'cat.appliances': 'उपकरण',               'catd.appliances': 'प्रीमियम घरेलू और रसोई का सामान',
      'cat.music': 'वाद्य यंत्र',                'catd.music': 'गिटार, कीबोर्ड और बहुत कुछ',
      'cat.collectibles': 'संग्रहणीय वस्तुएं',     'catd.collectibles': 'दुर्लभ वस्तुएं और बेहतरीन यादगार',
      'cat.luxury': 'लक्ज़री वस्तुएं',            'catd.luxury': 'डिज़ाइनर बैग और प्रीमियम सामान',
      'cat.more': 'और भी बहुत कुछ…',            'catd.more': 'यहाँ नहीं दिख रहा? बस हमसे पूछें।',

      'why.eyebrow': 'Cash4Value ही क्यों',
      'why.title': 'नकद पाने का बेहतर तरीका',
      'why.sub': 'हमने Cash4Value को इस तरह बनाया है कि यह किसी लेन-देन जैसा कम और मदद जैसा ज़्यादा लगे — उस निष्पक्षता और विवेक के साथ जिसके आप हकदार हैं।',
      'why.1.title': 'तुरंत नकद ऑफ़र',          'why.1.desc': 'जल्दी एक स्पष्ट ऑफ़र पाएं — कोई लंबी बातचीत या इंतज़ार नहीं।',
      'why.2.title': 'उचित बाज़ार मूल्यांकन',     'why.2.desc': 'वास्तविक बाज़ार डेटा पर आधारित पारदर्शी मूल्य — कभी कम कीमत की चालबाज़ी नहीं।',
      'why.3.title': 'तेज़ जवाब',               'why.3.desc': 'हम जल्दी जवाब देते हैं क्योंकि हम जानते हैं कि ज़रूरी का मतलब ज़रूरी होता है।',
      'why.4.title': 'भरोसेमंद सेवा',            'why.4.desc': 'हज़ारों लोगों की मदद की, ऐसी प्रक्रिया जिसे लोग सच में सुझाते हैं।',
      'why.5.title': 'सुरक्षित लेन-देन',          'why.5.desc': 'आपकी जानकारी और भुगतान हर कदम पर सुरक्षित तरीके से संभाला जाता है।',
      'why.6.title': 'पारदर्शी प्रक्रिया',         'why.6.desc': 'कोई छिपा शुल्क नहीं, कोई आश्चर्य नहीं — आपको हमेशा पता रहेगा कि आप कहाँ खड़े हैं।',
      'why.7.title': 'झंझट-मुक्त',              'why.7.desc': 'कतारों और कागज़ी कार्रवाई से बचें। हम इसे बेहद सरल रखते हैं।',
      'why.8.title': 'व्यक्तिगत सहायता',         'why.8.desc': 'एक असली व्यक्ति आपका मार्गदर्शन करती है — धैर्य, गर्मजोशी और सम्मान के साथ।',

      'faq.eyebrow': 'सामान्य प्रश्न',
      'faq.title': 'सवालों के जवाब',
      'faq.sub': 'संपर्क करने से पहले जो कुछ भी आपको जानना चाहिए।',
      'faq.q1': 'आप कौन-सी चीज़ें खरीदते हैं?',
      'faq.a1': 'कई तरह की कीमती चीज़ें — इलेक्ट्रॉनिक्स, सोना-चांदी, आभूषण, लक्ज़री घड़ियाँ, लैपटॉप, स्मार्टफ़ोन, कैमरे, गेमिंग सामान, उपकरण, वाद्य यंत्र, संग्रहणीय वस्तुएं और बहुत कुछ। अगर आप निश्चित नहीं हैं, तो बस पूछें; हम खुशी से देखेंगे।',
      'faq.q2': 'मुझे कितनी जल्दी भुगतान मिलेगा?',
      'faq.a2': 'ज़्यादातर ऑफ़र एक घंटे के भीतर दिए जाते हैं, और स्वीकार करने के बाद हम उसी दिन भुगतान करने का लक्ष्य रखते हैं। समय वस्तु और आपके पसंदीदा भुगतान तरीके के आधार पर थोड़ा भिन्न हो सकता है।',
      'faq.q3': 'क्या कोई बाध्यता है?',
      'faq.a3': 'बिल्कुल नहीं। हमारा मूल्यांकन पूरी तरह मुफ़्त और बिना बाध्यता वाला है। आप बिना किसी लागत और दबाव के कोई भी ऑफ़र मना कर सकते हैं।',
      'faq.q4': 'वस्तु का मूल्य कैसे तय होता है?',
      'faq.a4': 'हम मौजूदा बाज़ार मांग, वस्तु की स्थिति, ब्रांड, मॉडल और तुलनीय बिक्री का आकलन करते हैं। हम हमेशा बताएंगे कि हमने आपके ऑफ़र तक कैसे पहुँचे ताकि यह पूरी तरह पारदर्शी रहे।',
      'faq.q5': 'क्या आप क्षतिग्रस्त वस्तुएं खरीदते हैं?',
      'faq.a5': 'अक्सर, हाँ। कई वस्तुओं की कीमत टूट-फूट या नुकसान के बावजूद बनी रहती है। कुछ ईमानदार तस्वीरें साझा करें और हम आपको बताएंगे कि हम क्या ऑफ़र कर सकते हैं।',
      'faq.q6': 'क्या आप मुझे खरीदने के लिए कोई वस्तु ढूँढने में मदद कर सकते हैं?',
      'faq.a6': 'बिल्कुल। हमें बताएं कि आप क्या खोज रहे हैं और हम इसे अपने भरोसेमंद नेटवर्क के माध्यम से ढूँढेंगे। बस नीचे संपर्क फ़ॉर्म में "खरीदना चाहते हैं" चुनें।',

      'contact.eyebrow': 'शुरू करें',
      'contact.title1': 'तुरंत पैसे चाहिए?',
      'contact.title2': 'आज ही Cash4Value से संपर्क करें।',
      'contact.sub': 'फ़ॉर्म भरें और हम आपको एक निष्पक्ष, बिना बाध्यता वाले ऑफ़र के साथ जल्दी जवाब देंगे।',
      'contact.privacy': 'आपकी जानकारी निजी रहती है और कभी साझा नहीं की जाती। हमेशा गोपनीय।',

      'form.fullName': 'पूरा नाम',
      'form.mobile': 'मोबाइल नंबर',
      'form.email': 'ईमेल',
      'form.city': 'शहर',
      'form.intent': 'आप क्या करना चाहेंगे?',
      'form.sell': 'वस्तु बेचें',
      'form.buy': 'खरीदना चाहते हैं',
      'form.category': 'वस्तु श्रेणी',
      'form.selectCat': 'श्रेणी चुनें',
      'form.other': 'अन्य',
      'form.price': 'अपेक्षित कीमत',
      'form.optional': '(वैकल्पिक)',
      'form.description': 'संक्षिप्त विवरण',
      'form.contactMethod': 'संपर्क का पसंदीदा तरीका',
      'form.cm.phone': 'फ़ोन कॉल',
      'form.cm.whatsapp': 'टेक्स्ट / व्हाट्सएप',
      'form.cm.email': 'ईमेल',
      'form.submit': 'मेरा मुफ़्त ऑफ़र पाएं',
      'form.sending': 'भेजा जा रहा है…',
      'form.disclaimer': 'सबमिट करके, आप अपने अनुरोध के बारे में संपर्क किए जाने से सहमत होते हैं। कभी स्पैम नहीं।',
      'form.successTitle': 'धन्यवाद — हमें मिल गया!',
      'form.successDesc': 'Cash4Value का एक विशेषज्ञ जल्द ही आपके ऑफ़र के साथ आपसे संपर्क करेगा।',
      'form.err.name': 'कृपया अपना नाम दर्ज करें।',
      'form.err.mobileReq': 'कृपया मोबाइल नंबर दर्ज करें।',
      'form.err.mobileValid': 'कृपया एक मान्य नंबर दर्ज करें।',
      'form.err.email': 'कृपया एक मान्य ईमेल दर्ज करें।',
      'form.ph.fullName': 'आपका नाम',
      'form.ph.mobile': 'आपका मोबाइल नंबर',
      'form.ph.email': 'आपका ईमेल',
      'form.ph.city': 'आपका शहर',
      'form.ph.price': 'जैसे, ₹5000',
      'form.ph.description': 'वस्तु के बारे में बताएं — ब्रांड, मॉडल, स्थिति, या आप क्या खोज रहे हैं।',

      'cta.title': 'तुरंत पैसे चाहिए? हम मदद के लिए तैयार हैं।',
      'cta.sub': 'आज ही एक निष्पक्ष, बिना बाध्यता वाला ऑफ़र पाएं और अपनी चीज़ों को उस नकद में बदलें जिसकी आपको ज़रूरत है — सम्मान और तेज़ी के साथ।',
      'cta.btn': 'आज ही Cash4Value से संपर्क करें',

      'footer.about': 'लोगों को उनकी चीज़ों की कीमत पाने में मदद करना — जल्दी, निष्पक्षता और सम्मान के साथ। ज़रूरत के पलों में एक भरोसेमंद साथी।',
      'footer.quick': 'त्वरित लिंक',
      'footer.whyLink': 'हम ही क्यों',
      'footer.services': 'सेवाएं',
      'footer.sell': 'अपनी वस्तुएं बेचें',
      'footer.freeVal': 'मुफ़्त मूल्यांकन',
      'footer.sameDay': 'उसी दिन भुगतान',
      'footer.touch': 'संपर्क करें',
      'footer.hours': 'सोम–शनि उपलब्ध · सुबह 8 – रात 8',
      'footer.fast': 'तेज़, गोपनीय जवाब',
      'footer.getOffer': 'ऑफ़र पाएं',
      'footer.rights': 'सर्वाधिकार सुरक्षित।',
      'footer.privacy': 'गोपनीयता नीति',
      'footer.terms': 'सेवा की शर्तें',
    },

    /* -------------------- मराठी (MARATHI) -------------------- */
    mr: {
      'a11y.skip': 'मजकुराकडे जा',
      'meta.title': 'Cash4Value — तुमच्या मौल्यवान वस्तूंचे त्वरित रोखीत रूपांतर करा',
      'meta.desc': 'तातडीने पैशांची गरज आहे? Cash4Value तुमच्या मौल्यवान वस्तू — इलेक्ट्रॉनिक्स, सोने, दागिने, घड्याळे, लॅपटॉप आणि बरेच काही — योग्य बाजारभावाने लवकर खरेदी करते. पारदर्शक, सुरक्षित आणि जलद. आजच मोफत ऑफर मिळवा.',

      'topbar.badge': 'जलद, न्याय्य आणि गोपनीय मूल्यांकन — सहसा एका तासाच्या आत.',

      'nav.how': 'हे कसे चालते',
      'nav.what': 'आम्ही काय खरेदी करतो',
      'nav.why': 'आम्हीच का',
      'nav.faq': 'सामान्य प्रश्न',
      'nav.cta': 'ऑफर मिळवा',
      'nav.mobileCta': 'तातडीने पैसे हवेत? आमच्याशी संपर्क साधा',
      'nav.language': 'भाषा',

      'hero.badge': 'विश्वासार्ह मूल्यांकन · त्याच दिवशी पैसे',
      'hero.title1': 'तुमच्या मौल्यवान वस्तूंमधून मिळवा',
      'hero.title2': 'त्वरित रोख',
      'hero.sub': 'तातडीने पैशांची गरज आहे? Cash4Value तुमच्याकडे आधीच असलेल्या वस्तू खरेदी करते — जलद, न्याय्य आणि संपूर्ण पारदर्शकतेने. थोडी माहिती द्या आणि कोणत्याही बंधनाशिवाय ऑफर मिळवा, बहुतेकदा एका तासाच्या आत.',
      'hero.sell': 'वस्तू विका',
      'hero.contact': 'संपर्क साधा',
      'hero.card.title': 'तुमचे मूल्यांकन',
      'hero.card.live': 'लाइव्ह',
      'hero.card.est': 'अंदाजे ऑफर',
      'hero.card.fair': 'योग्य बाजारमूल्य · किरकोळचे 82%',
      'hero.card.item': 'वस्तू',
      'hero.card.itemVal': 'लक्झरी घड्याळ',
      'hero.card.cond': 'स्थिती',
      'hero.card.condVal': 'उत्कृष्ट',
      'hero.card.payout': 'पैसे',
      'hero.card.payoutVal': 'त्याच दिवशी',
      'hero.float.accepted': 'ऑफर स्वीकारली',
      'hero.float.paid': 'काही मिनिटांत पैसे',
      'hero.float.noOblig': 'कोणतेही बंधन नाही',
      'hero.float.decline': 'कधीही नकार द्या',

      'trust.secure': 'पडताळलेले आणि सुरक्षित',
      'trust.payout': 'त्याच दिवशी पैसे',
      'trust.confidential': 'गोपनीय प्रक्रिया',
      'trust.fair': 'योग्य बाजारभाव',

      'how.eyebrow': 'हे कसे चालते',
      'how.title': 'तीन सोप्या टप्प्यांत रोख',
      'how.sub': 'रांगा नाहीत, दबाव नाही, क्लिष्ट शब्द नाहीत. फक्त तुमच्यासाठी तयार केलेली स्पष्ट, सन्मानजनक प्रक्रिया.',
      'how.s1.title': 'संपर्क साधा',
      'how.s1.desc': 'आमच्या सोप्या फॉर्मद्वारे संपर्क साधा. सुरुवात करायला एक मिनिटापेक्षा कमी वेळ लागतो.',
      'how.s2.title': 'तपशील शेअर करा',
      'how.s2.desc': 'तुमच्या वस्तूबद्दल सांगा — मूल्यांकनासाठी आम्हाला फक्त काही फोटो आणि थोडक्यात माहिती हवी.',
      'how.s3.title': 'ऑफर मिळवा आणि पैसे घ्या',
      'how.s3.desc': 'आमची न्याय्य, बंधनमुक्त ऑफर स्वीकारा आणि तुमचे पैसे लवकर मिळवा — बहुतेकदा त्याच दिवशी.',
      'how.cta': 'तुमचे मूल्यांकन सुरू करा',

      'buy.eyebrow': 'आम्ही काय खरेदी करतो',
      'buy.title': 'विविध प्रकारच्या मौल्यवान वस्तूंचे स्वागत',
      'buy.sub': 'या आम्ही स्वीकारत असलेल्या श्रेणींची उदाहरणे आहेत — विक्रीसाठीची उत्पादने नाहीत. ती तुमच्याकडे असेल आणि तिचे मूल्य असेल, तर आम्ही आनंदाने पाहू.',

      'cat.electronics': 'इलेक्ट्रॉनिक्स',       'catd.electronics': 'टॅबलेट, टीव्ही, ऑडिओ आणि स्मार्ट डिव्हाइस',
      'cat.gold': 'सोने आणि दागिने',            'catd.gold': 'दागिने, चांदी आणि उत्तम वस्तू',
      'cat.watches': 'लक्झरी घड्याळे',           'catd.watches': 'डिझायनर आणि प्रीमियम घड्याळे',
      'cat.laptops': 'लॅपटॉप',                  'catd.laptops': 'अल्ट्राबुक, मॅकबुक आणि पीसी',
      'cat.smartphones': 'स्मार्टफोन',           'catd.smartphones': 'सर्व प्रमुख ब्रँड आणि मॉडेल',
      'cat.cameras': 'कॅमेरे',                  'catd.cameras': 'DSLR, मिररलेस आणि लेन्स',
      'cat.gaming': 'गेमिंग',                   'catd.gaming': 'कन्सोल आणि प्रीमियम अॅक्सेसरीज',
      'cat.appliances': 'उपकरणे',              'catd.appliances': 'प्रीमियम घरगुती आणि स्वयंपाकघरातील वस्तू',
      'cat.music': 'वाद्ये',                    'catd.music': 'गिटार, कीबोर्ड आणि बरेच काही',
      'cat.collectibles': 'संग्रहणीय वस्तू',      'catd.collectibles': 'दुर्मिळ वस्तू आणि उत्तम स्मृतिवस्तू',
      'cat.luxury': 'लक्झरी वस्तू',             'catd.luxury': 'डिझायनर बॅग्ज आणि प्रीमियम वस्तू',
      'cat.more': 'आणि बरेच काही…',            'catd.more': 'इथे दिसत नाही? फक्त आम्हाला विचारा.',

      'why.eyebrow': 'Cash4Value च का',
      'why.title': 'रोख मिळवण्याचा उत्तम मार्ग',
      'why.sub': 'आम्ही Cash4Value अशा प्रकारे तयार केले आहे की ते व्यवहारापेक्षा मदतीसारखे वाटावे — तुम्हाला योग्य असलेल्या न्याय्यतेने आणि विवेकाने.',
      'why.1.title': 'त्वरित रोख ऑफर',          'why.1.desc': 'जलद स्पष्ट ऑफर मिळवा — लांबलचक घासाघीस किंवा प्रतीक्षा नाही.',
      'why.2.title': 'योग्य बाजार मूल्यांकन',     'why.2.desc': 'प्रत्यक्ष बाजार माहितीवर आधारित पारदर्शक किंमत — कधीही कमी भावाची चलाखी नाही.',
      'why.3.title': 'जलद प्रतिसाद',            'why.3.desc': 'आम्ही लवकर उत्तर देतो कारण तातडीचे म्हणजे तातडीचे हे आम्हाला माहीत आहे.',
      'why.4.title': 'विश्वासार्ह सेवा',          'why.4.desc': 'हजारो लोकांना मदत केली, अशी प्रक्रिया जी लोक खरोखर सुचवतात.',
      'why.5.title': 'सुरक्षित व्यवहार',          'why.5.desc': 'तुमची माहिती आणि पैसे प्रत्येक टप्प्यावर सुरक्षितपणे हाताळले जातात.',
      'why.6.title': 'पारदर्शक प्रक्रिया',         'why.6.desc': 'कोणतेही छुपे शुल्क नाही, कोणतेही आश्चर्य नाही — तुम्हाला नेहमी स्थिती माहीत असेल.',
      'why.7.title': 'त्रासमुक्त',              'why.7.desc': 'रांगा आणि कागदपत्रे टाळा. आम्ही ते अगदी सोपे ठेवतो.',
      'why.8.title': 'वैयक्तिक मदत',           'why.8.desc': 'एक खरी व्यक्ती तुम्हाला मार्गदर्शन करते — संयम, आपुलकी आणि आदराने.',

      'faq.eyebrow': 'सामान्य प्रश्न',
      'faq.title': 'प्रश्नांची उत्तरे',
      'faq.sub': 'संपर्क साधण्यापूर्वी तुम्हाला माहीत असावे असे सर्व काही.',
      'faq.q1': 'तुम्ही कोणत्या वस्तू खरेदी करता?',
      'faq.a1': 'विविध प्रकारच्या मौल्यवान वस्तू — इलेक्ट्रॉनिक्स, सोने-चांदी, दागिने, लक्झरी घड्याळे, लॅपटॉप, स्मार्टफोन, कॅमेरे, गेमिंग साहित्य, उपकरणे, वाद्ये, संग्रहणीय वस्तू आणि बरेच काही. खात्री नसल्यास फक्त विचारा; आम्ही आनंदाने पाहू.',
      'faq.q2': 'मला किती लवकर पैसे मिळतील?',
      'faq.a2': 'बहुतेक ऑफर एका तासाच्या आत दिल्या जातात, आणि तुम्ही स्वीकारल्यावर आम्ही त्याच दिवशी पैसे देण्याचे उद्दिष्ट ठेवतो. वेळ वस्तू आणि तुमच्या पसंतीच्या पेमेंट पद्धतीनुसार थोडा बदलू शकतो.',
      'faq.q3': 'काही बंधन आहे का?',
      'faq.a3': 'अजिबात नाही. आमचे मूल्यांकन पूर्णपणे मोफत आणि बंधनमुक्त आहे. तुम्ही कोणतीही ऑफर कोणत्याही खर्चाशिवाय आणि दबावाशिवाय नाकारू शकता.',
      'faq.q4': 'वस्तूचे मूल्य कसे ठरवले जाते?',
      'faq.a4': 'आम्ही सध्याची बाजारातील मागणी, वस्तूची स्थिती, ब्रँड, मॉडेल आणि तत्सम विक्रीचे मूल्यांकन करतो. आम्ही तुमच्या ऑफरपर्यंत कसे पोहोचलो हे नेहमी समजावून सांगू जेणेकरून ते पूर्णपणे पारदर्शक राहील.',
      'faq.q5': 'तुम्ही खराब झालेल्या वस्तू खरेदी करता का?',
      'faq.a5': 'बहुतेकदा, होय. अनेक वस्तूंचे मूल्य झीज किंवा नुकसान असूनही टिकून राहते. काही प्रामाणिक फोटो शेअर करा आणि आम्ही काय ऑफर करू शकतो ते सांगू.',
      'faq.q6': 'खरेदीसाठी एखादी वस्तू शोधण्यात तुम्ही मला मदत कराल का?',
      'faq.a6': 'नक्कीच. तुम्ही काय शोधत आहात ते सांगा आणि आम्ही आमच्या विश्वासार्ह नेटवर्कद्वारे ते मिळवू. फक्त खालील संपर्क फॉर्ममध्ये "खरेदी करायची आहे" निवडा.',

      'contact.eyebrow': 'सुरुवात करा',
      'contact.title1': 'तातडीने पैसे हवेत?',
      'contact.title2': 'आजच Cash4Value शी संपर्क साधा.',
      'contact.sub': 'फॉर्म भरा आणि आम्ही तुम्हाला न्याय्य, बंधनमुक्त ऑफरसह लवकर उत्तर देऊ.',
      'contact.privacy': 'तुमची माहिती खाजगी राहते आणि कधीही शेअर केली जात नाही. नेहमी गोपनीय.',

      'form.fullName': 'पूर्ण नाव',
      'form.mobile': 'मोबाइल नंबर',
      'form.email': 'ईमेल',
      'form.city': 'शहर',
      'form.intent': 'तुम्हाला काय करायचे आहे?',
      'form.sell': 'वस्तू विका',
      'form.buy': 'खरेदी करायची आहे',
      'form.category': 'वस्तू श्रेणी',
      'form.selectCat': 'श्रेणी निवडा',
      'form.other': 'इतर',
      'form.price': 'अपेक्षित किंमत',
      'form.optional': '(पर्यायी)',
      'form.description': 'थोडक्यात माहिती',
      'form.contactMethod': 'संपर्काची पसंतीची पद्धत',
      'form.cm.phone': 'फोन कॉल',
      'form.cm.whatsapp': 'मेसेज / व्हॉट्सअॅप',
      'form.cm.email': 'ईमेल',
      'form.submit': 'माझी मोफत ऑफर मिळवा',
      'form.sending': 'पाठवत आहे…',
      'form.disclaimer': 'सबमिट करून, तुम्ही तुमच्या विनंतीबाबत संपर्क साधण्यास संमती देता. कधीही स्पॅम नाही.',
      'form.successTitle': 'धन्यवाद — आम्हाला मिळाले!',
      'form.successDesc': 'Cash4Value चा तज्ज्ञ लवकरच तुमच्या ऑफरसह तुमच्याशी संपर्क साधेल.',
      'form.err.name': 'कृपया तुमचे नाव प्रविष्ट करा.',
      'form.err.mobileReq': 'कृपया मोबाइल नंबर प्रविष्ट करा.',
      'form.err.mobileValid': 'कृपया वैध नंबर प्रविष्ट करा.',
      'form.err.email': 'कृपया वैध ईमेल प्रविष्ट करा.',
      'form.ph.fullName': 'तुमचे नाव',
      'form.ph.mobile': 'तुमचा मोबाइल नंबर',
      'form.ph.email': 'तुमचा ईमेल',
      'form.ph.city': 'तुमचे शहर',
      'form.ph.price': 'उदा., ₹5000',
      'form.ph.description': 'वस्तूबद्दल सांगा — ब्रँड, मॉडेल, स्थिती, किंवा तुम्ही काय शोधत आहात.',

      'cta.title': 'तातडीने पैसे हवेत? आम्ही मदतीसाठी तयार आहोत.',
      'cta.sub': 'आजच न्याय्य, बंधनमुक्त ऑफर मिळवा आणि तुमच्या वस्तूंचे तुम्हाला हव्या असलेल्या रोखीत रूपांतर करा — सन्मानाने आणि वेगाने.',
      'cta.btn': 'आजच Cash4Value शी संपर्क साधा',

      'footer.about': 'लोकांना त्यांच्या वस्तूंचे मूल्य मिळवण्यात मदत करणे — जलद, न्याय्य आणि आदराने. तातडीच्या क्षणी एक विश्वासार्ह साथीदार.',
      'footer.quick': 'जलद दुवे',
      'footer.whyLink': 'आम्हीच का',
      'footer.services': 'सेवा',
      'footer.sell': 'तुमच्या वस्तू विका',
      'footer.freeVal': 'मोफत मूल्यांकन',
      'footer.sameDay': 'त्याच दिवशी पैसे',
      'footer.touch': 'संपर्क साधा',
      'footer.hours': 'सोम–शनि उपलब्ध · सकाळी 8 – रात्री 8',
      'footer.fast': 'जलद, गोपनीय प्रतिसाद',
      'footer.getOffer': 'ऑफर मिळवा',
      'footer.rights': 'सर्व हक्क राखीव.',
      'footer.privacy': 'गोपनीयता धोरण',
      'footer.terms': 'सेवा अटी',
    },
  };

  var LABELS = { en: 'EN', hi: 'हिंदी', mr: 'मराठी' };
  var SUPPORTED = ['en', 'hi', 'mr'];
  var STORAGE_KEY = 'c4v_lang';

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
    var dict = translations[lang];
    var fallback = translations.en;

    document.documentElement.lang = lang;
    document.body.classList.toggle('lang-deva', lang === 'hi' || lang === 'mr');

    // text nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = dict[key] != null ? dict[key] : fallback[key];
      if (val != null) el.textContent = val;
    });

    // placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      var val = dict[key] != null ? dict[key] : fallback[key];
      if (val != null) el.setAttribute('placeholder', val);
    });

    // <title> + meta description
    if (dict['meta.title']) document.title = dict['meta.title'];
    var md = document.querySelector('meta[name="description"]');
    if (md && dict['meta.desc']) md.setAttribute('content', dict['meta.desc']);

    // switcher UI
    var cur = document.getElementById('langCurrent');
    if (cur) cur.textContent = LABELS[lang];
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
    });

    window.__c4vLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  // Public helper used by script.js
  window.I18N = {
    apply: applyLang,
    t: function (key) {
      var d = translations[window.__c4vLang || 'en'] || translations.en;
      return d[key] != null ? d[key] : (translations.en[key] != null ? translations.en[key] : key);
    },
  };

  function detectInitial() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.language || 'en').toLowerCase();
    if (nav.indexOf('mr') === 0) return 'mr';
    if (nav.indexOf('hi') === 0) return 'hi';
    return 'en';
  }

  function initSwitcher() {
    var wrap = document.getElementById('langWrap');
    var btn = document.getElementById('langBtn');
    var menu = document.getElementById('langMenu');

    function closeMenu() {
      if (menu) menu.classList.add('hidden');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }

    if (btn && menu) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = menu.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', String(!open));
      });
      document.addEventListener('click', function (e) {
        if (wrap && !wrap.contains(e.target)) closeMenu();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
      });
    }

    // all language buttons (desktop dropdown + mobile grid)
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () {
        applyLang(b.getAttribute('data-lang'));
        closeMenu();
      });
    });
  }

  function boot() {
    initSwitcher();
    applyLang(detectInitial());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
