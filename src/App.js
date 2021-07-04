import React, { useState } from 'react';
import Header from './components/Header';
import { localeString } from './config/localisation'

const App = () => {
  //decalring language state variable
  const [language, setLanguage] = useState('en')
  localeString.setLanguage(language);
  return (
    <div className="container App">
      <Header setLanguage={setLanguage} />
    </div>
  )
};

export default App;
