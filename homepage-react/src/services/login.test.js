import { loginMensage } from './login'

describe( 'Login menssage test', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Show welcome message to user', () => {
        loginMensage()
        expect(mockAlert).toHaveBeenCalledWith('Olá, seja bem vindo !')
    })

})