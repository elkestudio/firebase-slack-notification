const functions = require("firebase-functions");
const request = require("request");

exports.notifyNewSignup = functions.auth.user().onCreate(user => {
  const email = user.email;

  return request.post(
    "your_slack_webhook_here",
    { json: { text: `🔥 New signup from ${email}! 🔥` } }
  );
});
