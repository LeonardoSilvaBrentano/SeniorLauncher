import { useState } from "react";
import {StyledGlobal,  CorFundo} from "./styledGlobal";
import Home from "./pagina/Home/Home";
import Detalhes from "./pagina/Detalhes/Detalhes";
import Clock from "./componentes/Clock/clock";


function App() {
  const [trocarDePagina, setTrocarDePagina] = useState(0)

  const changePage = (change)=>{
    setTrocarDePagina(change)
  }


  return (
    <>
      <CorFundo>
      <Clock/>
        <StyledGlobal />
        {trocarDePagina === 0  ? (
          <Home 
          pagina={()=>changePage(1)}/>
        ):(
          <Detalhes 
          pagina={()=>changePage(0)}
          />
        ) }
        
      </CorFundo>
    </>
  );
}

export default App;
