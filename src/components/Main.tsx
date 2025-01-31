import { Route, Routes } from 'react-router-dom'
import { navItems } from '../utils/constants'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Home from './Home'
import StarWars from './StarWars'
import ErrorPage from './ErrorPage'


const Main = () => {

  return (
    <Routes>
      {['/', navItems[0].path, `${navItems[0].path}/:heroId`].map(path => <Route key={path} path={path} element={<Home />} />)}
      {[navItems[1].path, `${navItems[1].path}/:heroId`].map(path => <Route key={path} path={path} element={<AboutMe />} />)}
      {[navItems[2].path, `${navItems[2].path}/:heroId`].map(path => <Route key={path} path={path} element={<StarWars />} />)}
      {[navItems[3].path, `${navItems[3].path}/:heroId`].map(path => <Route key={path} path={path} element={<Contact />} />)}
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default Main