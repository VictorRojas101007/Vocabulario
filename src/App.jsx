import './App.css'
import { NavLink } from 'react-router-dom';


export const vocabularyLoader = async () => {
  try {
    const response = await fetch('/vocabulary.json');
    if (!response.ok) {
      throw new Error('Error al cargar el vocabulario');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Response('Error al cargar el vocabulario', { status: 500 });
  }
};

function App() {
return (
  <div className="body">
  <header className='headerContainer'>
    <h1>¡Aprende Ruso!</h1>
  </header>
    <div className='dictionaryContainer'>
      <div className="vocabularyContainer">
        <NavLink className={"navLinkVocabulary"} to="/traduction">
          <h2>Traduce</h2>
          <img src="https://th.bing.com/th/id/OIP.qiCwDVaUzVBPPqwoH-LzHAHaGN?rs=1&pid=ImgDetMain&cb=idpwebpc2" alt="vocabulario" />
        </NavLink>
      </div>
      <div className="cardsContainer">
        <NavLink className={"navLinkCards"} to="/cards">
        <h2>Cartas</h2>
        <img  src="https://ecdn.teacherspayteachers.com/thumbitem/Tarjetas-para-trabajar-el-vocabulario-VOCABULARY-CARDS-FLASHCARDS--7437227-1636905281/original-7437227-1.jpg" alt="cards" />
        </NavLink>
      </div>
    </div>
    </div>
  )
}

export default App
