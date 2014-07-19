set :output, "beacon.xml"

every 1.minute do 
	runner "ping_beacon"
end