import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './contexts/auth/AuthContextProvider';
import ServiceContextProvider from './contexts/service/ServiceContextProvider';
import ApplicationContextProvider from './contexts/application/ApplicationContextProvider';
import ApplicationFormContextProvider from './contexts/applicationForm/ApplicationFormContextProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ServiceContextProvider>
          <ApplicationContextProvider>
            <ApplicationFormContextProvider>
              <App />
            </ApplicationFormContextProvider>
          </ApplicationContextProvider>
        </ServiceContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)