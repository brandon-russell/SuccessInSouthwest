      // HTML Elements
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // Set your countdown target in Eastern Time
    const targetEasternTime = new Date("November 04, 2025 06:30:00");

    // Fetch current Eastern time from worldtimeapi
    async function getEasternTime() {
      try {
        const response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
        const data = await response.json();
        return new Date(data.datetime);
      } catch (error) {
        console.error("Failed to fetch Eastern Time. Falling back to local time:", error);
        return new Date(); // fallback to local time
      }
    }

    async function startCountdown() {
      const easternTimeNow = await getEasternTime();
      const pageLoadTime = Date.now();
      const offset = pageLoadTime - easternTimeNow.getTime();

      function updateCountdown() {
        const now = new Date(Date.now() - offset);
        const distance = targetEasternTime - now;

        if (distance <= 0) {
          clearInterval(timerInterval);
          document.querySelector(".timer").innerHTML = "Countdown Finished!";
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;
      }

      updateCountdown();
      const timerInterval = setInterval(updateCountdown, 1000);
    }

    startCountdown();