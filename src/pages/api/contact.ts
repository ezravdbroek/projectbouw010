import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const naam = formData.get('naam') as string;
    const email = formData.get('email') as string;
    const telefoon = formData.get('telefoon') as string;
    const onderwerp = formData.get('onderwerp') as string;
    const omschrijving = formData.get('omschrijving') as string;

    if (!naam || !email || !telefoon || !omschrijving) {
      return new Response(JSON.stringify({ error: 'Vul alle verplichte velden in.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'E-mail service niet geconfigureerd.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'Projectbouw 010 <info@projectbouw010.nl>',
      to: 'info@projectbouw010.nl',
      subject: `Nieuw contactbericht: ${onderwerp || 'Algemeen'} — ${naam}`,
      html: `
        <h2 style="font-family: sans-serif;">Nieuw Contactbericht</h2>
        <table style="border-collapse: collapse; width: 100%; font-family: sans-serif;">
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Naam</td><td style="padding: 8px; border: 1px solid #ddd;">${naam}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">E-mail</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Telefoon</td><td style="padding: 8px; border: 1px solid #ddd;">${telefoon}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Onderwerp</td><td style="padding: 8px; border: 1px solid #ddd;">${onderwerp || 'Niet opgegeven'}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Bericht</td><td style="padding: 8px; border: 1px solid #ddd;">${omschrijving}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
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
    console.error('Contact API error:', error);
    return new Response(JSON.stringify({ error: 'Er is een fout opgetreden.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
