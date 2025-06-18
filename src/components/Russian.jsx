import { useState, useEffect } from 'react';

const Russian = ({
    searchTerm, 
  setSearchTerm, 
  searchResult, 
  setSearchResult, 
  vocabularyData, 
  setVocabularyData,
  setLoading, 
  loading,
  error,
  setError
}) => {
    // Cargar datos del vocabulario con fetch
    useEffect(() => {
        const loadVocabulary = async () => {
            try {
                setLoading(true);
                const response = await fetch('/vocabulary.json'); 
                if (!response.ok) {
                    throw new Error('Error al cargar el vocabulario');
                }
                const data = await response.json();
                setVocabularyData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadVocabulary();
    }, []);

    // Función para buscar la palabra
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        
        if (term.trim() === '') {
            setSearchResult('');
            return;
        }
        
        
        const foundWord = vocabularyData.find(item => 
            item.russian.toLowerCase() === term
        );
        
        if (foundWord) {
            setSearchResult(foundWord.spanish);
        } else {
            setSearchResult('Palabra no encontrada');
        }
    };

    return (
        <div className='wordContainer'>
            <h1>Ruso</h1>
            <input 
                type="text" 
                placeholder="Busca la palabra en ruso" 
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

export default Russian;