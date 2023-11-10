import { Button, ChakraProvider } from "@chakra-ui/react"
import { loginMensage } from "../../services/login.js"

export const EnterButton = () => {
    return (
        <ChakraProvider>
            <Button onClick={loginMensage} marginTop={'3vh'} marginBottom={'3vh'} colorScheme='blue' color={'#ffff'} fontWeight={'bold'} fontSize={'3vh'}>Entrar</Button>
        </ChakraProvider>
    )
}