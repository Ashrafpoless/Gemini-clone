import { createRoot } from 'react-dom/client'
import ContextProvider from './context/Context.jsx'
import App from './App.jsx'

import './main.css'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
