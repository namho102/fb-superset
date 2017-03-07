import scrapy
import time

# urls = ['http://www.worldfootball.net/schedule/eng-premier-league-2016-2017-spieltag/' + str(x + 1) for x in range(20)]
# print(urls)

URL = "http://www.worldfootball.net/schedule/eng-premier-league-2016-2017-spieltag/%d"

class TableSpider(scrapy.Spider):
    name = 'tablespider'
    start_urls = [URL % 1]
    page_number = 1

    def parse(self, response):

        for row in response.css('div.content > div > div:nth-child(7) table.standard_tabelle tr'):
        	yield {'team': row.css('td:nth-child(3) a ::text').extract_first(), 'pts': row.css('td:nth-child(10) ::text').extract_first()}

        # next_page = response.css('div.prev-post > a ::attr(href)').extract_first()
        self.page_number += 1
        if self.page_number <= 26:
        	yield scrapy.Request(URL % self.page_number, callback=self.parse)
        # if next_page:
        #     yield scrapy.Request(response.urljoin(next_page), callback=self.parse)

