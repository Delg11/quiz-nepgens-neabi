function QuizCard({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswerIndex,
  onSelectAnswer,
  isAnswered,
  onNext,
  isLastQuestion,
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_25px_80px_rgba(15,23,42,0.08)] md:p-8">
        <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
            Pergunta {questionIndex + 1} de {totalQuestions}
          </span>
          <span className="text-sm font-medium text-slate-500">NEPGENS • NEABI</span>
        </div>

        <h2 className="mb-6 text-2xl font-bold leading-relaxed text-slate-800 md:text-3xl">
          {question.question}
        </h2>

        <div className="space-y-4">
          {question.options.map((option, index) => {
            const isCorrectOption = index === question.correctAnswerIndex
            const isSelected = index === selectedAnswerIndex

            let classes =
              'flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left text-base font-medium transition duration-200 md:text-lg '

            if (!isAnswered) {
              classes +=
                'border-slate-200 bg-slate-50 text-slate-700 hover:border-green-300 hover:bg-green-50 hover:text-green-700'
            } else if (isCorrectOption) {
              classes += 'border-green-600 bg-green-100 text-green-900 shadow-sm'
            } else if (isSelected && !isCorrectOption) {
              classes += 'border-red-600 bg-red-100 text-red-900 shadow-sm'
            } else {
              classes += 'border-slate-200 bg-slate-50 text-slate-600'
            }

            return (
              <button
                key={option}
                type="button"
                onClick={() => onSelectAnswer(index)}
                disabled={isAnswered}
                className={classes}
              >
                <span className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current bg-white/70 font-black">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
                {isAnswered && isCorrectOption ? (
                  <span className="ml-3 text-xl" aria-label="Resposta correta">✓</span>
                ) : null}
                {isAnswered && isSelected && !isCorrectOption ? (
                  <span className="ml-3 text-xl" aria-label="Resposta incorreta">✕</span>
                ) : null}
              </button>
            )
          })}
        </div>

        {isAnswered ? (
          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-left">
            <p className="mb-1 text-sm font-bold uppercase tracking-wide text-blue-700">Feedback</p>
            <p className="text-base text-slate-700">{question.explanation}</p>
          </div>
        ) : null}

        {isAnswered ? (
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
            >
              {isLastQuestion ? 'Ver Resultado' : 'Próxima Pergunta'}
            </button>
          </div>
        ) : null}
      </div>
    </main>
  )
}

export default QuizCard
