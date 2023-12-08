import { getenv } from '@/common/libs/dotenv'

describe('getenv', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return the value of the environment variable when it exists', () => {
    process.env.TEST_KEY = 'test_value'
    expect(getenv('TEST_KEY', 'fallback')).toEqual('test_value')
  })

  it('should return the fallback value when the environment variable does not exist', () => {
    expect(getenv('NON_EXISTENT_KEY', 'fallback')).toEqual('fallback')
  })

  it('should return fallback when the environment variable is an empty string', () => {
    process.env.TEST_KEY = ''
    expect(getenv('TEST_KEY', 'fallback')).toEqual('fallback')
  })

  it('should return the fallback value when the environment variable is undefined', () => {
    expect(getenv('undefined', 'fallback')).toEqual('fallback')
  })

  it('should return the fallback value when the environment variable is null', () => {
    expect(getenv('null', 'fallback')).toEqual('fallback')
  })

  it('should return undefined for a non-existing environment variable without fallback', () => {
    const value = getenv('NON_EXISTING_VARIABLE')

    expect(value).toBeUndefined()
  })
})
