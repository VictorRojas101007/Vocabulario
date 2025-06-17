import { useEffect } from "react";

const Spanish =({searchTerm, setSearchTerm, searchResult, setSearchResult, vocabularyData, setVocabularyData, setLoading, loading, error, setError})=>{
  useEffect(() => {
    const loadVocabulary = async ()=>{
        try{
            setLoading(true);
            const response= await fetch('/src/vocabulary.json');
            if (!response.ok) {
                throw new Error('Error al cargar el vocabulario');
            }
            const data = await response.json();
            setVocabularyData(data);
        } catch (err){
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    loadVocabulary();
  }, []);


  const handleSearch = (e)=>{
    const term=e.target.value.toLowerCase();
    setSearchTerm(term);

    if(term.trim() === ''){
        setSearchResult('');
        return;
    }
    // Cambiar la búsqueda: buscar palabras españolas para obtener traducción al ruso
    const foundWord =vocabularyData.find((item)=>
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
    <h1>Spanish</h1>
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