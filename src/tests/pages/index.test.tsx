import React from 'react'
import {fireEvent, render} from '../testUtils'
import {Home} from '../../pages'

describe('Home page', () => {
  it('matches snapshot', () => {
    const {asFragment} = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', (done) => {
    const {getByText} = render(<Home />, {})
    // eslint-disable-next-line no-console
    console.log(getByText('Test Button'))

    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
    done()
  })
})
