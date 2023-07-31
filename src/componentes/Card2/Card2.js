import { CardContainer, DivCard, ImagemCard, TextCard, TituloCard } from "./styles";
import donutsUnicorn from "../../assets/cameraIcone2.png"

function Card2(){
 
    return(
        <CardContainer>
            <ImagemCard src={donutsUnicorn} />
                <TituloCard>
                    CAMERA
                </TituloCard>

                <TextCard>
                    Toque aqui para abrir sua camera
                </TextCard>


                {/* <DivCard>
                    <p>7.800</p>
                    <p>Mais</p>
                </DivCard> */}
        </CardContainer>
    )
}

export default Card2