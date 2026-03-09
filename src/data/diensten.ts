export interface Dienst {
  slug: string;
  naam: string;
  omschrijving: string;
  afbeelding: string;
  kenmerken: string[];
}

export const diensten: Dienst[] = [
  {
    slug: 'aanbouw',
    naam: 'Aanbouw',
    omschrijving: 'Meer leefruimte nodig? Wij realiseren uw aanbouw vakkundig en op maat, volledig afgestemd op uw woning en wensen.',
    afbeelding: '/images/aanbouw.jpg',
    kenmerken: ['Constructieberekeningen', 'Vergunningsaanvraag', 'Fundament tot afwerking', 'Volledig ontzorgd'],
  },
  {
    slug: 'uitbouw',
    naam: 'Uitbouw',
    omschrijving: 'Vergroot uw woonkamer of keuken met een stijlvolle uitbouw. Van ontwerp tot oplevering verzorgen wij alles.',
    afbeelding: '/images/uitbouw.jpeg',
    kenmerken: ['Meer lichtinval', 'Waardeverhoging woning', 'Naadloze aansluiting', 'Isolatie conform normen'],
  },
  {
    slug: 'opbouw',
    naam: 'Opbouw',
    omschrijving: 'Een extra verdieping op uw woning? Wij bouwen vakkundig op met respect voor de bestaande constructie.',
    afbeelding: '/images/1.jpg',
    kenmerken: ['Extra slaapkamer of kantoor', 'Constructief veilig', 'Dakafwerking inclusief', 'Vergunningstraject'],
  },
  {
    slug: 'badkamer-renovatie',
    naam: 'Badkamer Renovatie',
    omschrijving: 'Complete badkamerrenovatie met hoogwaardige materialen en modern design. Van sloop tot en met installatie.',
    afbeelding: '/images/badkamer.jpeg',
    kenmerken: ['Complete sloop en afvoer', 'Leidingwerk en installatie', 'Tegelwerk en afwerking', 'Sanitair plaatsing'],
  },
  {
    slug: 'keukenrenovatie',
    naam: 'Keukenrenovatie',
    omschrijving: 'Uw droomkeuken op maat gemaakt. Van ontwerp en installatie tot de laatste afwerking.',
    afbeelding: '/images/keuken.jpeg',
    kenmerken: ['Op maat ontwerp', 'Leidingwerk aanpassing', 'Tegelwerk en spatwand', 'Apparatuur installatie'],
  },
  {
    slug: 'stukadoor',
    naam: 'Stukadoor',
    omschrijving: 'Professioneel stucwerk voor wanden en plafonds. Glad, sierpleister of betonlook — wij beheersen alle technieken.',
    afbeelding: '/images/stukadoor.jpg',
    kenmerken: ['Glad stucwerk', 'Sierpleister', 'Betonlook', 'Wanden en plafonds'],
  },
  {
    slug: 'cinewall',
    naam: 'Cinewall',
    omschrijving: 'Een stijlvolle cinewall op maat voor uw woonkamer. Kabels weggewerkt, strak afgewerkt.',
    afbeelding: '/images/cinewall.jpeg',
    kenmerken: ['TV-wand op maat', 'Kabels weggewerkt', 'LED-verlichting optioneel', 'Strak afgewerkt'],
  },
  {
    slug: 'pvc-vloer-leggen',
    naam: 'PVC Vloer Leggen',
    omschrijving: 'Professioneel PVC vloeren leggen. Duurzaam, onderhoudsvriendelijk en in diverse stijlen verkrijgbaar.',
    afbeelding: '/images/vloer.jpeg',
    kenmerken: ['Egaliseren ondergrond', 'Professionele plaatsing', 'Diverse dessins', 'Plinten afwerking'],
  },
  {
    slug: 'toilet-renovatie',
    naam: 'Toilet Renovatie',
    omschrijving: 'Complete toilet renovatie inclusief tegelwerk, sanitair en leidingwerk. Klein maar fijn, tot in de puntjes afgewerkt.',
    afbeelding: '/images/badkamer.jpeg',
    kenmerken: ['Complete renovatie', 'Tegelwerk', 'Sanitair installatie', 'Leidingwerk'],
  },
  {
    slug: 'stalen-deuren',
    naam: 'Stalen Deuren',
    omschrijving: 'Industriele stalen deuren en kozijnen voor een stijlvolle uitstraling. Op maat gemaakt en vakkundig geplaatst.',
    afbeelding: '/images/1.jpg',
    kenmerken: ['Op maat gemaakt', 'Diverse stijlen', 'Inclusief kozijn', 'Vakkundige plaatsing'],
  },
  {
    slug: 'verlaagd-plafond',
    naam: 'Verlaagd Plafond',
    omschrijving: 'Een verlaagd plafond voor een strakke, moderne uitstraling. Inclusief spotjes en afwerking.',
    afbeelding: '/images/plafon_verlaagd.jpg',
    kenmerken: ['Gipsplaten of MDF', 'Spotjes inbouw', 'Geluidsisolatie', 'Strakke afwerking'],
  },
  {
    slug: 'traprenovatie',
    naam: 'Traprenovatie',
    omschrijving: 'Geef uw trap een nieuw leven. Van bekleding tot complete vervanging, wij maken er iets moois van.',
    afbeelding: '/images/3.jpg',
    kenmerken: ['Trap bekleden', 'Trapleuning vernieuwen', 'Diverse materialen', 'Antislip afwerking'],
  },
  {
    slug: 'tegelzetter',
    naam: 'Tegelzetter',
    omschrijving: 'Professioneel tegelwerk voor badkamer, keuken, vloer en wand. Strak gelegd met oog voor detail.',
    afbeelding: '/images/tegelzetter.jpg',
    kenmerken: ['Wand- en vloertegels', 'Mozaiek en grootformaat', 'Waterdichte afwerking', 'Diverse patronen'],
  },
  {
    slug: 'beton-cire',
    naam: 'Beton Ciré',
    omschrijving: 'Exclusieve beton ciré afwerking voor vloeren, wanden en meubels. Een naadloze, strakke uitstraling met industrieel karakter.',
    afbeelding: '/images/beton_circe.jpg',
    kenmerken: ['Naadloze afwerking', 'Vloeren en wanden', 'Waterdicht', 'Diverse kleurtinten'],
  },
];
