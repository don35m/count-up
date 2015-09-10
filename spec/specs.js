describe('countUp', function() {
  it("Counts up to 10 by multiples of 1", function() {
    expect(countUp(1, 10)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  });

  it("Counts up to 10 by multiples of 2", function() {
    expect(countUp(2, 10)).to.eql([2, 4, 6, 8, 10])
  });
});
