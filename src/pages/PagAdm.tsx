import { useNavigate } from "react-router-dom"

export function PagAdm(){

    const navi = useNavigate()

    return(
        <div>
            <h1>testado?</h1>
            <button onClick={()=>{navi('/')}}>Voltar</button>
        </div>
    )
}