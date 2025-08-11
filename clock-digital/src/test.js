// main_cal.js
document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box"); // màn hình chính
  const opLine = document.querySelector(".operation"); // dòng phép tính
  const calc = document.querySelector(".calculate"); // vùng để ủy quyền sự kiện (event delegation)

  const allowedOps = ["+", "-", "×", "÷"];
  const toJsOp = (s) => s.replace(/×/g, "*").replace(/÷/g, "/");

  const state = {
    current: "0",
    expr: "",
    justEvaluated: false,
  };

  const updateUI = () => {
    box.textContent = state.current;
    opLine.textContent = state.expr;
  };

  const resetAll = () => {
    state.current = "0";
    state.expr = "";
    state.justEvaluated = false;
    updateUI();
  };

  const pushNumber = (digit) => {
    if (state.justEvaluated) {
      state.current = digit;
      state.expr = "";
      state.justEvaluated = false;
    } else {
      if (state.current === "0") state.current = digit;
      else state.current += digit;
    }
    updateUI();
  };

  const pushDot = () => {
    if (state.justEvaluated) {
      state.current = "0.";
      state.expr = "";
      state.justEvaluated = false;
      return updateUI();
    }
    if (!state.current.includes(".")) {
      state.current += ".";
      updateUI();
    }
  };

  const pushOperator = (op) => {
    // Nếu vừa bấm '=', dùng kết quả làm toán hạng trái
    if (state.justEvaluated) {
      state.expr = "";
      state.justEvaluated = false;
    }

    // Nếu expr đang kết thúc bằng toán tử, thay toán tử
    if (/\s[+\-×÷]\s$/.test(state.expr)) {
      state.expr = state.expr.slice(0, -3) + ` ${op} `;
    } else {
      // đẩy current sang expr
      state.expr += (state.expr ? "" : "") + state.current + ` ${op} `;
    }
    state.current = "0";
    updateUI();
  };

  const pushParen = (paren) => {
    // Đơn giản: thêm thẳng vào expr (nếu đang có số và paren là "(" thì bạn có thể tự chèn ×,
    // nhưng để đơn giản, yêu cầu người dùng nhập đúng cú pháp)
    if (state.justEvaluated) {
      // nếu vừa = xong và mở ngoặc mới → bắt đầu phép mới
      state.expr = "";
      state.justEvaluated = false;
    }

    // Nếu đang ở số khác "0" và mở ngoặc "(", tùy ý: chèn vào expr rồi reset current
    if (paren === "(") {
      // Nếu current khác "0", có thể đẩy nó lên expr trước:
      if (state.current !== "0") {
        state.expr += state.current + " ";
        state.current = "0";
      }
      state.expr += "( ";
    } else {
      // ")"
      // Trước khi đóng ngoặc, nếu current có số, đẩy vào expr
      if (state.current !== "0") {
        state.expr += state.current + " ";
        state.current = "0";
      }
      state.expr += ") ";
    }
    updateUI();
  };

  const backspace = () => {
    if (state.justEvaluated) {
      // sau khi =, backspace coi như không làm gì hoặc reset
      return;
    }
    if (state.current.length <= 1) state.current = "0";
    else state.current = state.current.slice(0, -1);
    updateUI();
  };

  const unarySquare = () => {
    // bình phương current
    const n = parseFloat(state.current);
    if (isNaN(n)) return;
    state.current = String(n * n);
    state.justEvaluated = false;
    updateUI();
  };

  const unarySqrt = () => {
    const n = parseFloat(state.current);
    if (isNaN(n)) return;
    if (n < 0) {
      alert("Không thể căn bậc hai số âm");
      return;
    }
    state.current = String(Math.sqrt(n));
    state.justEvaluated = false;
    updateUI();
  };

  const unaryPercent = () => {
    // % của current (đưa về /100)
    const n = parseFloat(state.current);
    if (isNaN(n)) return;
    state.current = String(n / 100);
    state.justEvaluated = false;
    updateUI();
  };

  const buildEvalString = () => {
    // Ghép expr + current (nếu current chưa được đẩy)
    let full = (
      state.expr + (state.current !== "0" ? state.current : "")
    ).trim();

    // Thay ký hiệu nhân/chia
    full = toJsOp(full);

    // Bỏ khoảng thừa
    full = full.replace(/\s+/g, " ");

    // Validate: chỉ cho phép 0-9, ., + - * /, ngoặc và khoảng trắng
    if (!/^[0-9+\-*/().\s]+$/.test(full)) {
      throw new Error("Biểu thức không hợp lệ");
    }
    return full;
  };

  const evaluate = () => {
    try {
      const full = buildEvalString();
      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict"; return (${full});`)();
      if (!isFinite(result)) throw new Error("Lỗi tính toán");
      state.current = String(result);
      state.expr = "";
      state.justEvaluated = true;
      updateUI();
    } catch (e) {
      alert("Biểu thức không hợp lệ");
    }
  };

  // Event delegation: nghe click trên tất cả .btn
  calc.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;

    const txt = btn.textContent.trim();

    // Phân loại
    if (/^\d$/.test(txt)) {
      // số 0-9
      pushNumber(txt);
      return;
    }

    if (txt === ".") {
      pushDot();
      return;
    }

    if (txt === "CA") {
      resetAll();
      return;
    }

    if (btn.classList.contains("result") || txt === "=") {
      evaluate();
      return;
    }

    // backspace: nút đỏ có icon mũi tên ←
    if (btn.querySelector(".fa-left-long")) {
      backspace();
      return;
    }

    // ngoặc
    if (txt === "(" || txt === ")") {
      pushParen(txt);
      return;
    }

    // đơn ngôi
    if (txt.startsWith("x")) {
      // x^2
      unarySquare();
      return;
    }
    if (txt === "√") {
      unarySqrt();
      return;
    }
    if (txt === "%") {
      unaryPercent();
      return;
    }

    // toán tử nhị phân
    if (allowedOps.includes(txt)) {
      pushOperator(txt);
      return;
    }
  });

  // Khởi tạo
  resetAll();
});
