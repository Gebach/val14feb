import { useContext } from 'react'
import { Context } from '../../main'
import { shuffleArray } from '../../utilities'
import { Link } from 'react-router'

function ReasonsToLove() {
  const { store } = useContext(Context)

  const reasons = shuffleArray(store.reasonsToLove)

  return (
    <div>
      <h1 className="text-5xl text-center mb-5">
        Здесь я собрал 101 причину любить именно <span className="underline">ТЕБЯ</span>
      </h1>

      <ol className="list-decimal flex justify-center items-center flex-wrap gap-3">
        {reasons.map((r, i) => (
          <li className="text-3xl max-w-5/12 w-full">{r}</li>
        ))}
      </ol>

      <p className="text-3xl text-center my-5">101. За то, что ты есть!! За всю тебя, какая ты есть!!</p>

      <Link className="page-button text-2xl text-center block max-w-fit w-full m-auto" to={'/lovesongs'}>
        Идем дальше!
      </Link>
    </div>
  )
}

export default ReasonsToLove
