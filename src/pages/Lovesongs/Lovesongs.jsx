import { useContext } from 'react'
import { AudioPlayer } from 'react-audio-play'
import { Context } from '../../main'
import { Link } from 'react-router'

function Lovesongs() {
  const { store } = useContext(Context)

  return (
    <div>
      <h1 className="text-5xl text-center mb-5">
        А тут я собрал несколько песен, которые ассоциируются у меня с тобой
      </h1>
      <p className="text-3xl text-center">
        (Если будешь слушать и захочешь включить другой трек, !обязательно! останови старый: не успел сделать, чтобы на
        паузу предыдущий ставился( )
      </p>

      <div
        className="grid grid-cols-2 gap-12 items-center"
        style={{ fontFamily: '"Lucida Console", "Courier New", monospace' }}
      >
        {store.lovesongs.map(s => (
          <div key={Math.random()} className="w-full flex flex-col justify-center items-center gap-5">
            <p className="text-2xl">{s.title}</p>
            <div className="image-container max-w-91.5 w-full max-h-91.5 h-full">
              <img src={s.cover} alt="" className="w-full" />
            </div>
            <AudioPlayer
              src={s.path}
              color="#f7b5cd"
              sliderColor="#ff669d"
              style={{ background: '#000', borderRadius: '15px', padding: '30px' }}
              className="max-w-full w-full"
            />
          </div>
        ))}
      </div>
      <Link className="page-button text-2xl text-center block max-w-fit w-full m-auto mt-6" to={'/conclusion'}>
        Идем дальше!
      </Link>
    </div>
  )
}

export default Lovesongs
