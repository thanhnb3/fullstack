import styles from "../../style.js";
import BackHome from "../BackHome.jsx";
import ClockRealTime from "./ClockRealTime.jsx";
import StopWatch from "./StopWatch.jsx";
import Timer from "./Timer.jsx";
export default function MainClock() {
  return (
    <div className="relative box-border min-h-screen flex items-center justify-center bg-amber-100">
      <BackHome />
      <div className="h-full flex flex-col justify-center rounded-none mt-5 p-5 md:p-8 md:w-full md:max-w-220 md:rounded-3xl shadow-gray-500 bg-backGround text-white">
        {/* Content */}
        <div>
          <p className={styles.textStyle}>Thực hành đồng hồ bấm giờ</p>
          <h3 className="text-xl md:text-[30px] font-semibold text-white mb-7 mt-2.5">
            Digital Clock Width Stopwatch and Timer
          </h3>
          <p className={`type ${styles.textStyle}`}>stopwatch</p>
        </div>
        <div className="px-5 md:px-0">
          {/* Clock */}
          <ClockRealTime />
          {/* Stopwatch */}
          <StopWatch />
          {/* Timer */}
          <Timer />
        </div>
      </div>
    </div>
  );
}

// component/Clock/MainClock.jsx
// import { useMemo, useState } from "react";
// import styles from "../../style.js";
// import BackHome from "../BackHome.jsx";
// import ClockRealTime from "./ClockRealTime.jsx";
// import StopWatch from "./StopWatch.jsx";
// import Timer from "./Timer.jsx";
// import SlidePanel from "../SlidePanel.jsx";

// export default function MainClock() {
//   const [activeView, setActiveView] = useState("clock");
//   const typeLabel = useMemo(
//     () =>
//       activeView === "clock"
//         ? "Clock"
//         : activeView === "stopwatch"
//         ? "Stopwatch"
//         : "Timer",
//     [activeView]
//   );

//   const goClock = () => setActiveView("clock");
//   const goStopwatch = () => setActiveView("stopwatch");
//   const goTimer = () => setActiveView("timer");

//   return (
//     <div className="relative box-border min-h-screen flex items-center justify-center bg-amber-100">
//       <BackHome />
//       <div className="h-full flex flex-col justify-center mt-5 p-5 md:p-8 md:w-full md:max-w-220 md:rounded-3xl bg-backGround text-white">
//         {/* Header */}
//         <div>
//           <p className={styles.textStyle}>Thực hành đồng hồ bấm giờ</p>
//           <h3 className="text-xl md:text-[30px] font-semibold mb-5 mt-2.5">
//             Digital Clock Width Stopwatch and Timer
//           </h3>
//           <p className={`type ${styles.textStyle}`}>{typeLabel}</p>
//         </div>

//         {/* Body */}
//         <div className="px-5 md:px-0 mt-4 space-y-6">
//           {/* Clock */}
//           <SlidePanel show={activeView === "clock"}>
//             <div className="clock">
//               <ClockRealTime
//                 visible={activeView === "clock"}
//                 onGoStopwatch={goStopwatch}
//                 onGoTimer={goTimer}
//               />
//             </div>
//           </SlidePanel>

//           {/* Stopwatch */}
//           <SlidePanel show={activeView === "stopwatch"}>
//             <div className="stopwatch">
//               <StopWatch onBack={goClock} />
//             </div>
//           </SlidePanel>

//           {/* Timer */}
//           <SlidePanel show={activeView === "timer"}>
//             <div className="timer">
//               <Timer onBack={goClock} />
//             </div>
//           </SlidePanel>
//         </div>
//       </div>
//     </div>
//   );
// }
