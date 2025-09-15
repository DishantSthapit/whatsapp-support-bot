# WhatsApp Support Bot

A Node.js chatbot that integrates **WhatsApp**, **Notion**, and **Mistral AI** to provide automated customer support. The bot answers FAQs stored in a Notion database and can escalate unknown questions.

**GitHub Repository:** [https://github.com/DishantSthapit/whatsapp-support-bot](https://github.com/DishantSthapit/whatsapp-support-bot)

---

## Features

*  WhatsApp Integration via Twilio
*  Automated FAQ Handling using a Notion database
*  AI-Powered Responses using Mistral AI
*  Escalation for Unknown Questions
*  Simple Deployment with Node.js

---

## Technologies Used

* Node.js & Express – backend server
* Twilio – WhatsApp messaging API
* Notion API – fetch FAQs from your Notion workspace
* Mistral AI – AI assistant for answering questions
* dotenv – environment variable management
* body-parser – parse incoming requests
* JavaScript – main programming language

---

## Setup Instructions

### Prerequisites

* Node.js (>= 18.x)
* Twilio account with WhatsApp sandbox or business number
* Notion API key and database
* Mistral API key

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/DishantSthapit/whatsapp-support-bot.git
cd whatsapp-support-bot
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create a `.env` file** in the root directory with the following variables:

```env
PORT=3000
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
NOTION_API_KEY=your_notion_api_key
NOTION_DATASOURCE_ID=your_notion_database_id
MISTRAL_API_KEY=your_mistral_api_key
```

4. **Start the server:**

```bash
npm start
```

5. **Configure Twilio WhatsApp Webhook:**

Set the webhook URL to `https://your-server.com/whatsapp` in your Twilio console (or `http://localhost:3000/whatsapp` for local testing with tools like ngrok).

---

## Usage

* Send a WhatsApp message to your Twilio number.
* The bot will first try to answer based on your Notion FAQs.
* If it doesn’t know the answer, it will respond using Mistral AI.
* Unknown queries are escalated with a fallback message:
  `"I will escalate this to a human."`

---

## File Structure

```
whatsapp-support-bot/
│
├─ ai.js              # Mistral AI integration
├─ database.js        # Notion database fetching
├─ server.js          # Express server with Twilio webhook
├─ package.json
├─ .env               # Environment variables
└─ README.md
```

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a Pull Request

---

## License

This project is licensed under the **MIT License**.
