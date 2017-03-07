# Venv 
source venv/bin/activate
# Run spider
scrapy runspider tablespider.py -o table.json
# Calculate possible positions
python pos.py
# Simple Server
cd vis
python -m SimpleHTTPServer
