import React from 'react'
import { shallow } from 'enzyme'
import SetTimer from './SetTimer'

describe('check timer', () => {
  
    let container = shallow(<SetTimer/>)
  
  it('should contain a div', ()=>{
    expect(container.contains('[]'))
  })
})