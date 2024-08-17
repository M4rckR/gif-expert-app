import { getGifts } from "../../src/helpers/getGifs"

/* eslint-disable no-undef */
describe('Pruebas en getGifs', () => { 

    // Al igual que en nuestra funcion, esta debera se una asincrona 
    test('Debe retornar un arreglo de gifs', async() => {

      // Aqui tendremos que almacenar nuestro resultado en una variable
      const gifs = await getGifts('one punch')

      // AQUI HAREMOS 2 EVALUACIONES

      // Esta primera evaluacion es ver que el tamaño 
      // de nuestro retorno sea mayor a 0
      expect(gifs.length).toBeGreaterThan(0)

      // Este segundo se ve algo raro pero basicamente lo que 
      // estamos haciendo es ver que nuestro retorno (uno de 
      // los indices) tenmga el formato del siguiente objeto
      expect(gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String)
      })
    })
    
 })