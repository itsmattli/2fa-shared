Takes in twilio webhook messages and sends to slack

References:
- https://www.twilio.com/docs/sms/twiml#twilios-request-to-your-application

Uses:
- https://github.com/xoxco/node-slack
- https://www.twilio.com/docs/libraries/node

Environment:
- Make sure Twillo token is correct if NODE_ENV to 'production'
- Create webhook for a app/channel in slack