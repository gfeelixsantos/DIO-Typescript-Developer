import { 
    Box,
    Center,
    ChakraProvider,
    Heading,
    Text
} from "@chakra-ui/react";

import { headerTheme } from "./header-theme";

export const Header = () => {
    return (
            <Center>
                <Box marginTop={'2vh'} height={'100%'}>
                    <Heading color={'#fff'}>
                        Dio Bank - TypeScript Developer
                    </Heading>
                    <Text fontSize={'3xl'} textAlign={'center'} color={'#ffff'}>Acesse a plataforma</Text>
                </Box>  
            </Center>
    )
}