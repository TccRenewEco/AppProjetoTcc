import { useNavigate } from "react-router-dom"

export function PagUsu(){

    const navi = useNavigate()

    return(
        <div>
            <h1>Usuario vai vir pra ca depois de logar</h1>
            <button onClick={()=>{navi('/')}}>Voltar</button>
        </div>
    )
}