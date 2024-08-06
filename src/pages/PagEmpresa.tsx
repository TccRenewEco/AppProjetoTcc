import { useNavigate } from "react-router-dom"

export function PagEmp(){

    const navi = useNavigate()

    return(
        <div>
            <h1>testado</h1>
            <a onClick={()=>{navi('/')}}>Voltar</a>
        </div>
    )
}