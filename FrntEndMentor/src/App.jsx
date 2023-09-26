import './App.css'
import png from './assets/image-qr-code.png'

function App() {

  return (
    <div className='card'>
      <img src={png} alt="improve your frontend skill by builing projects" />
      <div>
        <h4>Improve your front-end skills by building projects</h4>
        <p>Scan the Git code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default App
