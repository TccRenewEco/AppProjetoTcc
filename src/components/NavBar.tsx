import { useNavigate } from "react-router-dom"
import logoProto from './../assets/LogoProto.svg'


export function TopMenu(){
   const NaviM = useNavigate()
    return(
        <header>       
        <div id="menubar">
          <img src={logoProto} alt="LogoFrutier"  />
        <h3><a href="#">RenewEco</a></h3>
             <ul>
               <li><a onClick={()=>{NaviM('/pagEmp')}}>página1</a></li>
               <li><a onClick={()=>{NaviM('/pagUsu')}}>página2</a></li>
               <li><a onClick={()=>{NaviM('/pagAdm')}}>Página3</a></li>
               <li><a onClick={()=>{NaviM('/pagLog')}}>Página4</a></li>

             </ul>
        </div>
        </header>
    )

}
