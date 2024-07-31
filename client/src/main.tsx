import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './contexts/auth/AuthContextProvider';
import ServiceContextProvider from './contexts/service/ServiceContextProvider';
import ApplicationContextProvider from './contexts/application/ApplicationContextProvider';
import StartFromTop from './components/startFromTop/StartFromTop';
import TitleUpdater from './components/titleUpdater/TitleUpdater';
import Disclaimer from './components/disclaimer/Disclaimer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TitleUpdater />
      <Disclaimer />
      <AuthContextProvider>
        <ServiceContextProvider>
          <ApplicationContextProvider>
            <StartFromTop />
            <App />
          </ApplicationContextProvider>
        </ServiceContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)