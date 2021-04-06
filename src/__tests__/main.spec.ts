import { main } from '../main'

describe('Template:', () => {
  it('should call the main function', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation()
    main()
    expect(spy).toHaveBeenCalledWith('Hello, world!')
  })
})
