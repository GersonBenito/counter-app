import { getSaludo } from "../../bases-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe de retornar hola Gerson', () => {

        const nombre = 'Gerson';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola '+ nombre );

    })

    //get saludo debe de retornar Hola Benito, si no hay argumentos
    test('get Saludo debe de retornar el valor por defecto Hola Benito', ()=>{
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Benito' )
    })

})