import loaderPng from '../../assets/loading-wheel.png'

function Loader() {
  return (
    <div>
      <img src={loaderPng} className="animate-spin" alt="" />
    </div>
  )
}

export default Loader
