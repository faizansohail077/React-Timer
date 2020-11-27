import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('to check app', () => {
  let container = shallow(<App />)
  it('should contain a div', () => {
    expect(container.find('div').length).toEqual(1)
  })
})