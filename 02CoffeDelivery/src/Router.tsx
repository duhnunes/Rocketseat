import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Cart'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { SuccessCheckout } from './pages/Success'

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<SuccessCheckout />} />
      </Route>
    </Routes>
  )
}