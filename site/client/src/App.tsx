import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">{t('main.works')}</h1>
        <p>{t('main.coming_soon')}</p>
        <ul>
          <li>{t('main.coming.pizza')}</li>
          <li>{t('main.coming.hamburger')}</li>
          <li>{t('main.coming.smoking')}</li>
          <li>{t('main.coming.software_development')}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
