import { render } from 'react-dom'
import { Button } from 'shared/ui/Button/Button'

describe('classNames', () => {
  test('with first param', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST'))
  })

})
