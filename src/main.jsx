import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'; 
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="541672333778-kmbvu1qdbpvf10n9ep7rnl6nscic8a1t.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>;
  </BrowserRouter>,
)
