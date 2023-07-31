import Botao from "../Botao/Botao"
import { ContainerNav } from "./styles"
import filtro from "../../assets/filtro.png"


function Nav(){
    return(
        <ContainerNav>
            <Botao titulo={"Donuts"}/>
            <Botao titulo={"Ice Cream"}/>
            <Botao titulo={"Bomboloni"}/>
            <img src={filtro}/>
        </ContainerNav>
    )
}

export default Nav