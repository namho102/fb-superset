import json
from pprint import pprint
from sets import Set

with open('table.json') as data_file:    
    data = json.load(data_file)

# print(data[0]['pts'])

extendedTable = [[int(x['pts']), int(x['pts']) + 1, int(x['pts']) + 3] for x in data] 

pprint(extendedTable)

pos = [[] for i in range(20)]

t = extendedTable

for i in range(20):
	# j = i + 1
	for j in xrange(i + 1, 20):
		if t[i][0] <= t[j][1] or t[i][0] <= t[j][2]:
			pos[i].append(j + 1)
# pprint(pos)


newPos = pos

for i in range(20):
	for col in pos[i]:
		if i + 1 not in newPos[col - 1]:
			newPos[col - 1].append(i + 1)

pprint(newPos)

