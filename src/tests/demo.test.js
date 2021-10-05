describe('pruebas en el archivo demo.test.js', () => {

    test( 'deben de ser iguales los string', () => {
    
        // 1.inicializacion
        const mensaje = 'Hola mundo';
    
        // 2. estimulo
        const mensaje2 = `Hola mundo`;
    
        // 3. observar el compartamiento
        expect( mensaje ).toBe( mensaje2 ); // compara si ambas variables son iguales, metodo propio de jest
    
    })
    
});