'use strict';
(() => {
// English source text | Somali | Arabic | Norwegian Bokmål.
const rows = `
RECOMMENDED FOR GETTING STARTED|LAGU TALIYO BILOWGA|موصى بها للبداية|ANBEFALT FOR Å KOMME I GANG
Homepage|Bogga hore|الصفحة الرئيسية|Forside
Product catalogue|Kataloogga alaabta|كتالوج المنتجات|Produktkatalog
Made for where|Loo sameeyey halka|مصمم لما|Laget for dit
you’re going.|aad u socoto.|تطمح إليه.|du skal.
A clear, personal introduction for a local service business. Show what you do, where you work and how customers can reach you.|Hordhac cad oo ganacsi adeeg deegaan ah. Tus waxa aad qabato, goobtaada iyo sida laguula soo xidhiidho.|تعريف واضح وشخصي لخدماتك المحلية. اعرض ما تقدمه ومكان عملك وطريقة التواصل.|En tydelig og personlig presentasjon av en lokal tjenestebedrift. Vis hva du gjør, hvor du jobber og hvordan kundene kan nå deg.
A distinctive introduction|Hordhac gaar ah|تعريف مميز|En særpreget presentasjon
Contact information and location|Xogta xidhiidhka iyo goobta|بيانات التواصل والموقع|Kontaktinformasjon og plassering
A clear enquiry route|Hab cad oo weydiinta ah|مسار واضح للاستفسار|En tydelig vei til kontakt
A design direction for a complete online store. The actual build is scoped around customer accounts, checkout, orders, inventory and shipping integrations.|Fikrad naqshadeed oo dukaan dhammaystiran. Dhismaha dhabta ah waxaa lagu qeexaa akoonno, checkout, dalabaad, kayd iyo rarid.|اتجاه تصميم لمتجر متكامل. يحدد التنفيذ الفعلي وفق الحسابات والدفع والطلبات والمخزون وتكاملات الشحن.|En designretning for en komplett nettbutikk. Den faktiske løsningen avgrenses rundt kontoer, utsjekking, ordrer, lager og fraktintegrasjoner.
Customer accounts and online payment|Akoonnada macaamiisha iyo lacag-bixin onlayn|حسابات العملاء والدفع الإلكتروني|Kundekontoer og nettbetaling
Order and inventory management|Maamulka dalabaadka iyo kaydka|إدارة الطلبات والمخزون|Ordre- og lagerstyring
Notifications and shipping updates|Ogeysiisyada iyo xogta rarista|الإشعارات وتحديثات الشحن|Varsler og leveringsoppdateringer
A familiar language. A shared ambition.|Luqad aad taqaan. Himilo aynu wadaagno.|لغة مألوفة. وطموح مشترك.|Et kjent språk. En felles ambisjon.
Skip to content|U gudub nuxurka|انتقل إلى المحتوى|Hopp til innhold
Our approach|Habkayaga|نهجنا|Vår tilnærming
Packages|Xirmooyinka|الباقات|Pakker
Possibilities|Fursadaha|الإمكانيات|Muligheter
FAQs|Su’aalaha|الأسئلة الشائعة|Vanlige spørsmål
Let’s talk|Aan wada hadalno|لنتحدث|La oss snakke
How it works|Sida ay u shaqayso|كيف نعمل|Slik fungerer det
Start a conversation ↗|Bilow wada hadal ↗|ابدأ محادثة ↗|Start en samtale ↗
SMALL BUSINESSES. BIG POSSIBILITIES.|GANACSIYO YARYAR. FURSADO WAAWEYN.|أعمال صغيرة. إمكانيات كبيرة.|SMÅ BEDRIFTER. STORE MULIGHETER.
Your next|Tallaabadaada|خطوتك|Ditt neste
chapter,|xigta,|القادمة،|kapittel,
online.|onlayn.|عبر الإنترنت.|på nett.
You’ve built something worth sharing.|Waxaad dhistay wax mudan in la wadaago.|بنيت عملاً يستحق أن يعرفه الناس.|Du har skapt noe som fortjener å bli sett.
Let’s give it a website that feels like|Aan u samayno degel adiga kuu eg|لنمنحه موقعاً يعبر عن|La oss gi det en nettside som gjenspeiler
you.|adiga.|هويتك.|deg.
Find your starting point|Dooro halka aad ka bilaabayso|اختر نقطة البداية|Finn ditt utgangspunkt
Explore the possibilities|Sahami fursadaha|اكتشف الإمكانيات|Utforsk mulighetene
For businesses in the UK, Norway & beyond.|Ganacsiyada UK, Norway iyo meel kasta.|للأعمال في بريطانيا والنرويج وخارجهما.|For bedrifter i Storbritannia, Norge og resten av verden.
GOOD DESIGN. REAL-WORLD PURPOSE.|NAQSHAD FIICAN. UJEEDDO DHAB AH.|تصميم جميل. وهدف عملي.|GOD DESIGN. ET PRAKTISK FORMÅL.
THE NIMBUS SHOWCASE|TUSAALEYAASHA NIMBUS|معرض NIMBUS|NIMBUS UTSTILLING
Visit live website ↗|Fur degelka tooska ah ↗|زيارة الموقع المباشر ↗|Besøk nettsiden ↗
Website|Degel|موقع|Nettside
Dashboard|Maamul|لوحة الإدارة|Kontrollpanel
Online store|Dukaan onlayn|متجر إلكتروني|Nettbutikk
Website: Sample Boutique, live. Dashboard & online store: illustrative concepts.|Degel: Sample Boutique oo toos ah. Maamul iyo dukaan: tusaalooyin naqshadeed.|الموقع: Sample Boutique مباشر. لوحة الإدارة والمتجر: تصورات توضيحية.|Nettside: Sample Boutique, publisert. Kontrollpanel og nettbutikk: illustrerende konsepter.
HUMAN CONNECTION. THOUGHTFUL TECHNOLOGY.|XIDHIIDH BINI’AADAN. TIGNOOLAJI FIKIR LEH.|تواصل إنساني. وتقنية مدروسة.|MENNESKELIG KONTAKT. GJENNOMTENKT TEKNOLOGI.
SCROLL TO EXPLORE|HOOS U ROG OO SAHAMI|مرر للاستكشاف|RULL FOR Å UTFORSKE
A LITTLE ABOUT US|WAX YAR OO NAGU SAABSAN|نبذة عنا|LITT OM OSS
Built around your business.|Waxaa loo dhisay ganacsigaaga.|مصمم حول عملك.|Bygget rundt bedriften din.
And the people behind it.|Iyo dadka ka dambeeya.|والأشخاص وراءه.|Og menneskene bak den.
A neighbourhood shop. A new idea. A family business ready for its next step. We turn what you do into a clear, welcoming online experience—without making it complicated.|Dukaan xaafadeed. Fikrad cusub. Ganacsi qoys oo tallaabada xigta diyaar u ah. Waxaan shaqadaada u beddelnaa waayo-aragnimo onlayn ah oo cad oo soo dhowayn leh.|متجر في الحي، فكرة جديدة، أو مشروع عائلي يستعد للنمو. نحول ما تقدمه إلى تجربة واضحة ومرحبة عبر الإنترنت، بخطوات بسيطة.|En nærbutikk. En ny idé. En familiebedrift klar for neste steg. Vi gjør det du tilbyr til en tydelig og innbydende opplevelse på nett, uten å gjøre det komplisert.
Our local roots shape a personal, community-minded approach. Our door is open to businesses of every background, locally and internationally.|Asalkeenna deegaanka ayaa qaabeeya hab shakhsi ah oo bulshada daneeya. Waxaan soo dhowaynaa ganacsiyada asal kasta leh ee UK, Norway iyo dunida oo dhan.|جذورنا المحلية تلهم نهجاً شخصياً يهتم بالمجتمع. نرحب بالأعمال من كل الخلفيات في بريطانيا والنرويج والعالم.|Våre lokale røtter preger en personlig tilnærming med fellesskapet i sentrum. Vi ønsker bedrifter med alle bakgrunner velkommen, i Storbritannia, Norge og internasjonalt.
A website that feels like you.|Degel adiga kuu eg.|موقع يعبر عن هويتك.|En nettside som føles som deg.
Your story, your products, your personality. Designed to belong to your business.|Sheekadaada, alaabtaada, shakhsiyaddaada. Naqshad ku habboon ganacsigaaga.|قصتك ومنتجاتك وشخصيتك. تصميم ينتمي إلى عملك.|Din historie, dine produkter, din personlighet. Designet for bedriften din.
Tools you actually need.|Qalabka aad u baahan tahay.|أدوات تحتاجها فعلاً.|Verktøyene du trenger.
A simple catalogue, a product dashboard or a complete store. Start with what fits.|Kataloog fudud, maamul alaabeed ama dukaan dhammaystiran. Ku bilow waxa kugu habboon.|كتالوج بسيط أو لوحة منتجات أو متجر متكامل. ابدأ بما يناسبك.|En enkel katalog, et produktpanel eller en komplett nettbutikk. Begynn med det som passer.
People you can talk to.|Dad aad la hadli karto.|أشخاص يمكنك التحدث معهم.|Folk du kan snakke med.
A direct conversation, a clear scope and someone to guide you through the process.|Wada hadal toos ah, shaqo si cad loo qeexay iyo cid ku hagta.|محادثة مباشرة، نطاق واضح، وشخص يرشدك خلال الخطوات.|Direkte kontakt, et tydelig omfang og noen som veileder deg gjennom prosessen.
THREE WAYS FORWARD|SADDEX WADDO OO HORE LOO MARO|ثلاث طرق للتقدم|TRE VEIER VIDERE
A good fit.|Wax kugu habboon.|ما يناسبك.|En god match.
Not more than you need.|Kaliya waxa aad u baahan tahay.|بقدر ما تحتاج.|Akkurat det du trenger.
Choose the starting point that matches how you work. We’ll agree the details together before we build.|Dooro bilow ku habboon shaqadaada. Faahfaahinta ayaan isla oggolaanaynaa ka hor dhismaha.|اختر البداية المناسبة لطريقة عملك. نتفق على التفاصيل معاً قبل البناء.|Velg utgangspunktet som passer måten du jobber på. Vi avtaler detaljene sammen før vi bygger.
01 / GET ONLINE|01 / ONLAYN NOQO|01 / انطلق عبر الإنترنت|01 / KOM PÅ NETT
Basic Website|Degelka Aasaasiga ah|الموقع الأساسي|Grunnleggende nettside
A great first website for your business.|Degel bilow fiican u ah ganacsigaaga.|موقع أول رائع لعملك.|En flott første nettside for bedriften din.
Let the conversation happen on WhatsApp.|Wada hadalku ha ka dhaco WhatsApp.|واجعل التواصل عبر WhatsApp.|La samtalen fortsette på WhatsApp.
website setup · USD|samaynta degelka · USD|إنشاء الموقع · USD|oppsett av nettside · USD
Start your business website|Bilow degelka ganacsigaaga|ابدأ موقع عملك|Start bedriftens nettside
YOUR STARTING POINT|BILOWGAAGA|نقطة البداية|DITT UTGANGSPUNKT
Professional, mobile-friendly website|Degel xirfad leh oo moobilka ku habboon|موقع احترافي متوافق مع الجوال|Profesjonell, mobilvennlig nettside
Product catalogue: up to 20 initial products|Kataloog: ilaa 20 alaabood bilowga|كتالوج: حتى 20 منتجاً عند الإطلاق|Produktkatalog: opptil 20 produkter ved oppstart
WhatsApp links for order enquiries|Xidhiidhada WhatsApp ee dalabaadka|روابط WhatsApp للاستفسار عن الطلبات|WhatsApp-lenker for bestillingshenvendelser
Contact details & Google Maps location|Xogta xidhiidhka iyo goobta Google Maps|بيانات التواصل والموقع على Google Maps|Kontaktinformasjon og plassering i Google Maps
Want a change? We handle product and website updates for an additional fee. No owner dashboard or online payments.|Isbeddel ma rabtaa? Annaga ayaa cusboonaysiinayna alaabta iyo degelka lacag dheeraad ah. Ma laha maamul mulkiile ama lacag-bixin onlayn ah.|تريد تعديلاً؟ ننفذ تحديثات المنتجات والموقع مقابل رسوم إضافية. لا تشمل لوحة للمالك أو دفعاً إلكترونياً.|Ønsker du endringer? Vi oppdaterer produkter og nettsiden mot et tillegg. Eierpanel og nettbetaling er ikke inkludert.
MORE CONTROL, SAME PERSONAL TOUCH|MAAMUL BADAN, DARYEELKII OO KALE|تحكم أكبر، بنفس العناية الشخصية|MER KONTROLL, SAMME PERSONLIGE OPPFØLGING
02 / TAKE THE REINS|02 / ADIGU MAAMUL|02 / تولَّ الإدارة|02 / TA KONTROLL
Business Website|Degelka Ganacsiga|موقع الأعمال|Bedriftsnettside
+ Dashboard|+ Maamul|+ لوحة إدارة|+ Kontrollpanel
Your website. Your products.|Degelkaaga. Alaabtaada.|موقعك. منتجاتك.|Din nettside. Dine produkter.
Make everyday changes yourself.|Isbeddelka maalinlaha ah adigu samee.|نفذ التعديلات اليومية بنفسك.|Gjør daglige endringer selv.
website & dashboard setup · USD|degel iyo maamul · USD|إنشاء الموقع ولوحة الإدارة · USD|oppsett av nettside og kontrollpanel · USD
Build with Business|Dooro Ganacsi|اختر باقة الأعمال|Velg bedriftspakken
EVERYTHING IN BASIC, PLUS|WAX WALBA OO AASAASIGA AH, IYO|كل ما في الأساسية، إضافة إلى|ALT I GRUNNPAKKEN, PLUSS
Private product management dashboard|Maamul gaar ah oo alaabta lagu maareeyo|لوحة خاصة لإدارة المنتجات|Privat kontrollpanel for produkter
Up to 50 initial products uploaded|Ilaa 50 alaabood oo bilowga la geliyo|إضافة حتى 50 منتجاً عند الإطلاق|Opptil 50 produkter lagt inn ved oppstart
Add & remove products yourself|Adigu ku dar oo ka saar alaabta|أضف المنتجات واحذفها بنفسك|Legg til og fjern produkter selv
Edit prices, photos, descriptions & categories|Beddel qiimaha, sawirrada, sharaxaadda iyo qaybaha|عدّل الأسعار والصور والأوصاف والتصنيفات|Rediger priser, bilder, beskrivelser og kategorier
Customers order through WhatsApp|Macaamiishu waxay ka dalbadaan WhatsApp|يطلب العملاء عبر WhatsApp|Kundene bestiller via WhatsApp
A product dashboard, not an online payment system. No customer checkout or payment processing in this package.|Waa maamul alaabeed. Xirmadan kuma jiraan checkout iyo lacag-bixin onlayn ah.|لوحة لإدارة المنتجات. لا تشمل هذه الباقة إتمام الشراء أو معالجة المدفوعات الإلكترونية.|Et panel for produkter. Pakken inkluderer ikke utsjekking eller behandling av nettbetalinger.
03 / SELL ONLINE|03 / ONLAYN KU IIBI|03 / بع عبر الإنترنت|03 / SELG PÅ NETT
Premium|Heer Sare|المتميزة|Premium
E-Commerce|Ganacsi Elektaroonig ah|التجارة الإلكترونية|Netthandel
A complete shopping journey.|Waayo-aragnimo iibsi oo dhammaystiran.|رحلة تسوق متكاملة.|En komplett handleopplevelse.
From the first click to the next order.|Guji koowaad ilaa dalabka xiga.|من أول نقرة إلى الطلب التالي.|Fra første klikk til neste bestilling.
STARTING AT|LAGA BILAABO|ابتداءً من|FRA
 e-commerce setup · USD|samaynta dukaanka · USD|إنشاء المتجر · USD|oppsett av nettbutikk · USD
Plan your online store|Qorshee dukaankaaga|خطط لمتجرك الإلكتروني|Planlegg nettbutikken din
A CONNECTED STORE EXPERIENCE|DUKAAN ISKU XIDHAN|تجربة متجر مترابطة|EN SAMMENHENGENDE BUTIKKOPPLEVELSE
Up to 100 initial products uploaded|Ilaa 100 alaabood oo bilowga la geliyo|إضافة حتى 100 منتج عند الإطلاق|Opptil 100 produkter lagt inn ved oppstart
Customer accounts & shopping cart|Akoonnada macaamiisha iyo gaadhiga wax-iibsiga|حسابات العملاء وسلة التسوق|Kundekontoer og handlekurv
Online payments & shipping addresses|Lacag-bixin onlayn iyo cinwaannada rarista|الدفع الإلكتروني وعناوين الشحن|Nettbetaling og leveringsadresser
Order dashboard & inventory management|Maamulka dalabaadka iyo kaydka|لوحة الطلبات وإدارة المخزون|Ordrepanel og lagerstyring
Order notifications & shipping updates / tracking|Ogeysiisyada dalabaadka iyo la socodka rarista|إشعارات الطلبات وتحديثات الشحن والتتبع|Ordrevarsler og leveringsoppdateringer / sporing
Final pricing depends on the agreed features and integrations. Payment provider and shipping service costs are separate.|Qiimaha kama dambaysta ahi wuxuu ku xiran yahay hawlaha iyo isku xidhka lagu heshiiyo. Kharashyada lacag-bixiyaha iyo raristu waa gaar.|السعر النهائي يعتمد على الميزات والتكاملات المتفق عليها. تكاليف مزود الدفع والشحن منفصلة.|Endelig pris avhenger av avtalte funksjoner og integrasjoner. Kostnader til betalingsleverandør og frakt kommer i tillegg.
Clear from the start.|Bilowgaba cad.|وضوح منذ البداية.|Tydelig fra starten.
Prices are in US dollars. Hosting, domain registration, maintenance and ongoing support are separate and quoted before you commit. Product counts refer to the initial upload, not a promise of unlimited ongoing data entry.|Qiimuhu waa doolarka Maraykanka. Hosting, domain, dayactir iyo taageero joogto ah waa gaar, qiimahoodana waa la isla oggolaanayaa ka hor heshiiska. Tirada alaabtu waa gelinta bilowga, ma aha gelin aan xad lahayn oo joogto ah.|الأسعار بالدولار الأمريكي. الاستضافة والنطاق والصيانة والدعم المستمر منفصلة ويحدد سعرها قبل الالتزام. أعداد المنتجات تخص الإدخال الأولي، ولا تعني إدخال بيانات مستمراً بلا حدود.|Prisene er i amerikanske dollar. Hosting, domeneregistrering, vedlikehold og løpende støtte prises separat før du forplikter deg. Produktantall gjelder første innlegging, ikke ubegrenset løpende registrering.
See the packages side by side|Is barbar dhig xirmooyinka|قارن الباقات جنباً إلى جنب|Sammenlign pakkene
Website package features and initial product uploads|Hawlaha xirmooyinka iyo gelinta alaabta bilowga|ميزات الباقات وإدخال المنتجات الأولي|Pakkefunksjoner og første produktinnlegging
What matters to you|Waxa adiga muhiimka kuu ah|ما يهمك|Det som betyr noe for deg
Basic|Aasaasi|الأساسية|Grunnpakke
Business|Ganacsi|الأعمال|Bedrift
Setup price (USD)|Qiimaha samaynta (USD)|سعر الإنشاء (USD)|Oppsettspris (USD)
From $1,500+|Laga bilaabo $1,500+|ابتداءً من $1,500+|Fra $1,500+
Initial product uploads|Alaabta bilowga la geliyo|المنتجات عند الإطلاق|Produkter ved oppstart
Up to 20|Ilaa 20|حتى 20|Opptil 20
Up to 50|Ilaa 50|حتى 50|Opptil 50
Up to 100|Ilaa 100|حتى 100|Opptil 100
Who updates the catalogue?|Yaa cusboonaysiiya kataloogga?|من يحدث الكتالوج؟|Hvem oppdaterer katalogen?
Agency · extra fees|Wakaaladda · lacag dheeraad ah|الوكالة · رسوم إضافية|Byrået · mot tillegg
Business owner|Mulkiilaha ganacsiga|صاحب العمل|Bedriftseieren
How customers order|Sida macaamiishu u dalbadaan|كيف يطلب العملاء|Slik bestiller kundene
Online checkout|Checkout onlayn|إتمام الشراء إلكترونياً|Utsjekking på nett
Private management dashboard|Maamul gaar ah|لوحة إدارة خاصة|Privat kontrollpanel
Not included|Kuma jiro|غير مشمول|Ikke inkludert
Products|Alaabta|المنتجات|Produkter
Orders & inventory|Dalabaadka iyo kaydka|الطلبات والمخزون|Ordrer og lager
Customer login & online payments|Gelitaanka macaamiisha iyo lacag-bixinta onlayn|دخول العملاء والدفع الإلكتروني|Kundeinnlogging og nettbetaling
Included in scope|Waxay ku jirtaa shaqada lagu heshiiyo|مشمول في نطاق العمل|Inngår i omfanget
Shipping addresses & tracking|Cinwaannada rarista iyo la socodka|عناوين الشحن والتتبع|Leveringsadresser og sporing
Hosting, domain & maintenance|Hosting, domain iyo dayactir|الاستضافة والنطاق والصيانة|Hosting, domene og vedlikehold
Separate|Gaar ah|منفصل|Separat
03 / IMAGINE WHAT’S NEXT|03 / KA FIKIR TALLAABADA XIGTA|03 / تخيل الخطوة القادمة|03 / SE FOR DEG NESTE STEG
Different businesses.|Ganacsiyo kala duwan.|أعمال مختلفة.|Ulike bedrifter.
The same thoughtful approach.|Isla habkii taxaddarka lahaa.|بنفس العناية المدروسة.|Samme gjennomtenkte tilnærming.
Sample Boutique is a live website example. The other previews show possible directions for your next project.|Sample Boutique waa degel toos u shaqaynaya. Tusaalooyinka kale waa fikrado mashruucaaga xiga.|Sample Boutique مثال لموقع مباشر. المعاينات الأخرى توضح اتجاهات ممكنة لمشروعك القادم.|Sample Boutique er et publisert nettsted. De andre forhåndsvisningene viser mulige retninger for ditt neste prosjekt.
LIVE WEBSITE|DEGEL TOOS AH|موقع مباشر|PUBLISERT NETTSIDE
RETAIL & BOUTIQUES|DUKAAMADA IYO BOUTIQUE-YADA|التجزئة والبوتيكات|BUTIKKER OG BOUTIQUER
A real catalogue website with collections and WhatsApp ordering. Open the live site to explore.|Degel kataloog ah oo dhab ah, ururin alaabeed iyo dalab WhatsApp leh. Fur oo sahami.|موقع كتالوج حقيقي بمجموعات منتجات وطلب عبر WhatsApp. افتح الموقع لاستكشافه.|En ekte katalognettside med kolleksjoner og bestilling via WhatsApp. Åpne nettsiden og utforsk.
ILLUSTRATIVE CONCEPT|TUSAALE NAQSHADEED|تصور توضيحي|ILLUSTRERENDE KONSEPT
LOCAL SERVICES|ADEEGYADA DEEGAANKA|الخدمات المحلية|LOKALE TJENESTER
Make your first impression count.|Aragtida koowaad ka dhig mid wanaagsan.|اجعل الانطباع الأول مميزاً.|Gjør et godt førsteinntrykk.
A clear introduction, your location and an easy way for local customers to reach you.|Hordhac cad, goobtaada iyo hab fudud oo macaamiisha deegaanku kula soo xidhiidhaan.|تعريف واضح وموقعك وطريقة سهلة ليتواصل معك العملاء المحليون.|En tydelig presentasjon, plasseringen din og en enkel kontaktvei for lokale kunder.
ONLINE STORES|DUKAAMADA ONLAYN|المتاجر الإلكترونية|NETTBUTIKKER
Give every order a good start.|Dalab kasta bilow fiican sii.|امنح كل طلب بداية جيدة.|Gi hver bestilling en god start.
A connected store experience with checkout, inventory and order management.|Dukaan isku xidhan oo leh checkout, kayd iyo maamul dalabaad.|تجربة متجر مترابطة تشمل الدفع والمخزون وإدارة الطلبات.|En sammenhengende nettbutikk med utsjekking, lager og ordrehåndtering.
Sample Boutique links to the live site. GOOD COMPANY and STUDIO / OBJECT are fictional design concepts, not delivered projects or operating stores.|Sample Boutique waxay ku geynaysaa degelka tooska ah. GOOD COMPANY iyo STUDIO / OBJECT waa fikrado naqshadeed oo mala-awaal ah, ma aha mashaariic la dhammaystiray ama dukaamo shaqeeya.|رابط Sample Boutique يفتح الموقع المباشر. GOOD COMPANY وSTUDIO / OBJECT تصورات خيالية وليست مشاريع منفذة أو متاجر عاملة.|Sample Boutique lenker til det publiserte nettstedet. GOOD COMPANY og STUDIO / OBJECT er fiktive designkonsepter, ikke leverte prosjekter eller aktive butikker.
LOCAL ROOTS. OPEN DOORS.|ASAL DEEGAAN. ALBAABO FURAN.|جذور محلية. أبواب مفتوحة.|LOKALE RØTTER. ÅPNE DØRER.
Forward,|Hore,|إلى الأمام،|Fremover,
together.|wadajir.|معاً.|sammen.
That’s the spirit behind Nimbus. A personal approach to helping your business take its next step online.|Taasi waa ruuxa Nimbus. Hab shakhsi ah oo ganacsigaaga ka caawiya tallaabada xigta ee onlaynka.|هذه هي روح Nimbus. نهج شخصي يساعد عملك على اتخاذ خطوته التالية عبر الإنترنت.|Det er tanken bak Nimbus. En personlig tilnærming som hjelper bedriften din videre på nett.
We understand the value of a familiar conversation and a recommendation from someone you trust. Whether you’re serving your community or reaching a new one, we’ll start by listening.|Waxaan fahamsannahay qiimaha wada hadal kuu dhow iyo talada qof aad ku kalsoon tahay. Haddii aad bulshadaada u adeegayso ama mid cusub gaadhayso, marka hore waan ku dhegaysanaynaa.|نعرف قيمة الحديث المألوف وتوصية من تثق به. سواء كنت تخدم مجتمعك أو تصل إلى جمهور جديد، نبدأ بالاستماع.|Vi kjenner verdien av en god samtale og en anbefaling fra noen du stoler på. Enten du betjener nærmiljøet eller når nye kunder, begynner vi med å lytte.
Tell us what you’re building|Noo sheeg waxa aad dhisayso|أخبرنا عما تبنيه|Fortell oss hva du bygger
04 / FROM HELLO TO LAUNCH|04 / SALAAN ILAA DAHFUR|04 / من التعارف إلى الإطلاق|04 / FRA HEI TIL LANSERING
A clear path.|Waddo cad.|مسار واضح.|En tydelig vei.
A personal conversation.|Wada hadal shakhsi ah.|محادثة شخصية.|En personlig samtale.
You don’t need to speak tech. Just tell us about your business and where you want to go.|Looma baahna aqoon farsamo. Noo sheeg ganacsigaaga iyo meesha aad rabto inuu gaadho.|لا تحتاج إلى لغة تقنية. أخبرنا عن عملك والوجهة التي تطمح إليها.|Du trenger ikke tekniske kunnskaper. Fortell oss om bedriften din og hvor du vil videre.
Tell us your story.|Noo sheeg sheekadaada.|أخبرنا قصتك.|Fortell oss historien din.
Share your business, your customers and what you need the website to do.|Noo sheeg ganacsigaaga, macaamiishaada iyo waxa degelku qabanayo.|عرفنا بعملك وعملائك وما تحتاج أن يقدمه الموقع.|Fortell om bedriften, kundene og hva nettsiden skal gjøre.
Agree the right fit.|Isla oggolaada waxa ku habboon.|نتفق على الحل المناسب.|Avtal den rette løsningen.
We confirm your package, content, integrations, costs and project scope.|Waxaan xaqiijinaynaa xirmada, nuxurka, isku xidhka, kharashka iyo shaqada mashruuca.|نؤكد الباقة والمحتوى والتكاملات والتكاليف ونطاق المشروع.|Vi avklarer pakke, innhold, integrasjoner, kostnader og prosjektomfang.
See it take shape.|Arag isagoo qaab yeelanaya.|شاهد الفكرة تتشكل.|Se det ta form.
We build a preview for you to review, then refine it against the agreed scope.|Waxaan samaynaa horudhac aad eegto, ka dibna waan hagaajinaa sida lagu heshiiyey.|نبني معاينة لمراجعتها ثم نحسنها ضمن النطاق المتفق عليه.|Vi bygger en forhåndsvisning du kan se gjennom, og justerer innenfor avtalt omfang.
Make your next move.|Qaad tallaabada xigta.|اتخذ خطوتك التالية.|Ta neste steg.
We launch your website and explain how updates and any ongoing support will work.|Waxaan daahfurnaa degelkaaga oo sharaxnaa cusboonaysiinta iyo taageerada joogtada ah.|نطلق موقعك ونوضح آلية التحديثات وأي دعم مستمر.|Vi lanserer nettsiden og forklarer hvordan oppdateringer og eventuell løpende støtte fungerer.
05 / GOOD QUESTIONS|05 / SU’AALO WANAAGSAN|05 / أسئلة مهمة|05 / GODE SPØRSMÅL
A few things|Waxyaabo yar|أمور|Noen ting
worth knowing.|oo mudan inaad ogaato.|تستحق المعرفة.|det er greit å vite.
Still wondering where to start?|Weli ma is weydiinaysaa halka laga bilaabo?|ما زلت تتساءل من أين تبدأ؟|Usikker på hvor du skal begynne?
We’re happy to talk it through.|Waan ku faraxsanahay inaan ka wada hadalno.|يسعدنا مناقشة الأمر معك.|Vi tar gjerne en prat.
Ask our team on WhatsApp|our team ku weydii WhatsApp|اسأل our team عبر WhatsApp|Spør our team på WhatsApp
Which package is right for my business?|Xirmadee ku habboon ganacsigayga?|أي باقة تناسب عملي؟|Hvilken pakke passer bedriften min?
Choose Basic if you need an online catalogue and customers order through WhatsApp. Choose Business if you also want to manage products yourself. Choose Premium if customers need accounts, a cart and online payment. We’ll help you decide based on your actual needs.|Dooro Aasaasi haddii aad u baahan tahay kataloog iyo dalab WhatsApp. Dooro Ganacsi haddii aad rabto inaad alaabta adigu maamusho. Dooro Heer Sare haddii macaamiishu u baahan yihiin akoonno, gaadhi iyo lacag-bixin onlayn ah. Waxaan kaa caawinaynaa doorashada.|اختر الأساسية لكتالوج والطلب عبر WhatsApp. اختر الأعمال لإدارة المنتجات بنفسك. اختر المتميزة لحسابات العملاء والسلة والدفع الإلكتروني. نساعدك حسب احتياجك الفعلي.|Velg grunnpakken for katalog og WhatsApp-bestilling, bedriftspakken hvis du vil administrere produkter selv, eller Premium for kundekontoer, handlekurv og nettbetaling. Vi hjelper deg ut fra behovene dine.
Does the Business package include online payments?|Xirmada Ganacsi ma leedahay lacag-bixin onlayn ah?|هل تشمل باقة الأعمال الدفع الإلكتروني؟|Inkluderer bedriftspakken nettbetaling?
No. Business includes a private dashboard for managing products, prices, photos, descriptions and categories. Customers still contact you through WhatsApp to order. Online checkout and payment integration are part of the Premium E-Commerce scope.|Maya. Ganacsi waxay leedahay maamul gaar ah oo alaabta, qiimaha, sawirrada, sharaxaadda iyo qaybaha lagu beddelo. Dalabaadku waa WhatsApp. Checkout iyo lacag-bixintu waxay ka tirsan yihiin Heer Sare.|لا. تشمل الأعمال لوحة خاصة للمنتجات والأسعار والصور والأوصاف والتصنيفات. الطلب عبر WhatsApp. إتمام الشراء والدفع الإلكتروني ضمن نطاق المتميزة.|Nei. Bedriftspakken har et privat panel for produkter, priser, bilder, beskrivelser og kategorier. Bestillinger skjer via WhatsApp. Utsjekking og betaling inngår i Premium.
Can I update the website myself?|Ma cusboonaysiin karaa degelka aniga?|هل يمكنني تحديث الموقع بنفسي؟|Kan jeg oppdatere nettsiden selv?
Business lets you manage your catalogue through a private dashboard. Premium includes store management for orders and inventory. Basic catalogue changes are handled by us for an additional fee. Changes to the wider design or new functionality are agreed separately.|Ganacsi waxay kuu oggolaanaysaa maamul kataloog. Heer Sare waxay leedahay maamul dalabaad iyo kayd. Aasaasi annaga ayaa beddelna lacag dheeraad ah. Naqshad ama hawlo cusub si gaar ah ayaa loogu heshiinayaa.|تتيح الأعمال إدارة الكتالوج بلوحة خاصة. تشمل المتميزة إدارة الطلبات والمخزون. ننفذ تعديلات الأساسية برسوم إضافية. تعديلات التصميم والميزات الجديدة باتفاق منفصل.|Med bedriftspakken administrerer du katalogen selv. Premium har ordre- og lagerstyring. Vi utfører endringer i grunnpakken mot tillegg. Designendringer og nye funksjoner avtales separat.
Are hosting, the domain and maintenance included?|Hosting, domain iyo dayactir ma ku jiraan?|هل الاستضافة والنطاق والصيانة مشمولة؟|Er hosting, domene og vedlikehold inkludert?
No. Website setup prices are separate from hosting, domain registration, maintenance and ongoing support. Any payment provider, shipping or other third-party charges are also separate. We’ll confirm these costs before you commit.|Maya. Qiimaha samaynta waa ka gaar hosting, domain, dayactir iyo taageero. Lacag-bixiyaha, rarista iyo adeegyada kale waa gaar. Kharashyada waan xaqiijinaynaa ka hor heshiiska.|لا. أسعار الإنشاء منفصلة عن الاستضافة والنطاق والصيانة والدعم. رسوم الدفع والشحن وأي طرف ثالث منفصلة أيضاً. نؤكد التكاليف قبل الالتزام.|Nei. Oppsettsprisene er separate fra hosting, domene, vedlikehold og støtte. Gebyrer til betalingsleverandør, frakt og andre tredjeparter kommer også i tillegg. Alt avklares før du forplikter deg.
What do the product limits mean?|Maxay tirada alaabtu ka dhigan tahay?|ماذا تعني حدود المنتجات؟|Hva betyr produktgrensene?
We initially upload up to 20 products with Basic, 50 with Business and 100 with Premium. These are initial setup allowances. Business and Premium provide product management tools; ongoing uploads by our team or additional setup work are quoted separately.|Bilowga waxaan gelinaynaa ilaa 20 Aasaasi, 50 Ganacsi iyo 100 Heer Sare. Waa shaqada bilowga. Ganacsi iyo Heer Sare waxay leeyihiin qalab maamul; gelin joogto ah oo kooxdayadu qabato ama shaqo dheeraad ah qiime gaar ah bay leedahay.|ندخل أولياً حتى 20 منتجاً للأساسية و50 للأعمال و100 للمتميزة. هذه مخصصات الإنشاء الأولي. تتوفر أدوات إدارة للأعمال والمتميزة؛ الإدخال المستمر بفريقنا أو العمل الإضافي يسعر منفصلاً.|Vi legger inn opptil 20 produkter i grunnpakken, 50 i bedriftspakken og 100 i Premium ved oppstart. Bedrift og Premium har produktverktøy. Løpende innlegging av vårt team og ekstra oppsett prises separat.
Do you only work with locally owned businesses?|Ma ganacsiyada deegaanka oo keliya ayaad la shaqaysaan?|هل تعملون فقط مع الأعمال المحلية؟|Jobber dere bare med lokalt eide bedrifter?
No. Our studio is rooted in the local community, and we welcome businesses of every background. We work with small businesses targeting customers locally and internationally.|Maya. Asalkeennu waa bulshada deegaanka, waxaanan soo dhowaynaa ganacsiyada asal kasta. Waxaan la shaqaynaa ganacsiyada yaryar ee UK, Norway iyo dunida.|لا. جذورنا في المجتمع المحلي ونرحب بكل الخلفيات. نخدم الأعمال الصغيرة التي تستهدف بريطانيا والنرويج والعالم.|Nei. Vi har røtter i lokalsamfunnet og ønsker alle bakgrunner velkommen. Vi jobber med små bedrifter som retter seg mot Storbritannia, Norge og internasjonalt.
What do I need before we start?|Maxaan u baahanahay ka hor bilowga?|ماذا أحتاج قبل البدء؟|Hva trenger jeg før vi starter?
Your business name, contact details, product or service information, prices, logo and any photos you want to use are a good start. Tell us what you already have and we’ll agree what else is needed. Delivery timing is confirmed once scope and materials are clear.|Magaca ganacsiga, xogta xidhiidhka, xogta alaabta ama adeegga, qiimaha, astaanta iyo sawirrada ayaa bilow fiican ah. Noo sheeg waxa aad haysato. Wakhtiga dhammaystirka waa la xaqiijiyaa marka shaqada iyo agabku caddaadaan.|ابدأ باسم العمل وبيانات التواصل ومعلومات المنتجات أو الخدمات والأسعار والشعار والصور. أخبرنا بما لديك ونتفق على الباقي. نؤكد المدة بعد وضوح النطاق والمواد.|Bedriftsnavn, kontaktinformasjon, produkt- eller tjenesteinformasjon, priser, logo og bilder er en god start. Fortell hva du har, så avtaler vi resten. Tidsplanen bekreftes når omfang og materiale er avklart.
YOUR NEXT CHAPTER STARTS HERE|TALLAABADAADA XIGTA HALKAN BAY KA BILAABATAA|خطوتك القادمة تبدأ هنا|DITT NESTE KAPITTEL STARTER HER
Something|Wax|شيء|Noe
good starts|wanaagsan wuxuu ku bilaabmaa|جميل يبدأ|godt begynner
with|ereyga|بكلمة|med
hello.|salaan.|مرحباً.|hei.
Tell us a little about your business. We’ll help you find the right next step.|Wax yar nooga sheeg ganacsigaaga. Waxaan kaa caawinaynaa tallaabada xigta.|أخبرنا قليلاً عن عملك. نساعدك في اختيار الخطوة المناسبة.|Fortell litt om bedriften din. Vi hjelper deg med neste steg.
CHAT WITH US|LA HADAL NAGA|تحدث معنا|SNAKK MED OSS
PROJECT ENQUIRIES|WEYDIIMAHA MASHRUUCA|استفسارات المشاريع|PROSJEKTHENVENDELSER
DEVELOPMENT|NIMBUSINTA|التطوير|UTVIKLING
LET’S GET TO KNOW YOUR BUSINESS|AAN BARANNO GANACSIGAAGA|لنتعرف على عملك|LA OSS BLI KJENT MED BEDRIFTEN DIN
Your name|Magacaaga|اسمك|Navnet ditt
Business name|Magaca ganacsiga|اسم العمل|Bedriftsnavn
What should we call you?|Maxaan kuugu yeedhnaa?|بماذا نناديك؟|Hva skal vi kalle deg?
Your business or new idea|Ganacsigaaga ama fikraddaada cusub|عملك أو فكرتك الجديدة|Bedriften eller den nye ideen din
Where are you based?|Xaggee joogtaa?|أين يقع عملك؟|Hvor holder du til?
United Kingdom|Boqortooyada Midowday|المملكة المتحدة|Storbritannia
Norway|Norway|النرويج|Norge
Elsewhere / international|Meel kale / caalami|مكان آخر / دولي|Andre steder / internasjonalt
Your starting point|Bilowgaaga|نقطة البداية|Ditt utgangspunkt
Help me choose|Iga caawi doorashada|ساعدني في الاختيار|Hjelp meg å velge
Basic Website — $400|Degel Aasaasi — $400|الموقع الأساسي — $400|Grunnleggende nettside — $400
Business + Dashboard — $700–750|Ganacsi + Maamul — $700–750|الأعمال + لوحة إدارة — $700–750|Bedrift + kontrollpanel — $700–750
Premium E-Commerce — $1,500+|Dukaan Heer Sare — $1,500+|التجارة الإلكترونية المتميزة — $1,500+|Premium netthandel — $1,500+
A little about what you need|Wax yar oo ku saabsan baahidaada|نبذة عما تحتاجه|Litt om det du trenger
What do you sell or do? What would make your website useful?|Maxaad iibisaa ama qabataa? Maxaa degelkaaga faa’iido u yeelaya?|ماذا تبيع أو تقدم؟ ما الذي يجعل موقعك مفيداً؟|Hva selger eller gjør du? Hva vil gjøre nettsiden nyttig?
Let’s talk on WhatsApp|Aan ku wada hadalno WhatsApp|لنتحدث عبر WhatsApp|La oss snakke på WhatsApp
Opens a ready-to-send WhatsApp enquiry to our team. Review it before sending. This form does not submit or store your details on our server.|Waxay kuu furaysaa farriin WhatsApp oo our team loo diyaariyey. Eeg ka hor dirista. Foomkani xogtaada uma diro mana ku kaydiyo serverkayaga.|يفتح رسالة WhatsApp جاهزة إلى our team. راجعها قبل الإرسال. لا يرسل النموذج بياناتك إلى خادمنا ولا يخزنها عليه.|Åpner en ferdig WhatsApp-henvendelse til our team. Se gjennom før du sender. Skjemaet sender ikke inn eller lagrer opplysningene dine på serveren vår.
Or copy your enquiry|Ama nuqul ka samee farriinta|أو انسخ استفسارك|Eller kopier henvendelsen
Thoughtful websites.|Degello si fiican loo fikiray.|مواقع بعناية.|Gjennomtenkte nettsider.
For your next chapter.|Tallaabadaada xigta.|لخطوتك القادمة.|For ditt neste kapittel.
Contact|Xidhiidh|تواصل|Kontakt
BACK TO TOP|KOR KU NOQO|العودة للأعلى|TILBAKE TIL TOPPEN
Local roots. International outlook.|Asal deegaan. Aragti caalami ah.|جذور محلية. رؤية عالمية.|Lokale røtter. Internasjonalt perspektiv.
Privacy & enquiries|Asturnaanta iyo weydiimaha|الخصوصية والاستفسارات|Personvern og henvendelser
A NOTE ON YOUR ENQUIRY|QORAAL KU SAABSAN WEYDIINTAADA|ملاحظة حول استفسارك|OM HENVENDELSEN DIN
A conversation,|Wada hadal,|محادثة،|En samtale,
on your terms.|sida adigu rabto.|بشروطك.|på dine premisser.
The project form creates a message in your browser. It does not send it to a Nimbus server, create an account or store your details on this website.|Foomku wuxuu farriin ku abuuraa biraawsarkaaga. Uma diro server Nimbus, akoon ma abuuro, xogtaadana degelkan kuma kaydiyo.|ينشئ النموذج رسالة في متصفحك. لا يرسلها إلى خادم Nimbus ولا ينشئ حساباً أو يخزن بياناتك على الموقع.|Skjemaet lager en melding i nettleseren. Det sender den ikke til en Nimbus-server, oppretter ikke konto og lagrer ikke opplysningene dine på nettsiden.
When you choose WhatsApp or email, you use that service to contact us. WhatsApp or your email provider processes the message under its own terms and privacy practices. Please avoid sending passwords, payment card details or other sensitive information in an initial enquiry.|Markaad doorato WhatsApp ama iimayl, adeeggaas ayaad nagula soo xidhiidhaysaa. Adeeg-bixiyahaasi wuxuu farriinta u maamulaa shuruudihiisa iyo asturnaantiisa. Ha soo dirin furaha sirta, xogta kaadhka lacagta ama xog kale oo xasaasi ah.|عند اختيار WhatsApp أو البريد تستخدم تلك الخدمة للتواصل معنا. تعالج الرسالة وفق شروطها وخصوصيتها. يرجى عدم إرسال كلمات مرور أو بيانات بطاقات أو معلومات حساسة في الاستفسار الأول.|Når du velger WhatsApp eller e-post, bruker du den tjenesten til å kontakte oss. Leverandøren behandler meldingen etter egne vilkår og personvernregler. Ikke send passord, kortopplysninger eller annen sensitiv informasjon i første henvendelse.
This website does not include advertising trackers or analytics scripts. Fonts are requested from Google Fonts; site hosting and external providers may process ordinary connection information.|Degelkani ma laha raadraac xayaysiis ama falanqayn booqasho. Farta waxaa laga helaa Google Fonts; hosting-ka iyo adeegyada dibaddu waxay farsamayn karaan xogta caadiga ah ee isku xidhka.|لا يحتوي الموقع على متتبعات إعلانات أو نصوص تحليلات. تحمل الخطوط من Google Fonts؛ قد تعالج الاستضافة والخدمات الخارجية معلومات الاتصال المعتادة.|Nettsiden har ikke annonsesporing eller analyseskript. Skrifttyper hentes fra Google Fonts. Hosting og eksterne leverandører kan behandle vanlige tilkoblingsopplysninger.
Understood|Waan fahmay|فهمت|Forstått
Open menu|Fur liiska|افتح القائمة|Åpne meny
Close menu|Xidh liiska|أغلق القائمة|Lukk meny
Choose language|Dooro luqad|اختر اللغة|Velg språk
Close concept preview|Xidh tusaalaha|أغلق المعاينة|Lukk konseptvisningen
Close privacy information|Xidh xogta asturnaanta|أغلق معلومات الخصوصية|Lukk personverninformasjonen
`;
const dictionary = new Map(rows.trim().split('\n').map(row => row.split('|').map(cell => cell.trim())).map(([en,...translations]) => [en, translations]));
const columns = {so:0, ar:1, nb:2};
let language = 'en';
const tr = text => language === 'en' ? text : (dictionary.get(text)?.[columns[language]] || text);
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const textNodes = []; let node;
while ((node = walker.nextNode())) {
  if (node.parentElement.closest('script,style,[data-lang],.mock-content:not(.showcase-preview),.concept-art:not(.sample-art)')) continue;
  const source = node.textContent.trim();
  if (source && dictionary.has(source)) textNodes.push({node,source,before:node.textContent.match(/^\s*/)[0],after:node.textContent.match(/\s*$/)[0]});
}
const attributes = [...document.querySelectorAll('[placeholder],[aria-label]')].flatMap(element => ['placeholder','aria-label'].filter(name=>element.hasAttribute(name)).map(name=>({element,name,source:element.getAttribute(name)})));
function setLanguage(value) {
  language = Object.hasOwn(columns,value) ? value : 'en';
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  textNodes.forEach(({node,source,before,after}) => { node.textContent = before + tr(source) + after; });
  attributes.forEach(({element,name,source}) => element.setAttribute(name,tr(source)));
  document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  try { localStorage.setItem('nimbus-language',language); } catch {}
  document.dispatchEvent(new CustomEvent('languagechange',{detail:language}));
}
window.translateText = tr;
const status = {
  openMenu:['Open menu','Fur liiska','افتح القائمة','Åpne meny'],
  closeMenu:['Close menu','Xidh liiska','أغلق القائمة','Lukk meny'],
  packageSelected:['Your starting point is selected. Tell us a little about your business.','Xirmada waa la doortay. Noo sheeg ganacsigaaga.','تم اختيار الباقة. أخبرنا عن عملك.','Pakken er valgt. Fortell oss litt om bedriften din.'],
  waOpened:['Your enquiry is ready in WhatsApp. Nothing is sent until you press Send there.','Farriintu waa ku diyaar WhatsApp. Waxba lama dirayo ilaa aad Dir taabato.','استفسارك جاهز في WhatsApp. لن يرسل حتى تضغط إرسال هناك.','Henvendelsen er klar i WhatsApp. Ingenting sendes før du trykker Send der.'],
  copied:['Enquiry copied. You can paste it into WhatsApp or email.','Farriinta waa la koobiyeeyey. Ku dheji WhatsApp ama iimayl.','تم نسخ الاستفسار. يمكنك لصقه في WhatsApp أو البريد.','Henvendelsen er kopiert. Lim den inn i WhatsApp eller e-post.'],
  copyFailed:['Copy is unavailable here. Use the WhatsApp button or email us directly.','Koobiyeyntu ma shaqaynayso. Isticmaal WhatsApp ama iimayl.','النسخ غير متاح. استخدم زر WhatsApp أو راسلنا بالبريد.','Kopiering er ikke tilgjengelig. Bruk WhatsApp eller send e-post.'],
  conceptLabel:['ILLUSTRATIVE CONCEPT','TUSAALE NAQSHADEED','تصور توضيحي','ILLUSTRERENDE KONSEPT'],
  discussDirection:['Discuss a direction like this ↗','Ka wada hadal fikrad sidan oo kale ah ↗','ناقش اتجاهاً كهذا ↗','Snakk om en slik retning ↗']
};
window.t = key => status[key]?.[language === 'en' ? 0 : columns[language]+1];
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
let saved; try { saved = localStorage.getItem('nimbus-language'); } catch {}
setLanguage(saved || 'en');
})();
