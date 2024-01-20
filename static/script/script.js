async function getWeather() {
    const apiKey = '4e3eb4bc3fb446deab5224105240601';
    const weatherInfo = document.getElementById('weatherInfo');

    try {
        const lastRequestTime = localStorage.getItem('lastRequestTime');

        console.log(getCurrentTime())
        console.log(new Date(lastRequestTime))
        if (!lastRequestTime || isUpdateNeeded(new Date(lastRequestTime))) {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Oakville&aqi=no`);
            console.log('requested')
            const data = await response.json();

            if (data.error) {
                console.error(`Error: ${data.error.message}`);
                return;
            }

            localStorage.setItem('weatherData', JSON.stringify(data));

            localStorage.setItem('lastRequestTime', getCurrentTime().toISOString());

            updateWeatherInfo(data);
        } else {
            const cachedWeatherData = localStorage.getItem('weatherData');
            if (cachedWeatherData) {
                const data = JSON.parse(cachedWeatherData);
                updateWeatherInfo(data);
            }
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function isUpdateNeeded(lastRequestTime) {
    const currentTime = getCurrentTime();
    const timeDifference = currentTime - lastRequestTime;

    const threshold = 60*60*1000;

    return timeDifference > threshold;
}

function getCurrentTime() {
    return new Date();
}

function updateWeatherInfo(data) {
    const temperature = data.current.temp_c;
    const conditionText = data.current.condition.text;

    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <p>Oakville Current weather: ${temperature}°C, ${conditionText}</p>
    `;
}

document.addEventListener('DOMContentLoaded', getWeather);