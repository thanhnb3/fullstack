import style from "../../style.js";
import BackHome from "../BackHome.jsx";
import { use, useEffect, useState } from "react";
import Results from "./Results.jsx";
// data câu hỏi và câu trả lời đúng và các tuỳ chọn cho user
const quizData = [
  {
    question: "Quốc gia nào có diện tích lớn nhất thế giới?",
    options: ["Canada", "Trung Quốc", "Nga", "Mỹ"],
    answer: "Nga",
  },
  {
    question: "Sông nào dài nhất thế giới?",
    options: ["Sông Nile", "Sông Amazon", "Sông Mississippi", "Sông Yangtze"],
    answer: "Sông Nile",
  },
  {
    question: "Đỉnh núi cao nhất thế giới là?",
    options: ["K2", "Everest", "Kangchenjunga", "Makalu"],
    answer: "Everest",
  },
  {
    question: "Sa mạc lớn nhất thế giới là?",
    options: ["Sahara", "Gobi", "Arabian", "Antarctica"],
    answer: "Antarctica",
  },
  {
    question: "Biển nào có diện tích lớn nhất thế giới?",
    options: ["Biển Đen", "Biển Caspian", "Biển Đông", "Biển Đỏ"],
    answer: "Biển Caspian",
  },
  {
    question: "Châu lục nào có số quốc gia nhiều nhất?",
    options: ["Châu Phi", "Châu Á", "Châu Âu", "Châu Mỹ"],
    answer: "Châu Phi",
  },
  {
    question: "Thủ đô của Australia là?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra",
  },
  {
    question: "Hồ nước ngọt lớn nhất thế giới là?",
    options: ["Hồ Superior", "Hồ Victoria", "Hồ Baikal", "Hồ Tanganyika"],
    answer: "Hồ Superior",
  },
  {
    question: "Dãy núi nào dài nhất thế giới?",
    options: ["Himalaya", "Andes", "Rocky", "Alps"],
    answer: "Andes",
  },
  {
    question: "Quốc gia nào có dân số đông nhất thế giới?",
    options: ["Ấn Độ", "Trung Quốc", "Mỹ", "Indonesia"],
    answer: "Trung Quốc",
  },
];

export default function QuizzApp() {
  // quản lý State
  const [optionSelected, setOptionSelected] = useState("");
  const [userAnswers, setUserAnswers] = useState(
    Array.from({ length: quizData.length })
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizzEnded, setIsQuizzEnded] = useState(false);
  const [score, setScore] = useState(0);

  // Quản lý hàm
  const resetQuizz = () => {
    setCurrentQuestion(0);
    setIsQuizzEnded(false);
    setScore(0);
    setOptionSelected("");
    setUserAnswers(Array.from({ length: quizData.length }));
  };

  const rewatchQuiz = () => {
    setCurrentQuestion(0);
    setIsQuizzEnded(false);
  };
  const handleSelectedOption = (option, index) => {
    setOptionSelected(option);

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = index;
    setUserAnswers(newUserAnswers);
  };
  const goNext = () => {
    // Nếu đang ở câu hỏi cuối cùng
    if (currentQuestion === quizData.length - 1) {
      setIsQuizzEnded(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };
  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };
  // Hàm theo dõi
  useEffect(() => {
    const answer = Number(userAnswers[currentQuestion]);
    const pastOptionSelected = quizData[currentQuestion].options[answer];

    if (answer !== undefined) {
      setOptionSelected(pastOptionSelected);
    } else {
      setOptionSelected("");
    }
  }, [currentQuestion, userAnswers]);

  useEffect(() => {
    if (optionSelected === quizData[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
  }, [optionSelected]);

  // Kết thúc bài tập
  if (isQuizzEnded) {
    return (
      <Results
        score={score}
        totalQuestion={quizData.length}
        resetQuizz={resetQuizz}
        rewatchQuiz={rewatchQuiz}
      />
    );
  }
  // render giao diện
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#153667] to-[#4e085f] p-3 md:p-6">
      <BackHome />
      <div className="mx-auto mt-16 w-full max-w-[540px] rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-3 font-bold italic text-center text-red-700 text-3xl uppercase">
          Ứng dụng Trắc Nghiệm
        </h2>
        <div>
          <h3 className="font-bold text-center text-xl mb-3">
            Câu {currentQuestion + 1}
          </h3>
          <p className="mb-3">{quizData[currentQuestion].question}</p>
          <div className="flex flex-col justify-start items-start gap-2 mb-5">
            {quizData[currentQuestion].options.map((option, index) => {
              return (
                <button
                  onClick={() => {
                    handleSelectedOption(option, index);
                  }}
                  key={option}
                  className={`${style.btnAnswers} ${
                    optionSelected === option
                      ? "border border-2 border-amber-500"
                      : ""
                  }`}
                  disabled={!!optionSelected && optionSelected !== option}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {optionSelected ? (
            optionSelected === quizData[currentQuestion].answer ? (
              <p className="mb-3 font-bold text-emerald-600">
                Câu trả lời của bạn chính xác
              </p>
            ) : (
              <p className="mb-3 font-bold text-red-500">
                Câu trả lời của bạn chưa đúng!
              </p>
            )
          ) : (
            ""
          )}
          <div className="flex justify-between">
            <button
              onClick={goBack}
              disabled={currentQuestion === 0}
              className={style.btnNextPrev}
            >
              Quay lại
            </button>
            <button
              onClick={goNext}
              disabled={!optionSelected}
              className={style.btnNextPrev}
            >
              {currentQuestion === quizData.length - 1
                ? "Hoàn thành Quizz"
                : "Tiếp theo"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
