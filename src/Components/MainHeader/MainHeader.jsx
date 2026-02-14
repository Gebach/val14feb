import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router'
import { Context } from '../../main'
import { observer } from 'mobx-react-lite'

const navLinkStyles = ({ isActive }) => `text-shadow-2xs navLink ${isActive ? 'active' : ''}`

const MainHeader = observer(() => {
  const { store } = useContext(Context)

  const hasAccessToValentineTest = localStorage.getItem('accessToRealValentineTest')
  console.log(hasAccessToValentineTest)

  useEffect(() => {
    console.log('rere')
  })

  return (
    <div className="flex justify-center items-center gap-5 border-b-2 border-black pb-4">
      <div className={`mainHeaderButton relative bg-pink-500 px-2.5 py-0.5 rounded-4xl text-white`}>
        <NavLink className={navLinkStyles} to={'/'}>
          Домой
        </NavLink>
      </div>
      <div
        className={`mainHeaderButton relative bg-pink-500 px-2.5 py-0.5 rounded-4xl text-white ${hasAccessToValentineTest ? 'has-access' : 'no-access before:transition-opacity before:opacity-0 before:translate-y-2 before:absolute before:content-["Сначала_ответь_на_вопрос_из_первого_теста!"] before:w-fit before:h-fit before:whitespace-nowrap before:font-bold before:text-red-600 before:-top-8 before:left-0  hover:before:opacity-100'} ${store.hasAccessToValentineTest && 'animate-bounce'}`}
      >
        <div className={`${hasAccessToValentineTest ? '' : 'pointer-events-none'}`}>
          <NavLink className={`${hasAccessToValentineTest && navLinkStyles}`} to={'/real-valentine-test'}>
            Тест на валентинку
          </NavLink>
        </div>
      </div>

      <div className={`mainHeaderButton relative bg-pink-500 px-2.5 py-0.5 rounded-4xl text-white`}>
        <NavLink className={navLinkStyles} to={'/reasons-to-love-you'}>
          Причины любить
        </NavLink>
      </div>
      <div className={`mainHeaderButton relative bg-pink-500 px-2.5 py-0.5 rounded-4xl text-white`}>
        <NavLink className={navLinkStyles} to={'/lovesongs'}>
          Лавсонги
        </NavLink>
      </div>
    </div>
  )
})

export default MainHeader
