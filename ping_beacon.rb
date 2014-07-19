require 'net/http'
require 'nokogiri'

# Beacon url
url = 'https://beacon.nist.gov/rest/record/last'

# Get Beacon data
xml = Net::HTTP.get_response(URI.parse(url)).body

# Parse outputValue from xml
doc = Nokogiri::XML(xml)

puts doc.at_xpath('//record').at_xpath('//outputValue').content