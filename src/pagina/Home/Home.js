import Card from "../../componentes/Card/Card"
import Card2 from "../../componentes/Card2/Card2"
import Card3 from "../../componentes/Card3/Card3"
import Card4 from "../../componentes/Card4/Card4"
import Footer from "../../componentes/Footer/Footer"
import Header from "../../componentes/Header/Header"
import Nav from "../../componentes/Nav/Nav"
import { SectionCard } from "./styles"


function Home(props){

    return(
        <>
        <Header
        pagina={props.pagina}
        
        />
            <Nav/>
            <SectionCard>
                <Card/>
                <Card2/>
                <Card3/>
                <Card4/>
            </SectionCard>
            

            <Footer/>
        </>

    )
}

export default Home