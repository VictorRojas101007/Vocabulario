import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Mean.css"

const Plural = () => {
    const vocabularyData = useLoaderData();
    const [flippedCards, setFlippedCards] = useState({});
    const [shuffledData, setShuffledData] = useState([]);
    const pluralVocabularyData = vocabularyData.filter((item) => {
        if (item.plural !== "") {
            return item.plural;
        }
    });

    // Función para mezclar el array usando Fisher-Yates shuffle
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Mezclar los datos cuando el componente se monta
    useEffect(() => {
        if (pluralVocabularyData) {
            setShuffledData(shuffleArray(pluralVocabularyData));
        }
    }, []);

    const handleCardClick = (index) => {
        setFlippedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Función para volver a mezclar las cartas
    const handleShuffle = () => {
        setShuffledData(shuffleArray(pluralVocabularyData));
        setFlippedCards({}); // Resetear las cartas volteadas
    };

    return (
        <div className="cardsContainer">
            <button 
                onClick={handleShuffle}
                style={{
                    marginBottom: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                Mezclar Cartas
            </button>
            <div className="cardContainer">
            {shuffledData.map((item, index) => {
                const isFlipped = flippedCards[index] || false;
                return (
                    <div 
                        key={`${item.russian}-${index}`} 
                        className="wordContainer"
                        onClick={() => handleCardClick(index)}
                        
                    >
                        <div style={{
                            position: 'relative',
                            width: '300px',
                            height: '200px',
                            transformStyle: 'preserve-3d',
                            transform: isFlipped ? 'rotateX(180deg)' : 'rotateX(0deg)',
                            transition: 'transform 0.6s ease-in-out'
                        }}>
                            {/* Cara frontal (español) */}
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backfaceVisibility: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'lightblue',
                                border: '2px solid #333',
                                borderRadius: '10px'
                            }}>
                                <h2 style={{ margin: 0 }}>{item.russian}</h2>
                            </div>
                            
                            {/* Cara trasera (ruso) */}
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backfaceVisibility: 'hidden',
                                transform: 'rotateX(180deg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'lightcoral',
                                border: '2px solid #333',
                                borderRadius: '10px'
                            }}>
                                <p style={{ margin: 0, fontSize: '20px' }}>{item.plural}</p>
                            </div>
                        </div>
                    </div>
                )
            })}</div>
            </div>
    )
}

export default Plural;