const {scanAhead, reverseNodesInKGroups} = require('./reverseNodesInKGroups');

describe('testing reverseNodesInKGroups', () => {
  describe('reverseNodedsInKGroups', () => {
    it('returns a modified linked list when given a linked list and a k value', () => {
      const input1 = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: null,
                    }
                }
            }
        }
      };

      const input2 = 2;

      const expected = {
        val: 2,
        next: {
          val: 1,
          next: {
            val: 4,
            next: {
              val: 3,
              next: {
                val: 5,
                next: null,
              }
            }
          }
        }
      };

      expect(reverseNodesInKGroups(input1, input2)).toEqual(expected);
    })
  })
})