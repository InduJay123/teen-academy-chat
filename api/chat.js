export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      reply: 'Method not allowed',
    });
  }

  try {
    const response = await fetch('http://64.227.141.161:5678/webhook/teen-academy-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch (error) {
      return res.status(500).json({
        success: false,
        reply: 'Invalid response from assistant.',
        raw: text,
      });
    }

    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({
      success: false,
      reply: 'Could not connect to the assistant.',
    });
  }
}