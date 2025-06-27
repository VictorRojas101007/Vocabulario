// import { useState } from "react"
// import Mean from "./children/Mean"
// import Plural from "./children/Plural"

import { NavLink, Outlet } from "react-router-dom";


const Cards=()=>{
    return(
        <div className="body">
  <header className='headerContainer'>
    <h1>Memoriza</h1>
  </header>
    <div className='dictionaryContainer'>
      <div className="vocabularyContainer">
        <NavLink className={"navLinkVocabulary"} to="/cards/mean">
          <h2>Vocabulario</h2>
          <img 
            src="https://th.bing.com/th/id/OIP.qiCwDVaUzVBPPqwoH-LzHAHaGN?rs=1&pid=ImgDetMain&cb=idpwebpc2" 
            alt="vocabulario" 
          />
        </NavLink>
      </div>
      <div className="cardsContainer">
        <NavLink className={"navLinkCards"} to="/cards/plural">
        <h2>Plurales</h2>
        <img 
          src="https://ecdn.teacherspayteachers.com/thumbitem/Tarjetas-para-trabajar-el-vocabulario-VOCABULARY-CARDS-FLASHCARDS--7437227-1636905281/original-7437227-1.jpg" 
          alt="cards" 
        />
        </NavLink>
      </div>
    </div>
    </div>
    )
}
export default Cards;