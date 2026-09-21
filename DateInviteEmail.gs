// ============================================================
// DATE INVITE - EMAIL NOTIFICATION
// ============================================================

const RECEIVER_EMAIL = "parthi11116@gmail.com";


// ============================================================
// HANDLE POST REQUEST FROM YOUR HTML WEBSITE
// ============================================================

function doPost(e) {

  try {

    if (!e || !e.postData || !e.postData.contents) {
      return createResponse(false, "No data received");
    }

    const data = JSON.parse(e.postData.contents);

    const name = data.name || "She";
    const date = data.date || "Not selected";
    const time = data.time || "Not selected";
    const food = data.food || "Not selected";
    const message = data.message || "She said YES! 💗";


    // ========================================================
    // EMAIL SUBJECT
    // ========================================================

    const subject = "💗 She Said YES to Your Date! 🥹";


    // ========================================================
    // EMAIL BODY
    // ========================================================

    const emailBody =
      "💗 DATE ACCEPTED! 💗\n\n" +

      "She just accepted your date invitation! 🥹💕\n\n" +

      "━━━━━━━━━━━━━━━━━━━━\n" +

      "👩 Name: " + name + "\n" +
      "📅 Date: " + date + "\n" +
      "⏰ Time: " + time + "\n" +
      "🍽️ Food / Vibe: " + food + "\n\n" +

      "━━━━━━━━━━━━━━━━━━━━\n\n" +

      "💌 Message:\n" +
      message + "\n\n" +

      "💗 Looks like you have a date!\n" +
      "🥹✨ Congratulations!\n\n" +

      "Made with love 💕";


    // ========================================================
    // SEND EMAIL
    // ========================================================

    MailApp.sendEmail({
      to: RECEIVER_EMAIL,
      subject: subject,
      body: emailBody
    });


    // ========================================================
    // RETURN SUCCESS
    // ========================================================

    return createResponse(true, "Email sent successfully");


  } catch (error) {

    console.error(error);

    return createResponse(
      false,
      "Error: " + error.toString()
    );
  }
}


// ============================================================
// CREATE JSON RESPONSE
// ============================================================

function createResponse(success, message) {

  const response = {
    success: success,
    message: message
  };

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}