import { useNavigate } from "react-router-dom"

export function PagAbout(){

    const navi = useNavigate()

    return(
        <div>
            <h1>Pagina de informações sobre nós e sobre o projeto</h1>
            <a onClick={()=>{navi('/')}}>Voltar</a>
        </div>
    )
}