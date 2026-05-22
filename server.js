const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

// API endpoint for contact form (Replaces Netlify Function)
app.post('/api/contact', async (req, res) => {
  try {
    const payload = req.body;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return res.status(500).json({ error: "Telegram configuration is missing in environment variables." });
    }

    const message = `
🚀 *New Lead from Newtone Web*

👤 *Name:* ${payload.fullName}
🏢 *Company:* ${payload.companyName || 'Not provided'}
📞 *Phone:* ${payload.phone || 'Not provided'}
📧 *Email:* ${payload.email || 'Not provided'}
📍 *Source:* ${payload.source || 'General'}
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

    res.json({ status: "ok" });
  } catch (error) {
    console.error("Server Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});