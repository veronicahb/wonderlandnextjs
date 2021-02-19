import Image from 'next/image'
import {useRouter} from 'next/router'
import {
    Body, Divbusca, Header, Imgbusca, Nave, Naveul, Naveula, Section, Txtbusca, Divsec
} from "../../styles/QuizzesStyle"

export default function Inicio(){
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
                    <Divsec>
                        <Image
                            src="/img/qual personagem.jpg"
                            alt="qual personagem"
                            width={493}
                            height={277}
                        />
                        <div>Descubra qual personagem você seria.</div>
                    </Divsec>
                    <Divsec>
                        <Image
                            src="/img/reino.jpg"
                            alt="reino"
                            width={493}
                            height={277}
                        />
                        <div>Descubra a qual reino você serviria.</div>
                    </Divsec>
                    <Divsec>
                        <Image
                            src="/img/qual chapeu.jpg"
                            alt="qual chapeu"
                            width={493}
                            height={277}
                        />
                        <div>Descubra qual chapéu o Chapeleiro faria para você.</div>
                    </Divsec>
                    <Divsec>
                        <Image
                            src="/img/disse a frase.jpg"
                            alt="disse a frase"
                            width={493}
                            height={277}
                        />
                        <div>Você sabe qual personagem disse essa frase?</div>
                    </Divsec>
                </Section>
            </Body>
        </>
    )
}