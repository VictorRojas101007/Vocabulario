import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Spanish from "../components/Spanish";
import Russian from '../components/Russian';

const Vocabulary = () => {
  const vocabularyData = useLoaderData(); // Datos del loader
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [language, setLanguage] = useState(true);

  const handleClick = (isSpanish) => {
    if (language !== isSpanish) {
      setLanguage(isSpanish);
      setSearchTerm(searchResult.charAt(0).toUpperCase() + searchResult.slice(1).toLowerCase());
      setSearchResult(searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1).toLowerCase());
    }
  }

  return (
    <>
      <header className='headerContainer'>
        <h1 className='header__h1'>Traduce tus palabras</h1>
        <div className="buttonContainer">
          <button onClick={() => handleClick(true)}> Español </button>
          <button onClick={() => handleClick(false)}> Русский </button>
        </div>
      </header>
      <div className="vocabularioContainer">
        {language ? (
          <Spanish 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            vocabularyData={vocabularyData}
          />
        ) : (
          <Russian 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            vocabularyData={vocabularyData}
          />
        )}
      </div>
    </>
  );
};

export default Vocabulary;