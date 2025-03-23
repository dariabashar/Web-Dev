n, m = map(int, input().split())

matrix = []
global_max = -2**31  


for _ in range(n):
    row = list(map(int, input().split()))
    matrix.append(row)
    row_max = max(row)
    if row_max > global_max:
        global_max = row_max


count = 0
for row in matrix:
    if global_max in row:
        count += 1

print(count)
