import { useNavigate } from "react-router-dom"
import logoProto from './../assets/LogoProto.svg'
import LogoFraseGradi from './../assets/Logo com gradiente 45º.svg'
import './../Styles/App.css'
import './../Styles/style.css'

//primeira versão da navbar


//Navbar de Debug
export function TopMenu(){
  const NaviM = useNavigate();
    return(
        <header>       
        <div id="menubar">
      
            <a href="#" id='LogoTipo'>
           <img src={logoProto} alt="LogoFrutier"/>
               <p>RenewEco</p>
              </a>
           
             <ul>
               <li><a onClick={()=>{NaviM('/pagEmp')}}>páginaEmp</a></li>
               <li><a onClick={()=>{NaviM('/pagUsu')}}>páginaUsu</a></li>
               <li><a onClick={()=>{NaviM('/pagAdm')}}>PáginaAdm</a></li>
             </ul>
             <button onClick={()=>{NaviM('/pagCad')}}>Cadastrar-se</button>
             <button onClick={()=>{NaviM('/pagLog')}}>Log-in</button>

             {/*<button onClick={()=>{console.log('Estou funcionando, porem fazendo nada por hora')}}>Notificações</button>*/}
        </div>
        </header>

        
    )

}

//Header que vai aparecer pra todo mundo
export function Header() {
  const NaviM = useNavigate(); 
  var VeriUsu = 0;

  if( VeriUsu >= 0)
    return (
      <>
        <header>
          <nav>
          <a onClick={()=>{NaviM('/')}}>
           <img src={LogoFraseGradi} />
          </a>
           
          <input type='checkbox' id='menu-faketrigger'></input>
          <div id='mobile-menu'>
              <div id='line1'></div>
              <div id='line2'></div>
              <div id='line3'></div>
          </div>
          <ul id='nav-list'>
              
              <li><button onClick={()=>{NaviM('/PagLoc')}}>Soluções</button></li>
              <li><button onClick={()=>{NaviM('/PagAbt')}}>Sobre</button></li>
              <li><button onClick={()=>{NaviM('/PagAbt')}}>Contato</button></li>
          </ul>
          <div id='log'>
              <button id='Entrar' onClick={()=>{NaviM('/Paglog')}}>Entrar</button>
              <button>Registrar</button>
          </div>
          </nav>
        </header>
      </>
    )
  }
  
