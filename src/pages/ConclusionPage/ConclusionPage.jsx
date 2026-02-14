import hearts from '../../assets/hearts.mp4'

function ConclusionPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 min-h-screen h-full flex flex-col justify-center">
        <h1 className="text-5xl text-center mb-5">Финальная стадия: Признание</h1>

        <p className="text-3xl">
          К сожалению, это последняя страница сего действия, но далеко не последняя в той жизни, что мы делим вдвоём —
          именно вдвоём, ты и я!
        </p>
        <p className="text-3xl">
          Немного печально, что я на большее не смог: что-то подарить тебе, например, букет или звезду с неба.. или еще
          что-то, но.. что есть
        </p>
        <p className="text-3xl">
          Спасибо, что посмотрела все это до конца, и я очень надеюсь, что хоть на миг, но ты улыбнулась и у тебя
          поднялось настроение :))
        </p>
        <p className="text-3xl">Спасибо, что ты есть у меня </p>
        <p className="text-3xl">А если спросить у меня: будешь ли ТЫ моей валентинкой? то.. </p>
        <p className="text-3xl">
          конечно, ДА!! Я свой выбор сделал уже давно и ни капли не жалею, а наоборот только рад этому
        </p>
        <p className="text-6xl text-center mt-6">я тебя люблю!</p>
        <p className="text-6xl text-center mt-6">.</p>
        <p className="text-4xl text-center mt-10">Снизу сердечки для тебяяя &dArr;</p>
      </div>

      <div className="min-h-screen h-full flex justify-center items-center">
        <video src={hearts} autoPlay muted controls loop className="pointer-events-none max-w-100 self-center w-full" />
      </div>
    </div>
  )
}

export default ConclusionPage
