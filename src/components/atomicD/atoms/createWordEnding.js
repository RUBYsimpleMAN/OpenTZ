function createWordEnding( num, endto1, endto234, endto056789 ) {
  if ( ( num % 100 - num % 10 ) / 10 /* second digit */=== 1 ) {
    return endto056789;
  }
  if ( num % 10 === 1 ) {
    return endto1;
  }
  if ( [ 2, 3, 4 ].includes( num % 10 ) ) {
    return endto234;
  }
  return endto056789;
}

export default createWordEnding;
