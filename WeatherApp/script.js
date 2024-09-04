document.getElementById('search-btn').addEventListener('click', function() {
    let city = document.getElementById('city-input').value;
    fetchWeather(city);
    document.getElementById('city-input').value = ''; // Yeh line city name clear karegi
});

function fetchWeather(city) {
    const apiKey = '3f3a0df4651a007acd9cf7e83e2ddd49';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            updateWeatherInfo(data);
        })
        .catch(error => alert("City not found"));
}

function updateWeatherInfo(data) {
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} km/h`;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
}
