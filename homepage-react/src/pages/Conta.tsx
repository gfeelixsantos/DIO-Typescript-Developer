import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { BoxMain } from "../components/box/mainBox"
import { loginMensage } from "../services/login"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

export const Conta = () => {

    const [ userData, setUserData ] = useState<null | UserData>()
    
    useEffect( () => {
        const getData = async () => {
            const data:any | UserData = await loginMensage()
            setUserData(data)
        }
        getData()
    }, [])
    
    const { id } = useParams()
    const navegate = useNavigate()
    
    const actualDate = new Date()

    if(userData && id !== userData.id){
        navegate('/')
    }

    return (
        <SimpleGrid>
            {
                userData === undefined || userData === null ?
                (
                    <Center marginTop={'16vh'} display={'flex'} flexDirection={'column'}>
                    <Spinner  color="white"/>
                    <Text fontSize={'4vh'} color={'white'}> Carregando</Text>
                    </Center>
                ) :
                (
                    <>
                    <BoxMain mainContent={`Bem vindo, ${userData?.name}`} content={`${actualDate.getDate()}/${actualDate.getMonth()+1}/${actualDate.getFullYear()} - ${actualDate.getHours()}:${actualDate.getMinutes()} (Horário de Brasília)`} />
                    <BoxMain mainContent="Informações da conta" content="Saldo R$ 200.00"/>
                    </>
                ) 
            }
        </SimpleGrid>
    )
}