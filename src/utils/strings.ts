export const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export const transformToLink = (str: string) => {
  return removeAccents(str).toLowerCase().replace(/\s/g, '_');
}