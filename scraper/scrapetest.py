from urllib.request import urlopen
from bs4 import BeautifulSoup

# html = urlopen("https://www.premierleague.com/tables")
html = urlopen("https://www.premierleague.com/tables?co=1&se=54&mw=1-1&ha=-1")

bsObj = BeautifulSoup(html.read(), 'lxml')

for team in bsObj.find(attrs={"data-ui-tab": "First Team"}).findAll("td", {"class": "team"}):
	print(team.find("span", {"class": "long"}).text)
# print(teams)

# print(bsObj.h1)