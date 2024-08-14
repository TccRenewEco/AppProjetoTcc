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
        <Accordion allowMultiple={true}>
           <h1>Dúvidas frequentes</h1>
          <AccordionItem textAlign='center'>
              <h2>
                <AccordionButton>
                  <Box as='span' 
                  flex='1' 
                  textAlign='center'>
                    Como devo realizar meu descarte?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
        <AccordionPanel pb={4}>
           <p>Resposta aqui</p>  
        </AccordionPanel>
      </AccordionItem>
    

      <AccordionItem >
        <h2>
         <AccordionButton>
           <Box as='span'
           flex='1' 
           textAlign='center'>
            Para onde vão os lixos eletrônicos descartados?
            </Box>
            <AccordionIcon />
         </AccordionButton>
        </h2>
         <AccordionPanel>
           <p>Resposta aqui</p>
         </AccordionPanel>
      </AccordionItem>
        

      <AccordionItem >
        <h2>
         <AccordionButton>
           <Box as='span'
           flex='1' 
           textAlign='center'>
            Terei que pagar pelo serviço?
            </Box>
         </AccordionButton>
         <AccordionIcon />
        </h2>
         <AccordionPanel>
           <p>Resposta aqui</p>
         </AccordionPanel>
      </AccordionItem>
    

      <AccordionItem >
        <h2>
         <AccordionButton>
           <Box as='span'
           flex='1' 
           textAlign='center'>
            Por quê tenho que descartar meus eletrônicos?
            </Box>
         </AccordionButton>
         <AccordionIcon />
        </h2>
         <AccordionPanel>
           <p>Resposta aqui</p>
         </AccordionPanel>
      </AccordionItem>


      <AccordionItem >
        <h2>
         <AccordionButton>
           <Box as='span'
           flex='1' 
           textAlign='center'>
            Posso fazer o descarte de qualquer tipo de eletrônico?
            </Box>
         </AccordionButton>
        </h2>
         <AccordionPanel>
           <p>Resposta aqui</p>
         </AccordionPanel>
      </AccordionItem>
  
</Accordion>
       </section>
        <aside id='FormHom'>

           


        </aside>
      </body>
        
       <footer>

       </footer>
    </>
  )
}


