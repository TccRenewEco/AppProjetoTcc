import { useNavigate } from "react-router-dom"
import logoProto from './../assets/LogoProto.svg'
import './../Styles/App.css'
//primeira versão da navbar


export function TopMenu(){
   const NaviM = useNavigate()
    return(
        <header>       
        <div id="menubar">
      
            <a href="#" id='LogoTipo'>
           <img src={logoProto} alt="LogoFrutier"/>
               <p>RenewEco</p>
              </a>
           
             <ul>
               <li><a onClick={()=>{NaviM('/pagEmp')}}>página1</a></li>
               <li><a onClick={()=>{NaviM('/pagUsu')}}>página2</a></li>
               <li><a onClick={()=>{NaviM('/pagAdm')}}>Página3</a></li>
             </ul>
 {/*
             <button onClick={()=>{NaviM('/pagLog')}}>Cadastrar-se</button>
             <button onClick={()=>{NaviM('/pagLog')}}>Log-in</button>
 */}
             <button onClick={()=>{console.log('Estou funcionando, porem fazendo nada por hora')}}>Notificações</button>
        </div>
        </header>

        
    )

}
