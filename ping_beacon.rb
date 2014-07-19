require 'net/http'
require 'nokogiri'

# Clear previous output
file = File.open "beacon", "w"
file.truncate 0

# Beacon url
url = 'https://beacon.nist.gov/rest/record/last'

# Get Beacon data
xml = Net::HTTP.get_response(URI.parse(url)).body

# Parse outputValue from xml
doc = Nokogiri::XML(xml)

# Output beacon to file
puts doc.at_xpath('//record').at_xpath('//outputValue').content.to_i 16