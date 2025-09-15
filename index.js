const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;
const { askAI } = require('./ai');
const { getDatabase } = require('./database');
// Initialize app first
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// WhatsApp webhook
app.post('/whatsapp', async(req, res) => {
    const incomingMsg = req.body.Body;
    const from = req.body.From;

    console.log(`Message from ${from}: ${incomingMsg}`);
    const FAQ_CONTEXT = await getDatabase(process.env.NOTION_DATASOURCE_ID);
    const aiReply = await askAI(incomingMsg, FAQ_CONTEXT);

    const twiml = new MessagingResponse();
    twiml.message(aiReply);

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

app.get('/', async (req, res) => {
    console.log("Fetching data from Notion database...");
    const database = await getDatabase(process.env.NOTION_DATASOURCE_ID);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
