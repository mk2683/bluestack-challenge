import React, { useState } from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import { localeString } from '../config/localisation'

const App = () => {
  //declaring language state variable
  const [language, setLanguage] = useState('en');
  localeString.setLanguage(language);
  return (
    <div className="container">
      <Header setLanguage={setLanguage} />
      <Dashboard localeString={localeString}/>
    </div>
  )
};

export default App;
