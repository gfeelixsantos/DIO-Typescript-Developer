import { 
    Box,
    Button,
    Center,
    Input

} from "@chakra-ui/react"

import { loginMensage } from "../../services/login"
import { useState } from "react"
import { Link } from "react-router-dom"

// VARIAVEL DE ESTADO - EMAIL
// Ao digitar o email dispara um evento através do onChange, que captura letra por letra

export const Login = () => {
    const [ email, setEmail ] = useState('')
    return (
            <Center>
                <Box width={'30%'} marginTop={'6vh'} display={'flex'} flexDirection={'column'} bgColor={'lightgray'} padding={'3vh'} borderRadius={'16px'} boxShadow='dark-lg' p='6' rounded='md' bg='white'>
                    <Input placeholder="Email" type="email" marginTop={'3vh'} textAlign={'center'} fontSize={'3vh'} bgColor='#ffff' value={email} onChange={ (event) => {
                        setEmail(event.target.value) 
                        return console.log(event.target.value);
                        }
                    }/>
                    <Input placeholder="Senha" type="password" marginTop={'3vh'} textAlign={'center'} fontSize={'3vh'} bgColor='#ffff'/>
                    <Button onClick={loginMensage} marginTop={'3vh'} marginBottom={'3vh'} colorScheme='blue' color={'#ffff'} fontWeight={'bold'} fontSize={'3vh'}><Link to={'/conta/1'}>Entrar</Link></Button>
                </Box>
            </Center>      
    )
}