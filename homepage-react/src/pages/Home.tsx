import { 
    Box,
    ChakraProvider,

} from "@chakra-ui/react"
import { Header } from "../components/header/header"
import { Login } from "../components/login/login"

export const Home = () => {
    return ( 
      <Box>
        <Header/>
        <Login />
      </Box>
    )
}