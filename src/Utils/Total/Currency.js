function Currency(info) {
  switch (info) {
    case 'uah':
      return '₴';
    case 'usd':
      return '$';
    case 'eur':
      return '€';
    case 'php':
      return '₱';
    default:
      return '₴';
  }
}

export default Currency;
