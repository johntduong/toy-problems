linkedlist = {
  'val': 0,
  'next': {
    'val': 1,
    'next': {
      'val': 2,
      'next': None
    }
  }
}

# Input: linked list head
# Output: reversed list head

# Skeleton
# - while curr exists or does not equal None
# - if there's no existing result
# -- store the current node's next value
# -- make the current node prev and result_head
# -- make current node's value None 
# -- make next the new current node 
# - else
# -- store current node's next value
# -- make current node's next value equal prev
# -- make prev equal current node
# -- make curr equal next
# - return reversed list head


class Solution:
  def reverseList(self, l):
    print('HELLO')
    

test = Solution()
print(test.reverseList(linkedlist))