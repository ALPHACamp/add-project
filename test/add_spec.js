var should = chai.should()
describe('function add', function () {
  it('should add two number and return result', function () {
    var result = add(2, 1)
    result.should.be.equal(3)
  })
  it('string inputs should be illegal', function () {
    var result = add('2', '1')
    result.should.be.equal('something wrong!!')
  })
})
