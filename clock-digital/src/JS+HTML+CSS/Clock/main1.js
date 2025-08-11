document.addEventListener("DOMContentLoaded", () => {
  // Hàm show giờ hiện tại
  const updateHours = document.querySelector("#hour");
  const updateMinutes = document.querySelector("#minute");
  const updateSecs = document.querySelector("#sec");
  const updateAmPm = document.querySelector("#ampm");
  const updateOtherAmPm = document.querySelector(".other-ampm");
  const stopwatchDigital = document.querySelector(".stopwatch-btn");
  const backButton = document.querySelectorAll(".back-btn");
  const timerButton = document.querySelector(".timer-btn");
  const clockWrapper = document.querySelectorAll(".clock-wrapper > div");

  stopwatchDigital.addEventListener("click", () => {});

  // Xử lý chuyển từ giờ sang bộ đếm time
  function slideUp(element) {
    element.style.height = element.scrollHeight + "px";
    element.style.opacity = "1";
    // Bắt buộc phải force reflow trước khi transition
    element.offsetHeight; // force reflow
    element.style.transition = "height 0.4s, opacity 0.4s";
    element.style.height = "0";
    element.style.opacity = "0";
    setTimeout(() => {
      element.style.display = "none";
      element.style.height = "";
      element.style.opacity = "";
      element.style.transition = "";
    }, 400);
  }

  function slideDown(element) {
    element.style.display = "block";
    element.style.height = "0";
    element.style.opacity = "0";
    element.offsetHeight; // force reflow
    element.style.transition = "height 0.4s, opacity 0.4s";
    element.style.height = element.scrollHeight + "px";
    element.style.opacity = "1";
    setTimeout(() => {
      element.style.height = "";
      element.style.transition = "";
    }, 410);
  }
  // Khi bấm Stopwatch - btn
  stopwatchDigital.addEventListener("click", () => {
    clockWrapper.forEach((div) => {
      if (div.style.display !== "none") {
        slideUp(div);
      }
    });
    setTimeout(() => {
      slideDown(document.querySelector(".stopwatch"));
    }, 410);
    document.querySelector(".type").innerHTML = "Stopwatch";
  });
  // Khi bấm back-btn
  backButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      clockWrapper.forEach((div) => {
        if (div.style.display !== "none") {
          slideUp(div);
        }
      });
      setTimeout(() => {
        slideDown(document.querySelector(".clock"));
      }, 410);
      document.querySelector(".type").innerHTML = "Stopwatch";
    });
  });
  // Khi bấm timer-btn
  timerButton.addEventListener("click", () => {
    clockWrapper.forEach((div) => {
      if (div.style.display !== "none") {
        slideUp(div);
      }
    });
    setTimeout(() => {
      slideDown(document.querySelector(".timer"));
    }, 410);
    document.querySelector(".type").innerHTML = "Stopwatch";
  });

  const addTrailingZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const updateTime = () => {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    let otherampm = hours ? "AM" : "PM";
    //   Chuyển từ cách tính 24h sang 12h
    hours = hours % 12 || 12;
    //   thêm số 0 vào trước nếu nhỏ hơn 10
    const hoursFinish = addTrailingZero(hours);
    const minutesFinish = addTrailingZero(minutes);
    const secondsFinish = addTrailingZero(seconds);
    // Update time
    updateHours.textContent = hoursFinish;
    updateMinutes.textContent = minutesFinish;
    updateSecs.textContent = secondsFinish;
    updateAmPm.textContent = ampm;
    updateOtherAmPm.textContent = otherampm;
  };

  // Gọi hàm khi load trang
  updateTime();
  // Gọi hàm sau mỗi giây chạy

  setInterval(updateTime, 1000);

  // STOPWATCH
  let stopwatchHours = 0;
  let stopwatchMinutes = 0;
  let stopwatchSeconds = 0;
  let stopwatchMiliSeconds = 0;
  let stopwatchRunning = false;
  let laps = 0;
  let stopwatchInterval;

  const stopwatchHoursValue = document.querySelector("#stopwatch-hour");
  const stopwatchMinutesValue = document.querySelector("#stopwatch-min");
  const stopwatchSecondsValue = document.querySelector("#stopwatch-sec");
  const stopwatchMilisecondsValue = document.querySelector("#stopwatch-ms");
  const startButton = document.querySelector(".start-stopwatch");
  const lapButton = document.querySelector(".lap-stopwatch");
  const resetButton = document.querySelector(".reset-stopwatch");

  const stopwatch = () => {
    // Tăng bộ đếm milisecond lên 1
    stopwatchMiliSeconds++;
    //   Nếu đếm đủ 100 miliseconds thì tăng giây lên 1 và reset lại milisecond về 0
    if (stopwatchMiliSeconds === 100) {
      stopwatchSeconds++;
      stopwatchMiliSeconds = 0;
    }

    if (stopwatchSeconds === 60) {
      stopwatchMinutes++;
      stopwatchSeconds = 0;
    }

    if (stopwatchMinutes === 60) {
      stopwatchHours++;
      stopwatchMinutes = 0;
    }

    //   Thêm số 0 nếu nhỏ hơn 10
    const stopwatchHoursFinish = addTrailingZero(stopwatchHours);
    const stopwatchMinutesFinish = addTrailingZero(stopwatchMinutes);
    const stopwatchSecondsFinish = addTrailingZero(stopwatchSeconds);
    const stopwatchMiliSecondsFinish = addTrailingZero(stopwatchMiliSeconds);

    //   show values
    stopwatchHoursValue.textContent = stopwatchHoursFinish;
    stopwatchMinutesValue.textContent = stopwatchMinutesFinish;
    stopwatchSecondsValue.textContent = stopwatchSecondsFinish;
    stopwatchMilisecondsValue.textContent = stopwatchMiliSecondsFinish;
  };

  // Hàm để bắt đầu đếm giờ
  const startStopwatch = () => {
    if (!stopwatchRunning) {
      // Nếu đồng hồ đang KHÔNG ở trạng thái chạy
      stopwatchInterval = setInterval(stopwatch, 10);
      stopwatchRunning = true;
    }
  };

  // Hàm để kết thúc đếm giờ
  // const stopStopwatch = () => {
  //   clearInterval(stopwatchInterval);
  //   stopwatchRunning = false;
  // };
  // Hàm reset bộ đếm giờ
  const resetStopwatch = () => {
    // clear hàm stopwatch và đặt lại giá trị mặc định cho các biến
    clearInterval(stopwatchInterval);
    stopwatchHours = 0;
    stopwatchMinutes = 0;
    stopwatchSeconds = 0;
    stopwatchMiliSeconds = 0;
    stopwatchRunning = false;
    laps = 0;
    //   thay đổi text về 00
    stopwatchHoursValue.textContent = "00";
    stopwatchMinutesValue.textContent = "00";
    stopwatchSecondsValue.textContent = "00";
    stopwatchMilisecondsValue.textContent = "00";
  };

  // Click vào nút start, gọi hàm startStopwatch
  startButton.addEventListener("click", () => {
    startStopwatch();
    startButton.classList.add("hidden");
    lapButton.classList.remove("hidden");
  });
  // Reset
  resetButton.addEventListener("click", () => {
    resetStopwatch();
    startButton.classList.remove("hidden");
    lapButton.classList.add("hidden");
  });
  //   Lap
  lapButton.addEventListener("click", () => {
    // Tăng số lần lap
    laps++;

    // Xoá class 'active' khỏi tất cả lap hiện tại
    document.querySelectorAll(".lap").forEach((lap) => {
      lap.classList.remove("active");
    });

    // Tạo phần tử lap mới
    const lapDiv = document.createElement("div");
    lapDiv.classList.add("lap", "active");

    const lapTitle = document.createElement("p");
    lapTitle.textContent = `Lap ${laps}`;

    const lapTime = document.createElement("p");
    lapTime.textContent = `
    ${addTrailingZero(stopwatchHours)} :
    ${addTrailingZero(stopwatchMinutes)} :
    ${addTrailingZero(stopwatchSeconds)} :
    ${addTrailingZero(stopwatchMiliSeconds)}
  `
      .replace(/\s+/g, " ")
      .trim(); // Gộp chuỗi, xoá thừa khoảng trắng

    lapDiv.appendChild(lapTitle);
    lapDiv.appendChild(lapTime);

    // Thêm lap mới vào đầu khối chứa lap
    const lapsContainer = document.querySelector(".laps");
    lapsContainer.insertBefore(lapDiv, lapsContainer.firstChild);
  });
  // Timer
  let time = 0;
  let timeHours = 0;
  let timeMinutes = 0;
  let timeSeconds = 0;
  let timeMiliseconds = 0;
  let timerinterval;

  const startTimer = document.querySelector(".start-timer");
  const stopTimer = document.querySelector(".stop-timer");
  const resetTimer = document.querySelector(".reset-timer");
  const userEnterHours = document.querySelector("#timer-hour");
  const userEnterMinutes = document.querySelector("#timer-min");
  const userEnterSeconds = document.querySelector("#timer-sec");
  const userEnterMs = document.querySelector("#timer-ms");

  const getTime = () => {
    time = Number(prompt("Enter time in minutes"));
    //   chuyển time sang seconds
    time = time * 60;
    //   update timer
    setTime();
  };

  const setTime = () => {
    timeHours = Math.floor(time / 3600);
    timeMinutes = Math.floor((time % 3600) / 60);
    timeSeconds = Math.floor(time % 60);

    const userHoursFinish = addTrailingZero(timeHours);
    const userMinutesFinish = addTrailingZero(timeMinutes);
    const userSecondsFinish = addTrailingZero(timeSeconds);

    //   update
    userEnterHours.textContent = userHoursFinish;
    userEnterMinutes.textContent = userMinutesFinish;
    userEnterSeconds.textContent = userSecondsFinish;
    userEnterMs.textContent = timeMiliseconds;
  };
  // Hàm bắt đầu đếm time
  const timer = () => {
    timeMiliseconds--;
    if (timeMiliseconds === -1) {
      timeMiliseconds = 99;
      timeSeconds--;
    }
    if (timeSeconds === -1) {
      timeSeconds = 59;
      timeMinutes--;
    }
    if (timeMinutes === -1) {
      timeMinutes = 59;
      timeHours--;
    }
    // update time
    const timeHoursFinish = addTrailingZero(timeHours);
    const timeMinutesFinish = addTrailingZero(timeMinutes);
    const timeSecondsFinish = addTrailingZero(timeSeconds);

    userEnterHours.textContent = timeHoursFinish;
    userEnterMinutes.textContent = timeMinutesFinish;
    userEnterSeconds.textContent = timeSecondsFinish;
    userEnterMs.textContent = timeMiliseconds;
    // Kiểm tra nếu time chạy xong
    timeUp();
  };

  const startUserTimer = () => {
    if (
      timeHours === 0 &&
      timeMinutes === 0 &&
      timeSeconds === 0 &&
      timeMiliseconds === 0
    ) {
      getTime();
    } else {
      timerinterval = setInterval(timer, 10);
      startTimer.classList.add("hidden");
      stopTimer.classList.remove("hidden");
    }
  };

  const stopUserTimer = () => {
    clearInterval(timerinterval);
    startTimer.classList.remove("hidden");
    stopTimer.classList.add("hidden");
  };

  const resetUserTimer = () => {
    stopUserTimer();
    time = 0;
    setTime();
  };
  // Kiểm tra nếu time chạy về 0

  const timeUp = () => {
    if (
      timeHours === 0 &&
      timeMinutes === 0 &&
      timeSeconds === 0 &&
      timeMiliseconds === 0
    ) {
      resetUserTimer();
      alert("Time Up");
    }
  };
  startTimer.addEventListener("click", () => {
    startUserTimer();
  });

  stopTimer.addEventListener("click", () => {
    stopUserTimer();
  });
  resetTimer.addEventListener("click", () => {
    resetUserTimer();
  });
});
