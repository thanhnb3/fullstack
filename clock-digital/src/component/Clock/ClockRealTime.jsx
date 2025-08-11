import { useRef, useEffect } from "react";
import styles from "../../style.js";

export default function ClockRealTime() {
  //   KHAI BÁO USE REF
  const updateHour = useRef(null);
  const updateMinute = useRef(null);
  const updateSecond = useRef(null);
  const updateDayNight = useRef(null);
  const updateBotDayNight = useRef(null);

  //   KHAI BÁO HÀM
  //   1. Hàm thêm số 0 vào trước Number trong trường hợp giá trị < 10
  const addZero = (number) => {
    return number < 10 ? "0" + number : number;
  };
  // 2. Hàm update Time
  const updateTime = () => {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let dayNight = hours >= 12 ? "PM" : "AM";
    let botDayNight = hours >= 12 ? "PM" : "AM";
    // Chuyển từ cách tính 24h sang 12h
    hours = hours % 12 || 12;
    // Thêm số 0 vào trước nếu giá trị < 10
    const hoursFinish = addZero(hours);
    const minutesFinish = addZero(minutes);
    const secondsFinish = addZero(seconds);
    // Update time
    updateHour.current.textContent = hoursFinish;
    updateMinute.current.textContent = minutesFinish;
    updateSecond.current.textContent = secondsFinish;
    updateDayNight.current.textContent = dayNight;
    updateBotDayNight.current.textContent = botDayNight;
  };
  useEffect(() => {
    updateTime(); // Gọi ngay khi component mount
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval); // clear khi unmount
  }, []);
  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* Value */}
      <div className="wrapper pt-8 pb-8 rounded-xl mt-8 bg-backGround2 shadow-lg hover:shadow-none transition-all duration-200">
        <div className="main flex justify-center items-center gap-2.5">
          <div className="w-[15%] md:w-1/5 text-center">
            <p className={styles.numberStyle} ref={updateHour}>
              00
            </p>
            <p className={styles.textStyle}>Hours</p>
          </div>
          <div className="text-[16px] md:text-3xl">:</div>

          <div className="w-[15%] md:w-1/5 text-center">
            <p className={styles.numberStyle} ref={updateMinute}>
              00
            </p>
            <p className={styles.textStyle}>Minutes</p>
          </div>
          <div className="text-[16px] md:text-3xl">:</div>

          <div className="w-[15%] md:w-1/5 text-center">
            <p className={styles.numberStyle} ref={updateSecond}>
              00
            </p>
            <p className={styles.textStyle}>Seconds</p>
          </div>
          <div className="text-[16px] md:text-3xl">:</div>

          <div className="w-[15%] md:w-1/5 text-center">
            <p className={styles.numberStyle} ref={updateDayNight}>
              AM
            </p>
            <p className={styles.textStyle} ref={updateBotDayNight}>
              PM
            </p>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
        <button className={`stopwatch-btn ${styles.btnStyle}`}>
          Stop Watch
        </button>
        <button className={`timer-btn ${styles.btnStyle}`}>Timer</button>
      </div>
    </div>
  );
}
// import { useRef, useEffect } from "react";
// import styles from "../../style.js";

// export default function ClockRealTime({
//   onGoStopwatch,
//   onGoTimer,
//   visible = true,
// }) {
//   const updateHour = useRef(null);
//   const updateMinute = useRef(null);
//   const updateSecond = useRef(null);
//   const updateDayNight = useRef(null);
//   const updateBotDayNight = useRef(null);

//   const addZero = (n) => (n < 10 ? "0" + n : n);

//   const updateTime = () => {
//     const time = new Date();
//     let h = time.getHours();
//     const m = time.getMinutes();
//     const s = time.getSeconds();
//     const ampm = h >= 12 ? "PM" : "AM";
//     const bot = h >= 12 ? "PM" : "AM";
//     h = h % 12 || 12;

//     updateHour.current.textContent = addZero(h);
//     updateMinute.current.textContent = addZero(m);
//     updateSecond.current.textContent = addZero(s);
//     updateDayNight.current.textContent = ampm;
//     updateBotDayNight.current.textContent = bot;
//   };

//   useEffect(() => {
//     if (!visible) return; // panel đang ẩn -> không chạy
//     updateTime();
//     const id = setInterval(updateTime, 1000);
//     return () => clearInterval(id);
//   }, [visible]);

//   return (
//     <div className="w-full max-w-full overflow-hidden">
//       {/* Value */}
//       <div className="wrapper pt-8 pb-8 rounded-xl mt-8 bg-backGround2 shadow-lg hover:shadow-none transition-all duration-200">
//         <div className="main flex justify-center items-center gap-2.5">
//           <div className="w-[15%] md:w-1/5 text-center">
//             <p className={styles.numberStyle} ref={updateHour}>
//               00
//             </p>
//             <p className={styles.textStyle}>Hours</p>
//           </div>
//           <div className="text-[16px] md:text-3xl">:</div>

//           <div className="w-[15%] md:w-1/5 text-center">
//             <p className={styles.numberStyle} ref={updateMinute}>
//               00
//             </p>
//             <p className={styles.textStyle}>Minutes</p>
//           </div>
//           <div className="text-[16px] md:text-3xl">:</div>

//           <div className="w-[15%] md:w-1/5 text-center">
//             <p className={styles.numberStyle} ref={updateSecond}>
//               00
//             </p>
//             <p className={styles.textStyle}>Seconds</p>
//           </div>
//           <div className="text-[16px] md:text-3xl">:</div>

//           <div className="w-[15%] md:w-1/5 text-center">
//             <p className={styles.numberStyle} ref={updateDayNight}>
//               AM
//             </p>
//             <p className={styles.textStyle} ref={updateBotDayNight}>
//               PM
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Buttons điều hướng */}
//       <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
//         <button
//           type="button"
//           onClick={onGoStopwatch}
//           className={`stopwatch-btn ${styles.btnStyle}`}
//         >
//           Stop Watch
//         </button>
//         <button
//           type="button"
//           onClick={onGoTimer}
//           className={`timer-btn ${styles.btnStyle}`}
//         >
//           Timer
//         </button>
//       </div>
//     </div>
//   );
// }
