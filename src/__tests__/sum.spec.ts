import { Sum } from '../functions/sum';

test('Sum º^º', () => {
    const result = Sum(2, 3);
    expect(result).toEqual(5);
})