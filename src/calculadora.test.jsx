import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import {Calculadora, numbers, rows, symbols} from './calculadora'




describe('Calculadora', ()=> {

  afterEach(cleanup)

  it('should render the calculator component', ()=>{
    render(<Calculadora />)
  })

  it('Should render inside of the component the Calculadora title', ()=> {

    // Arrange
    render(<Calculadora />)

    //Act and assert
    screen.getByText('Calculadora')
  })

  it('should have the number from 0 to 9', ()=> {

    //Arrange
    render(<Calculadora />)

    //Act and assert
    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('should have four rows of numbers', ()=> {
    // Arrange 
    render(<Calculadora />)

    // Act
    const nodes = screen.getAllByRole('row')

    // Assert
    expect(nodes).toHaveLength(4)
  })

  it('should render an input', ()=> {
    render(<Calculadora />)

    screen.getByRole('textbox')
  })

  it('shoud show me the numbers that have clicked', ()=> {
    render(<Calculadora />)
    const result = '0123456789'

    const numbers_nodes = numbers.map(number => {
      return screen.getByText(number)
    })

    numbers_nodes.forEach(node => {
      fireEvent.click(node)
    })

    const input = screen.getByRole('textbox')

    expect(input.value).toBe(result)

  })
  it('should show the operations symbols',()=>{
    
    render(<Calculadora/>)
    symbols.forEach((symbol)=>{
      screen.getAllByText(symbol)
    })
  })
  it('should show  operations between numbers',()=>{
    render(<Calculadora/>)
    //Arrange
    const response="1+1-1*1/1"
    const one = screen.getByText('1')
    const input=screen.getByRole('textbox')
    //Act
    symbols.forEach((symbol)=>{
      fireEvent.click(one)
      const operation= screen.getByText(symbol)
      fireEvent.click(operation)
    })
    fireEvent.click(one)
    //Assert
    expect(input.value).toBe(response)
    // response = 1+1-1*1/1
    
  })
  it('it should have a equal sign',()=>{
    render(<Calculadora/>)
    screen.getByText('=')
  })
  it('it should generate a result',()=>{
    render(<Calculadora/>)
    const one=screen.getByText(1)
    const two=screen.getByText(2)
    const operation=screen.getByText('+')
    fireEvent.click(one)
    fireEvent.click(operation)
    fireEvent.click(two)
    const response='3'
    const button=screen.getByText('=')
    fireEvent.click(button)
    const input=screen.getByRole('textbox')
    expect(input.value).toBe(response)
  })
})