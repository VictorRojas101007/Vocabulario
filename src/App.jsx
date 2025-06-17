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

  return (
    <>
    <header className='headerContainer'>
    <h1>Vocabulario</h1>
    <div className="buttonContainer">
    <button onClick={()=>{setLanguage(true);
      setSearchTerm(searchResult);
      setSearchResult(searchTerm);
    }}> Español </button>
    <button onClick={()=>{setLanguage(false);
      setSearchTerm(searchResult);
      setSearchResult(searchTerm);
    }}>  Русский </button>
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
