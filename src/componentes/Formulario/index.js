import CampoTexto from "../CampodeTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'

function Formulario() {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o seu endereço de imagem" />
                <ListaSuspensa label= "Time"itens={times}/>
            </form>
        </section>
    )
}

export default Formulario;