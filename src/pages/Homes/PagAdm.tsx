import { useNavigate } from "react-router-dom"

export function PagAdm(){

    const navi = useNavigate()

    return(
        <div>
            <h1>Administrador vai vir pra ca quando logar</h1>
            <button onClick={()=>{navi('/')}}>Voltar</button>
        </div>
    )
}