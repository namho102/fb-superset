import scrapy
import time

class TableSpider(scrapy.Spider):
    name = 'tablespider'
    start_urls = ['http://www.worldfootball.net/schedule/eng-premier-league-2016-2017-spieltag/1/', 'http://www.worldfootball.net/schedule/eng-premier-league-2016-2017-spieltag/2/']

    def parse(self, response):

        for row in response.css('div.content > div > div:nth-child(7) table.standard_tabelle tr'):
        	yield {'team': row.css('td:nth-child(3) a ::text').extract_first(), 'pts': row.css('td:nth-child(10) ::text').extract_first()}

        # next_page = response.css('div.prev-post > a ::attr(href)').extract_first()
        # if next_page:
        #     yield scrapy.Request(response.urljoin(next_page), callback=self.parse)

