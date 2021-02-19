import Image from 'next/image'
import {useRouter} from 'next/router'
import {
    Body, Divbusca, Header, Imgbusca, Nave, Naveul, Naveula, Section, Txtbusca, Divsec, P
} from "../../styles/ForumStyle"

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
                            src="/img/alice.png"
                            alt="alice"
                            width={173}
                            height={165}
                        />
                        <P>Alice Kingsleigh</P>
                    </Divsec>
                    <Divsec>
                        <Image
                            src="/img/chapeleiro.png"
                            alt="chapeleiro"
                            width={173}
                            height={165}
                        />
                        <P>Chapeleiro Maluco</P>
                    </Divsec>
                    <Divsec>
                        <Image
                            src="/img/rainha branca.png"
                            alt="rainha branca"
                            width={173}
                            height={165}
                        />
                        <P>Rainha Branca</P>
                    </Divsec>
                    <Divsec>
                        <Image
                            src="/img/rainha vermelha.png"
                            alt="rainha vermelha"
                            width={173}
                            height={165}
                        />
                        <P>Rainha Vermelha</P>
                    </Divsec>
                    <Divsec>
                        <Image
                            src="/img/jaguadarte.png"
                            alt="jaguadarte"
                            width={173}
                            height={165}
                        />
                        <P>Jaguadarte</P>
                    </Divsec>
                    <Divsec >
                        <Image
                            src="/img/absolem.png"
                            alt="absolem"
                            width={173}
                            height={165}
                        />
                        <P>Absolem</P>
                    </Divsec>
                </Section>
            </Body>
        </>
    )
}