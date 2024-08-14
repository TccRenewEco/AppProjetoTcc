import './Styles/App.css'
import { TopMenu, Header } from './components/NavBar'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center
} from '@chakra-ui/react'

/*homepage tecnicamente*/

export function Home() {

  return (
    <>
       <Header/>
   
      <body>
      <section id='Fullscreen'>
        
        </section>
        
       <section id='Accordion'>
       <label htmlFor="Accordion">
           <h1>Dúvidas frequentes</h1>
          </label>
        <Accordion allowMultiple={true}>
          
           
          <AccordionItem textAlign='center'>
              <h2>
                <AccordionButton>
                  <Box as='span' 
                  flex='1' 
                  >
                    Como devo realizar meu descarte?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
        <AccordionPanel pb={4}>
           <p>Você pode utilizar deste site para encontrar Locais e instituições voltados a reciclagem lixo eletronico,
            ou você pode entrar numas das campanhas criadas por empresas no site 
            </p>  
        </AccordionPanel>
      </AccordionItem>
    

      <AccordionItem >
        <h2>
         <AccordionButton>
           <Box as='span'
           flex='1' 
           >
            Para onde vão os lixos eletrônicos descartados?
            </Box>
          <AccordionIcon />
         </AccordionButton>
        </h2>
         <AccordionPanel>
           <p>serão transportados para empresas e organizações que irão fazer a devida reciclagem</p>
         </AccordionPanel>
      </AccordionItem>
        

      <AccordionItem >
        <h2>
         <AccordionButton>
           <Box as='span'
           flex='1' 
           >
            Terei que pagar pelo serviço?
            </Box>
         <AccordionIcon />
         </AccordionButton>
        </h2>
         <AccordionPanel>
           <p>você pode tanto levar o lixo eletrônico ao local que será descartado ou poderá agendar uma coleta caso a quantidade for grande</p>
         </AccordionPanel>
      </AccordionItem>
    

      <AccordionItem >
        <h2>
         <AccordionButton>
           <Box as='span'
           flex='1' 
           >
            Por quê tenho que descartar meus eletrônicos?
            </Box>
         <AccordionIcon />
         </AccordionButton>
        </h2>
         <AccordionPanel>
           <p> Certos eletronicos possuem componentes quimicos toxicos que podem contaminar a água, solo e prejudicar a saúde alheia</p>
         </AccordionPanel>
      </AccordionItem>


      <AccordionItem >
        <h2>
         <AccordionButton>
           <Box as='span'
           flex='1' 
           >
            Posso fazer o descarte de qualquer tipo de eletrônico?
            </Box>
          <AccordionIcon/>
         </AccordionButton>
        </h2>
         <AccordionPanel>
           <p> Sim, porém é vital que você deixe instituições de descarte se encarregarem deste processo para que acidentes não ocorram</p>
         </AccordionPanel>
      </AccordionItem>
  
</Accordion>
       </section>
        <aside id='FormHom'>
          <h2>Possui outra dúvida? Pergunte!</h2>
          <form action="">

          </form>
           


        </aside>
      </body>
        
       <footer>

       </footer>
    </>
  )
}


