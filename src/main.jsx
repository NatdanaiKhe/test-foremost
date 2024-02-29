import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Menu from './components/Menu'
import ProductDisplay from './components/ProductDisplay'
import ProductDetail1 from './components/ProductDetail1'
import BuyDetail from './components/BuyDetail'
import ProductDetail2 from './components/ProductDetail2'
import ProductDetail3 from './components/ProductDetail3'

const App = () => {
  return (
    <div>
      <Menu />
      <ProductDisplay />
      <ProductDetail1 />
      <ProductDetail2 />
      <ProductDetail3 />
      <BuyDetail /> 
    </div>
  )

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
