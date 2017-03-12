import json
from pprint import pprint
import pandas as pd

with open('weeks.json') as data_file:    
    data = json.load(data_file)

with open('results.json') as data_file:    
    results = json.load(data_file)    


data_frame = pd.DataFrame(data)
results_frame = pd.DataFrame(results)

df = pd.merge(data_frame, results_frame, how='left', on=['week', 'team'])
# print(s1)

def getGoals( str ):
	str = str.strip()
	if str == "resch.":
		return '', ''
	else:	
		goals = str.split()[0].split(':')
		# print(goals[1])
		return int(goals[0]), int(goals[1])

full = []

for index, row in df.iterrows():
	obj = {}
	obj['week'] = row['week']
	obj['team'] = row['team']
	obj['position'] = row['position']
	obj['opponent'] = row['opponent']
	home = True
	if row['opponent'] == row['opponent']:
		goalsFor, goalsAgainst = getGoals(row['detail'])
		obj['goalsFor'] = goalsFor
		obj['goalsAgainst'] = goalsAgainst
		if goalsFor != '':
			if goalsFor > goalsAgainst:
				obj['result'] = 'W'
			elif goalsFor == goalsFor:
				obj['result'] = 'D'	
			else:
				obj['result'] = 'L'
		else:
			obj['result'] = ''			
		# print(row['opponent'])
	else:
		home = False	

	obj['home'] = home	
	full.append(obj)	

for row in full:
	if not row['home']:
		week = row['week']
		i = (week - 1)*20
		# print('i = ', i)
		for j in range(i, i + 20):
			if full[j]['opponent'] ==  row['team']:
				# print(full[j]['opponent'], full[j]['team'])
				row['opponent'] = full[j]['team']
				row['goalsFor'] = full[j]['goalsAgainst']
				row['goalsAgainst'] = full[j]['goalsFor']
				if full[j]['result'] == 'W':
					row['result'] = 'L'
				elif full[j]['result'] == 'D':
					row['result'] = 'D'
				else:
					row['result'] = ''	


# pprint(full)

with open('data.json', 'w') as fp:
    json.dump(full, fp)

# pprint(df1)
# pprint(df2)
# for row in data:
# 	i = week
# 	for i in range()