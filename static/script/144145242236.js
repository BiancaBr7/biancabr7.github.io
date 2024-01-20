document.addEventListener("DOMContentLoaded", function () {
    const snowflakesContainer = document.querySelector(".snowflakes");
    const stopSnowButton = document.getElementById("stopSnowButton");

    generateSnowflakes(50);

    stopSnowButton.addEventListener("click", toggleSnow);

    function generateSnowflakes(count) {
        for (let i = 0; i < count; i++) {
            createSnowflake();
        }
    }

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.width = `${Math.random() * 15 + 5}px`;
        snowflake.style.opacity = Math.random() * 0.7 + 0.3;
        snowflake.style.height = snowflake.style.width;
        snowflake.style.animationDuration = `${Math.random() * 15 + 0.5}s`;
        snowflake.style.animationDelay = `${Math.random() * 5 + 1}s`;
        snowflakesContainer.appendChild(snowflake);
    }

    function toggleSnow() {
        snowflakesContainer.classList.toggle("snow-hidden");
        if (stopSnowButton.innerText === "Stop Snow") {
            stopSnowButton.innerText = "Show Again";
        } else {
            stopSnowButton.innerText = "Stop Snow";
        }
    }
});
