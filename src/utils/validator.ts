/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const cpfMask = (value: any) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const rgMask = (value: any) => {
  return value
    .replace(/\DX-x/g, '')
    .replace(/^(\d{2})(\d{3})(\d{3})([\dX-x])$/, '$1.$2.$3-$4');
};

export const placaMask = (value: any) => {
  const mercosul = /([A-Za-z]{3}[0-9]{1}[A-Za-z]{1})/;
  const normal = /([A-Za-z]{3}[0-9]{2})/;
  const replaced = value.replace(/[^\w]/g, '');
  if (normal.exec(replaced)) {
    value = value.replace(/^([A-Za-z]{3})([0-9]{4})$/, '$1-$2');
  } else if (mercosul.exec(replaced)) {
    value = value.replace(
      /^([A-Za-z]{3})([0-9]{1})([A-Za-z]{1})([0-9]{2})$/,
      '$1 $2$3$4'
    );
  }
  return value;
};
