import json
from pprint import pprint
import numpy as np

with open('weeks.json') as data_file:    
    data = json.load(data_file)

arr = np.asarray(data)

splitted_list = np.split(arr, len(data)/20)
# pprint(splitted_list)

# for week in splitted_list:
# 	print(week[0])

data = np.array(splitted_list).tolist()
with open('result.json', 'w') as fp:
    json.dump(data, fp)


# pprint(data)	