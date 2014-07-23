require 'rubygems'
require 'bundler'
Bundler.require

require './server.rb'
set :protection, :except => :frame_options
run Sinatra::Application