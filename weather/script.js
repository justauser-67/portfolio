const apiKey = "YOUR_API_KEY";
const btn = document.getElementById("search");

btn.onclick = async () => {
  const city = document.getElementById("city").value;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  const data = await res.json();

  document.getElementById("result").innerHTML = `
    <h2>${data.name}</h2>
    <p>${data.main.temp}°C</p>
    <p>${data.weather[0].description}</p>
  `;
};