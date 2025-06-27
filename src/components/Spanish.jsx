const Spanish = ({
    searchTerm, 
    setSearchTerm, 
    searchResult,
    setSearchResult, 
    vocabularyData, 
}) => {


  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if(term.trim() === ''){
        setSearchResult('');
        return;
    }
    
    const foundWord = vocabularyData.find((item) =>
      item.spanish.toLowerCase() === term
    );
    if (foundWord) {
        setSearchResult(foundWord.russian);
    } else{
        setSearchResult('Palabra no encontrada');
    }
  };

  return (
    <div className="wordContainer">  
      <h1>Español</h1>
      <input 
        type="text" 
        placeholder="Busca la palabra en español" 
        value={searchTerm}
        onChange={handleSearch}
      />
      
      {searchResult && (
        <div style={{ marginTop: '20px', fontSize: '24px' }}>
          <strong>Traducción: {searchResult}</strong>
        </div>
      )}
    </div>
  );
};

export default Spanish;