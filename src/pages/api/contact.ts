import type { APIRoute } from 'astro';

export const prerender = false;

const LOGO_URL = 'https://projectbouw010.nl/images/logo.png';
const BEDRIJF_NAAM = 'Projectbouw 010';
const BEDRIJF_TEL = '06-53999433';
const BEDRIJF_EMAIL = 'info@projectbouw010.nl';
const BEDRIJF_ADRES = 'Theodoor Colenbranderhof 5, 3059 LS Rotterdam';
const BEDRIJF_KVK = '86943030';
const BEDRIJF_WEBSITE = 'https://projectbouw010.nl';

function baseLayout(content: string): string {
  return `<!DOCTYPE html>
<html lang="nl">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Projectbouw 010</title></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr><td style="background:#111111;padding:32px 40px;border-radius:8px 8px 0 0;text-align:center;">
          <img src="${LOGO_URL}" alt="Projectbouw 010" height="48" style="display:block;margin:0 auto;" />
        </td></tr>
        <tr><td style="background:#ffffff;padding:40px;border-left:1px solid #e0e0e0;border-right:1px solid #e0e0e0;">
          ${content}
        </td></tr>
        <tr><td style="background:#111111;padding:28px 40px;border-radius:0 0 8px 8px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding-bottom:16px;border-bottom:1px solid #333;">
              <p style="margin:0;color:#ffffff;font-size:14px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">${BEDRIJF_NAAM}</p>
            </td></tr>
            <tr><td style="padding-top:16px;">
              <table width="100%" cellpadding="0" cellspacing="0"><tr>
                <td style="color:#999999;font-size:12px;line-height:1.8;">
                  <a href="tel:0653999433" style="color:#999999;text-decoration:none;">${BEDRIJF_TEL}</a><br />
                  <a href="mailto:${BEDRIJF_EMAIL}" style="color:#999999;text-decoration:none;">${BEDRIJF_EMAIL}</a><br />
                  ${BEDRIJF_ADRES}<br />KVK: ${BEDRIJF_KVK}
                </td>
                <td align="right" valign="top">
                  <a href="${BEDRIJF_WEBSITE}" style="color:#ffffff;font-size:11px;text-decoration:none;letter-spacing:1px;text-transform:uppercase;border:1px solid #444;padding:6px 12px;border-radius:4px;">projectbouw010.nl</a>
                </td>
              </tr></table>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function adminContactHtml(data: {
  naam: string; email: string; telefoon: string; onderwerp: string; omschrijving: string;
}): string {
  return baseLayout(`
    <p style="margin:0 0 6px;color:#777777;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Nieuw bericht</p>
    <h1 style="margin:0 0 24px;color:#111111;font-size:26px;font-weight:700;">Contactbericht</h1>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr><td style="padding:10px 12px;background:#f4f4f4;border-left:3px solid #111;color:#111;font-size:13px;font-weight:700;width:140px;">Naam</td><td style="padding:10px 12px;background:#f4f4f4;color:#333;font-size:13px;">${data.naam}</td></tr>
      <tr><td style="padding:10px 12px;background:#fff;border-left:3px solid #111;color:#111;font-size:13px;font-weight:700;">E-mail</td><td style="padding:10px 12px;background:#fff;font-size:13px;"><a href="mailto:${data.email}" style="color:#111;">${data.email}</a></td></tr>
      <tr><td style="padding:10px 12px;background:#f4f4f4;border-left:3px solid #111;color:#111;font-size:13px;font-weight:700;">Telefoon</td><td style="padding:10px 12px;background:#f4f4f4;color:#333;font-size:13px;"><a href="tel:${data.telefoon}" style="color:#111;">${data.telefoon}</a></td></tr>
      <tr><td style="padding:10px 12px;background:#fff;border-left:3px solid #111;color:#111;font-size:13px;font-weight:700;">Onderwerp</td><td style="padding:10px 12px;background:#fff;color:#333;font-size:13px;">${data.onderwerp || 'Niet opgegeven'}</td></tr>
    </table>
    <p style="margin:0 0 8px;color:#111;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Bericht</p>
    <div style="background:#f4f4f4;border-left:3px solid #111;padding:16px;margin-bottom:28px;">
      <p style="margin:0;color:#333;font-size:13px;line-height:1.7;">${data.omschrijving.replace(/\n/g, '<br />')}</p>
    </div>
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td><a href="mailto:${data.email}" style="display:inline-block;background:#111;color:#fff;font-size:13px;font-weight:700;text-decoration:none;padding:12px 24px;border-radius:4px;">Beantwoord bericht</a></td>
      <td align="right"><a href="tel:${data.telefoon}" style="display:inline-block;border:1px solid #e0e0e0;color:#111;font-size:13px;font-weight:600;text-decoration:none;padding:12px 24px;border-radius:4px;">Bel ${data.naam.split(' ')[0]}</a></td>
    </tr></table>
  `);
}

function klantContactHtml(naam: string): string {
  const voornaam = naam.split(' ')[0];
  return baseLayout(`
    <p style="margin:0 0 6px;color:#777777;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Bevestiging</p>
    <h1 style="margin:0 0 16px;color:#111111;font-size:26px;font-weight:700;">Bedankt, ${voornaam}!</h1>
    <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.7;">Uw bericht is goed ontvangen. Wij nemen <strong style="color:#111;">binnen 24 uur</strong> contact met u op.</p>
    <div style="background:#111;border-radius:6px;padding:24px 28px;margin-bottom:28px;">
      <p style="margin:0 0 14px;color:#fff;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Over Projectbouw 010</p>
      <p style="margin:0;color:#ccc;font-size:13px;line-height:1.8;">
        &rsaquo;&nbsp; Aannemer in Rotterdam en omgeving<br />
        &rsaquo;&nbsp; 15+ jaar ervaring in renovatie &amp; verbouw<br />
        &rsaquo;&nbsp; Beoordeeld met een 9.3 op Trustoo<br />
        &rsaquo;&nbsp; 4 jaar garantie op alle werkzaamheden
      </p>
    </div>
    <div style="border:1px solid #e0e0e0;border-radius:6px;padding:20px 24px;margin-bottom:28px;">
      <p style="margin:0 0 12px;color:#111;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Direct contact</p>
      <a href="tel:0653999433" style="display:inline-block;background:#111;color:#fff;font-size:13px;font-weight:700;text-decoration:none;padding:10px 20px;border-radius:4px;margin-right:8px;">06-53999433</a>
      <a href="https://wa.me/31653999433" style="display:inline-block;border:1px solid #e0e0e0;color:#111;font-size:13px;font-weight:600;text-decoration:none;padding:10px 20px;border-radius:4px;">WhatsApp</a>
    </div>
    <p style="margin:0;color:#999;font-size:12px;line-height:1.6;">U ontvangt dit bericht omdat u contact heeft opgenomen via projectbouw010.nl.</p>
  `);
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text();
    return { ok: false, error: text };
  }
  return { ok: true };
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const naam = (formData.get('naam') as string) || '';
    const email = (formData.get('email') as string) || '';
    const telefoon = (formData.get('telefoon') as string) || '';
    const onderwerp = (formData.get('onderwerp') as string) || '';
    const omschrijving = (formData.get('omschrijving') as string) || '';

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

    // Admin email
    const adminResult = await sendEmail(apiKey, {
      from: `${BEDRIJF_NAAM} <${BEDRIJF_EMAIL}>`,
      to: [BEDRIJF_EMAIL],
      bcc: ['info@brandways.nl'],
      subject: `Contactbericht: ${onderwerp || 'Algemeen'} — ${naam}`,
      html: adminContactHtml({ naam, email, telefoon, onderwerp, omschrijving }),
    });

    if (!adminResult.ok) {
      console.error('Resend error:', adminResult.error);
      return new Response(JSON.stringify({ error: 'E-mail kon niet worden verzonden.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Customer confirmation
    await sendEmail(apiKey, {
      from: `${BEDRIJF_NAAM} <${BEDRIJF_EMAIL}>`,
      to: [email],
      subject: `Uw bericht is ontvangen — ${BEDRIJF_NAAM}`,
      html: klantContactHtml(naam),
    });

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
