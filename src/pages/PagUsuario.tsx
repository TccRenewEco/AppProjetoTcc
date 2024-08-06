import { useNavigate } from "react-router-dom"

export function PagUsu(){

    const navi = useNavigate()

    return(
        <div>
            <h1>testado de fato.</h1>
            <button onClick={()=>{navi('/')}}>Voltar</button>
        </div>
    )
}