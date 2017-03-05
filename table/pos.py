import json
from pprint import pprint

with open('table.json') as data_file:    
    data = json.load(data_file)

extendedTable = [[int(x['pts']), int(x['pts']) + 1, int(x['pts']) + 3] for x in data] 

pprint(extendedTable)

pos = [[] for i in range(20)]

t = extendedTable

for i in range(20):
	for j in xrange(1, i):
		if t[i][1] >= t[j][0] or t[i][2] >= t[j][0]:
			pos[i].append(j + 1)
	for j in xrange(i, 20):
		if t[i][0] <= t[j][1] or t[i][0] <= t[j][2]:
			pos[i].append(j + 1)

pprint(pos)

for i in range(20):
	# maxPos = 
	data[i]['pos'] = {'current': i + 1, 'lowest': max(pos[i]), 'highest': min(pos[i])}



print(data)

with open('result.json', 'w') as fp:
    json.dump(data, fp)


