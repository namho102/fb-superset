import scrapy

class TableSpider(scrapy.Spider):
    name = 'tablespider'
    start_urls = ['/home/foo/node2/e-store-server/.gitignore']

    def parse(self, response):
        for team in response.css('td.team'):
        	print(team)
        	yield {'team': team.css('span ::text').extract_first()}

        # next_page = response.css('div.prev-post > a ::attr(href)').extract_first()
        # if next_page:
        #     yield scrapy.Request(response.urljoin(next_page), callback=self.parse)
