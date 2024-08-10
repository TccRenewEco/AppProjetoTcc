import { BrowserRouter, Routes,Route } from "react-router-dom";
import { PagEmp } from "./pages/PagEmpresa";
import { PagAdm } from "./pages/PagAdm";
import { PagUsu } from "./pages/PagUsuario";
import App from "./App";
import { PagLog } from "./pages/PagLogin";
import { PagCad } from "./pages/PagCadastro";

export function RotaMestre(){
    return(
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/pagEmp" element={<PagEmp/>}></Route>
            <Route path="/pagUsu" element={<PagUsu/>}></Route>
            <Route path="/pagAdm" element={<PagAdm/>}></Route>
            <Route path="/Paglog" element={<PagLog/>}></Route>
            <Route path="/PagCad" element={<PagCad/>}></Route>
             
         </Routes>
       </BrowserRouter> 
    )
}