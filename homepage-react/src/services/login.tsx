
export const loginMensage = async() => {

    const conta = {
        email: 'gfeelixsantos@gmail.com',
        password: '123',
        name: 'Gabriel Felix',
        balance: 200.00,
        id: '1'
    }
    

    return new Promise ( (resolve) => {
        setTimeout( () => resolve(conta), 3000)
    })
    
}