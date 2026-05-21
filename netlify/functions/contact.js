exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const payload = JSON.parse(event.body);

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Telegram configuration is missing in Netlify settings." }),
      };
    }

    const message = `
🚀 *New Lead from Newtone Web*

👤 *Name:* ${payload.fullName}
📞 *Phone:* ${payload.phone || 'Not provided'}
📧 *Email:* ${payload.email || 'Not provided'}
    `.trim();

    const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: "Markdown" }),
    });

    if (!telegramRes.ok) {
      const err = await telegramRes.json();
      throw new Error(err.description || "Failed to send Telegram message");
    }

    return { statusCode: 200, body: JSON.stringify({ status: "ok" }) };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
