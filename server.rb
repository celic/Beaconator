require 'webrick'

server = WEBrick::HTTPServer.new :Port => ARGV[0]
server.mount "/", WEBrick::HTTPServlet::FileHandler, './'

trap('INT') { server.stop }
server.start