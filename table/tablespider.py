import scrapy
import time

class TableSpider(scrapy.Spider):
    name = 'tablespider'
    start_urls = ['http://www.skysports.com/premier-league-table']

    def parse(self, response):

        for row in response.css('tbody .standing-table__row'):
        	yield {'team': row.css('.standing-table__cell--name a ::text').extract_first(), 'pts': row.css('td:nth-child(10) ::text').extract_first()}

        # next_page = response.css('div.prev-post > a ::attr(href)').extract_first()
        # if next_page:
        #     yield scrapy.Request(response.urljoin(next_page), callback=self.parse)
