import { classNames } from './classNames'

describe('classNames', () => {
    test('baseTestSuit for classNames helper with 1st arg supplied', () => {
        expect(classNames('someClassName')).toBe('someClassName')
    })
})
