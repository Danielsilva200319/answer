from math import ceil
def minNum(samDaily,KellyDaily,diffence):
    dif = KellyDaily - samDaily
    if dif <= 0:
        return -1
    day_required = ceil((diffence + 1) / dif)
    return day_required
samDaily = 4
KellyDaily = 5
difference = 1
print(minNum(samDaily,KellyDaily,difference))