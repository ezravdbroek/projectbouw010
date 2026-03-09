export interface PseoService {
  slug: string;
  naam: string;
  meervoud: string;
  afbeelding: string;
  gerelateerdeSlug: string; // link naar bestaande dienst
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
  {
    slug: 'badkamer-renovatie',
    naam: 'Badkamer Renovatie',
    meervoud: 'badkamerrenovaties',
    afbeelding: '/images/badkamer.jpeg',
    gerelateerdeSlug: 'badkamer-renovatie',
    intro: 'Droomt u van een nieuwe badkamer? Projectbouw 010 is uw specialist voor complete badkamerrenovaties. Van de eerste sloopwerkzaamheden tot het plaatsen van het laatste sanitair — wij verzorgen het volledige traject. Met jarenlange ervaring en vakmanschap transformeren wij uw verouderde badkamer in een moderne, luxe ruimte die perfect aansluit bij uw wensen en levensstijl.',
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
      { titel: 'Waterdicht Systeem', tekst: 'Professionele waterdichte afwerking voorkomt lekkages en vochtproblemen. Wij werken volgens de nieuwste normen.' },
      { titel: 'Vakkundige Tegelzetters', tekst: 'Onze tegelzetters zijn specialisten met oog voor detail. Van mozaïek tot XXL tegels, altijd strak gelegd.' },
      { titel: 'Persoonlijk Advies', tekst: 'Wij denken mee over indeling, materialen en stijl. Samen creëren wij uw droombadkamer.' },
    ],
    faq: (locatie) => [
      {
        vraag: `Hoe lang duurt een badkamerrenovatie in ${locatie}?`,
        antwoord: `Een complete badkamerrenovatie in ${locatie} duurt gemiddeld 2 tot 3 weken. Dit is inclusief sloop, leidingwerk, tegelwerk en sanitairplaatsing. Bij complexe projecten kan dit iets langer zijn. Wij geven u vooraf altijd een duidelijke planning.`,
      },
      {
        vraag: `Wat kost een badkamerrenovatie in ${locatie}?`,
        antwoord: `De kosten zijn afhankelijk van de grootte van uw badkamer, gekozen materialen en sanitair. Wij maken graag een vrijblijvende offerte op maat. Onze prijzen zijn all-in: geen verborgen kosten achteraf.`,
      },
      {
        vraag: `Moet ik zelf materialen uitzoeken voor mijn badkamer in ${locatie}?`,
        antwoord: `Dat mag, maar het hoeft niet. Wij adviseren u graag over tegels, sanitair en kranen. Door onze contacten bij leveranciers in de regio kunnen wij vaak scherpe prijzen bieden.`,
      },
      {
        vraag: `Verzorgen jullie ook de vergunning voor een badkamerrenovatie?`,
        antwoord: `Voor een standaard badkamerrenovatie is meestal geen vergunning nodig. Mochten er constructieve wijzigingen nodig zijn, dan verzorgen wij de volledige vergunningsaanvraag.`,
      },
    ],
  },
  {
    slug: 'wc-renovatie',
    naam: 'WC Renovatie',
    meervoud: 'toiletrenovaties',
    afbeelding: '/images/badkamer.jpeg',
    gerelateerdeSlug: 'toilet-renovatie',
    intro: 'Een verouderd toilet? Projectbouw 010 transformeert uw WC in een stijlvolle, moderne ruimte. Ondanks de beperkte afmetingen maken wij er iets bijzonders van. Met slim ruimtegebruik, moderne materialen en vakkundige afwerking creëren wij een toilet dat er fris, schoon en verzorgd uitziet. Van tegelwerk en sanitair tot verlichting — wij denken aan elk detail.',
    kenmerken: [
      'Complete sloop en verwijdering van het oude toilet',
      'Nieuw leidingwerk en aansluiting',
      'Professioneel tegelwerk op wand en vloer',
      'Modern zwevend toilet of staand toilet',
      'Verlichting en ventilatie',
      'Strakke afwerking met plinten en kit',
    ],
    voordelen: [
      { titel: 'Snel Klaar', tekst: 'Een WC renovatie is vaak binnen 3 tot 5 werkdagen afgerond. Minimale overlast voor u en uw huishouden.' },
      { titel: 'Slimme Indeling', tekst: 'Ook in de kleinste ruimte weten wij een functioneel en mooi toilet te realiseren met slim gebruik van elke centimeter.' },
      { titel: 'Hygiënisch & Modern', tekst: 'Naadloos tegelwerk en modern sanitair zorgen voor een hygiënische, onderhoudsvriendelijke ruimte.' },
      { titel: 'Compleet Verzorgd', tekst: 'Van het eerste ontwerp tot de laatste afwerking: u hoeft zich nergens zorgen over te maken.' },
    ],
    faq: (locatie) => [
      {
        vraag: `Hoe lang duurt een WC renovatie in ${locatie}?`,
        antwoord: `Een complete WC renovatie in ${locatie} duurt gemiddeld 3 tot 5 werkdagen. Dit is inclusief sloop, tegelwerk, sanitairplaatsing en afwerking. Wij zorgen dat u zo min mogelijk overlast ondervindt.`,
      },
      {
        vraag: `Wat kost een toiletenovatie in ${locatie}?`,
        antwoord: `De kosten hangen af van de gekozen tegels, het sanitair en de grootte van de ruimte. Vraag een vrijblijvende offerte aan — onze prijzen zijn altijd all-in, zonder verborgen kosten.`,
      },
      {
        vraag: `Kan ik het toilet gebruiken tijdens de renovatie?`,
        antwoord: `Tijdens de renovatiedagen is het toilet niet beschikbaar. Wij proberen de werkzaamheden zo snel mogelijk af te ronden en adviseren u vooraf over tijdelijke oplossingen.`,
      },
      {
        vraag: `Leveren jullie ook het sanitair voor de WC renovatie?`,
        antwoord: `Wij kunnen u adviseren en het sanitair voor u bestellen, maar u bent ook vrij om zelf een toilet en accessoires uit te kiezen. Wij verzorgen de vakkundige plaatsing.`,
      },
    ],
  },
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
      { titel: 'Eén Aanspreekpunt', tekst: 'Geen gedoe met tien verschillende vakmensen. Wij coördineren het volledige traject met één projectleider als uw vaste contactpersoon.' },
      { titel: 'Strakke Planning', tekst: 'Een complete renovatie vereist een goede planning. Wij stemmen alle werkzaamheden op elkaar af zodat uw project op tijd klaar is.' },
      { titel: 'All-in Prijs', tekst: 'U ontvangt één duidelijke offerte voor het complete project. Geen verrassingen, geen bijkomende kosten.' },
      { titel: 'Waardeverhoging', tekst: 'Een compleet gerenoveerd huis is niet alleen comfortabeler, maar ook aanzienlijk meer waard bij verkoop.' },
    ],
    faq: (locatie) => [
      {
        vraag: `Hoe lang duurt een complete huisrenovatie in ${locatie}?`,
        antwoord: `De duur hangt af van de omvang van het project. Gemiddeld duurt een complete huisrenovatie in ${locatie} 6 tot 16 weken. Wij maken vooraf een gedetailleerde planning zodat u precies weet waar u aan toe bent.`,
      },
      {
        vraag: `Kan ik in mijn huis blijven wonen tijdens de renovatie?`,
        antwoord: `Bij een complete renovatie adviseren wij meestal om tijdelijk elders te verblijven. Dit versnelt het proces en voorkomt overlast. Wij bespreken dit uitgebreid met u vooraf.`,
      },
      {
        vraag: `Wat kost een complete huisrenovatie in ${locatie}?`,
        antwoord: `De kosten variëren sterk per project. Een complete renovatie kan variëren van een middenbudget tot een luxe uitvoering. Wij maken altijd een gedetailleerde, vrijblijvende offerte op maat.`,
      },
      {
        vraag: `Regelen jullie ook de vergunningen voor een renovatie in ${locatie}?`,
        antwoord: `Ja, als er vergunningen nodig zijn verzorgen wij de volledige aanvraag bij de gemeente. Wij kennen de lokale regels en zorgen dat alles volgens de voorschriften verloopt.`,
      },
    ],
  },
];

// Genereer alle combinaties
export function getAllPseoPaths() {
  const paths: { service: string; location: string }[] = [];
  for (const service of pseoServices) {
    for (const locatie of locaties) {
      paths.push({ service: service.slug, location: locatie.slug });
    }
  }
  return paths;
}
