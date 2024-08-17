/* eslint-disable no-unused-vars */
import { render, configure, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

/* eslint-disable no-undef */
describe('Pruebas en <GifItem>', () => { 

    const title = 'Saitama' 
    const url = 'https://one-punch/saitama.jpg'

    test('should ', () => {
      const {container} = render(<GifItem title={title}  url={url}/>)
      expect(container).toMatchSnapshot();
    })


    test('La imagen debe mostrar el src y el alt indicado', () => {
      render(<GifItem title={title} url={url}/>)

        // Esto nos puedes servir para ver algo mas detellado
        // screen.debug();

        // Podemos usar la siguiente declaracion para hacer cada una de las validaciones que querramos hacer
        // - Esto valida pues el src y podroamos hacer lo mismo para todo lo demas que podamos hacer despues
        //   sin embargo seria demasidas lineas, lo que podesmo hacer es lo que viene despues
        // expect(screen.getByRole('img').src).toBe(url)
        
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    // La descripcion lo dice todo 
    test('Debe mostrar el titulo en el componenete', () => {
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
    })

    
    
    
 })