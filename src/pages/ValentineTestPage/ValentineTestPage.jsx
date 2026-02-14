import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import repairTools from '../../assets/repair-tools.svg'
import { useNavigate } from 'react-router'

function ValentineTestPage() {
  const btnRef = useRef(null)
  const yesBtnRef = useRef(null)
  const [yesBtnSize, setYesBtnSize] = useState(1)
  const [tab, setTab] = useState('a')
  const [timer, setTimer] = useState(null)
  const [oopsTimer, setOopsTimer] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (tab !== 'b') return
    if (timer === null) return

    if (timer > -10) {
      const timerUntilTestBegins = setTimeout(() => {
        setTimer(prev => prev - 1)
      }, 1000)

      if (timer === -3) setOopsTimer(true)

      return () => clearTimeout(timerUntilTestBegins)
    } else {
      navigate('/real-valentine-test')
    }
  }, [tab, timer])

  const handleMouseMove = e => {
    const button = btnRef.current
    const rect = button.getBoundingClientRect()

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const dx = e.clientX - centerX
    const dy = e.clientY - centerY

    const distance = Math.sqrt(dx * dx + dy * dy)

    const triggerDistance = 120
    const maxMove = 80

    if (distance < triggerDistance) {
      // нормализуем направление
      const angle = Math.atan2(dy, dx)

      const moveX = -Math.cos(angle) * maxMove
      const moveY = -Math.sin(angle) * maxMove

      button.style.transform = `translate(${moveX}px, ${moveY}px)`
    } else {
      button.style.transform = `translate(0px, 0px)`
    }
  }

  function handleIncorrectAnswer() {
    if (confirm('Неправильный ответ!.. Хочешь попробовать еще раз..?')) {
      setYesBtnSize(prev => prev ** prev * 2)
      console.log(yesBtnSize)
      yesBtnRef.current.style.transform = `scale(${yesBtnSize})`
      yesBtnRef.current.style.backgroundColor = 'rgb(201, 132, 144)'
    }
  }

  function handleCorrectAnswer() {
    setTab('b')
    setTimer(15)
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {tab === 'a' && (
        <motion.div
          key="a"
          className="min-h-125 flex flex-col justify-center items-center"
          onMouseMoveCapture={handleMouseMove}
        >
          <h1 className="text-6xl">Будешь ли ты моей валентинкой?</h1>

          <div className="flex justify-center items-center mt-5 gap-5">
            <button className="page-button text-3xl z-10" ref={yesBtnRef} onClick={handleCorrectAnswer}>
              ДА!
            </button>
            <button className="page-button text-3xl" ref={btnRef} onClick={handleIncorrectAnswer}>
              нет :((
            </button>
          </div>
        </motion.div>
      )}

      {tab === 'b' && (
        <motion.div
          key="b"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col justify-center items-center gap-5"
        >
          <p className="text-4xl text-center">Поздравляю! Ты успешно справилась с этим тестом! </p>
          <span className="text-2xl">
            (если ты нажимала на "нет", то я расплачусь :( но лаааааадно, фичу я для кого старался делал прально?)) )
          </span>
          <p className="text-4xl text-center">А теперь перейдем к настоящему тесту.. который начнется через:</p>

          <p className="text-5xl text-center" style={{ transform: `scale(${1 + timer / 10})` }}>
            {timer}
          </p>

          <div className={`oops-timer ${oopsTimer && 'shown'}`}>
            <p
              className={`text-4xl mb-7 oops-timer__main opacity-0 duration-500 transition-opacity ${oopsTimer && 'opacity-100'}`}
            >
              Ой.... чета не работает
            </p>
            <div
              className={`oops-timer__secondary flex flex-col gap-3 opacity-0 duration-300 transition-opacity delay-1500 ${oopsTimer && 'opacity-100'}`}
            >
              <p className="text-4xl">Чиню..</p>
              <img src={repairTools} className="w-5 h-5 animate-spin self-center oops-timer__repair-tool" alt="" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ValentineTestPage
