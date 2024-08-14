
//React
import { BrowserRouter, Routes,Route } from "react-router-dom";

//Homes e Registro
import {Home} from "./App";
import { PagEmp } from "./pages/Homes/PagEmpresa";
import { PagAdm } from "./pages/Homes/PagAdm";
import { PagUsu } from "./pages/Homes/PagUsuario";
import { PagLog } from "./pages/PagLogin";
import { PagCad } from "./pages/PagCadastro";

//Funcionalidades 
import { PagAbout } from "./pages/PagInformações";
import { PagLoc } from "./pages/PagLocalizador";


export function RotaMestre(){
    return(
       <BrowserRouter>
         <Routes>
            {/*Páginas de cadastro e Homes*/}
            <Route path="/" element={<Home/>}></Route>
            <Route path="/pagEmp" element={<PagEmp/>}></Route>
            <Route path="/pagUsu" element={<PagUsu/>}></Route>
            <Route path="/pagAdm" element={<PagAdm/>}></Route>
            <Route path="/Paglog" element={<PagLog/>}></Route>
            <Route path="/PagCad" element={<PagCad/>}></Route>
             {/*Páginas de cadastro e Homes*/}

             {/*Páginas de informações e funcionalidades*/}
             <Route path="/PagAbt" element={<PagAbout/>}></Route>
             <Route path="/PagLoc" element={<PagLoc/>}></Route>
         </Routes>
       </BrowserRouter> 
    )
}