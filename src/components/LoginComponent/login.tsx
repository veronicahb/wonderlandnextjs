import Image from 'next/image'
import {useRouter} from 'next/router'
import {
    Divbusca, Header, Imgbusca, Nave, Naveul, Naveula, Txtbusca, Body, Entrar, Form, Iv
} from "../../styles/LoginStyle"

export default function Login(){
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
                <section>
                    <Form action="/" method="get">
                        <div><label>EMAIL:</label></div>
                        <input type="email" placeholder="EMAIL"/>
                        <div><label>SENHA:</label></div>
                        <input type="password" placeholder="SENHA"/>
                        <div><input type="submit" value="ENTRAR"/></div>
                    </Form>
                    <Entrar>
                        <p>NÃO POSSUI UMA CONTA?</p> 
                        <div><Naveula onClick={()=>{router.push('/cadastrar')}}>CADASTRAR</Naveula></div>
                    </Entrar>
                    <Iv>a</Iv>
                </section>
            </Body>
        </>
    )
}