const functions = require("firebase-functions");
const request = require("request");

exports.notifyNewSignup = functions.auth.user().onCreate(user => {
  const email = user.email;

  return request.post(
    "https://hooks.slack.com/services/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",
    { json: { text: `🔥 New signup from ${email}! 🔥` } }
  );
});
