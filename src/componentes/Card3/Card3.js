import { CardContainer, DivCard, ImagemCard, TextCard, TituloCard } from "./styles";
import donutsUnicorn from "../../assets/zapIcon3.png"

function Card3(){
 
    return(
        <CardContainer>
            <ImagemCard src={donutsUnicorn} />
                <TituloCard>
                    Whatsapp
                </TituloCard>

                <TextCard>
                    Toque aqui para ver e mendar mensagens
                </TextCard>


                {/* <DivCard>
                    <p>7.800</p>
                    <p>Mais</p>
                </DivCard> */}
        </CardContainer>
    )
}

export default Card3