import { makeAutoObservable } from 'mobx'
import KSB_oslepitelna from '../assets/songs/KSB_Muzic_Oslepitelna.mp3'
import KSB_cover from '../assets/songs_covers/KSB.jpg'
import Joji_Past_Wont_Leave_My_Bed from "../assets/songs/Joji - Past Won't Leave My Bed.mp3"
import Joji_cover from '../assets/songs_covers/joji.webp'
import garcon_maigre from '../assets/songs/Free Candies.mp3'
import garcon_maigre_cover from '../assets/songs_covers/garcon_maigre.png'
import rue from '../assets/songs/rue.mp3'
import rue_cover from '../assets/songs_covers/rue.jpg'
import shit_1 from '../assets/songs/shit_1.mp3'
import shit_1_cover from '../assets/songs_covers/shit_1.jpg'
import shit_2 from '../assets/songs/shit_2.mp3'
import shit_2_cover from '../assets/songs_covers/shit_2.jpg'
import chtofkalo_1 from '../assets/songs/chtofkalo_1.mp3'
import chtofkalo_2 from '../assets/songs/chtofkalo_2.mp3'
import chtofkalo_1_2_cover from '../assets/songs_covers/chtofkalo_1.png'
import chtofkalo_3 from '../assets/songs/chtofkalo_3.mp3'
import chtofkalo_3_cover from '../assets/songs_covers/chtofkalo_3.png'
import uvula_1 from '../assets/songs/uvula_1.mp3'
import uvula_1_cover from '../assets/songs_covers/uvula_1.jpeg'
import peep_1 from '../assets/songs/peep_1.mp3'
import peep_1_cover from '../assets/songs_covers/peep_1.jpg'
import peep_2 from '../assets/songs/peep_2.mp3'
import peep_2_cover from '../assets/songs_covers/peep_2.jpg'

export default class Store {
  isLoading = true
  isInitialized = false
  loadingWords = [
    'Вычисляется идеальное объятие..',
    'Подбирается идеальная мелодия любви..',
    'Ищутся любимые глазки среди толпы..',
    'Сближение сердец в процессе..',
  ]
  hasAccessToValentineTest = false

  valentineTestQuestions = [
    {
      question: 'Моя самая любимая сладость - это ...',
      type: 'select',
      answers: [
        { text: 'Отломишка', isCorrect: false },
        { text: 'Ты', isCorrect: true },
        { text: 'Голландские фафли', isCorrect: false },
        { text: 'Пирожное картоша', isCorrect: false },
      ],
    },
    {
      question: 'Какая твоя часть тела мне нравится больше всего?',
      type: 'select',
      answers: [
        { text: 'Глазки', isCorrect: false },
        { text: 'Волосы', isCorrect: true },
        { text: 'Попк', isCorrect: false },
        { text: 'Ручки', isCorrect: false },
      ],
    },
    {
      question: 'Чем по твоему мнению ты меня привлекаешь сильнее всего?',
      type: 'text',
    },
    {
      question: 'По твоему мнению я достоин тебя рядом и в общем. И почему?',
      type: 'text',
    },
    {
      question: 'Какие отрицательные качества/черты ты бы хотела убрать во мне?',
      type: 'text',
    },
  ]
  valentineTestAnswers = []
  reasonsToLove = [
    'За твои откровения',
    'За твои мысли',
    'За твою искренность',
    'За твои старания',
    'За твою внешнюю красоту',
    'За твою внутреннюю красоту',
    'За твои глаза',
    'За твою улыбку',
    'За твое милое личико',
    'За твои прекрасные волосы',
    'За твой милый носик',
    'За твои щечки',
    'За твои ушки',
    'За твои ручки',
    'За твои ножки',
    'За твою заботу',
    'За твою теплоту',
    'За твою нежность',
    'За твою страсть',
    'За твое красивое и редкое имя',
    'За твои эмоции',
    'За твою открытость',
    'За твою ранимость',
    'За твою хрупкость',
    'За твое отношение ко мне',
    'За твое отношение к миру',
    'За твой свет',
    'За твой ум',
    'За твой разум',
    'За твою зрелость',
    'За твои желания',
    'За твои стремления',
    'За твою любовь к музыке',
    'За твою женственность',
    'За твою харизму',
    'За твою легкость',
    'За твою милоту',
    'За твою помощь',
    'За твою самую вкусную еду',
    'За твой запах',
    'За твои объятия',
    'За твои поцелуи',
    'За твои прикосновения',
    'За твой интерес',
    'За твои интересы',
    'За твой характер',
    'За твои разговоры',
    'За твое сердце',
    'За твои воспоминания',
    'За твой уют',
    'За твою безопасность',
    'За твой смех',
    'За твой юмор',
    'За твои поддержку',
    'За твою неряшливость',
    'За твою решительность',
    'За твой взгяд',
    'За твои укусы',
    'За твои подарки',
    'За твои слезки',
    'За твои страхи',
    'За твои умения',
    'За твое дружелюбие',
    'За твою стойкость',
    'За твое гостеприимство',
    'За твои детали',
    'За твой стиль',
    'За твое обаяние',
    'За твои эмпатию',
    'За твои переживания',
    'За твои азарт',
    'За твою индивидуальность',
    'За твою инициативность',
    'За твои творения',
    'За твою непринужденность',
    'За твою философию жизни',
    'За твое баловство',
    'За твою щедрость',
    'За твой энтузиазм',
    'За твои сюрпризы',
    'За твою находчивость',
    'За твою необыкновенность',
    'За твою хитрость',
    'За твою доброту',
    'За твою чувственность',
    'За твою чувствительность',
    'За твою любовь',
    'За твои признания',
    'За твои слова',
    'За твое кокетничество (со мной!!)',
    'За твою натуру',
    'За твои манеры',
    'За твои фанфики',
    'За твое принятие',
    'За твое голос',
    'За твое ласку',
    'За твое доверие',
    'За твою гордость',
    'За твою сексуальность',
    'За твой взгляд',
  ]

  lovesongs = [
    {
      author: 'KSB muzic',
      name: 'Ослепительна',
      cover: KSB_cover,
      path: KSB_oslepitelna,
    },
    {
      author: 'Joji',
      name: "Past Won' Leave My Bed",
      cover: Joji_cover,
      path: Joji_Past_Wont_Leave_My_Bed,
    },
    {
      author: 'Валентин Стрыкало',
      name: 'Бесполезно',
      cover: chtofkalo_1_2_cover,
      path: chtofkalo_1,
    },
    {
      author: 'Валентин Стрыкало',
      name: '92',
      cover: chtofkalo_1_2_cover,
      path: chtofkalo_2,
    },
    {
      author: 'Валентин Стрыкало',
      name: 'Ты не такая',
      cover: chtofkalo_3_cover,
      path: chtofkalo_3,
    },
    {
      author: 'Garcon Maigre',
      name: 'Free Candies',
      cover: garcon_maigre_cover,
      path: garcon_maigre,
    },
    {
      author: '125 Rue Montmartre',
      name: 'Hit #2',
      cover: rue_cover,
      path: rue,
    },
    {
      author: 'Увула',
      name: 'Дранк',
      cover: uvula_1_cover,
      path: uvula_1,
    },
    {
      author: 'ssshhhiiittt!',
      name: 'Любовь',
      cover: shit_1_cover,
      path: shit_1,
    },
    {
      author: 'ssshhhiiittt!',
      name: 'но ты',
      cover: shit_2_cover,
      path: shit_2,
    },
    {
      author: 'Lil Peep',
      name: 'right here',
      cover: peep_1_cover,
      path: peep_1,
    },
    {
      author: 'Lil Peep',
      name: 'we think too much',
      cover: peep_2_cover,
      path: peep_2,
    },
  ]

  constructor() {
    makeAutoObservable(this)
  }
}
