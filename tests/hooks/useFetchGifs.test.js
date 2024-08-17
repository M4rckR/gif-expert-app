/* eslint-disable no-unused-vars */
import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

/* eslint-disable no-undef */
describe('Pruebas en el Hook de nuestro useFectchGifs', () => { 
    test('Debe de regresar el estado incial', () => {
      
        const {result} = renderHook(()=> useFetchGifs('One Punch'))
        const {images, isLoading} = result.current
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    })
    
    test('Debe de retornar un arreglo de imagenes', async() => {
      
        const {result} = renderHook(()=> useFetchGifs('One Punch'))
        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0),
            {timeout: 2000}
        )

        const {images,isLoading} = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()

    })
    
 })