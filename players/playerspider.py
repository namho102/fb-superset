import scrapy
import time

class PlayerSpider(scrapy.Spider):
    name = 'playerspider'
    start_urls = ['https://www.whoscored.com/Teams/13/Show/England-Arsenal']

    def parse(self, response):
        # for row in response.css('tr'):
        #     yield {'name': row.css('a.player-link ::text').extract_first()}

        # self.logger.info('Hiiiiiiiiiiiiiiiiii')
        for a in response.css('a.playerlink').extract():

        	yield {"link": a}

        # next_page = response.css('div.prev-post > a ::attr(href)').extract_first()
        # if next_page:
        #     yield scrapy.Request(response.urljoin(next_page), callback=self.parse)
