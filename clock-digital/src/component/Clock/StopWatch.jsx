import styles from "../../style.js";
import { useRef, useEffect } from "react";

export default function StopWatch({ onBack }) {
  // Khai báo ref cho element
  const stopHour = useRef(null);
  const stopMinute = useRef(null);
  const stopSecond = useRef(null);
  const stopMs = useRef(null);
  const startStopwatch = useRef(null);
  const lapButton = useRef(null);
  const resetStopwatch = useRef(null);
  const divStopwatch = useRef(null);

  // Khai báo ref cho biến logic
  const stopwatchHours = useRef(0);
  const stopwatchMinutes = useRef(0);
  const stopwatchSeconds = useRef(0);
  const stopwatchMiliSeconds = useRef(0);
  const stopwatchRunning = useRef(false);
  const laps = useRef(0);
  const stopwatchInterval = useRef(null);

  // Hàm thêm số 0 trước số nhỏ hơn 10
  const addZeroStopwatch = (number) => {
    return number < 10 ? "0" + number : number;
  };

  // Hàm đếm thời gian
  const stopwatch = () => {
    stopwatchMiliSeconds.current++;
    if (stopwatchMiliSeconds.current === 100) {
      stopwatchSeconds.current++;
      stopwatchMiliSeconds.current = 0;
    }
    if (stopwatchSeconds.current === 60) {
      stopwatchMinutes.current++;
      stopwatchSeconds.current = 0;
    }
    if (stopwatchMinutes.current === 60) {
      stopwatchHours.current++;
      stopwatchMinutes.current = 0;
    }

    // Cập nhật giao diện
    stopHour.current.textContent = addZeroStopwatch(stopwatchHours.current);
    stopMinute.current.textContent = addZeroStopwatch(stopwatchMinutes.current);
    stopSecond.current.textContent = addZeroStopwatch(stopwatchSeconds.current);
    stopMs.current.textContent = addZeroStopwatch(stopwatchMiliSeconds.current);
  };

  // Hàm bắt đầu đếm
  const stopwatchStart = () => {
    if (!stopwatchRunning.current) {
      stopwatchInterval.current = setInterval(stopwatch, 10);
      stopwatchRunning.current = true;
      startStopwatch.current.classList.add("hidden");
      lapButton.current.classList.remove("hidden");
    }
  };

  // Hàm reset
  const stopwatchReset = () => {
    clearInterval(stopwatchInterval.current);
    stopwatchHours.current = 0;
    stopwatchMinutes.current = 0;
    stopwatchSeconds.current = 0;
    stopwatchMiliSeconds.current = 0;
    stopwatchRunning.current = false;
    laps.current = 0;

    stopHour.current.textContent = "00";
    stopMinute.current.textContent = "00";
    stopSecond.current.textContent = "00";
    stopMs.current.textContent = "00";

    startStopwatch.current.classList.remove("hidden");
    lapButton.current.classList.add("hidden");

    // Xóa các lap hiện có
    if (divStopwatch.current) {
      divStopwatch.current.innerHTML = "";
    }
  };

  // Hàm thêm lap
  const stopwatchLap = () => {
    laps.current++;
    // Xoá class text-trắng cũ nếu có Lap trước
    const oldFirstLap = divStopwatch.current.firstChild;
    if (oldFirstLap) {
      oldFirstLap.classList.remove("text-white");
      oldFirstLap.classList.add("text-gray-400");
    }
    // Tạo lap mới
    const lapDiv = document.createElement("div");
    lapDiv.classList.add(
      "w-1/2",
      "flex",
      "justify-between",
      "p-2.5",
      "rounded-xl",
      "bg-backGround",
      "border-1",
      "border-solid",
      "border-colorBorder",
      "text-white"
    );
    // Thêm nội dung cho lap mới

    const lapTitle = document.createElement("p");
    lapTitle.textContent = `Lap ${laps.current}`;

    const lapTime = document.createElement("p");
    lapTime.textContent = `
      ${addZeroStopwatch(stopwatchHours.current)} :
      ${addZeroStopwatch(stopwatchMinutes.current)} :
      ${addZeroStopwatch(stopwatchSeconds.current)} :
      ${addZeroStopwatch(stopwatchMiliSeconds.current)}
    `
      .replace(/\s+/g, " ")
      .trim();

    lapDiv.appendChild(lapTitle);
    lapDiv.appendChild(lapTime);

    divStopwatch.current.insertBefore(lapDiv, divStopwatch.current.firstChild);
  };

  // Clear interval khi component unmount
  useEffect(() => {
    return () => {
      clearInterval(stopwatchInterval.current);
    };
  }, []);

  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* Value */}
      <div className="wrapper pt-8 pb-8 rounded-xl mt-8 bg-backGround2 shadow-lg hover:shadow-none transition-all duration-200">
        <div className="main flex justify-center items-center gap-2.5">
          <div className="w-[15%] md:w-1/5 text-center">
            <p className={styles.numberStyle} ref={stopHour}>
              00
            </p>
            <p className={styles.textStyle}>Hours</p>
          </div>
          <div className="text-[16px] md:text-3xl">:</div>

          <div className="w-[15%] md:w-1/5 text-center">
            <p className={styles.numberStyle} ref={stopMinute}>
              00
            </p>
            <p className={styles.textStyle}>Minutes</p>
          </div>
          <div className="text-[16px] md:text-3xl">:</div>

          <div className="w-[15%] md:w-1/5 text-center">
            <p className={styles.numberStyle} ref={stopSecond}>
              00
            </p>
            <p className={styles.textStyle}>Seconds</p>
          </div>
          <div className="text-[16px] md:text-3xl">:</div>

          <div className="w-[15%] md:w-1/5 text-center">
            <p className={styles.numberStyle} ref={stopMs}>
              00
            </p>
            <p className={styles.textStyle}>Milisecond</p>
          </div>
        </div>
      </div>

      {/* Danh sách lap */}
      <div
        ref={divStopwatch}
        className="relative max-h-[100px] overflow-y-auto flex items-center flex-col gap-2.5 mx-0 my-auto mt-5"
      ></div>

      {/* Buttons */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
        <button
          className={styles.btnStyle}
          ref={startStopwatch}
          onClick={stopwatchStart}
        >
          Start
        </button>
        <button
          className={`${styles.btnStyle} hidden`}
          ref={lapButton}
          onClick={stopwatchLap}
        >
          Lap
        </button>
        <button
          className={styles.btnStyle}
          ref={resetStopwatch}
          onClick={stopwatchReset}
        >
          Reset
        </button>
        <button onClick={onBack} className={styles.btnStyle}>
          Back
        </button>
      </div>
    </div>
  );
}
