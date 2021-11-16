import formatDate from '../../utils/formatDate';

test('should return a date formated', () => {
    const result = formatDate('2021-10-20T15:04:45.3234422-03:00');
    expect(result).toEqual('20/10/2021');
})