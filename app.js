require('dotenv').config()
const express = require("express");
const twilio = require('twilio');
const app = express();
const { urlencoded } = require('body-parser');
const { IncomingWebhook } = require('@slack/webhook');
const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);


const environment = process.env.NODE_ENV || 'test'
const shouldValidate = environment == 'production';

app.use(urlencoded({ extended: false }));

app.post('/2fa',
  twilio.webhook({ validate: shouldValidate }),
  async (req, res) => {
    await webhook.send(slackMessageBuilder(req.body.From, req.body.Body));
    res.status(200)
    res.json({
      message: "webhook processed!"
    })
  }
);

const slackMessageBuilder = (from, message) => {
  return {
    blocks: [
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: 'Sent from *' + from + '*'
          }
        ]
      },
      {
        type: "divider"
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: message
        }
      }
    ]
  };
}

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
