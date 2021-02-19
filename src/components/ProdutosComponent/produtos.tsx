import Image from 'next/image'
import {useRouter} from 'next/router'
import {
    Body, Divbusca, Header, Imgbusca, Nave, Naveul, Naveula, Section, Txtbusca, Divsec
} from "../../styles/ProdutosStyle"

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
                            src="/img/eat me.png"
                            alt="coma me"
                            width={193}
                            height={181}
                        />
                        <div >Coma-me</div>
                        <p>Fora de estoque por que a Alice entra em muitos lugares pequenos.</p>
                    </Divsec>
                    <Divsec>
                        <Image
                            src="/img/drink me.png"
                            alt="beba me"
                            width={193}
                            height={181}
                        />
                        <div>Beba-me</div>
                        <p>Fora de estoque por que a Lebre achou que era chá.</p>
                    </Divsec>
                    <Divsec>
                        <Image
                            src="/img/cartola.png"
                            alt="cartola"
                            width={193}
                            height={181}
                        />
                        <div>Cartola do Chapeleiro</div>
                        <p>Fora de estoque por que o Chapeiro não quer mais vender copias.</p>
                    </Divsec>
                    <Divsec>
                        <Image
                            src="/img/relogioo.png"
                            alt="relogio"
                            width={193}
                            height={181}
                        />
                        <div>Relógio do Coelho</div>
                        <p>Fora de estoque por que o Coelho distribuiu para todo mundo não se atrasar.</p>
                    </Divsec>
                    <Divsec>
                        <Image
                            src="/img/porquinho.png"
                            alt="porquinho"
                            width={193}
                            height={181}
                        />
                        <div>Porquinho esquenta pé</div>
                        <p>Fora de estoque por que a Rainha Vermelha ordenou.</p>
                    </Divsec>
                    <Divsec>
                        <Image
                            src="/img/xicara.png"
                            alt="xicara"
                            width={193}
                            height={181}
                        />
                        <div>Louça de chá</div>
                        <p>Fora de estoque por que a Lebre quebrou todas.</p>
                    </Divsec>
                </Section>
            </Body>
        </>
    )
}