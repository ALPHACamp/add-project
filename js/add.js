function add (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a <= 0 || b <= 0) {
    return 'something wrong!!'
  }
  return a + b
}
