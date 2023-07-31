import { CardContainer, DivCard, ImagemCard, TextCard, TituloCard } from "./styles";
import donutsUnicorn from "../../assets/galeriaIcone4.jpg"

function Card4(){
 
    return(
        <CardContainer>
            <ImagemCard src={donutsUnicorn} />
                <TituloCard>
                    Galeria
                </TituloCard>

                <TextCard>
                    Clique aqui para ver suas fotos
                </TextCard>

                {/* <DivCard>   
                    <p>7.800</p>
                    <p>Mais</p>
                </DivCard> */}
        </CardContainer>
    )
}

export default Card4