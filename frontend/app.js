
// Масив для збереження записів (in-memory)
let products = [];

// Знаходимо форму та таблицю
const form = document.getElementById("createForm");
const tableBody = document.getElementById("itemsTableBody");
const resetBtn = document.getElementById("resetBtn");

// Обробка сабміту (натискання кнопки "Додати")
form.addEventListener("submit", function(event) {
  event.preventDefault(); // щоб сторінка не перезавантажувалась

  // Зчитуємо значення полів
  const name = document.getElementById("nameInput").value.trim();
  const license = document.getElementById("licenseSelect").value;
  const user = document.getElementById("userInput").value.trim();
  const date = document.getElementById("dateInput").value;
  const comment = document.getElementById("commentInput").value.trim();

  // Мінімальна валідація
  let valid = true;

  if (!name) {
    document.getElementById("nameError").textContent = "Назва обов'язкова";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  if (!license) {
    document.getElementById("licenseError").textContent = "Оберіть ліцензію";
    valid = false;
  } else {
    document.getElementById("licenseError").textContent = "";
  }

  if (!user) {
    document.getElementById("userError").textContent = "Користувач обов'язковий";
    valid = false;
  } else if(!user.includes("@")) {
    document.getElementById("userError").textContent = "Введіть коректну електронну адресу";
    valid = false;
  } else {
    document.getElementById("userError").textContent = "";
  }
 

  if (!date) {
    document.getElementById("dateError").textContent = "Дата обов'язкова";
    valid = false;
  } else {
    document.getElementById("dateError").textContent = "";
  }

  // Якщо є помилки — не додаємо запис
  if (!valid) return;

  // Додаємо запис у масив
  products.push({ name, license, user, date, comment });

  // Перемальовуємо таблицю
  renderTable();

  // Очищаємо форму після додавання
  form.reset();
});

// Кнопка "Очистити" просто очищає форму
resetBtn.addEventListener("click", function() {
  form.reset();
});

// Функція для оновлення таблиці
function renderTable() {
  tableBody.innerHTML = ""; // очистити попередні рядки
  products.forEach((p, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${p.name}</td>
      <td>${p.license}</td>
      <td>${p.user}</td>
      <td>${p.date}</td>
      <td>${p.comment}</td>
    `;
    tableBody.appendChild(row);
  });
}


