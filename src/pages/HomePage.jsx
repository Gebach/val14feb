import { Link } from 'react-router'
import iLoveYouGif from '../assets/i_love_you.gif'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function HomePage() {
  const [tab, setTab] = useState('a')

  return (
    <div className="home-page flex-1 h-full flex flex-col justify-center items-center">
      <AnimatePresence mode="wait" initial={false}>
        {tab === 'a' && (
          <motion.div
            key="a"
            className={`home-page-hero flex flex-col justify-center items-center transition-transform `}
          >
            <h1 className="text-4xl text-center">
              Сайт, созданный специально для самой любимой и прекрасной женщины!!
            </h1>
            <p className="text-2xl text-right">(делал все быстренько, чтобы успеть, но надеюсь тебе понравиться..)</p>
            <h2 className="text-5xl text-center mt-5">я люблю тебя!!!!</h2>
            <img src={iLoveYouGif} alt="" />

            <button className="page-button cursor-pointer text-2xl" onClick={() => setTab(tab === 'a' ? 'b' : 'a')}>
              Далее
            </button>
          </motion.div>
        )}

        {tab === 'b' && (
          <motion.div
            key="b"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className={`home-page-secondary flex flex-col justify-center items-center gap-5`}
          >
            <p className="text-3xl">А теперь давай перейдем к тесту</p>
            <Link to={'/valentine-test'} className="text-center text-3xl w-full block page-button">
              Будешь ли ты моей валентинкой?
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HomePage
