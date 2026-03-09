export interface Project {
  slug: string;
  titel: string;
  locatie: string;
  categorie: string;
  afbeeldingen: string[];
  omschrijving: string;
  uitgelicht: boolean;
}

export const projecten: Project[] = [
  {
    slug: 'badkamer-renovatie-rotterdam-zuid',
    titel: 'Badkamer Renovatie',
    locatie: 'Rotterdam-Zuid',
    categorie: 'Badkamer',
    afbeeldingen: ['/images/badkamer.jpeg'],
    omschrijving: 'Complete badkamerrenovatie met inloopdouche, zwevend meubel en grootformaat tegels. Van sloop tot oplevering in 3 weken gerealiseerd.',
    uitgelicht: true,
  },
  {
    slug: 'keuken-op-maat-kralingen',
    titel: 'Keuken Op Maat',
    locatie: 'Kralingen',
    categorie: 'Keuken',
    afbeeldingen: ['/images/keuken.jpeg'],
    omschrijving: 'Moderne keuken op maat met composiet werkblad, inbouwapparatuur en stijlvolle spatwand. Volledig naar wens van de klant ontworpen.',
    uitgelicht: true,
  },
  {
    slug: 'complete-uitbouw-hillegersberg',
    titel: 'Complete Uitbouw',
    locatie: 'Hillegersberg',
    categorie: 'Uitbouw',
    afbeeldingen: ['/images/uitbouw.jpeg'],
    omschrijving: 'Ruime uitbouw aan de achterzijde met vouwpui en lichtstraat. De woonkamer is hierdoor verdubbeld in oppervlakte.',
    uitgelicht: true,
  },
  {
    slug: 'stalen-deuren-rotterdam-west',
    titel: 'Stalen Deuren',
    locatie: 'Rotterdam-West',
    categorie: 'Stalen Deuren',
    afbeeldingen: ['/images/1.jpg'],
    omschrijving: 'Industriele stalen deuren met glas geplaatst tussen woonkamer en keuken. Geeft een open en licht gevoel aan de ruimte.',
    uitgelicht: false,
  },
  {
    slug: 'stucwerk-capelle',
    titel: 'Stucwerk & Tegelwerk',
    locatie: 'Capelle a/d IJssel',
    categorie: 'Stucwerk',
    afbeeldingen: ['/images/2.jpg'],
    omschrijving: 'Compleet stuc- en tegelwerk in een nieuwbouwwoning. Alle wanden en plafonds glad gestuct, badkamer en toilet betegeld.',
    uitgelicht: false,
  },
  {
    slug: 'traprenovatie-schiedam',
    titel: 'Traprenovatie',
    locatie: 'Schiedam',
    categorie: 'Traprenovatie',
    afbeeldingen: ['/images/3.jpg'],
    omschrijving: 'Oude trap volledig gerenoveerd met eiken treden en een moderne stalen leuning. Resultaat: een blikvanger in de hal.',
    uitgelicht: false,
  },
];
