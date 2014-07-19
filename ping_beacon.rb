require 'net/http'
require 'nokogiri'

# Beacon url
url = 'http://beacon.nist.gov/rest/record/last'

# Get Beacon data
xml = Net::HTTP.get_response(URI.parse(url)).body

# Parse outputValue from xml
doc = Nokogiri::XML(xml)

# Clear previous output
file = File.open "beacon", "w"
file.truncate 0

# Output beacon to file
puts doc.at_xpath('//record').at_xpath('//outputValue').content.to_i 16