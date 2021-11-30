import prettifyStoryStatNum from "../prettifyStoryStatNum";

describe('prettifyStoryStatNum utility function', () => {
  it('returns a stringified number if its value is under 1000', () => {
    const testStatNum = 876;

    const prettifiedTestStatNum = prettifyStoryStatNum(testStatNum);

    expect(prettifiedTestStatNum).toBe('876');
  });

  it('returns a string', () => {
    const testStatNum = 3526523;

    const prettifiedTestStatNum = prettifyStoryStatNum(testStatNum);

    expect(typeof prettifiedTestStatNum === 'string').toBeTruthy();
  })

  it('returns the number of thousands followed by an `K`', () => {
    const testStatNum = 215745;

    const prettifiedTestStatNum = prettifyStoryStatNum(testStatNum);

    expect(prettifiedTestStatNum).toBe('216K');
  })
})