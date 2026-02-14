import { useContext, useEffect } from 'react'
import { Context } from '../../main'
import { shuffleArray } from '../../utilities'
import { observer } from 'mobx-react-lite'

const MainLoader = observer(() => {
  const { store } = useContext(Context)

  useEffect(() => {
    const timeout = setTimeout(() => {
      store.isInitialized = true
      store.isLoading = false
    }, 12000)

    return () => clearTimeout(timeout)
  }, [])

  const words = shuffleArray(store.loadingWords)
  console.log(store.loadingWords)

  return (
    <div className="min-h-screen h-full flex flex-col justify-center">
      <div className="w-full my-auto">
        <div className="loading-words w-svw relative flex mb-5">
          {words.map((w, i) => (
            <p
              key={Math.random()}
              className={`text-2xl absolute text-center loading-word -top-8 opacity-0`}
              style={{ animationDelay: `${i * 3}s` }}
            >
              {w}
            </p>
          ))}
        </div>
        <div className="loading-bar relative max-w-10/12 w-full m-auto min-h-3 h-full border border-black rounded-2xl overflow-hidden"></div>
      </div>
    </div>
  )
})

export default MainLoader
