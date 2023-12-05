def findLongestSubsequence(arr):
    arr.sort()
    firstOdd = firstEven = lastOdd = lastEven = -1
    for i in range(len(arr)):
        lastEven = i
        if firstEven == -1:
            firstEven = i
        else:
            lastOdd = i
            if firstOdd == -1:
                firstOdd = i
    ans = 1
    if firstOdd != -1:
        ans = max(ans,lastOdd - firstOdd + 1)
    if firstEven != -1:
        ans = max(ans,lastEven - firstEven + 1)
    return ans
s = [1,3,5,7]
print(findLongestSubsequence(s))