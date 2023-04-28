function addSeparatorToNumber(value: number) {
  if (Number.isNaN(value)) {
    return '';
  }

  return value.toLocaleString('ko-KR');
}

export function addSeparator(value: string | number) {
  if (typeof value === 'number') {
    return addSeparatorToNumber(value);
  }

  return addSeparatorToNumber(+value);
}