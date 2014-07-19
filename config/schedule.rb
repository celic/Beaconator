set :output, "beacon.xml"
job_type :ruby_runner, 'cd :path && ruby :task :output'

every 1.minute do 
	ruby_runner "ping_beacon.rb"
end