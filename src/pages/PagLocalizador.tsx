import { useNavigate } from "react-router-dom";

export function PagLoc(){
    const Navi = useNavigate();

    return(
        <>
         <h1>Página Locais de descarte</h1>
          
          <button onClick={()=>{Navi('/')}}>Voltar</button>
        </>
    )
}