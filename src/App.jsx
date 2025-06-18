import { useState } from 'react'
import './App.css'
import Spanish from './components/Spanish'
import Russian from './components/Russian'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [vocabularyData, setVocabularyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState(true)

  const handleClick=(isSpanish)=>{
    // Solo cambiar si el idioma es diferente al actual
    if (language !== isSpanish) {
      setLanguage(isSpanish);
      setSearchTerm(searchResult.charAt(0).toUpperCase() + searchResult.slice(1).toLowerCase());
      setSearchResult(searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1).toLowerCase());
    }
  }
  return (
    <>
    <header className='headerContainer'>
    <h1 className='header__h1'>Vocabulario</h1>
    <div className="buttonContainer">
    <a onClick={() => handleClick(true)}> Español </a>
    <a onClick={() => handleClick(false)}> Русский </a>
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
          setVocabularyData={setVocabularyData}
          setLoading={setLoading}
          loading={loading}
          error={error}
          setError={setError}
        />
      ) : (
        <Russian 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          vocabularyData={vocabularyData}
          setVocabularyData={setVocabularyData}
          setLoading={setLoading}
          loading={loading}
          error={error}
          setError={setError}
        />
      )}
      </div>
    </>
  )
}

export default App
