def centered_average(nums):
    nums.sort()
    
    res = nums[1:-1]
    return sum(res) // len(res)