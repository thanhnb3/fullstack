const boxCal = document.querySelector(".box");
const operations = document.querySelector(".operation");
const areaCal = document.querySelector(".calculate");

const arrayOps = ["+", "-", "×", "÷"];
// replaceOps mục đính để thay thế các dấu x và ÷ thành phép tính * và /
const replaceOps = (s) => s.replace(/×/g, "*").replace(/÷/g, "/");
/* đối tượng state lưu các giá trị ở :
- current: giá trị user nhập vào box
- expr: toàn bộ phép tính sau khi thực hiện xong ở ô operation
- justEvaluated: kiểm tra xem phép tính đã được thực hiện xong chưa
*/
const state = {
  current: "0",
  expr: "",
  justEvaluated: false,
};
// Hàm cập nhật giá trị vào các ô
const updateUI = () => {
  boxCal.textContent = state.current;
  operations.textContent = state.expr;
};

// Hàm reset tất cả
const resetAll = () => {
  state.current = "0";
  state.expr = "";
  state.justEvaluated = false;
  //   gán lại giá trị xong thì gọi hàm updateValue để cập nhật
  updateUI();
};

// Hàm cập nhật giá trị vào boxCal khi user nhập từ bàn phím
const pushNumber = (digit) => {
  // nếu state.justEvaluated trả về true nghĩa là vừa có 1 phép tính thực hiện xong, cập nhật giá trị như mới
  if (state.justEvaluated) {
    state.current = digit;
    state.expr = "";
    state.justEvaluated = false;
  } else {
    // nếu state.current === "0" thì cũng đang là mặc định hoặc vừa thực hiện phép tính xong, tương tự
    if (state.current === "0") {
      state.current = digit;
    } else {
      // trường hợp còn lại là đã có giá trị trên state.current thì lúc này nối thêm vào
      state.current += digit;
    }
  }
  //   sau cùng chạy lại hàm updateUI để hiển thị ra màn hình
  updateUI();
};

// Hàm cập nhật UI nếu user nhấn dấu "."
/*
trường hợp state.justEvaluated nghĩa là vừa thực hiện xong 1 phép tính, lúc này nếu nhập dấu . thì sẽ là 0.
trường hợp người dùng đang nhập rồi, và giờ nhập tiếp dấu . thì kiểm tra xem trong current đã có dấu . chưa, nếu chưa có thì mới ok
*/
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

// Hàm cập nhật

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
