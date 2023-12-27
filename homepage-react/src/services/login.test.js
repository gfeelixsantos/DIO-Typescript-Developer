import { loginMensage } from './login'

describe( 'Login menssage test', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = 'gfeelixsantos@gmail.com'
    it('Show welcome message to user', () => {
        loginMensage(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Olá, seja bem vindo ${mockEmail}!` )
    })

})