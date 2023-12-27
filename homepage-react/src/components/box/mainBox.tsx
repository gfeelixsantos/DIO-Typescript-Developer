import { Box, Center, Text } from "@chakra-ui/react" 

interface IBox {
    mainContent: string,
    content: string
}

export const BoxMain = ({ mainContent, content }: IBox) => {
    return (
        <Center>
            <Box width={'60%'} marginTop={'6vh'} display={'flex'} flexDirection={'column'} bgColor={'lightgray'} padding={'3vh'} borderRadius={'16px'} boxShadow='dark-lg' p='6' rounded='md' bg='white'>
                <Text fontSize={16} fontWeight={'bold'}>{ mainContent }</Text>
                <Text fontSize={16}>{ content }</Text>
            </Box>
        </Center>  
    )
}