import logo from './logo.svg'
import './App.css'

const { REACT_APP_LOGICAPP_URL } = process.env

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Hello wolrd
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <p>{REACT_APP_LOGICAPP_URL}</p>
      </header>
    </div>
  )
}

export default App
