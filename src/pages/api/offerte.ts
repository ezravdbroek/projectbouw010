import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { naam, email, telefoon, type, straat, postcode, woonplaats, omschrijving } = body;

    // Validate required fields
    if (!naam || !email || !telefoon || !omschrijving) {
      return new Response(JSON.stringify({ error: 'Vul alle verplichte velden in.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = import.meta.env.POSTMARK_API_KEY;

    if (!apiKey) {
      console.error('POSTMARK_API_KEY is not configured');
      return new Response(JSON.stringify({ error: 'E-mail service niet geconfigureerd.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send email via Postmark
    const response = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': apiKey,
      },
      body: JSON.stringify({
        From: 'info@projectbouw010.nl',
        To: 'info@projectbouw010.nl',
        Subject: `Nieuwe offerte aanvraag: ${type || 'Algemeen'} - ${naam}`,
        HtmlBody: `
          <h2>Nieuwe Offerte Aanvraag</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Naam</td><td style="padding: 8px; border: 1px solid #ddd;">${naam}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">E-mail</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Telefoon</td><td style="padding: 8px; border: 1px solid #ddd;">${telefoon}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Type</td><td style="padding: 8px; border: 1px solid #ddd;">${type || 'Niet opgegeven'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Adres</td><td style="padding: 8px; border: 1px solid #ddd;">${straat || '-'}, ${postcode || '-'} ${woonplaats || '-'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Omschrijving</td><td style="padding: 8px; border: 1px solid #ddd;">${omschrijving}</td></tr>
          </table>
        `,
        TextBody: `Nieuwe offerte aanvraag van ${naam}\n\nE-mail: ${email}\nTelefoon: ${telefoon}\nType: ${type || 'Niet opgegeven'}\nAdres: ${straat || '-'}, ${postcode || '-'} ${woonplaats || '-'}\n\nOmschrijving:\n${omschrijving}`,
        MessageStream: 'outbound',
      }),
    });

    if (!response.ok) {
      console.error('Postmark error:', await response.text());
      return new Response(JSON.stringify({ error: 'E-mail kon niet worden verzonden.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Offerte API error:', error);
    return new Response(JSON.stringify({ error: 'Er is een fout opgetreden.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
