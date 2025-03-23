n, m = map(int, input().split())
max_sum = -1
winner_index = -1

for i in range(n):
    row = list(map(int, input().split()))
    total = sum(row)
    if total > max_sum:
        max_sum = total
        winner_index = i

print(max_sum)
print(winner_index)
