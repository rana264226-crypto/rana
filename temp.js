const generateBtn = document.getElementById("generateBtn");
const emailDisplay = document.getElementById("email");
const loader = document.getElementById("loader");
const inboxList = document.getElementById("inbox");

let currentEmail = "";

// Generate Temp Mail
generateBtn.addEventListener("click", async () => {
  loader.style.display = "block"; // show loader
  emailDisplay.textContent = "Generating...";
  inboxList.innerHTML = "";

  try {
    const res = await fetch("https://api.princetechn.com/api/tempmail/generate?apikey=prince");
    const data = await res.json();

    if (data && data.email) {
      currentEmail = data.email;
      emailDisplay.textContent = currentEmail;

      // Copy to clipboard
      navigator.clipboard.writeText(currentEmail);
      alert("Copied ✅ " + currentEmail);
    } else {
      emailDisplay.textContent = "Error generating email!";
    }
  } catch (err) {
    emailDisplay.textContent = "API Error ❌";
  }

  loader.style.display = "none"; // hide loader
});

// Load Inbox
async function loadInbox() {
  if (!currentEmail) {
    alert("Please generate an email first!");
    return;
  }

  loader.style.display = "block";
  inboxList.innerHTML = "";

  try {
    const res = await fetch(`https://api.princetechn.com/api/tempmail/inbox?apikey=prince&email=${currentEmail}`);
    const data = await res.json();

    if (data && data.messages && data.messages.length > 0) {
      data.messages.forEach(msg => {
        const li = document.createElement("li");
        li.textContent = `${msg.from} - ${msg.subject}`;
        li.style.cursor = "pointer";
        li.onclick = () => loadMessage(msg.id);
        inboxList.appendChild(li);
      });
    } else {
      inboxList.innerHTML = "<li>No messages yet.</li>";
    }
  } catch (err) {
    inboxList.innerHTML = "<li>Failed to load inbox ❌</li>";
  }

  loader.style.display = "none";
}

// Load Specific Message
async function loadMessage(id) {
  loader.style.display = "block";

  try {
    const res = await fetch(`https://api.princetechn.com/api/tempmail/message?apikey=prince&email=${currentEmail}&messageid=${id}`);
    const data = await res.json();

    alert(`📩 From: ${data.from}\nSubject: ${data.subject}\n\n${data.body}`);
  } catch (err) {
    alert("Failed to load message ❌");
  }

  loader.style.display = "none";
}
