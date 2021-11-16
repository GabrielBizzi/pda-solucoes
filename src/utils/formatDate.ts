const formatDate = (value: string): string =>
  new Date(value)
    .toISOString()
    .split('T')[0]
    .split('-')
    .slice(0, 3)
    .reverse()
    .join('/');
export default formatDate;
