import { sum } from '../Sum';

test('should return a sum of two numbers', () => {
    const result = sum(3, 2);
    expect(result).toEqual(5);
});
