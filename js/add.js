function add (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'something wrong!!'
  }
  return a + b
}
