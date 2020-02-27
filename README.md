Takes in twilio webhook messages and sends to slack

To Run:
- node app.js

References:
- https://www.twilio.com/docs/sms/twiml#twilios-request-to-your-application

Uses:
- https://github.com/xoxco/node-slack
- https://www.twilio.com/docs/libraries/node

Environment:
- Make sure Twillo token is correct if NODE_ENV to 'production'
- Create webhook for a app/channel in slack, add URL to .env
- Buy a SMS enabled number on Twilio
  - Set Webhook for Messaging to app URL
  - Grab auth token from Console Dashboard for project and add to .env