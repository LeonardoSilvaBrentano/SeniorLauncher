import { CardContainer, DivCard, ImagemCard, TextCard, TituloCard } from "./styles";
import donutsUnicorn from "../../assets/telefoneIcone1.png"

function Card(){
 
    return(
        <CardContainer>
            <ImagemCard src={donutsUnicorn} />
                <TituloCard>
                    TELEFONE
                </TituloCard>

                <TextCard>
                    Toque aqui para ligar
                </TextCard>

                {/* <DivCard>
                    <p>7.800</p>
                    <p>Mais</p>
                </DivCard> */}
        </CardContainer>
    )
}

export default Card