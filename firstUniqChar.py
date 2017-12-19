# Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

# Examples:

# s = "leetcode"
# return 0.

# s = "loveleetcode",
# return 2.
# Note: You may assume the string contain only lowercase letters.

# Input: string 
# Output: index of first non-repeating character in input string

# Skeleton
# - create variable containing string of all letters
# - loop through letters
# - if the count of current letter in input string is == 1 
# -- concatenate it to string or array 
# - call min on that string or array and return the result

# This solution is too slow
# class Solution:
#     def firstUniqChar(self, s):
#       for x in s:
#         if s.count(x) == 1:
#           return s.index(x)
#       return -1

class Solution:
    def firstUniqChar(self, s):
      letters = 'abcdefghijklmnopqrstuvqxyz'
      index = []
      for l in letters:
        if s.count(l) == 1:
          index.append(s.index(l))
      if len(index) > 0:
        return min(index)
      else:
        return -1

test = Solution()
print(test.firstUniqChar('leetcode'))