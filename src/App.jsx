import { useCallback, useMemo, useState } from 'react'
import StartScreen from './components/StartScreen'
import QuizCard from './components/QuizCard'
import ResultScreen from './components/ResultScreen'
import { questions } from './data/questions'

function App() {
  const [screen, setScreen] = useState('start')
  const [gameQuestions, setGameQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [score, setScore] = useState(0)
  const [isAnswered, setIsAnswered] = useState(false)

  const currentQuestion = gameQuestions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === gameQuestions.length - 1
  const percentage = useMemo(
    () => (gameQuestions.length ? Math.round((score / gameQuestions.length) * 100) : 0),
    [gameQuestions.length, score],
  )

  const handleStart = () => {
    const shuffledQuestions = [...questions]
    for (let index = shuffledQuestions.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1))
      const question = shuffledQuestions[index]
      shuffledQuestions[index] = shuffledQuestions[randomIndex]
      shuffledQuestions[randomIndex] = question
    }

    setGameQuestions(shuffledQuestions.slice(0, 3))
    setCurrentQuestionIndex(0)
    setSelectedAnswerIndex(null)
    setScore(0)
    setIsAnswered(false)
    setScreen('quiz')
  }

  const handleAnswerSelect = (index) => {
    if (isAnswered) {
      return
    }

    setSelectedAnswerIndex(index)
    setIsAnswered(true)

    if (index === currentQuestion.correctAnswerIndex) {
      setScore((prevScore) => prevScore + 1)
    }
  }

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      setSelectedAnswerIndex(null)
      setIsAnswered(false)
      return
    }

    setScreen('result')
  }

  const handleReturnToMenu = useCallback(() => {
    setScreen('start')
    setGameQuestions([])
    setCurrentQuestionIndex(0)
    setSelectedAnswerIndex(null)
    setScore(0)
    setIsAnswered(false)
  }, [])

  return (
    <div className="min-h-screen bg-slate-100">
      {screen === 'start' ? (
        <StartScreen onStart={handleStart} />
      ) : null}

      {screen === 'quiz' && currentQuestion ? (
        <QuizCard
          question={currentQuestion}
          questionIndex={currentQuestionIndex}
          totalQuestions={gameQuestions.length}
          selectedAnswerIndex={selectedAnswerIndex}
          onSelectAnswer={handleAnswerSelect}
          isAnswered={isAnswered}
          onNext={handleNext}
          isLastQuestion={isLastQuestion}
        />
      ) : null}

      {screen === 'result' ? (
        <ResultScreen
          score={score}
          total={gameQuestions.length}
          percentage={percentage}
          onReturnToMenu={handleReturnToMenu}
        />
      ) : null}
    </div>
  )
}

export default App
