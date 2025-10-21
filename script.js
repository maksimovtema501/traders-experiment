const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/library/d/1jqSvSOKWwGvZZM62LM-8vVnHrqmeB_iaaZdYzmzXujWF76yDeHbVWeqY/1";

async function sendData() {
  const data = {
    name: document.getElementById("name").value,
    result: document.getElementById("result").value,
    drawdown: document.getElementById("drawdown").value,
    emotion: document.getElementById("emotion").value,
    discipline: document.getElementById("discipline").value
  };

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const res = await response.json();
  if (res.status === "ok") {
    alert("✅ Данные успешно сохранены!");
  } else {
    alert("❌ Ошибка: " + res.message);
  }
}
