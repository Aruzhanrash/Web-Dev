n, m, p = map(int, input().split())

array_1 = [list(map(int, input().split())) for _ in range(n)]
array_2 = [list(map(int, input().split())) for _ in range(m)]

result = array_1 + array_2

for row in result:
    print(row)