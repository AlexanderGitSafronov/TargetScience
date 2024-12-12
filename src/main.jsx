
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import './fonts/fonts.css'
import NavRoutes from './Routes/Routes'
// import { HashRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ChakraProvider value={defaultSystem}  >
      <NavRoutes/>
    </ChakraProvider>
</BrowserRouter>
   

)
