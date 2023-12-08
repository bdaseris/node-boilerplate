import { describe, test, expect } from 'vitest'
import { StringUtil } from '@/common/utils'

describe('StringUtil toBoolean', () => {
  test('should return true for boolean value', () => {
    const result = StringUtil.toBoolean(true)
    expect(result).toBe(true)
  })

  test('should return true for string value "true"', () => {
    const result = StringUtil.toBoolean('true')
    expect(result).toBe(true)
  })

  test('should return false for string value "false"', () => {
    const result = StringUtil.toBoolean('false')
    expect(result).toBe(false)
  })

  test('should return true for any non-undefined value', () => {
    const result = StringUtil.toBoolean(42)
    expect(result).toBe(true)
  })

  test('should return false for undefined value', () => {
    const result = StringUtil.toBoolean(undefined)
    expect(result).toBe(false)
  })
})

describe('StringUtil toFloat', () => {
  it('should return a floating-point number when given a valid number as input', () => {
    const result = StringUtil.toFloat(5)
    expect(typeof result).toBe('number')
  })

  it('should return a floating-point number when given a valid string representation of a number as input', () => {
    const result = StringUtil.toFloat('3.14')
    expect(typeof result).toBe('number')
  })

  it('should return undefined when given undefined as input', () => {
    const result = StringUtil.toFloat(undefined)
    expect(result).toBeUndefined()
  })

  it('should return undefined when given null as input', () => {
    const result = StringUtil.toFloat(null)
    expect(result).toBeUndefined()
  })

  it('should return undefined when given an empty string as input', () => {
    const result = StringUtil.toFloat('')
    expect(result).toBeUndefined()
  })

  it('should return undefined when given a non-numeric string as input', () => {
    const result = StringUtil.toFloat('abc')
    expect(result).toBeUndefined()
  })
})

describe('StringUtil toString', () => {
  it('should return the input string when it is of type string', () => {
    const input = 'hello'
    const result = StringUtil.toString(input)
    expect(result).toBe(input)
  })

  it('should convert a non-string value to a string and return it', () => {
    const input = 123
    const result = StringUtil.toString(input)
    expect(result).toBe('123')
  })
})
