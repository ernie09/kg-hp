const mapNumericalToRoman = (val: number): 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | string => {
  switch (val) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    default:
      return `${val}`;
  }
};

export default mapNumericalToRoman;
