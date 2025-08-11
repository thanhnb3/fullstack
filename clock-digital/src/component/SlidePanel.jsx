// components/common/SlidePanel.jsx
import { useEffect, useRef } from "react";

/**
 * SlidePanel: trượt mở/đóng theo prop `show`
 * - Không unmount nội dung để giữ state bên trong (stopwatch/timer…)
 *   => dùng display:block/none sau khi xong animation.
 */
export default function SlidePanel({
  show,
  duration = 400, // ms
  children,
  className = "",
}) {
  const ref = useRef(null);
  const animRef = useRef({}); // giữ timer/flag

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Clear timeout cũ (nếu có)
    if (animRef.current.tid) clearTimeout(animRef.current.tid);

    // Bật transition
    el.style.transition = `height ${duration}ms ease, opacity ${duration}ms ease`;

    if (show) {
      // Từ trạng thái đóng -> mở
      el.style.display = "block";
      el.style.height = "0px";
      el.style.opacity = "0";
      // force reflow
      void el.offsetHeight;
      // set đến chiều cao thực
      el.style.height = el.scrollHeight + "px";
      el.style.opacity = "1";

      animRef.current.tid = setTimeout(() => {
        el.style.height = ""; // về auto để responsive
        el.style.transition = ""; // dọn dẹp
      }, duration + 10);
    } else {
      // Từ trạng thái mở -> đóng
      // set height hiện tại trước khi kéo về 0
      el.style.height = el.scrollHeight + "px";
      el.style.opacity = "1";
      // force reflow
      void el.offsetHeight;
      el.style.transition = `height ${duration}ms ease, opacity ${duration}ms ease`;
      el.style.height = "0px";
      el.style.opacity = "0";

      animRef.current.tid = setTimeout(() => {
        el.style.display = "none";
        el.style.height = "";
        el.style.transition = "";
      }, duration);
    }

    return () => {
      if (animRef.current.tid) clearTimeout(animRef.current.tid);
    };
  }, [show, duration]);

  // Mặc định ẩn hẳn để không chiếm chỗ khi show=false ngay từ đầu
  return (
    <div
      ref={ref}
      className={className}
      style={{ display: show ? "block" : "none", overflow: "hidden" }}
      aria-hidden={!show}
    >
      {children}
    </div>
  );
}
