const form = document.getElementById("tradingForm");

// Вставь сюда URL твоего Google Apps Script веб-приложения
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzdoNhZXN9c4g1YZ_PL9qNahLrkzfTs2if3w2ab4F7bYBbPrQ9UFTM7qeScziA5oy2K/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    result: document.getElementById("result").value,
    drawdown: document.getElementById("drawdown").value,
    emotion: document.getElementById("emotion").value,
    discipline: document.getElementById("discipline").value
  };

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const res = await response.json();

    if(res.status === "ok") {
      alert("Данные сохранены!");
      form.reset();
    } else {
      alert("Ошибка: " + res.message);
    }
  } catch (err) {
    alert("Ошибка сети или сервера: " + err);
  }
});
