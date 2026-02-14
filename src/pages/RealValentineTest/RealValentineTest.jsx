import { useContext, useEffect, useState } from 'react'
import { Context } from '../../main'
import { observer } from 'mobx-react-lite'
import { motion } from 'framer-motion'
import { Link } from 'react-router'

const RealValentineTest = observer(() => {
  const { store } = useContext(Context)

  const [answered, setAnswered] = useState(false)
  const [answeredValue, setAnsweredValue] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const question = store.valentineTestQuestions[activeIndex]

  if (activeIndex === store.valentineTestQuestions.length) {
    console.log(123)
    if (!localStorage.getItem('accessToRealValentineTest')) {
      store.hasAccessToValentineTest = true
      localStorage.setItem('accessToRealValentineTest', true)
    }
  }

  const next = () => {
    if (activeIndex < store.valentineTestQuestions.length && answeredValue !== '') {
      setActiveIndex(prev => prev + 1)
      setAnswered(false)
      if (answeredValue !== '') {
        store.valentineTestAnswers[activeIndex] = { question: question.question, answer: answeredValue }
      }
      setAnsweredValue('')
    }
  }

  function handleAnswer(e) {
    setAnswered(true)
    setAnsweredValue(e.target.innerText)
    store.valentineTestAnswers[activeIndex] = { question: question.question, answer: e.target.innerText }
    setTimeout(() => {
      setAnswered(false)
      setAnsweredValue('')
      setActiveIndex(prev => prev + 1)
    }, 1300)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {activeIndex < store.valentineTestQuestions.length && (
        <div className="valentine-test">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-4xl text-center">{question.question}</h3>
            <hr className="my-4" />
            {question.type === 'select' ? (
              <>
                <div
                  className={`grid grid-cols-2 grid-rows-2 grid-select gap-3 ${answered && 'not-[.answered]:opacity-60 pointer-events-none'}`}
                >
                  {question.answers.map(a => (
                    <button key={Math.random()} className={`page-button text-3xl`} onClick={e => handleAnswer(e)}>
                      {a.text}
                    </button>
                  ))}
                </div>

                <div className="answered-text mt-5">
                  <p
                    className={`text-2xl text-center relative transition-all ${!answered ? 'opacity-0' : 'animate-wiggle'}`}
                  >
                    {answeredValue || 'пусто'}
                  </p>
                </div>
              </>
            ) : (
              <div className="textarea">
                <textarea
                  value={answeredValue}
                  onChange={e => setAnsweredValue(e.target.value)}
                  className="text-2xl p-3 outline-0 border-2 border-black rounded-3xl w-full max-h-48"
                />
              </div>
            )}
          </motion.div>

          <hr className="my-4 mb-6 w-full" />

          {question.type === 'text' && answeredValue !== '' && (
            <div className="flex justify-center items-center gap-6">
              <button onClick={next} className="next-btn">
                {activeIndex === store.valentineTestQuestions.length - 1 ? 'Завершить' : 'Далее'}
              </button>
            </div>
          )}
        </div>
      )}

      {activeIndex === store.valentineTestQuestions.length && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-5"
        >
          <h2 className="text-5xl text-center">Поздравляю, ты успешно завершила этот крайне занимательный тест!..</h2>
          <p className="text-3xl">
            На самом деле эти ответы были больше для тебя, нежели для меня. Просто чтобы ты покумекала :))
          </p>
          <p className="text-3xl">
            Ответов я не узнаю, поэтому советую пройти тест еще раз и быть искренней с самой собой до конца!!
          </p>
          {!localStorage.getItem('accessToRealValentineTest') && (
            <p className="text-3xl">P.S. Посмотри на меню сверху. Теперь у тебя есть доступ!!</p>
          )}
          <p className="text-3xl">Нооооо, мне все равно интересно как ты ответила на вопросы, поэтому вот твои</p>
          <Link className="page-button text-3xl self-center" to={'results'}>
            результаты
          </Link>
          <p className="text-3xl self-center">либо</p>
          <Link className="page-button text-2xl self-center" to={'/reasons-to-love-you'}>
            Идем дальше!
          </Link>
        </motion.div>
      )}
    </div>
  )
})

export default RealValentineTest
