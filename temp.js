let currentEmail = "";

// Generate Temp Email
async function generateEmail() {
  try {
    const res = await fetch("https://api.princetechn.com/api/tempmail/generate?apikey=prince");
    const data = await res.json();
    currentEmail = data.email;
    document.getElementById("emailBox").innerText = "📮 Email: " + currentEmail;
    document.getElementById("inbox").innerText = "Inbox is empty...";
    document.getElementById("messageBox").innerText = "📜 Message details will appear here...";
  } catch {
    alert("❌ Error generating email!");
  }
}

// Get Inbox
async function getInbox() {
  if (!currentEmail) {
    alert("⚠️ Please generate email first!");
    return;
  }
  try {
    const res = await fetch(`https://api.princetechn.com/api/tempmail/inbox?apikey=prince&email=${currentEmail}`);
    const data = await res.json();
    const inboxDiv = document.getElementById("inbox");
    inboxDiv.innerHTML = "";
    if (data.length === 0) {
      inboxDiv.innerText = "📭 No messages yet!";
      return;
    }
    data.forEach(msg => {
      const div = document.createElement("div");
      div.className = "message";
      div.innerHTML = `<b>From:</b> ${msg.from}<br><b>Subject:</b> ${msg.subject}`;
      div.onclick = () => getMessage(msg.id);
      inboxDiv.appendChild(div);
    });
  } catch {
    alert("❌ Error fetching inbox!");
  }
}

// Get Message
async function getMessage(messageId) {
  try {
    const res = await fetch(`https://api.princetechn.com/api/tempmail/message?apikey=prince&email=${currentEmail}&messageid=${messageId}`);
    const data = await res.json();
    document.getElementById("messageBox").innerHTML =
      `<b>From:</b> ${data.from}<br>
       <b>Subject:</b> ${data.subject}<br><br>
       <b>Body:</b><br>${data.body}`;
  } catch {
    alert("❌ Error fetching message!");
  }
}
