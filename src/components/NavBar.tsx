import { useNavigate } from "react-router-dom"
import logoProto from './../assets/LogoProto.svg'
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
               <li><a onClick={()=>{NaviM('/pagEmp')}}>página1</a></li>
               <li><a onClick={()=>{NaviM('/pagUsu')}}>página2</a></li>
               <li><a onClick={()=>{NaviM('/pagAdm')}}>Página3</a></li>
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

    return (
      <>
      <body>
        <header>
          <nav>
          <img src={logoProto}/>
          <input type='checkbox' id='menu-faketrigger'></input>
          <div id='mobile-menu'>
              <div id='line1'></div>
              <div id='line2'></div>
              <div id='line3'></div>
          </div>
          <ul id='nav-list'>
              <li><button>Home</button></li>
              <li><button>Soluções</button></li>
              <li><button>Sobre</button></li>
              <li><button>Contato</button></li>
          </ul>
          <div id='log'>
              <button id='Entrar'>Entrar</button>
              <button>Registrar</button>
          </div>
          </nav>
        </header>
        <script src=''></script>
      </body>
      </>
    )
  }
  
