describe("AllActivities", function() {
  describe("totalCost", function() {
    it("takes the cost of each activity in a list and returns the total cost of all activities contained", function() {
      var testActivity = Object.create(AllActivities);
      testActivity.totalCost(40);
      testActivity.should.equal(40);
    });
  });
});
