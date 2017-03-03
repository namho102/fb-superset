import scrapy
import time

class TableSpider(scrapy.Spider):
    name = 'tablespider'
    # start_urls = ['http://www.skysports.com/premier-league-table']
    start_urls = ['http://bleacherreport.com/articles/2657822-premier-league-table-final-week-1-2016-standings-results-and-week-2-fixtures']

    def parse(self, response):
        # for team in response.css('td.standing-table__cell.standing-table__cell--name'):
        for team in response.css('#main-content > article > div.organism.contentStream > div > div:nth-child(11) > table > tbody > tr'):
        #mainContent > div > div.mainTableTab.active > div.allTablesContainer > div > div > div > table > tbody > tr.tableDark > td.team > a > span.long
        	print(team)
        	yield {'team': team.css('td:nth-child(2) ::text').extract_first()}

        # next_page = response.css('div.prev-post > a ::attr(href)').extract_first()
        # if next_page:
        #     yield scrapy.Request(response.urljoin(next_page), callback=self.parse)
