n, m = map(int, input().split())

max_value = -2**31  
max_row = 0
max_col = 0

for i in range(n):
    row = list(map(int, input().split()))
    for j in range(m):
        if row[j] > max_value:
            max_value = row[j]
            max_row, max_col = i, j

print(max_value)
print(max_row, max_col)
