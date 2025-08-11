import styles from "../../style.js";
import { useRef, useEffect } from "react";

export default function Timer({ onBack }) {
  // Khai báo biến giá trị
  const time = useRef(0);
  const timeHours = useRef(0);
  const timeMinutes = useRef(0);
  const timeSeconds = useRef(0);
  const timeMs = useRef(0);
  const timerInterval = useRef(null);

  const startTimer = useRef(null);
  const stopTimer = useRef(null);
  const resetTimer = useRef(null);
  const updateHours = useRef(null);
  const updateMinutes = useRef(null);
  const updateSeconds = useRef(null);
  const updateMs = useRef(null);

  // Hàm thêm số 0 trước số nhỏ hơn 10
  const addZeroTimer = (number) => {
    return number < 10 ? "0" + number : number;
  };
  // 1. HÀM XỬ LÝ KHI NHẤN VÀO NÚT START
  const startUserTimer = () => {
    if (
      timeHours.current === 0 &&
      timeMinutes.current === 0 &&
      timeSeconds.current === 0 &&
      timeMs.current === 0
    ) {
      getTime();
    } else {
      timerInterval.current = setInterval(timer, 10);
      startTimer.current.classList.add("hidden");
      stopTimer.current.classList.remove("hidden");
    }
  };
  //   Thực hiện hàm lấy thời gian cho user nhập từ bàn phím để cập nhật time
  const getTime = () => {
    time.current = Number(prompt("Nhập số phút bạn muốn chạy vào: "));
    //   Kiểm tra số nhập vào
    while (time.current < 0 || isNaN(time.current)) {
      time.current = Number(prompt("Nhập số dương mới đúng: "));
    }
    // Đổi số phút user nhập vào sang giây
    time.current = time.current * 60;
    // chạy hàm settime
    setTime();
  };
  //   Hàm settime
  const setTime = () => {
    timeHours.current = Math.floor(time.current / 3600);
    timeMinutes.current = Math.floor((time.current % 3600) / 60);
    timeSeconds.current = Math.floor(time.current % 60);
    timeMs.current = 0;

    // Kiểm tra giá trị và thêm số 0 nếu nhỏ hơn 10
    const userHours = addZeroTimer(timeHours.current);
    const userMinutes = addZeroTimer(timeMinutes.current);
    const userSeconds = addZeroTimer(timeSeconds.current);
    // update value
    updateHours.current.textContent = userHours;
    updateMinutes.current.textContent = userMinutes;
    updateSeconds.current.textContent = userSeconds;
    updateMs.current.textContent = timeMs.current;
  };
  //   Hàm đếm time
  const timer = () => {
    timeMs.current--;
    if (timeMs.current === -1) {
      timeMs.current = 99;
      timeSeconds.current--;
    }
    if (timeSeconds.current === -1) {
      timeSeconds.current = 59;
      timeMinutes.current--;
    }
    if (timeMinutes.current === -1) {
      timeMinutes.current = 59;
      timeHours.current--;
    }
    // update lại time
    const hoursFinish = addZeroTimer(timeHours.current);
    const minutesFinish = addZeroTimer(timeMinutes.current);
    const secondsFinish = addZeroTimer(timeSeconds.current);

    updateHours.current.textContent = hoursFinish;
    updateMinutes.current.textContent = minutesFinish;
    updateSeconds.current.textContent = secondsFinish;
    updateMs.current.textContent = timeMs.current;
    // Nếu time đã chạy xong (về 0 hết) thì chạy hàm timeUp() để kiểm tra
    timeUp();
  };
  const timeUp = () => {
    if (
      timeHours.current === 0 &&
      timeMinutes.current === 0 &&
      timeSeconds.current === 0 &&
      timeMs.current === 0
    ) {
      resetUserTimer();
      alert("Hết giờ");
    }
  };
  const resetUserTimer = () => {
    stopUserTimer();
    time.current = 0;
    setTime();
  };

  const stopUserTimer = () => {
    clearInterval(timerInterval.current);
    startTimer.current.classList.remove("hidden");
    stopTimer.current.classList.add("hidden");
  };

  useEffect(() => {
    return () => {
      clearInterval(timerInterval.current);
    };
  }, []);
  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* Value */}
      <div className="wrapper pt-8 pb-8 rounded-xl mt-8 bg-backGround2 shadow-lg hover:shadow-none transition-all duration-200">
        <div className="main flex justify-center items-center gap-2.5">
          <div className="w-[15%] md:w-1/5 text-center">
            <p className={styles.numberStyle} ref={updateHours}>
              00
            </p>
            <p className={styles.textStyle}>Hours</p>
          </div>
          <div className="text-[16px] md:text-3xl">:</div>
          <div className="w-[15%] md:w-1/5 text-center">
            <p className={styles.numberStyle} ref={updateMinutes}>
              00
            </p>
            <p className={styles.textStyle}>Minutes</p>
          </div>
          <div className="text-[16px] md:text-3xl">:</div>

          <div className="w-[15%] md:w-1/5 text-center">
            <p className={styles.numberStyle} ref={updateSeconds}>
              00
            </p>
            <p className={styles.textStyle}>Seconds</p>
          </div>
          <div className="text-[16px] md:text-3xl">:</div>

          <div className="w-[15%] md:w-1/5 text-center">
            <p className={styles.numberStyle} ref={updateMs}>
              00
            </p>
            <p className={styles.textStyle}>Milisecond</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
        <button
          className={styles.btnStyle}
          ref={startTimer}
          onClick={startUserTimer}
        >
          Start
        </button>
        <button
          className={`${styles.btnStyle} hidden`}
          ref={stopTimer}
          onClick={stopUserTimer}
        >
          Stop
        </button>
        <button
          className={styles.btnStyle}
          ref={resetTimer}
          onClick={resetUserTimer}
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
