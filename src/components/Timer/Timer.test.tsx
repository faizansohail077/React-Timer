import React from 'react'
import { shallow } from 'enzyme'
import Timer from './Timer'

describe('to check app', () => {
  let container = shallow(<Timer />)
  it('should contain a div', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1)
  })
})