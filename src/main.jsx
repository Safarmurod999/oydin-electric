import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import CatalogProvider from './context/catalogContext.jsx'
import { store } from "./store/cartStore.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CatalogProvider>
        <App />
      </CatalogProvider>
    </Provider>
  </React.StrictMode>,
)
