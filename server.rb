require 'webrick'

server = WEBrick::HTTPServer.new :Port => 8000
server.mount "/", WEBrick::HTTPServlet::FileHandler, './'

trap('INT') { server.stop }
server.start