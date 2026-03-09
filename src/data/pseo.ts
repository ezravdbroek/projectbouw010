export interface PseoService {
  slug: string;
  naam: string;
  meervoud: string;
  afbeelding: string;
  gerelateerdeSlug: string;
  intro: string;
  kenmerken: string[];
  voordelen: { titel: string; tekst: string }[];
  faq: (locatie: string) => { vraag: string; antwoord: string }[];
}

export interface PseoLocatie {
  slug: string;
  naam: string;
  regio: string;
}

export const locaties: PseoLocatie[] = [
  { slug: 'rotterdam', naam: 'Rotterdam', regio: 'Rotterdam' },
  { slug: 'barendrecht', naam: 'Barendrecht', regio: 'de regio Zuid-Holland Zuid' },
  { slug: 'ridderkerk', naam: 'Ridderkerk', regio: 'de regio IJsselmonde' },
  { slug: 'gouda', naam: 'Gouda', regio: 'de regio Midden-Holland' },
  { slug: 'schiedam', naam: 'Schiedam', regio: 'de regio Waterweg' },
  { slug: 'vlaardingen', naam: 'Vlaardingen', regio: 'de regio Waterweg' },
  { slug: 'delft', naam: 'Delft', regio: 'de regio Haaglanden' },
  { slug: 'rijswijk', naam: 'Rijswijk', regio: 'de regio Haaglanden' },
  { slug: 'berkel-en-rodenrijs', naam: 'Berkel en Rodenrijs', regio: 'de gemeente Lansingerland' },
  { slug: 'bleiswijk', naam: 'Bleiswijk', regio: 'de gemeente Lansingerland' },
  { slug: 'maassluis', naam: 'Maassluis', regio: 'de regio Waterweg' },
  { slug: 'brielle', naam: 'Brielle', regio: 'Voorne aan Zee' },
  { slug: 'spijkenisse', naam: 'Spijkenisse', regio: 'de gemeente Nissewaard' },
  { slug: 'hoogvliet-rotterdam', naam: 'Hoogvliet Rotterdam', regio: 'Rotterdam-Zuid' },
  { slug: 'oud-beijerland', naam: 'Oud-Beijerland', regio: 'de Hoeksche Waard' },
  { slug: 'heerjansdam', naam: 'Heerjansdam', regio: 'de gemeente Zwijndrecht' },
  { slug: 'zwijndrecht', naam: 'Zwijndrecht', regio: 'de Drechtsteden' },
  { slug: 'sliedrecht', naam: 'Sliedrecht', regio: 'de Drechtsteden' },
  { slug: 'dordrecht', naam: 'Dordrecht', regio: 'de Drechtsteden' },
  { slug: 'papendrecht', naam: 'Papendrecht', regio: 'de Drechtsteden' },
  { slug: 'alblasserdam', naam: 'Alblasserdam', regio: 'de Drechtsteden' },
  { slug: 'hendrik-ido-ambacht', naam: 'Hendrik Ido Ambacht', regio: 'de Drechtsteden' },
  { slug: 'rhoon', naam: 'Rhoon', regio: 'de gemeente Albrandswaard' },
  { slug: 'poortugaal', naam: 'Poortugaal', regio: 'de gemeente Albrandswaard' },
  { slug: 'capelle-aan-den-ijssel', naam: 'Capelle aan den IJssel', regio: 'de regio Rotterdam' },
];

export const pseoServices: PseoService[] = [
  // === AANBOUW ===
  {
    slug: 'aanbouw',
    naam: 'Aanbouw',
    meervoud: 'aanbouwen',
    afbeelding: '/images/aanbouw.jpg',
    gerelateerdeSlug: 'aanbouw',
    intro: 'Droomt u van meer leefruimte? Een aanbouw is dé manier om uw woning te vergroten zonder te verhuizen. Projectbouw 010 realiseert uw aanbouw van fundament tot afwerking. Wij verzorgen het complete traject: van de eerste tekening en vergunningsaanvraag tot de oplevering. Met hoogwaardige materialen en jarenlange ervaring zorgen wij dat de aanbouw naadloos aansluit op uw bestaande woning.',
    kenmerken: [
      'Constructieberekeningen en vergunning',
      'Fundament en ruwbouw',
      'Dak- en gevelafwerking',
      'Elektra, leidingwerk en verwarming',
      'Stucwerk en schilderwerk',
      'Vloer- en plafondafwerking',
    ],
    voordelen: [
      { titel: 'Meer Woonruimte', tekst: 'Vergroot uw woning met extra vierkante meters zonder de kosten en stress van een verhuizing.' },
      { titel: 'Waardeverhoging', tekst: 'Een professionele aanbouw verhoogt de waarde van uw woning aanzienlijk.' },
      { titel: 'Compleet Ontzorgd', tekst: 'Van vergunning tot oplevering: wij regelen alles zodat u nergens naar om hoeft te kijken.' },
      { titel: 'Op Maat Ontworpen', tekst: 'Elke aanbouw wordt specifiek ontworpen voor uw woning en uw wensen.' },
    ],
    faq: (locatie) => [
      { vraag: `Heb ik een vergunning nodig voor een aanbouw in ${locatie}?`, antwoord: `In veel gevallen wel. Wij verzorgen de volledige vergunningsaanvraag bij de gemeente en adviseren u over de mogelijkheden binnen het bestemmingsplan in ${locatie}.` },
      { vraag: `Hoe lang duurt een aanbouw in ${locatie}?`, antwoord: `Gemiddeld 6 tot 10 weken, afhankelijk van de grootte en complexiteit. Wij geven u vooraf een duidelijke planning.` },
      { vraag: `Kan ik in mijn woning blijven wonen tijdens de bouw?`, antwoord: `Ja, in de meeste gevallen kunt u gewoon in uw woning blijven. Wij zorgen voor minimale overlast.` },
      { vraag: `Wat kost een aanbouw in ${locatie}?`, antwoord: `De kosten variëren afhankelijk van grootte, materialen en afwerking. Wij maken graag een vrijblijvende offerte op maat voor uw situatie in ${locatie}.` },
    ],
  },

  // === UITBOUW ===
  {
    slug: 'uitbouw',
    naam: 'Uitbouw',
    meervoud: 'uitbouwen',
    afbeelding: '/images/uitbouw.jpeg',
    gerelateerdeSlug: 'uitbouw',
    intro: 'Met een uitbouw haalt u letterlijk meer ruimte en licht in uw woning. Een uitbouw aan de achterzijde is een populaire keuze om de woonkamer of keuken flink te vergroten. Denk aan grote schuifpuien, een lichtstraat of vouwpui die uw woning opent naar de tuin. Projectbouw 010 realiseert uitbouwen die perfect aansluiten op de bestaande architectuur en voldoen aan alle bouwkundige eisen.',
    kenmerken: [
      'Ontwerp en vergunningsaanvraag',
      'Fundament en staalconstructie',
      'Grote glaspartijen en lichtstraten',
      'Isolatie conform nieuwste normen',
      'Binnen- en buitenafwerking',
      'Naadloze aansluiting op bestaande woning',
    ],
    voordelen: [
      { titel: 'Meer Licht & Ruimte', tekst: 'Grote glaspartijen zorgen voor een overvloed aan natuurlijk licht in uw woning.' },
      { titel: 'Naadloze Aansluiting', tekst: 'De uitbouw sluit perfect aan op uw bestaande woning, alsof het er altijd al was.' },
      { titel: 'Energiezuinig', tekst: 'Moderne isolatie en materialen zorgen voor een energiezuinige uitbreiding.' },
      { titel: 'Tuin Verbinding', tekst: 'Met een vouwpui of schuifpui creëert u een vloeiende overgang naar uw tuin.' },
    ],
    faq: (locatie) => [
      { vraag: `Hoe groot mag een uitbouw zijn in ${locatie}?`, antwoord: `Dit hangt af van het bestemmingsplan in ${locatie}. Vaak is vergunningsvrij tot 4 meter mogelijk. Wij adviseren u over de maximale mogelijkheden.` },
      { vraag: `Welke materialen worden gebruikt voor een uitbouw?`, antwoord: `Wij werken met hoogwaardige materialen zoals staal, aluminium kozijnen en HR++ glas. Altijd conform de nieuwste isolatienormen.` },
      { vraag: `Hoe lang duurt een uitbouw in ${locatie}?`, antwoord: `Gemiddeld 6 tot 10 weken inclusief alle afwerking. Wij maken vooraf een gedetailleerde planning.` },
      { vraag: `Wat kost een uitbouw in ${locatie}?`, antwoord: `De kosten variëren afhankelijk van grootte en afwerking. Wij maken graag een vrijblijvende offerte op maat voor u.` },
    ],
  },

  // === OPBOUW ===
  {
    slug: 'opbouw',
    naam: 'Opbouw',
    meervoud: 'opbouwen',
    afbeelding: '/images/1.jpg',
    gerelateerdeSlug: 'opbouw',
    intro: 'Een opbouw is de ideale oplossing wanneer u meer ruimte nodig heeft maar uw grondoppervlak beperkt is. Door een extra verdieping toe te voegen creëert u ruimte voor een slaapkamer, kantoor of badkamer zonder dat uw tuin kleiner wordt. Projectbouw 010 heeft uitgebreide ervaring met opbouwen en zorgt dat de bestaande constructie veilig wordt belast.',
    kenmerken: [
      'Constructieberekening door specialist',
      'Vergunningsaanvraag en begeleiding',
      'Staalconstructie en opbouw',
      'Dakafwerking en isolatie',
      'Trap en toegang naar nieuwe verdieping',
      'Complete binnenafwerking',
    ],
    voordelen: [
      { titel: 'Maximale Benutting', tekst: 'Benut de volledige potentie van uw kavel door naar boven te bouwen.' },
      { titel: 'Constructief Veilig', tekst: 'Professionele berekeningen garanderen dat uw woning de extra verdieping veilig draagt.' },
      { titel: 'Tuin Behouden', tekst: 'In tegenstelling tot een aanbouw behoudt u uw volledige tuin en buitenruimte.' },
      { titel: 'Complete Afwerking', tekst: 'Van staalconstructie tot schilderwerk — wij leveren een kant-en-klare verdieping op.' },
    ],
    faq: (locatie) => [
      { vraag: `Kan elke woning in ${locatie} een opbouw krijgen?`, antwoord: `Niet altijd. De bestaande constructie moet sterk genoeg zijn. Wij laten dit altijd door een constructeur beoordelen voordat we beginnen.` },
      { vraag: `Hoe lang duurt een opbouw in ${locatie}?`, antwoord: `Gemiddeld 8 tot 14 weken. De exacte duur hangt af van de omvang en het weer tijdens de bouw.` },
      { vraag: `Is een opbouw vergunningsplichtig in ${locatie}?`, antwoord: `Ja, voor een opbouw is vrijwel altijd een omgevingsvergunning nodig. Wij verzorgen de volledige aanvraag bij de gemeente ${locatie}.` },
      { vraag: `Wat kost een opbouw in ${locatie}?`, antwoord: `De kosten zijn afhankelijk van de grootte en afwerkingsniveau. Wij maken graag een gedetailleerde offerte op maat.` },
    ],
  },

  // === BADKAMER RENOVATIE ===
  {
    slug: 'badkamer-renovatie',
    naam: 'Badkamer Renovatie',
    meervoud: 'badkamerrenovaties',
    afbeelding: '/images/badkamer.jpeg',
    gerelateerdeSlug: 'badkamer-renovatie',
    intro: 'Droomt u van een nieuwe badkamer? Projectbouw 010 is uw specialist voor complete badkamerrenovaties. Van de eerste sloopwerkzaamheden tot het plaatsen van het laatste sanitair — wij verzorgen het volledige traject. Met jarenlange ervaring en vakmanschap transformeren wij uw verouderde badkamer in een moderne, luxe ruimte die perfect aansluit bij uw wensen.',
    kenmerken: [
      'Complete sloop en afvoer van de oude badkamer',
      'Leidingwerk voor water, afvoer en elektra',
      'Waterdichte afwerking volgens de laatste normen',
      'Professioneel tegelwerk op wand en vloer',
      'Sanitair plaatsing en aansluiting',
      'Stucwerk en schilderwerk voor een strakke afwerking',
    ],
    voordelen: [
      { titel: 'Alles-in-één Aannemer', tekst: 'Eén aanspreekpunt voor het complete traject. Geen gedoe met meerdere vakmensen — wij regelen alles.' },
      { titel: 'Waterdicht Systeem', tekst: 'Professionele waterdichte afwerking voorkomt lekkages en vochtproblemen.' },
      { titel: 'Vakkundige Tegelzetters', tekst: 'Onze tegelzetters zijn specialisten met oog voor detail. Van mozaïek tot XXL tegels.' },
      { titel: 'Persoonlijk Advies', tekst: 'Wij denken mee over indeling, materialen en stijl. Samen creëren wij uw droombadkamer.' },
    ],
    faq: (locatie) => [
      { vraag: `Hoe lang duurt een badkamerrenovatie in ${locatie}?`, antwoord: `Een complete badkamerrenovatie in ${locatie} duurt gemiddeld 2 tot 3 weken. Dit is inclusief sloop, leidingwerk, tegelwerk en sanitairplaatsing.` },
      { vraag: `Wat kost een badkamerrenovatie in ${locatie}?`, antwoord: `De kosten zijn afhankelijk van de grootte, gekozen materialen en sanitair. Wij maken graag een vrijblijvende offerte op maat. Onze prijzen zijn all-in.` },
      { vraag: `Moet ik zelf materialen uitzoeken?`, antwoord: `Dat mag, maar het hoeft niet. Wij adviseren u graag over tegels, sanitair en kranen. Door onze contacten bij leveranciers bieden wij vaak scherpe prijzen.` },
      { vraag: `Verzorgen jullie ook de vergunning?`, antwoord: `Voor een standaard badkamerrenovatie is meestal geen vergunning nodig. Mochten er constructieve wijzigingen nodig zijn, dan regelen wij dit.` },
    ],
  },

  // === KEUKENRENOVATIE ===
  {
    slug: 'keukenrenovatie',
    naam: 'Keukenrenovatie',
    meervoud: 'keukenrenovaties',
    afbeelding: '/images/keuken.jpeg',
    gerelateerdeSlug: 'keukenrenovatie',
    intro: 'De keuken is het hart van uw woning. Een goed ontworpen keuken combineert functionaliteit met stijl en maakt koken en samenzijn een plezier. Projectbouw 010 verzorgt complete keukenrenovaties: van het verwijderen van de oude keuken en het aanpassen van leidingwerk tot het plaatsen en aansluiten van uw nieuwe keuken. Met oog voor detail en praktische indeling.',
    kenmerken: [
      'Verwijdering oude keuken en afvoer',
      'Aanpassing leidingwerk en elektra',
      'Plaatsing en aansluiting nieuwe keuken',
      'Tegelwerk en spatwand',
      'Vloer- en plafondafwerking',
      'Apparatuur installatie en aansluiting',
    ],
    voordelen: [
      { titel: 'Persoonlijk Ontwerp', tekst: 'Samen met u ontwerpen wij een keuken die perfect past bij uw wensen en leefstijl.' },
      { titel: 'Complete Installatie', tekst: 'Van gas en water tot elektra — alle aansluitingen worden vakkundig verzorgd.' },
      { titel: 'Stijlvolle Afwerking', tekst: 'Spatwand, verlichting en accessoires: wij zorgen voor een afgewerkt geheel.' },
      { titel: 'Duurzame Kwaliteit', tekst: 'Hoogwaardige materialen en apparatuur voor jarenlang kookplezier.' },
    ],
    faq: (locatie) => [
      { vraag: `Hoe lang duurt een keukenrenovatie in ${locatie}?`, antwoord: `Gemiddeld 1 tot 2 weken voor plaatsing en afwerking, exclusief de levertijd van de keuken. Wij plannen alles zorgvuldig in.` },
      { vraag: `Leveren jullie ook de keuken zelf?`, antwoord: `Wij kunnen u adviseren bij de keuze, maar u bent vrij om zelf een keuken uit te kiezen. Wij zorgen voor de complete plaatsing en aansluiting.` },
      { vraag: `Kunnen jullie de indeling aanpassen in ${locatie}?`, antwoord: `Ja, wij kunnen leidingwerk verleggen en de ruimte anders indelen voor een optimale keukenopstelling.` },
      { vraag: `Wat kost een keukenrenovatie in ${locatie}?`, antwoord: `De kosten hangen af van de keuken, materialen en aanpassingen. Wij maken altijd een vrijblijvende, all-in offerte op maat.` },
    ],
  },

  // === STUKADOOR ===
  {
    slug: 'stukadoor',
    naam: 'Stukadoor',
    meervoud: 'stucwerkzaamheden',
    afbeelding: '/images/stukadoor.jpg',
    gerelateerdeSlug: 'stukadoor',
    intro: 'Stucwerk geeft uw wanden en plafonds een strakke, professionele uitstraling. Of u nu kiest voor glad stucwerk, een warme sierpleister of de stoere betonlook — onze ervaren stukadoors beheersen alle technieken. Projectbouw 010 werkt snel, stofvrij en netjes, en levert altijd een vlekkeloos resultaat. Een goed gestucte muur maakt het verschil in elk interieur.',
    kenmerken: [
      'Glad stucwerk voor een strakke look',
      'Sierpleister voor een warme uitstraling',
      'Betonlook afwerking',
      'Wanden en plafonds',
      'Scheurherstel en voorbehandeling',
      'Nieuwbouw en renovatie stucwerk',
    ],
    voordelen: [
      { titel: 'Strakke Afwerking', tekst: 'Spiegelglad stucwerk voor een moderne, strakke uitstraling in elke ruimte.' },
      { titel: 'Diverse Technieken', tekst: 'Van glad en sierpleister tot betonlook — wij beheersen alle stuctechnieken.' },
      { titel: 'Scheurvrij Resultaat', tekst: 'Met de juiste voorbereiding en materialen garanderen wij een langdurig scheurvrij resultaat.' },
      { titel: 'Snel & Netjes', tekst: 'Onze stukadoors werken efficiënt en laten uw woning netjes achter.' },
    ],
    faq: (locatie) => [
      { vraag: `Wat kost een stukadoor in ${locatie}?`, antwoord: `De kosten hangen af van het oppervlak, de techniek en de staat van de ondergrond. Wij maken graag een vrijblijvende offerte voor uw project in ${locatie}.` },
      { vraag: `Hoe lang moet stucwerk drogen?`, antwoord: `Gemiddeld 1 tot 2 weken voordat u kunt schilderen. Dit hangt af van de dikte van de laag en het seizoen.` },
      { vraag: `Kunnen jullie ook plafonds stucen in ${locatie}?`, antwoord: `Ja, wij stucen zowel wanden als plafonds. Ook in combinatie met verlaagde plafonds.` },
      { vraag: `Wat is het verschil tussen glad stuc en sierpleister?`, antwoord: `Glad stucwerk geeft een strakke, moderne look. Sierpleister heeft meer textuur en een warme uitstraling. Wij adviseren u graag.` },
    ],
  },

  // === CINEWALL ===
  {
    slug: 'cinewall',
    naam: 'Cinewall',
    meervoud: 'cinewalls',
    afbeelding: '/images/cinewall.jpeg',
    gerelateerdeSlug: 'cinewall',
    intro: 'Een cinewall is dé manier om uw televisie stijlvol te integreren in uw interieur. Alle kabels worden weggewerkt in de wand, waardoor u een strakke, opgeruimde look krijgt. Projectbouw 010 bouwt uw cinewall volledig op maat: van de constructie en elektra tot de afwerking met stuc, verf of decoratief materiaal. Optioneel voegen wij sfeervolle LED-verlichting toe.',
    kenmerken: [
      'TV-wand volledig op maat gebouwd',
      'Alle kabels onzichtbaar weggewerkt',
      'Sfeervolle LED-verlichting optioneel',
      'Stuc- of verfafwerking naar keuze',
      'Ruimte voor soundbar en apparatuur',
      'Stopcontacten en aansluitingen ingebouwd',
    ],
    voordelen: [
      { titel: 'Geen Zichtbare Kabels', tekst: 'Alle kabels, stopcontacten en aansluitingen worden onzichtbaar weggewerkt in de wand.' },
      { titel: 'Op Maat Gemaakt', tekst: 'Elke cinewall wordt specifiek ontworpen voor uw televisie, ruimte en stijl.' },
      { titel: 'Sfeerverlichting', tekst: 'Optionele LED-verlichting creëert de perfecte sfeer voor film- en spelletjesavonden.' },
      { titel: 'Luxe Uitstraling', tekst: 'Een cinewall geeft uw woonkamer direct een high-end, luxe uitstraling.' },
    ],
    faq: (locatie) => [
      { vraag: `Hoe lang duurt het plaatsen van een cinewall in ${locatie}?`, antwoord: `Gemiddeld 2 tot 4 dagen, afhankelijk van de complexiteit en afwerking. Wij plannen dit zorgvuldig in.` },
      { vraag: `Past elke TV op een cinewall?`, antwoord: `Ja, wij ontwerpen de cinewall op maat voor uw specifieke televisie en gewenste apparatuur.` },
      { vraag: `Kan een cinewall op elke muur in ${locatie}?`, antwoord: `In principe wel. Wij bouwen een voorzetwand waardoor het op vrijwel elke muur mogelijk is.` },
      { vraag: `Wat kost een cinewall in ${locatie}?`, antwoord: `De prijs hangt af van de afmetingen, afwerking en verlichting. Wij maken graag een vrijblijvende offerte op maat.` },
    ],
  },

  // === PVC VLOER LEGGEN ===
  {
    slug: 'pvc-vloer-leggen',
    naam: 'PVC Vloer Leggen',
    meervoud: 'PVC vloeren',
    afbeelding: '/images/vloer.jpeg',
    gerelateerdeSlug: 'pvc-vloer-leggen',
    intro: 'PVC vloeren zijn de ideale combinatie van stijl, comfort en praktisch gemak. Ze zijn waterdicht, geluiddempend, warm aan de voeten en verkrijgbaar in eindeloos veel dessins. Projectbouw 010 legt uw PVC vloer vakkundig: de ondergrond wordt eerst perfect geëgaliseerd, waarna de vloer strak en naadloos wordt gelegd. Met de juiste plinten en overgangsprofielen zorgen wij voor een compleet afgewerkt resultaat.',
    kenmerken: [
      'Egaliseren en voorbereiden ondergrond',
      'Professionele plaatsing PVC vloer',
      'Plinten en overgangsprofielen',
      'Geschikt voor vloerverwarming',
      'Diverse dessins en kleuren',
      'Waterdicht en onderhoudsvriendelijk',
    ],
    voordelen: [
      { titel: 'Waterdicht', tekst: 'PVC vloeren zijn volledig waterdicht — ideaal voor keuken, badkamer en hal.' },
      { titel: 'Onderhoudsvriendelijk', tekst: 'Eenvoudig schoon te houden en bestand tegen krassen en slijtage.' },
      { titel: 'Geluidsdempend', tekst: 'PVC vloeren dempen contactgeluid en zijn aangenaam stil om op te lopen.' },
      { titel: 'Grote Keuze', tekst: 'Van warm houtlook tot modern betondessin — er is voor elke stijl een PVC vloer.' },
    ],
    faq: (locatie) => [
      { vraag: `Kan PVC over een bestaande vloer gelegd worden in ${locatie}?`, antwoord: `Vaak wel, mits de ondergrond vlak en droog is. Wij beoordelen dit bij de opname en egaliseren indien nodig.` },
      { vraag: `Hoe lang gaat een PVC vloer mee?`, antwoord: `Een kwalitatieve PVC vloer gaat gemiddeld 15 tot 25 jaar mee bij normaal gebruik.` },
      { vraag: `Is PVC vloer geschikt voor vloerverwarming?`, antwoord: `Ja, PVC vloeren zijn uitstekend geschikt voor vloerverwarming dankzij hun dunne opbouw.` },
      { vraag: `Wat kost PVC vloer leggen in ${locatie}?`, antwoord: `De kosten hangen af van het oppervlak, de kwaliteit PVC en de staat van de ondergrond. Wij maken graag een vrijblijvende offerte.` },
    ],
  },

  // === WC RENOVATIE ===
  {
    slug: 'wc-renovatie',
    naam: 'WC Renovatie',
    meervoud: 'toiletrenovaties',
    afbeelding: '/images/badkamer.jpeg',
    gerelateerdeSlug: 'toilet-renovatie',
    intro: 'Een verouderd toilet? Projectbouw 010 transformeert uw WC in een stijlvolle, moderne ruimte. Ondanks de beperkte afmetingen maken wij er iets bijzonders van. Met slim ruimtegebruik, moderne materialen en vakkundige afwerking creëren wij een toilet dat er fris, schoon en verzorgd uitziet. Van tegelwerk en sanitair tot verlichting — wij denken aan elk detail.',
    kenmerken: [
      'Complete sloop en verwijdering oud toilet',
      'Nieuw leidingwerk en aansluiting',
      'Professioneel tegelwerk op wand en vloer',
      'Modern zwevend of staand toilet',
      'Verlichting en ventilatie',
      'Strakke afwerking met plinten en kit',
    ],
    voordelen: [
      { titel: 'Snel Klaar', tekst: 'Een WC renovatie is vaak binnen 3 tot 5 werkdagen afgerond. Minimale overlast.' },
      { titel: 'Slimme Indeling', tekst: 'Ook in de kleinste ruimte weten wij een functioneel en mooi toilet te realiseren.' },
      { titel: 'Hygiënisch & Modern', tekst: 'Naadloos tegelwerk en modern sanitair voor een hygiënische ruimte.' },
      { titel: 'Compleet Verzorgd', tekst: 'Van het eerste ontwerp tot de laatste afwerking: u hoeft zich nergens zorgen over te maken.' },
    ],
    faq: (locatie) => [
      { vraag: `Hoe lang duurt een WC renovatie in ${locatie}?`, antwoord: `Een complete WC renovatie in ${locatie} duurt gemiddeld 3 tot 5 werkdagen inclusief sloop, tegelwerk en sanitairplaatsing.` },
      { vraag: `Wat kost een toiletrenovatie in ${locatie}?`, antwoord: `De kosten hangen af van de gekozen tegels, het sanitair en de grootte van de ruimte. Onze prijzen zijn altijd all-in.` },
      { vraag: `Kan ik het toilet gebruiken tijdens de renovatie?`, antwoord: `Tijdens de renovatiedagen is het toilet niet beschikbaar. Wij proberen de werkzaamheden zo snel mogelijk af te ronden.` },
      { vraag: `Leveren jullie ook het sanitair?`, antwoord: `Wij kunnen u adviseren en het sanitair bestellen, maar u bent ook vrij om zelf te kiezen. Wij verzorgen de vakkundige plaatsing.` },
    ],
  },

  // === STALEN DEUREN ===
  {
    slug: 'stalen-deuren',
    naam: 'Stalen Deuren',
    meervoud: 'stalen deuren',
    afbeelding: '/images/1.jpg',
    gerelateerdeSlug: 'stalen-deuren',
    intro: 'Stalen deuren geven uw interieur direct een industriële, moderne uitstraling. Ze laten licht door terwijl ze ruimtes visueel scheiden. Projectbouw 010 plaatst stalen deuren en kozijnen die op maat gemaakt worden voor uw specifieke situatie. Of het nu gaat om een taatsdeur, dubbele openslaande deuren of een compleet stalen kozijn met zijlichten — wij zorgen voor een perfecte plaatsing.',
    kenmerken: [
      'Op maat gemaakte stalen deuren',
      'Taatsdeuren, schuifdeuren en openslaand',
      'Inclusief stalen kozijn',
      'Diverse glasopties (helder, mat, draad)',
      'Vakkundige plaatsing en afwerking',
      'Poedercoating in elke gewenste kleur',
    ],
    voordelen: [
      { titel: 'Licht & Openheid', tekst: 'Stalen deuren met glas laten maximaal licht door en geven een open gevoel.' },
      { titel: 'Industriële Stijl', tekst: 'De dunne stalen profielen geven een stoere, industriële uitstraling aan uw interieur.' },
      { titel: 'Diverse Opties', tekst: 'Taatsdeuren, schuifdeuren, openslaand — alles is mogelijk in staal.' },
      { titel: 'Duurzaam Materiaal', tekst: 'Stalen deuren zijn ijzersterk en gaan een leven lang mee.' },
    ],
    faq: (locatie) => [
      { vraag: `Wat kosten stalen deuren in ${locatie}?`, antwoord: `De prijs hangt af van het type, de afmeting en het glas. Wij maken graag een offerte op maat voor uw situatie in ${locatie}.` },
      { vraag: `Hoe lang duurt het plaatsen van stalen deuren?`, antwoord: `Gemiddeld 1 tot 2 dagen voor plaatsing inclusief kozijn en afwerking.` },
      { vraag: `Zijn stalen deuren geluiddicht?`, antwoord: `Stalen deuren dempen geluid gedeeltelijk. Voor maximale geluidsisolatie adviseren wij dubbel glas.` },
      { vraag: `Kunnen jullie een bestaande deur vervangen in ${locatie}?`, antwoord: `Ja, wij verwijderen de oude deur en het kozijn en plaatsen het nieuwe stalen geheel op maat.` },
    ],
  },

  // === VERLAAGD PLAFOND ===
  {
    slug: 'verlaagd-plafond',
    naam: 'Verlaagd Plafond',
    meervoud: 'verlaagde plafonds',
    afbeelding: '/images/plafon_verlaagd.jpg',
    gerelateerdeSlug: 'verlaagd-plafond',
    intro: 'Een verlaagd plafond transformeert elke ruimte. Het creëert een strakke, moderne uitstraling en biedt praktische voordelen zoals inbouwspots, geluidsisolatie en het wegwerken van leidingen. Projectbouw 010 plaatst verlaagde plafonds van gipsplaat of MDF, strak afgewerkt en klaar om te schilderen. Onze elektricien zorgt voor de perfecte plaatsing van spots en sfeerverlichting.',
    kenmerken: [
      'Gipsplaten of MDF constructie',
      'Inbouwspots en LED-verlichting',
      'Geluidsisolatie tussen verdiepingen',
      'Wegwerken van leidingen en kabels',
      'Strak afgewerkt en schilderklaar',
      'Geschikt voor elke ruimte',
    ],
    voordelen: [
      { titel: 'Strakke Look', tekst: 'Een perfect vlak plafond geeft elke ruimte een verzorgde, moderne uitstraling.' },
      { titel: 'Inbouwverlichting', tekst: 'Spots, LED-strips en dimbare verlichting worden naadloos geïntegreerd.' },
      { titel: 'Geluidsisolatie', tekst: 'Extra isolatie tussen plafond en verdieping vermindert contactgeluid aanzienlijk.' },
      { titel: 'Kabels Wegwerken', tekst: 'Leidingen, kabels en oneffenheden verdwijnen achter het verlaagde plafond.' },
    ],
    faq: (locatie) => [
      { vraag: `Hoeveel hoogte verlies ik bij een verlaagd plafond?`, antwoord: `Minimaal 5 tot 8 cm. Bij inbouwspots is 10 tot 12 cm gebruikelijk. Wij adviseren bij een plafondhoogte van minimaal 2.40m.` },
      { vraag: `Kan een verlaagd plafond in elke ruimte in ${locatie}?`, antwoord: `Ja, een verlaagd plafond is mogelijk in vrijwel elke ruimte — woonkamer, slaapkamer, badkamer of hal.` },
      { vraag: `Is het geschikt voor de badkamer?`, antwoord: `Ja, met vochtbestendige gipsplaten is een verlaagd plafond ook in vochtige ruimtes prima toepasbaar.` },
      { vraag: `Wat kost een verlaagd plafond in ${locatie}?`, antwoord: `De kosten hangen af van het oppervlak, het type materiaal en de verlichting. Wij maken graag een vrijblijvende offerte.` },
    ],
  },

  // === TRAPRENOVATIE ===
  {
    slug: 'traprenovatie',
    naam: 'Traprenovatie',
    meervoud: 'traprenovaties',
    afbeelding: '/images/3.jpg',
    gerelateerdeSlug: 'traprenovatie',
    intro: 'Uw trap is het eerste wat u ziet als u binnenkomt. Een verouderde trap trekt de uitstraling van uw hele hal omlaag. Met een traprenovatie geeft Projectbouw 010 uw trap een complete metamorfose. Of u kiest voor het bekleden met hout, laminaat of vinyl, of voor een complete vervanging — wij leveren altijd een strak en modern resultaat. Inclusief nieuwe leuning en antislip afwerking.',
    kenmerken: [
      'Trap bekleden met hout, laminaat of vinyl',
      'Trapleuning vernieuwen',
      'Complete trapvervanging mogelijk',
      'Antislip afwerking voor veiligheid',
      'Optionele LED-verlichting onder treden',
      'Diverse materialen en kleuren',
    ],
    voordelen: [
      { titel: 'Grote Impact', tekst: 'Een gerenoveerde trap verandert de uitstraling van uw hele hal en entree.' },
      { titel: 'Diverse Materialen', tekst: 'Kies uit eiken, laminaat, vinyl of PVC — passend bij uw interieur.' },
      { titel: 'Veilig & Comfortabel', tekst: 'Antislip afwerking en een stevige leuning zorgen voor veilig traplopen.' },
      { titel: 'Snel Resultaat', tekst: 'Een traprenovatie is vaak binnen 1 tot 2 dagen gerealiseerd.' },
    ],
    faq: (locatie) => [
      { vraag: `Kan elke trap gerenoveerd worden in ${locatie}?`, antwoord: `De meeste trappen zijn geschikt voor renovatie. Wij beoordelen de staat van uw trap bij de opname.` },
      { vraag: `Hoe lang duurt een traprenovatie?`, antwoord: `Bij bekleding meestal 1 tot 2 dagen. Bij een complete vervanging kan het iets langer duren.` },
      { vraag: `Wat kost een traprenovatie in ${locatie}?`, antwoord: `De kosten hangen af van het gekozen materiaal en het type trap. Wij maken graag een vrijblijvende offerte.` },
      { vraag: `Is de trap direct na renovatie te gebruiken?`, antwoord: `Bij bekleding meestal direct. Bij een gelakte of geoliede trap adviseren wij 24 uur droogtijd.` },
    ],
  },

  // === TEGELZETTER ===
  {
    slug: 'tegelzetter',
    naam: 'Tegelzetter',
    meervoud: 'tegelwerkzaamheden',
    afbeelding: '/images/tegelzetter.jpg',
    gerelateerdeSlug: 'tegelzetter',
    intro: 'Goed tegelwerk maakt het verschil in elke ruimte. De tegelzetters van Projectbouw 010 zijn echte vakmensen die met precisie en oog voor detail werken. Van kleine mozaïektegels tot XXL formaten, van vloertegels in de woonkamer tot wandtegels in de badkamer — wij leggen het allemaal strak en waterdicht. De juiste voorbereiding is essentieel: wij egaliseren, gronden en waterdichten voordat de eerste tegel wordt gelegd.',
    kenmerken: [
      'Wand- en vloertegels in alle formaten',
      'Mozaïek en grootformaat tegels',
      'Waterdichte afwerking in natte ruimtes',
      'Egaliseren en voorbereiden ondergrond',
      'Diverse patronen en legverbanden',
      'Voegen en kitwerk',
    ],
    voordelen: [
      { titel: 'Vakmanschap', tekst: 'Ervaren tegelzetters die met millimeterprecisie werken voor een strak resultaat.' },
      { titel: 'Alle Formaten', tekst: 'Van klein mozaïek tot XXL tegels — wij verwerken elk formaat deskundig.' },
      { titel: 'Waterdicht', tekst: 'Professionele waterdichte afwerking in natte ruimtes voorkomt vochtproblemen.' },
      { titel: 'Duurzaam Resultaat', tekst: 'Kwalitatief tegelwerk dat jarenlang mooi blijft zonder onderhoud.' },
    ],
    faq: (locatie) => [
      { vraag: `Wat kost een tegelzetter in ${locatie}?`, antwoord: `De kosten hangen af van het oppervlak, het formaat tegels en de complexiteit. Wij maken graag een vrijblijvende offerte voor uw project in ${locatie}.` },
      { vraag: `Leveren jullie ook de tegels?`, antwoord: `Wij adviseren u graag, maar u bent vrij om zelf tegels uit te kiezen bij een tegelhandel. Wij zorgen voor het vakkundig leggen.` },
      { vraag: `Kunnen jullie vloerverwarming combineren met tegels?`, antwoord: `Ja, tegels zijn uitstekend geschikt voor vloerverwarming. Wij hebben hier ruime ervaring mee.` },
      { vraag: `Hoe lang duurt het betegelen in ${locatie}?`, antwoord: `Dit hangt af van het oppervlak en de tegel. Een gemiddelde badkamer is in 3 tot 5 dagen betegeld.` },
    ],
  },

  // === BETON CIRÉ ===
  {
    slug: 'beton-cire',
    naam: 'Beton Ciré',
    meervoud: 'beton ciré toepassingen',
    afbeelding: '/images/beton_circe.jpg',
    gerelateerdeSlug: 'beton-cire',
    intro: 'Beton ciré is een exclusieve afwerkingstechniek die een naadloos, betonachtig oppervlak creëert. Het is toepasbaar op vloeren, wanden, aanrechtbladen en zelfs in douches. Het materiaal is waterdicht, slijtvast en verkrijgbaar in tientallen kleurtinten. De specialisten van Projectbouw 010 brengen beton ciré met de hand aan in meerdere lagen, waardoor elk oppervlak uniek is.',
    kenmerken: [
      'Naadloos, betonachtig oppervlak',
      'Toepasbaar op vloeren en wanden',
      'Waterdicht en geschikt voor douches',
      'Tientallen kleurtinten beschikbaar',
      'Handmatig aangebracht in meerdere lagen',
      'Slijtvast en onderhoudsarm',
    ],
    voordelen: [
      { titel: 'Naadloos Oppervlak', tekst: 'Geen voegen of naden — een doorlopend, strak oppervlak in elke ruimte.' },
      { titel: 'Veelzijdig Toepasbaar', tekst: 'Geschikt voor vloeren, wanden, meubels, aanrechten en zelfs douches.' },
      { titel: 'Uniek Handwerk', tekst: 'Elke toepassing is handgemaakt en daardoor uniek in textuur en uitstraling.' },
      { titel: 'Onderhoudsarm', tekst: 'Eenmaal aangebracht is beton ciré eenvoudig schoon te houden en zeer duurzaam.' },
    ],
    faq: (locatie) => [
      { vraag: `Is beton ciré geschikt voor de badkamer in ${locatie}?`, antwoord: `Ja, mits correct aangebracht met de juiste sealer is beton ciré volledig waterdicht en geschikt voor natte ruimtes.` },
      { vraag: `Kan beton ciré over bestaande tegels?`, antwoord: `Ja, beton ciré kan direct over bestaande tegels worden aangebracht na de juiste voorbehandeling.` },
      { vraag: `Hoe lang duurt de applicatie van beton ciré?`, antwoord: `Gemiddeld 3 tot 5 dagen inclusief droogtijd tussen de lagen. Het is een ambachtelijk proces.` },
      { vraag: `Wat kost beton ciré in ${locatie}?`, antwoord: `De kosten hangen af van het oppervlak en de toepassing. Wij maken graag een vrijblijvende offerte voor uw project in ${locatie}.` },
    ],
  },

  // === COMPLETE HUISRENOVATIE ===
  {
    slug: 'complete-huisrenovatie',
    naam: 'Complete Huisrenovatie',
    meervoud: 'huisrenovaties',
    afbeelding: '/images/cinewall.jpeg',
    gerelateerdeSlug: 'aanbouw',
    intro: 'Een complete huisrenovatie is een ingrijpend maar waardevol project. Projectbouw 010 is uw partner voor de totale transformatie van uw woning. Van keuken en badkamer tot woonkamer, slaapkamers en alles daartussen — wij renoveren uw huis van A tot Z. Met één vast aanspreekpunt, een strakke planning en vakmanschap op elk vlak zorgen wij voor een resultaat dat uw verwachtingen overtreft.',
    kenmerken: [
      'Totaalrenovatie van alle vertrekken',
      'Keuken, badkamer en toilet renovatie',
      'Stucwerk, schilderwerk en vloeren',
      'Elektra en leidingwerk vernieuwen',
      'Wanden verplaatsen en ruimtes openen',
      'Eindoplevering met garantie',
    ],
    voordelen: [
      { titel: 'Eén Aanspreekpunt', tekst: 'Geen gedoe met tien verschillende vakmensen. Wij coördineren het volledige traject.' },
      { titel: 'Strakke Planning', tekst: 'Wij stemmen alle werkzaamheden op elkaar af zodat uw project op tijd klaar is.' },
      { titel: 'All-in Prijs', tekst: 'U ontvangt één duidelijke offerte voor het complete project. Geen verrassingen.' },
      { titel: 'Waardeverhoging', tekst: 'Een compleet gerenoveerd huis is comfortabeler en aanzienlijk meer waard bij verkoop.' },
    ],
    faq: (locatie) => [
      { vraag: `Hoe lang duurt een complete huisrenovatie in ${locatie}?`, antwoord: `Gemiddeld 6 tot 16 weken, afhankelijk van de omvang. Wij maken vooraf een gedetailleerde planning.` },
      { vraag: `Kan ik in mijn huis blijven wonen in ${locatie}?`, antwoord: `Bij een complete renovatie adviseren wij meestal om tijdelijk elders te verblijven. Dit versnelt het proces.` },
      { vraag: `Wat kost een complete huisrenovatie in ${locatie}?`, antwoord: `De kosten variëren sterk per project. Wij maken altijd een gedetailleerde, vrijblijvende offerte op maat.` },
      { vraag: `Regelen jullie ook de vergunningen in ${locatie}?`, antwoord: `Ja, als er vergunningen nodig zijn verzorgen wij de volledige aanvraag bij de gemeente.` },
    ],
  },
];
