export interface Dienst {
  slug: string;
  naam: string;
  omschrijving: string;
  beschrijving: string;
  afbeelding: string;
  heroAfbeelding?: string;
  kenmerken: string[];
  voordelen: { titel: string; tekst: string }[];
  faq: { vraag: string; antwoord: string }[];
}

export const diensten: Dienst[] = [
  {
    slug: 'aanbouw',
    naam: 'Aanbouw',
    omschrijving: 'Meer leefruimte nodig? Wij realiseren uw aanbouw vakkundig en op maat, volledig afgestemd op uw woning en wensen.',
    beschrijving: 'Een aanbouw is dé manier om uw woning te vergroten zonder te verhuizen. Of het nu gaat om een extra woonkamer, een ruimere keuken of een praktische bijkeuken — wij realiseren uw aanbouw van fundament tot afwerking. Ons team verzorgt het complete traject: van de eerste tekening en vergunningsaanvraag tot de oplevering. Wij werken uitsluitend met hoogwaardige materialen en zorgen dat de aanbouw naadloos aansluit op uw bestaande woning, zowel constructief als esthetisch.',
    afbeelding: '/src/assets/images/aanbouw.jpg',
    kenmerken: ['Constructieberekeningen', 'Vergunningsaanvraag', 'Fundament tot afwerking', 'Volledig ontzorgd'],
    voordelen: [
      { titel: 'Meer Woonruimte', tekst: 'Vergroot uw woning met extra vierkante meters zonder de kosten en stress van een verhuizing.' },
      { titel: 'Waardeverhoging', tekst: 'Een professionele aanbouw verhoogt de waarde van uw woning aanzienlijk.' },
      { titel: 'Compleet Ontzorgd', tekst: 'Van vergunning tot oplevering: wij regelen alles zodat u nergens naar om hoeft te kijken.' },
      { titel: 'Op Maat Ontworpen', tekst: 'Elke aanbouw wordt specifiek ontworpen voor uw woning en uw wensen.' },
    ],
    faq: [
      { vraag: 'Heb ik een vergunning nodig voor een aanbouw?', antwoord: 'In veel gevallen wel. Wij verzorgen de volledige vergunningsaanvraag en adviseren u over de mogelijkheden binnen het bestemmingsplan.' },
      { vraag: 'Hoe lang duurt een aanbouw?', antwoord: 'Gemiddeld 6 tot 10 weken, afhankelijk van de grootte en complexiteit. Wij geven u vooraf een duidelijke planning.' },
      { vraag: 'Kan ik in mijn woning blijven wonen tijdens de bouw?', antwoord: 'Ja, in de meeste gevallen kunt u gewoon in uw woning blijven. Wij zorgen voor minimale overlast.' },
    ],
  },
  {
    slug: 'uitbouw',
    naam: 'Uitbouw',
    omschrijving: 'Vergroot uw woonkamer of keuken met een stijlvolle uitbouw. Van ontwerp tot oplevering verzorgen wij alles.',
    beschrijving: 'Met een uitbouw haalt u letterlijk meer ruimte en licht in uw woning. Een uitbouw aan de achterzijde van uw woning is een populaire keuze om de woonkamer of keuken flink te vergroten. Denk aan grote schuifpuien, een lichtstraat of vouwpui die uw woning opent naar de tuin. Wij realiseren uitbouwen die perfect aansluiten op de bestaande architectuur en voldoen aan alle bouwkundige eisen. Het resultaat: een lichte, ruime leefomgeving die uw wooncomfort enorm vergroot.',
    afbeelding: '/src/assets/images/uitbouw.jpeg',
    kenmerken: ['Meer lichtinval', 'Waardeverhoging woning', 'Naadloze aansluiting', 'Isolatie conform normen'],
    voordelen: [
      { titel: 'Meer Licht & Ruimte', tekst: 'Grote glaspartijen zorgen voor een overvloed aan natuurlijk licht in uw woning.' },
      { titel: 'Naadloze Aansluiting', tekst: 'De uitbouw sluit perfect aan op uw bestaande woning, alsof het er altijd al was.' },
      { titel: 'Energiezuinig', tekst: 'Moderne isolatie en materialen zorgen voor een energiezuinige uitbreiding van uw woning.' },
      { titel: 'Tuin Verbinding', tekst: 'Met een vouwpui of schuifpui creëert u een vloeiende overgang naar uw tuin.' },
    ],
    faq: [
      { vraag: 'Hoe groot mag een uitbouw zijn?', antwoord: 'Dit hangt af van uw gemeente en bestemmingsplan. Vaak is vergunningsvrij tot 4 meter mogelijk. Wij adviseren u over de maximale mogelijkheden.' },
      { vraag: 'Welke materialen worden gebruikt?', antwoord: 'Wij werken met hoogwaardige materialen zoals staal, aluminium kozijnen en HR++ glas. Altijd conform de nieuwste isolatienormen.' },
      { vraag: 'Wat kost een uitbouw gemiddeld?', antwoord: 'De kosten variëren afhankelijk van grootte en afwerking. Wij maken graag een vrijblijvende offerte op maat voor u.' },
    ],
  },
  {
    slug: 'opbouw',
    naam: 'Opbouw',
    omschrijving: 'Een extra verdieping op uw woning? Wij bouwen vakkundig op met respect voor de bestaande constructie.',
    beschrijving: 'Een opbouw is de ideale oplossing wanneer u meer ruimte nodig heeft maar uw grondoppervlak beperkt is. Door een extra verdieping toe te voegen creëert u ruimte voor een slaapkamer, kantoor of badkamer zonder dat uw tuin kleiner wordt. Ons team heeft uitgebreide ervaring met opbouwen en zorgt dat de bestaande constructie veilig wordt belast. Wij handelen het complete traject af: van constructieberekeningen en vergunningen tot de dakafdichting en binnenafwerking.',
    afbeelding: '/src/assets/images/opbouw.jpeg',
    kenmerken: ['Extra slaapkamer of kantoor', 'Constructief veilig', 'Dakafwerking inclusief', 'Vergunningstraject'],
    voordelen: [
      { titel: 'Maximale Benutting', tekst: 'Benut de volledige potentie van uw kavel door naar boven te bouwen.' },
      { titel: 'Constructief Veilig', tekst: 'Professionele berekeningen garanderen dat uw woning de extra verdieping veilig draagt.' },
      { titel: 'Tuin Behouden', tekst: 'In tegenstelling tot een aanbouw behoudt u uw volledige tuin en buitenruimte.' },
      { titel: 'Complete Afwerking', tekst: 'Van staalconstructie tot schilderwerk — wij leveren een kant-en-klare verdieping op.' },
    ],
    faq: [
      { vraag: 'Kan elke woning een opbouw krijgen?', antwoord: 'Niet altijd. De bestaande constructie moet sterk genoeg zijn. Wij laten dit altijd door een constructeur beoordelen voordat we beginnen.' },
      { vraag: 'Hoe lang duurt een opbouw?', antwoord: 'Gemiddeld 8 tot 14 weken. De exacte duur hangt af van de omvang en het weer tijdens de bouw.' },
      { vraag: 'Is een opbouw vergunningsplichtig?', antwoord: 'Ja, voor een opbouw is vrijwel altijd een omgevingsvergunning nodig. Wij verzorgen de volledige aanvraag.' },
    ],
  },
  {
    slug: 'badkamer-renovatie',
    naam: 'Badkamer Renovatie',
    omschrijving: 'Complete badkamerrenovatie met hoogwaardige materialen en modern design. Van sloop tot en met installatie.',
    beschrijving: 'Uw badkamer is een ruimte waar u elke dag begint en eindigt — daarom verdient het de beste aanpak. Bij een complete badkamerrenovatie verzorgen wij alles: van het slopen van de oude badkamer tot het plaatsen van het laatste sanitair. Wij werken met topmerken en besteden extra aandacht aan waterdichtheid, ventilatie en functionaliteit. Of u nu droomt van een luxe inloopdouche, een vrijstaand bad of een compact maar slim ingedeeld geheel — wij maken het werkelijkheid.',
    afbeelding: '/src/assets/images/badkamer.jpeg',
    kenmerken: ['Complete sloop en afvoer', 'Leidingwerk en installatie', 'Tegelwerk en afwerking', 'Sanitair plaatsing'],
    voordelen: [
      { titel: 'Alles-in-één', tekst: 'Eén aannemer voor het complete traject: sloop, leidingen, tegels, sanitair en afwerking.' },
      { titel: 'Waterdicht Systeem', tekst: 'Professionele waterdichte afwerking voorkomt lekkages en vochtproblemen.' },
      { titel: 'Moderne Materialen', tekst: 'Wij werken met de nieuwste materialen en sanitair voor een tijdloos resultaat.' },
      { titel: 'Slim Ingedeeld', tekst: 'Ook in een kleine ruimte creëren wij een functionele en luxe badkamer.' },
    ],
    faq: [
      { vraag: 'Hoe lang duurt een badkamerrenovatie?', antwoord: 'Gemiddeld 2 tot 3 weken voor een complete renovatie. Bij complexe projecten kan dit iets langer zijn.' },
      { vraag: 'Moet ik zelf sanitair uitzoeken?', antwoord: 'Dat mag, maar wij helpen u ook graag met advies en hebben contacten bij diverse leveranciers voor scherpe prijzen.' },
      { vraag: 'Kan ik douchen tijdens de verbouwing?', antwoord: 'We proberen altijd een noodvoorziening te regelen zodat u niet helemaal zonder zit. Dit bespreken we vooraf.' },
    ],
  },
  {
    slug: 'keukenrenovatie',
    naam: 'Keukenrenovatie',
    omschrijving: 'Uw droomkeuken op maat gemaakt. Van ontwerp en installatie tot de laatste afwerking.',
    beschrijving: 'De keuken is het hart van uw woning. Een goed ontworpen keuken combineert functionaliteit met stijl en maakt koken en samenzijn een plezier. Wij verzorgen complete keukenrenovaties: van het verwijderen van de oude keuken en het aanpassen van leidingwerk tot het plaatsen en aansluiten van uw nieuwe keuken. Wij werken nauw samen met u om een keuken te realiseren die past bij uw levensstijl, smaak en budget. Met oog voor detail en praktische indeling.',
    afbeelding: '/src/assets/images/keuken.jpeg',
    kenmerken: ['Op maat ontwerp', 'Leidingwerk aanpassing', 'Tegelwerk en spatwand', 'Apparatuur installatie'],
    voordelen: [
      { titel: 'Persoonlijk Ontwerp', tekst: 'Samen met u ontwerpen wij een keuken die perfect past bij uw wensen en leefstijl.' },
      { titel: 'Complete Installatie', tekst: 'Van gas en water tot elektra — alle aansluitingen worden vakkundig verzorgd.' },
      { titel: 'Stijlvolle Afwerking', tekst: 'Spatwand, verlichting en accessoires: wij zorgen voor een afgewerkt geheel.' },
      { titel: 'Duurzame Kwaliteit', tekst: 'Hoogwaardige materialen en apparatuur voor jarenlang kookplezier.' },
    ],
    faq: [
      { vraag: 'Leveren jullie ook de keuken zelf?', antwoord: 'Wij kunnen u adviseren bij de keuze, maar u bent vrij om zelf een keuken uit te kiezen. Wij zorgen voor de complete plaatsing.' },
      { vraag: 'Hoe lang duurt een keukenrenovatie?', antwoord: 'Gemiddeld 1 tot 2 weken voor plaatsing en afwerking, exclusief de levertijd van de keuken.' },
      { vraag: 'Kunnen jullie de indeling aanpassen?', antwoord: 'Ja, wij kunnen leidingwerk verleggen en de ruimte anders indelen voor een optimale keukenopstelling.' },
    ],
  },
  {
    slug: 'stukadoor',
    naam: 'Stukadoor',
    omschrijving: 'Professioneel stucwerk voor wanden en plafonds. Glad, sierpleister of betonlook — wij beheersen alle technieken.',
    beschrijving: 'Stucwerk geeft uw wanden en plafonds een strakke, professionele uitstraling. Of u nu kiest voor glad stucwerk, een warme sierpleister of de stoere betonlook — onze ervaren stukadoors beheersen alle technieken. Wij werken snel, stofvrij en netjes, en leveren altijd een vlekkeloos resultaat. Naast nieuwbouw stucen wij ook bestaande wanden over, herstellen scheuren en brengen speciale afwerkingen aan. Een goed gestucte muur maakt het verschil in elk interieur.',
    afbeelding: '/src/assets/images/stukadoor.jpg',
    kenmerken: ['Glad stucwerk', 'Sierpleister', 'Betonlook', 'Wanden en plafonds'],
    voordelen: [
      { titel: 'Strakke Afwerking', tekst: 'Spiegelglad stucwerk voor een moderne, strakke uitstraling in elke ruimte.' },
      { titel: 'Diverse Technieken', tekst: 'Van glad en sierpleister tot betonlook — wij beheersen alle stuctechnieken.' },
      { titel: 'Scheurvrij Resultaat', tekst: 'Met de juiste voorbereiding en materialen garanderen wij een langdurig scheurvrij resultaat.' },
      { titel: 'Snel & Netjes', tekst: 'Onze stukadoors werken efficiënt en laten uw woning netjes achter.' },
    ],
    faq: [
      { vraag: 'Wat is het verschil tussen glad stuc en sierpleister?', antwoord: 'Glad stucwerk geeft een strakke, moderne look. Sierpleister heeft meer textuur en een warme uitstraling. Wij adviseren u graag over de beste keuze.' },
      { vraag: 'Kunnen jullie ook plafonds stucen?', antwoord: 'Ja, wij stucen zowel wanden als plafonds. Ook in combinatie met verlaagde plafonds.' },
      { vraag: 'Hoe lang moet stucwerk drogen?', antwoord: 'Gemiddeld 1 tot 2 weken voordat u kunt schilderen. Dit hangt af van de dikte en het seizoen.' },
    ],
  },
  {
    slug: 'cinewall',
    naam: 'Cinewall',
    omschrijving: 'Een stijlvolle cinewall op maat voor uw woonkamer. Kabels weggewerkt, strak afgewerkt.',
    beschrijving: 'Een cinewall is dé manier om uw televisie stijlvol te integreren in uw interieur. Alle kabels worden weggewerkt in de wand, waardoor u een strakke, opgeruimde look krijgt. Wij bouwen uw cinewall volledig op maat: van de constructie en elektra tot de afwerking met stuc, verf of decoratief materiaal. Optioneel voegen wij sfeervolle LED-verlichting toe voor een echte bioscoop-ervaring. Het resultaat is een eye-catcher in uw woonkamer die tegelijkertijd praktisch en stijlvol is.',
    afbeelding: '/src/assets/images/cinewall1.jpeg',
    heroAfbeelding: '/src/assets/images/cinewall5.jpeg',
    kenmerken: ['TV-wand op maat', 'Kabels weggewerkt', 'LED-verlichting optioneel', 'Strak afgewerkt'],
    voordelen: [
      { titel: 'Geen Zichtbare Kabels', tekst: 'Alle kabels, stopcontacten en aansluitingen worden onzichtbaar weggewerkt.' },
      { titel: 'Op Maat Gemaakt', tekst: 'Elke cinewall wordt specifiek ontworpen voor uw televisie, ruimte en stijl.' },
      { titel: 'Sfeerverlichting', tekst: 'Optionele LED-verlichting creëert de perfecte sfeer voor film- en spelletjesavonden.' },
      { titel: 'Luxe Uitstraling', tekst: 'Een cinewall geeft uw woonkamer direct een high-end, luxe uitstraling.' },
    ],
    faq: [
      { vraag: 'Past elke TV op een cinewall?', antwoord: 'Ja, wij ontwerpen de cinewall op maat voor uw specifieke televisie en gewenste apparatuur.' },
      { vraag: 'Kan een cinewall op elke muur?', antwoord: 'In principe wel. Wij bouwen een voorzetwand waardoor het op vrijwel elke muur mogelijk is.' },
      { vraag: 'Hoe lang duurt het plaatsen?', antwoord: 'Gemiddeld 2 tot 4 dagen, afhankelijk van de complexiteit en afwerking.' },
    ],
  },
  {
    slug: 'pvc-vloer-leggen',
    naam: 'PVC Vloer Leggen',
    omschrijving: 'Professioneel PVC vloeren leggen. Duurzaam, onderhoudsvriendelijk en in diverse stijlen verkrijgbaar.',
    beschrijving: 'PVC vloeren zijn de ideale combinatie van stijl, comfort en praktisch gemak. Ze zijn waterdicht, geluiddempend, warm aan de voeten en verkrijgbaar in eindeloos veel dessins — van houtlook tot betonlook. Wij leggen uw PVC vloer vakkundig: de ondergrond wordt eerst perfect geëgaliseerd, waarna de vloer strak en naadloos wordt gelegd. Met de juiste plinten en overgangsprofielen zorgen wij voor een compleet afgewerkt resultaat dat jarenlang meegaat.',
    afbeelding: '/src/assets/images/vloer.jpeg',
    kenmerken: ['Egaliseren ondergrond', 'Professionele plaatsing', 'Diverse dessins', 'Plinten afwerking'],
    voordelen: [
      { titel: 'Waterdicht', tekst: 'PVC vloeren zijn volledig waterdicht — ideaal voor keuken, badkamer en hal.' },
      { titel: 'Onderhoudsvriendelijk', tekst: 'Eenvoudig schoon te houden en bestand tegen krassen en slijtage.' },
      { titel: 'Geluidsdempend', tekst: 'PVC vloeren dempen contactgeluid en zijn aangenaam stil om op te lopen.' },
      { titel: 'Grote Keuze', tekst: 'Van warm houtlook tot modern betondessin — er is voor elke stijl een PVC vloer.' },
    ],
    faq: [
      { vraag: 'Kan PVC over bestaande vloer gelegd worden?', antwoord: 'Vaak wel, mits de ondergrond vlak en droog is. Wij beoordelen dit bij de opname en egaliseren indien nodig.' },
      { vraag: 'Hoe lang gaat een PVC vloer mee?', antwoord: 'Een kwalitatieve PVC vloer gaat gemiddeld 15 tot 25 jaar mee bij normaal gebruik.' },
      { vraag: 'Is PVC vloer geschikt voor vloerverwarming?', antwoord: 'Ja, PVC vloeren zijn uitstekend geschikt voor vloerverwarming dankzij hun dunne opbouw.' },
    ],
  },
  {
    slug: 'toilet-renovatie',
    naam: 'Toilet Renovatie',
    omschrijving: 'Complete toilet renovatie inclusief tegelwerk, sanitair en leidingwerk. Klein maar fijn, tot in de puntjes afgewerkt.',
    beschrijving: 'Een toilet is klein, maar de impact van een renovatie is groot. Wij transformeren uw toilet van verouderd naar modern en fris. Bij een complete toiletrenovatie vervangen wij alles: van de tegels en het sanitair tot het leidingwerk en de verlichting. Wij denken slim mee over de indeling om de beschikbare ruimte optimaal te benutten. Met een zwevend toilet, stijlvolle tegels en de juiste verlichting creëren wij een ruimte die er strak en verzorgd uitziet.',
    afbeelding: '/src/assets/images/badkamer.jpeg',
    kenmerken: ['Complete renovatie', 'Tegelwerk', 'Sanitair installatie', 'Leidingwerk'],
    voordelen: [
      { titel: 'Compleet Vernieuwd', tekst: 'Van vloer tot plafond alles nieuw voor een fris, modern resultaat.' },
      { titel: 'Slimme Indeling', tekst: 'Wij benutten elke centimeter optimaal, ook in de kleinste ruimtes.' },
      { titel: 'Snel Klaar', tekst: 'Een toiletrenovatie is binnen enkele dagen afgerond — minimale overlast.' },
      { titel: 'Hygiënisch', tekst: 'Modern sanitair en naadloos tegelwerk voor een hygiënische, onderhoudsvriendelijke ruimte.' },
    ],
    faq: [
      { vraag: 'Hoe lang duurt een toilet renovatie?', antwoord: 'Gemiddeld 3 tot 5 werkdagen voor een complete renovatie inclusief tegelwerk en sanitair.' },
      { vraag: 'Kan ik het toilet gebruiken tijdens de renovatie?', antwoord: 'Gedurende de renovatie is het toilet niet beschikbaar. We proberen dit zo kort mogelijk te houden.' },
      { vraag: 'Leveren jullie ook het sanitair?', antwoord: 'Wij kunnen u adviseren en leveren, maar u bent ook vrij om zelf sanitair aan te schaffen.' },
    ],
  },
  {
    slug: 'stalen-deuren',
    naam: 'Stalen Deuren',
    omschrijving: 'Industriele stalen deuren en kozijnen voor een stijlvolle uitstraling. Op maat gemaakt en vakkundig geplaatst.',
    beschrijving: 'Stalen deuren geven uw interieur direct een industriële, moderne uitstraling. Ze laten licht door terwijl ze ruimtes visueel scheiden. Wij plaatsen stalen deuren en kozijnen die op maat gemaakt worden voor uw specifieke situatie. Of het nu gaat om een enkele taatsdeur, dubbele openslaande deuren of een compleet stalen kozijn met zijlichten — wij adviseren u over de beste optie en zorgen voor een perfecte plaatsing. Het resultaat: een tijdloze eye-catcher in uw woning.',
    afbeelding: '/src/assets/images/stalen-deur1.jpeg',
    heroAfbeelding: '/src/assets/images/stalen-deur3.jpeg',
    kenmerken: ['Op maat gemaakt', 'Diverse stijlen', 'Inclusief kozijn', 'Vakkundige plaatsing'],
    voordelen: [
      { titel: 'Licht & Openheid', tekst: 'Stalen deuren met glas laten maximaal licht door en geven een open gevoel.' },
      { titel: 'Industriële Stijl', tekst: 'De dunne stalen profielen geven een stoere, industriële uitstraling aan uw interieur.' },
      { titel: 'Diverse Opties', tekst: 'Taatsdeuren, schuifdeuren, openslaand — alles is mogelijk in staal.' },
      { titel: 'Duurzaam Materiaal', tekst: 'Stalen deuren zijn ijzersterk en gaan een leven lang mee.' },
    ],
    faq: [
      { vraag: 'Zijn stalen deuren geluiddicht?', antwoord: 'Stalen deuren dempen geluid gedeeltelijk. Voor maximale geluidsisolatie adviseren wij dubbel glas.' },
      { vraag: 'Wat kost een stalen deur?', antwoord: 'De prijs hangt af van het type, de afmeting en het glas. Wij maken graag een offerte op maat voor u.' },
      { vraag: 'Kunnen jullie een bestaande deur vervangen?', antwoord: 'Ja, wij verwijderen de oude deur en het kozijn en plaatsen het nieuwe stalen geheel op maat.' },
    ],
  },
  {
    slug: 'verlaagd-plafond',
    naam: 'Verlaagd Plafond',
    omschrijving: 'Een verlaagd plafond voor een strakke, moderne uitstraling. Inclusief spotjes en afwerking.',
    beschrijving: 'Een verlaagd plafond transformeert elke ruimte. Het creëert een strakke, moderne uitstraling en biedt praktische voordelen zoals inbouwspots, geluidsisolatie en het wegwerken van leidingen of kabels. Wij plaatsen verlaagde plafonds van gipsplaat of MDF, strak afgewerkt en klaar om te schilderen. Onze elektricien zorgt voor de perfecte plaatsing van spots en eventuele sfeerverlichting. Het resultaat: een professioneel ogend plafond dat uw interieur naar een hoger niveau tilt.',
    afbeelding: '/src/assets/images/verlaag_plafond1.jpeg',
    heroAfbeelding: '/src/assets/images/verlaag_plafond3.jpeg',
    kenmerken: ['Gipsplaten of MDF', 'Spotjes inbouw', 'Geluidsisolatie', 'Strakke afwerking'],
    voordelen: [
      { titel: 'Strakke Look', tekst: 'Een perfect vlak plafond geeft elke ruimte een verzorgde, moderne uitstraling.' },
      { titel: 'Inbouwverlichting', tekst: 'Spots, LED-strips en dimbare verlichting worden naadloos geïntegreerd.' },
      { titel: 'Geluidsisolatie', tekst: 'Extra isolatie tussen plafond en verdieping vermindert contactgeluid aanzienlijk.' },
      { titel: 'Kabels Wegwerken', tekst: 'Leidingen, kabels en oneffenheden verdwijnen achter het verlaagde plafond.' },
    ],
    faq: [
      { vraag: 'Hoeveel hoogte verlies ik?', antwoord: 'Minimaal 5 tot 8 cm. Bij inbouwspots is 10 tot 12 cm gebruikelijk. Wij adviseren bij een plafondhoogte van minimaal 2.40m.' },
      { vraag: 'Kan het in elke ruimte?', antwoord: 'Ja, een verlaagd plafond is mogelijk in vrijwel elke ruimte — woonkamer, slaapkamer, badkamer of hal.' },
      { vraag: 'Is het ook geschikt voor de badkamer?', antwoord: 'Ja, met vochtbestendige gipsplaten is een verlaagd plafond ook in vochtige ruimtes prima toepasbaar.' },
    ],
  },
  {
    slug: 'traprenovatie',
    naam: 'Traprenovatie',
    omschrijving: 'Geef uw trap een nieuw leven. Van bekleding tot complete vervanging, wij maken er iets moois van.',
    beschrijving: 'Uw trap is het eerste wat u ziet als u binnenkomt — een verouderde trap trekt de uitstraling van uw hele hal omlaag. Met een traprenovatie geven wij uw trap een complete metamorfose. Of u kiest voor het bekleden met hout, laminaat of vinyl, of voor een complete vervanging met een nieuwe trap — wij leveren altijd een resultaat dat er strak en modern uitziet. Inclusief nieuwe leuning, antislip afwerking en eventuele LED-verlichting onder de treden voor extra sfeer.',
    afbeelding: '/src/assets/images/trap.jpeg',
    heroAfbeelding: '/src/assets/images/trap3.jpeg',
    kenmerken: ['Trap bekleden', 'Trapleuning vernieuwen', 'Diverse materialen', 'Antislip afwerking'],
    voordelen: [
      { titel: 'Grote Impact', tekst: 'Een gerenoveerde trap verandert de uitstraling van uw hele hal en entree.' },
      { titel: 'Diverse Materialen', tekst: 'Kies uit eiken, laminaat, vinyl of PVC — passend bij uw interieur.' },
      { titel: 'Veilig & Comfortabel', tekst: 'Antislip afwerking en een stevige leuning zorgen voor veilig traplopen.' },
      { titel: 'Snel Resultaat', tekst: 'Een traprenovatie is vaak binnen 1 tot 2 dagen gerealiseerd.' },
    ],
    faq: [
      { vraag: 'Kan elke trap gerenoveerd worden?', antwoord: 'De meeste trappen zijn geschikt voor renovatie. Wij beoordelen de staat van uw trap bij de opname.' },
      { vraag: 'Wat is het verschil tussen bekleden en vervangen?', antwoord: 'Bij bekleding wordt de bestaande trap overheen bekleed. Bij vervanging wordt de gehele trap vervangen door een nieuwe.' },
      { vraag: 'Is de trap direct na renovatie te gebruiken?', antwoord: 'Bij bekleding meestal direct. Bij een gelakte of geoliede trap adviseren wij 24 uur droogtijd.' },
    ],
  },
  {
    slug: 'tegelzetter',
    naam: 'Tegelzetter',
    omschrijving: 'Professioneel tegelwerk voor badkamer, keuken, vloer en wand. Strak gelegd met oog voor detail.',
    beschrijving: 'Goed tegelwerk maakt het verschil in elke ruimte. Onze tegelzetters zijn echte vakmensen die met precisie en oog voor detail werken. Van kleine mozaïektegels tot XXL formaten, van vloertegels in de woonkamer tot wandtegels in de badkamer — wij leggen het allemaal strak en waterdicht. De juiste voorbereiding is essentieel: wij egaliseren, gronden en waterdichten voordat de eerste tegel wordt gelegd. Het resultaat: tegelwerk dat er jarenlang perfect uit blijft zien.',
    afbeelding: '/src/assets/images/tegelzetter.jpg',
    kenmerken: ['Wand- en vloertegels', 'Mozaiek en grootformaat', 'Waterdichte afwerking', 'Diverse patronen'],
    voordelen: [
      { titel: 'Vakmanschap', tekst: 'Ervaren tegelzetters die met millimeterprecisie werken voor een strak resultaat.' },
      { titel: 'Alle Formaten', tekst: 'Van klein mozaïek tot XXL tegels — wij verwerken elk formaat deskundig.' },
      { titel: 'Waterdicht', tekst: 'Professionele waterdichte afwerking in natte ruimtes voorkomt vochtproblemen.' },
      { titel: 'Duurzaam Resultaat', tekst: 'Kwalitatief tegelwerk dat jarenlang mooi blijft zonder onderhoud.' },
    ],
    faq: [
      { vraag: 'Leveren jullie ook de tegels?', antwoord: 'Wij adviseren u graag, maar u bent vrij om zelf tegels uit te kiezen bij een tegelhandel. Wij zorgen voor het leggen.' },
      { vraag: 'Kunnen jullie vloerverwarming combineren met tegels?', antwoord: 'Ja, tegels zijn uitstekend geschikt voor vloerverwarming. Wij hebben hier ruime ervaring mee.' },
      { vraag: 'Hoe lang duurt het leggen?', antwoord: 'Dit hangt af van het oppervlak en de tegel. Een gemiddelde badkamer is in 3 tot 5 dagen betegeld.' },
    ],
  },
  {
    slug: 'beton-cire',
    naam: 'Beton Ciré',
    omschrijving: 'Exclusieve beton ciré afwerking voor vloeren, wanden en meubels. Een naadloze, strakke uitstraling met industrieel karakter.',
    beschrijving: 'Beton ciré is een exclusieve afwerkingstechniek die een naadloos, betonachtig oppervlak creëert. Het is toepasbaar op vloeren, wanden, aanrechtbladen, meubels en zelfs in douches. Het materiaal is waterdicht, slijtvast en verkrijgbaar in tientallen kleurtinten — van warm grijs tot antraciet. Onze specialisten brengen beton ciré met de hand aan in meerdere lagen, waardoor elk oppervlak uniek is. Het resultaat is een stoere, industriële uitstraling met een zachte, aangenamme textuur.',
    afbeelding: '/src/assets/images/beton_circe.jpg',
    kenmerken: ['Naadloze afwerking', 'Vloeren en wanden', 'Waterdicht', 'Diverse kleurtinten'],
    voordelen: [
      { titel: 'Naadloos Oppervlak', tekst: 'Geen voegen of naden — een doorlopend, strak oppervlak in elke ruimte.' },
      { titel: 'Veelzijdig Toepasbaar', tekst: 'Geschikt voor vloeren, wanden, meubels, aanrechten en zelfs douches.' },
      { titel: 'Uniek Handwerk', tekst: 'Elke toepassing is handgemaakt en daardoor uniek in textuur en uitstraling.' },
      { titel: 'Onderhoudsarm', tekst: 'Eenmaal aangebracht is beton ciré eenvoudig schoon te houden en zeer duurzaam.' },
    ],
    faq: [
      { vraag: 'Is beton ciré geschikt voor de badkamer?', antwoord: 'Ja, mits correct aangebracht met de juiste sealer is beton ciré volledig waterdicht en geschikt voor natte ruimtes.' },
      { vraag: 'Kan beton ciré over bestaande tegels?', antwoord: 'Ja, beton ciré kan direct over bestaande tegels worden aangebracht na de juiste voorbehandeling.' },
      { vraag: 'Hoe lang duurt de applicatie?', antwoord: 'Gemiddeld 3 tot 5 dagen inclusief droogtijd tussen de lagen. Het is een ambachtelijk proces.' },
    ],
  },
];
