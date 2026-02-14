import { useContext } from 'react'
import { Context } from '../../main'
import { Link, useNavigate } from 'react-router'

function RealValentineTestResults() {
  const { store } = useContext(Context)
  const navigate = useNavigate()

  const answers = store.valentineTestAnswers

  if (answers.length === 0) navigate('/')

  return (
    <div className="flex flex-col w-full gap-6">
      <h1 className="text-5xl text-center">Результаты теста</h1>

      <div className="flex flex-col gap-10">
        {answers.map(a => (
          <div key={Math.random()} className="border-2 rounded-2xl p-5">
            <h3 className="text-4xl">
              {' '}
              <span className="font-bold">Вопрос:</span> {a.question}
            </h3>
            <hr className="my-4 max-w-11/12 w-full m-auto" />
            <p className="text-3xl wrap-anywhere">
              <span className="font-bold">Ответ:</span> {a.answer}
            </p>
          </div>
        ))}
      </div>

      <Link className="page-button text-2xl text-center" to={'/reasons-to-love-you'}>
        Идем дальше!
      </Link>
    </div>
  )
}

export default RealValentineTestResults
