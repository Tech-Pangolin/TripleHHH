const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://triplehhealthservices.com',
  'https://www.triplehhealthservices.com',
  'https://triplehhealthservices.org',
  'https://www.triplehhealthservices.org',
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function allowedOrigins() {
  const origins = [...ALLOWED_ORIGINS];
  if (process.env.VERCEL_URL) {
    origins.push(`https://${process.env.VERCEL_URL}`);
  }
  return origins;
}

function requestOrigin(request) {
  const origin = request.headers.get('origin');
  return origin && allowedOrigins().includes(origin) ? origin : null;
}

function corsHeaders(origin) {
  const headers = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
  };
  if (origin) headers['Access-Control-Allow-Origin'] = origin;
  return headers;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function readString(body, key) {
  const value = body && body[key];
  return typeof value === 'string' ? value.trim() : '';
}

export async function OPTIONS(request) {
  const origin = requestOrigin(request);
  return new Response(null, {
    status: origin ? 204 : 403,
    headers: corsHeaders(origin),
  });
}

export async function POST(request) {
  const origin = requestOrigin(request);
  const headers = corsHeaders(origin);

  if (!origin) {
    return new Response('Forbidden', { status: 403, headers });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response('Invalid request body.', { status: 400, headers });
  }

  const name = readString(body, 'name');
  const email = readString(body, 'email');
  const subject = readString(body, 'subject');
  const message = readString(body, 'message');

  if (!name || !email || !subject || !message) {
    return new Response('Please fill in your name, email, subject, and message.', {
      status: 400,
      headers,
    });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return new Response('Please enter a valid email address.', { status: 400, headers });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL || 'info@triplehhealthservices.com';
  const to = process.env.CONTACT_TO_EMAIL || 'infotriplehhealthcareservices@gmail.com';
  const bcc = process.env.CONTACT_BCC_EMAIL || 'terra.taylor@gmail.com';

  if (!apiKey) {
    return new Response('Email service is not configured.', { status: 500, headers });
  }

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        bcc: [bcc],
        reply_to: email,
        subject: `Contact form: ${subject}`,
        html,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend error:', response.status, errorText);
      return new Response('Unable to send your message right now. Please try again later.', {
        status: 502,
        headers,
      });
    }

    return new Response('OK', { status: 200, headers });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response('Unable to send your message right now. Please try again later.', {
      status: 500,
      headers,
    });
  }
}
