def sum67(nums):
    s = 0
    skip = False
    for n in nums:
        if n == 6:
            skip = True
            continue
        if n == 7 and skip:
            skip = False
            continue
        if not skip:
            s += n
    return s