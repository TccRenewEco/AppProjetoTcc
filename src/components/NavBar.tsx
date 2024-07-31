import { useNavigate } from "react-router-dom"



export function TopMenu(){
   const NaviM = useNavigate()
    return(
        <header>       
         <div id="menubar" >
          <h3>
            <a href="#">RenewEco</a>
          </h3>
             <ul className="AreaBtn">
               <li><a onClick={()=>{NaviM('/pag1')}}>Soluções</a></li>
               <li><a onClick={()=>{NaviM('/pag2')}}>Sobre</a></li>
               <li><a onClick={()=>{NaviM('/pag3')}}>Contato</a></li>
           
             {/*Arrumar uma forma de deixar a Nav editavel com atributos*/}
               <div id="AreaUsu">
                <li> <a onClick={()=>{NaviM()}}>notificação</a></li>
                <li><a onClick={()=>{NaviM()}>Log-in</a></li>
                <li><a onClick={()=>{NaviM()}>Cadastro</a></li>
               </div>
             </ul>
         </div>
        </header>

        
    )

}
