import { 
    Box,
    ChakraProvider,

} from "@chakra-ui/react"
import { Header } from "../header/header"
import { Login } from "../login/login"

export const Card = () => {
    return (
        <ChakraProvider>
        <Box  bgImage="url('https://s3-eu-central-1.amazonaws.com/cja-blogassets/wp-content/uploads/sites/3/2018/07/13141900/Conta-poupan%C3%A7a.jpg')" bgRepeat={'no-repeat'} bgSize={'cover'} height={'100vh'} >
          <Box>
            <Header/>
            <Login />
          </Box>
        </Box>
      </ChakraProvider>
    )
}