import { 
    Box,
    Button,
    Center,
    ChakraProvider,
    Input

} from "@chakra-ui/react"

import { EnterButton } from "../button/button"

export const Login = () => {
    return (
        <ChakraProvider>
            <Center>
                <Box width={'30%'} marginTop={'6vh'} display={'flex'} flexDirection={'column'} bgColor={'lightgray'} padding={'3vh'} borderRadius={'16px'} boxShadow='dark-lg' p='6' rounded='md' bg='white'>
                    <Input placeholder="Email" type="email" marginTop={'3vh'} textAlign={'center'} fontSize={'3vh'} bgColor='#ffff'/>
                    <Input placeholder="Senha" type="password" marginTop={'3vh'} textAlign={'center'} fontSize={'3vh'} bgColor='#ffff'/>
                    <EnterButton />
                </Box>
            </Center>      
        </ChakraProvider>
    )
}