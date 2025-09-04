import { useState } from "react";
import QUESTIONS from "./Questions.js";
import quizCompleteImg from "../../../assets/listtodo_ver2/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  //   Tạo 1 mảng chứa các câu trả lời của user, dùng useState để cập nhật qua từng câu hỏi
  //   Ban đầu là 1 mảng rỗng
  const [userAnswers, setUserAnswers] = useState([]);
  //   Lấy vị trí index của câu hỏi thông qua độ dài của mảng câu trả lời
  // Ban đầu chưa trả lời câu nào, mảng có độ dài 0, thì vị trí index của câu hỏi là 0, tương tự là 1, 2, 3 sau mỗi lần trả lời và render lại.
  const activeQuestionIndex = userAnswers.length;
  // Biến kiểm tra xem user đã trả lời hết số câu hỏi chưa
  const quizComplete = activeQuestionIndex === QUESTIONS.length;
  //   Hàm xử lý khi người dùng click vào câu trả lời
  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      // Cập nhật mảng câu trả lời bằng cách trải mảng cũ ra sau đó thêm câu trả lời vào
      return [...prevUserAnswers, selectedAnswer];
    });
  };
  // Return màn hình kq khi user trả lời xong
  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Finish" />
        <h2>Quiz Complete</h2>
      </div>
    );
  }
  //   Thuật toán xáo trộn câu trả lời trong mảng
  //   Hàm xáo trộn
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  //   Tạo bản sao mảng gốc
  const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  //   Chạy hàm xáo trộn
  shuffleArray(shuffleAnswers);
  // Return về giao diện
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={() => {
            handleSelectAnswer(null);
          }}
        />
        {/* Hiển thị câu hỏi bằng cách truy cập vào mảng thông qua vị trí index và lấy ra câu hỏi */}
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        {/* Tạo danh sách câu trả lời cho mỗi câu hỏi */}
        <ul id="answers">
          {/* Truy cập vào mảng câu trả lời, sau đó duyệt qua từng phần tử của mảng đó để render ra list câu trả lời */}
          {/* {QUESTIONS[activeQuestionIndex].answers.map((answer) => ( */}
          {shuffleAnswers.map((answer) => (
            <li key={answer} className="answer">
              {/* Khi người dùng click vào câu trả lời, chạy hàm handleSelectAnswer để cập nhật câu trả lời vào mảng câu trả lời */}
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
