import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Testpa1 } from "./pages/pag1";
import { Testpa2 } from "./pages/pag2";
import { Testpa3 } from "./pages/pag3";
import App from "./App";

export function RotaMestre(){
    return(
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/pag1" element={<Testpa1/>}></Route>
            <Route path="/pag2" element={<Testpa2/>}></Route>
            <Route path="/pag3" element={<Testpa3/>}></Route>
         </Routes>
       </BrowserRouter> 
    )
}