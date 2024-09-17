import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { defaultHero } from './utils/constants'
import { SWContext } from './utils/context'


function App() {
  const [hero, setHero] = useState(defaultHero);
  const [isError, setIsError] = useState(false);

  return (
    <div>
      <SWContext.Provider value={{ hero, changeHero: setHero, isError, setError: setIsError}}>
        <Header />
        <Main />
        <Footer />
      </SWContext.Provider>
    </div>

  )
}

export default App