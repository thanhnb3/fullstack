export default function Results({
  score,
  totalQuestion,
  resetQuizz,
  rewatchQuiz,
}) {
  return (
    <div>
      <h2 className="font-bold text-center text-2xl mb-3">Kết quả</h2>
      <p className="text-center mb-3">
        Bạn trả lời đúng {score}/{totalQuestion} câu
      </p>
      <div className="flex justify-center gap-3">
        <button
          onClick={rewatchQuiz}
          className="cursor-pointer flex justify-center items-center px-5 py-3 bg-blue-400 text-white rounded-xl"
        >
          Xem lại
        </button>
        <button
          onClick={resetQuizz}
          className="cursor-pointer flex justify-center items-center not-only-of-type:px-5 py-3 bg-blue-400 text-white rounded-xl"
        >
          Làm lại
        </button>
      </div>
    </div>
  );
}
