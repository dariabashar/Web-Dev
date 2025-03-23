n, m = map(int, input().split())

matrix = []
global_max = -2**31  

for _ in range(n):
    row = list(map(int, input().split()))
    matrix.append(row)
    row_max = max(row)
    if row_max > global_max:
        global_max = row_max

winners = []
for i in range(n):
    if global_max in matrix[i]:
        winners.append(i)

print(len(winners))
print(*winners)
