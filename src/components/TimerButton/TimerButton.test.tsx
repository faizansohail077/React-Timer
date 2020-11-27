import React from 'react'
import { shallow } from 'enzyme'
import TimerButton from './TimerButton'

describe('to check app', () => {
  let container = shallow(<TimerButton />)
  it('should contain a div', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1)
  })
})