/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs')


describe('Pruebas en <GifGrid/>', () => { 
    const category = 'One Punch'
    test('debe de mostrar el loading inicial', ()=> {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        // expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
        screen.debug()
    });

    test('debe mostrar items cuando se cargan las imagenes useFectchGifs', () => {

        const gifs = [
            {
            id: 'ABC',
            title: 'saitama',
            url: 'https://localhost/saitama.jpg'
            },
            {
            id: '123',
            title: 'goku',
            url: 'https://localhost/goku.jpg'
            },

        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading:false
        })

        render(<GifGrid category={category}/>)
        screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2)

    })
    
 })