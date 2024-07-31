import { useNavigate } from "react-router-dom"
import './../App.css'
export function Testpa3(){

    const navi = useNavigate()

    return(
        <div>
            <h1>testado de fato.</h1>
            <button onClick={()=>{navi('/')}}>Voltar</button>
        </div>
    )
}