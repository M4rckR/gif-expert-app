import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

/* eslint-disable no-undef */
describe('Pruebas en AddCategory', () => { 
    test('Debe de cambiar el valor dee la caja de texto', () => {
       render(<AddCategory onNewCategory={() => {}}/>)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, {target: { value: 'Saitama'}})

        expect(input.value).toBe('Saitama');
      //  screen.debug()
    })
    

    test('debe de llamar inNewCategory si el input tiene un valor',() => {
      const inputValue = 'Saitama'
      const onNewCategory= jest.fn(); // Mock es una simulacion, no una implementacio real
      render(<AddCategory onNewCategory={onNewCategory}/>)

      const input = screen.getByRole('textbox')
      const form = screen.getByRole('form')
      
      fireEvent.input(input, {target: { value: inputValue}})
      fireEvent.submit(form)
      screen.debug()

      // Pregunta si  fue llamado
      expect(onNewCategory).toHaveBeenCalled();
      // Pregunta si fue llamado 2 veces
      expect(onNewCategory).toHaveBeenCalledTimes(1);
      // Pregunta si la funcion paso con el valor de la caja de texto
      expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })


    test('No debe de llamar el OnNewCategory si el inpunt esta vacio', () => {
      const inputValue = '';
      const onNewCategory = jest.fn()

      render(<AddCategory onNewCategory={onNewCategory} />)

      const input = screen.getByRole('textbox')
      const form = screen.getByRole('form')
      
      fireEvent.input(input, {target: { value: inputValue}})
      fireEvent.submit(form)

      // Pregunta si  fue llamado
      expect(onNewCategory).toHaveBeenCalled();
    })

    
    
 })