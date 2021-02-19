import Image from 'next/image'
import {useRouter} from 'next/router'
import {
    Divbusca, Header, Imgbusca, Nave, Naveul, Naveula, Txtbusca, Body, Section, H, P, Divsec 
} from "../../styles/IndexStyle"

export default function Index(){
    const router=useRouter()
    return (
        <>
            <Body> 
                <Header>
                    <Image
                        src="/img/direito.png"
                        alt="direito"
                        width={281}
                        height={174}
                    />
                    <Image
                        src="/img/logooo.png"
                        alt="logo"
                        width={621}
                        height={198}
                    />
                    <Image
                        src="/img/esquerdo.png"
                        alt="esquerdo"
                        width={281}
                        height={174}
                    />
                </Header>
                <Nave>
                    <Naveul>
                        <Naveula onClick={()=>{router.push('/')}}>Início</Naveula>
                        <Naveula onClick={()=>{router.push('/forum')}}>Fórum</Naveula>
                        <Naveula onClick={()=>{router.push('/produtos')}}>Produtos</Naveula>
                        <Naveula onClick={()=>{router.push('/quizzes')}}>Quizzes</Naveula>
                        <Naveula onClick={()=>{router.push('/login')}}>Login</Naveula>
                    </Naveul>
                    <Divbusca>
                        <Txtbusca type="text" placeholder="Pesquisar"/>
                        <Imgbusca
                            src="/img/pesquisa.png"
                            alt="pesquisa"
                            width={45}
                            height={45}
                        />
                    </Divbusca>
                </Nave>
                <Section>
                    <Divsec><H>Seja bem-vindo!</H></Divsec>
                    <Divsec><P>Nosso site tem como objetivo reunir informações a resPeito do nosso incrível e amado Wonderland, da saga de livros, filmes e desenho animado chamado: “Alice no País das Maravilhas”. Ao navegar pelo nosso site tenha em mente que, os produtos não são reais, eles tem o objetivo de trazer imersão e te inserir em um mundo fictício, nossos quizzes são apenas para diversão e o fórum é feito de fã para fã.  Tendo isso em mente, espero que se divirta! PS: se você ainda não tem conhecimento sobre a saga, recomendo que procure se informar.</P></Divsec>
                </Section>
            </Body>
        </>
    )
}