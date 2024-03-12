import { useNavigate } from "react-router-dom"


export function TopMenu(){
   const NaviM = useNavigate()
    return(
        <header>       
        <div id="menubar">
        <h3><a href="#">Teste</a></h3>
             <ul>
               
               <li><a onClick={()=>{NaviM('/pag1')}}>página1</a></li>
               <li><a onClick={()=>{NaviM('/pag2')}}>página2</a></li>
               <li><a onClick={()=>{NaviM('/pag3')}}>Página3</a></li>
             </ul>
        </div>
        </header>
    )

}
