document.addEventListener('DOMContentLoaded', function() {
    const increaseTrafficBtn = document.getElementById('increaseTraffic');
    const decreaseTrafficBtn = document.getElementById('decreaseTraffic');
    const trafficStatus = document.getElementById('trafficStatus');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');

    let trafficLevel = 0;

    increaseTrafficBtn.addEventListener('click', function() {
        trafficLevel++;
        updateTrafficStatus();
    });

    decreaseTrafficBtn.addEventListener('click', function() {
        if (trafficLevel > 0) {
            trafficLevel--;
            updateTrafficStatus();
        }
    });

    function updateTrafficStatus() {
        trafficStatus.textContent = `Traffic Level: ${trafficLevel}`;
    }

    // Simulate environmental monitoring
    setInterval(function() {
        const tempValue = getRandomValue(20, 40);
        const humidityValue = getRandomValue(30, 70);

        temperature.textContent = `Temperature: ${tempValue}°C`;
        humidity.textContent = `Humidity: ${humidityValue}%`;
    }, 5000); // Update every 5 seconds

    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
