import { Outlet, useLocation } from 'react-router'
import MainHeader from './MainHeader/MainHeader'
import { useContext, useEffect } from 'react'
import { Context } from '../main'
import MainLoader from './MainLoader/MainLoader'
import { observer } from 'mobx-react-lite'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './Loader/Loader'

const PageWrapper = observer(() => {
  const { store } = useContext(Context)
  const location = useLocation()

  store.hasAccessToValentineTest = false
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)

  // if (!store.isInitialized) {
  //   return <MainLoader />
  // }

  return (
    <div className="max-w-5xl w-full m-auto py-10 min-h-screen flex flex-col relative">
      <MainHeader />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname} // ключ меняется при смене роута
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="outlet mt-5 flex-1 flex justify-center items-center"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  )
})

export default PageWrapper
