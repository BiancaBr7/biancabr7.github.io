async function getWeather() {
    const apiKey = '4e3eb4bc3fb446deab5224105240601'; // Replace with your actual API key from apiweather.com
    const weatherInfo = document.getElementById('weatherInfo');

    try {
        // Retrieve the last request time from localStorage
        const lastRequestTime = localStorage.getItem('lastRequestTime');

        console.log(getCurrentTime())
        console.log(new Date(lastRequestTime))
        // Check if an update is needed based on the last request time
        if (!lastRequestTime || isUpdateNeeded(new Date(lastRequestTime))) {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Oakville&aqi=no`);
            console.log('requested')
            const data = await response.json();

            if (data.error) {
                console.error(`Error: ${data.error.message}`);
                return;
            }

            localStorage.setItem('weatherData', JSON.stringify(data));

            // Update the last request time in localStorage
            localStorage.setItem('lastRequestTime', getCurrentTime().toISOString());

            updateWeatherInfo(data);
        } else {
            // Display the existing weather data without making a new API request
            const cachedWeatherData = localStorage.getItem('weatherData');
            if (cachedWeatherData) {
                const data = JSON.parse(cachedWeatherData);
                updateWeatherInfo(data);
            }
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle the error or display a message as needed
    }
}

function isUpdateNeeded(lastRequestTime) {
    const currentTime = getCurrentTime();
    const timeDifference = currentTime - lastRequestTime; // Difference in milliseconds

    // Set the threshold in milliseconds (e.g., 30 minutes)
    const threshold = 60*60*1000;

    // Check if the time difference is greater than the threshold
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

// Initial call to getWeather when the page loads
document.addEventListener('DOMContentLoaded', getWeather);