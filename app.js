require('dotenv').config()
const express = require("express");
const twilio = require('twilio');
const app = express();
const { urlencoded } = require('body-parser');
const domain = process.env.SLACK_DOMAIN;
const token = process.env.SLACK_TOKEN;

const Slack = require('node-slack');
const slack = new Slack(domain, token);

const environment = process.env.NODE_ENV || 'test'
const shouldValidate = environment == 'production';

app.use(urlencoded({ extended: false }));

app.post('/2fa',
  twilio.webhook({ validate: shouldValidate }),
  (req, res) => {
    slack.send({
      text: req.bodyBody,
      channel: '#2fa-alerts',
      username: 'Bot',
    });
  }
);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
