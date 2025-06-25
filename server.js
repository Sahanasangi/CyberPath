// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔐 Your API key here
const configuration = new Configuration({
  apiKey: "sk-xxxxxxxxxxxxxxxxxxxxxxxx", // your real API key
});
const openai = new OpenAIApi(configuration);

// 📥 POST request from your site
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a cybersecurity career assistant." },
        { role: "user", content: message }
      ]
    });

    const reply = completion.data.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error(error);
    res.status(500).send("Chat error");
  }
});
