import { Routes, Route } from 'react-router-dom'
import Layout from '../layout'
import History from '../pages/history'
import Home from '../pages/home'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
      </Route>
    </Routes>
  )
}
