const inputFild = document.getElementById("inputFild");
const generateBtn = document.getElementById("generateBtn");
const qrCodeDiv = document.getElementById("qrCode");

let qr; // store QR instance

generateBtn.addEventListener("click", () => {
  const text = inputFild.value.trim();

  if (!text) {
    alert("Please enter some text or URL!");
    return;
  }

  // Clear old QR if already exists
  qrCodeDiv.innerHTML = "";

  // Generate new QR
  qr = new QRCode(qrCodeDiv, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
});
