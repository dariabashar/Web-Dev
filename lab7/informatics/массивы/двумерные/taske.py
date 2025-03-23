n, m = map(int, input().split())

best_throw = -1
best_sum = -1
winner_index = -1

for i in range(n):
    row = list(map(int, input().split()))
    max_in_row = max(row)
    sum_in_row = sum(row)

    if max_in_row > best_throw:
        best_throw = max_in_row
        best_sum = sum_in_row
        winner_index = i
    elif max_in_row == best_throw:
        if sum_in_row > best_sum:
            best_sum = sum_in_row
            winner_index = i
        elif sum_in_row == best_sum:
            # Побеждает спортсмен с меньшим номером (он уже сохранён)
            continue

print(winner_index)
