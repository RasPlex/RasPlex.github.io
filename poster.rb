#!/usr/bin/env ruby

require 'httparty'
require 'yaml'
require 'uri'

$config = YAML::load( File.open( 'private.yml' ) )
$creds = $config['tinycc']


def minify( post_url, slug )
  post_uri = URI.escape(post_url)
  url = "http://tiny.cc/?c=rest_api&m=shorten&version=2.0.3&format=json&shortUrl=#{slug}&longUrl=#{post_uri}&login=#{$creds['user']}&apiKey=#{$creds['key']}"
  #response = HTTParty.get(url)
  return url
end


def publish
  post_url='http://www.rasplex.com'
  slug='blah'
  url = minify(post_url,slug)
  puts url

end


def new(title, type)

  dateshort = Time.now().strftime("%Y-%m-%d")
  datelong  = Time.now().strftime("%Y-%m-%d %H-%M-%S")

  fname = "#{dateshort}-#{title.downcase.split(' ').join('-')}.markdown"
  header_data = {
    "title"    => title,
    "modified" => datelong,
    "layout"   => type,
    "tags"     => []
  }

  header = YAML.dump(header_data)
  header = "#{header}---"

  outname = "_posts/"+fname
  outfile = File.open(outname,"w")
  outfile.write(header)
  outfile.close
  
  puts "Post file created at #{outname}"

end


command = ARGV[0]
type    = ARGV[1]
title   = ARGV[2]

if command == 'new'
  new(title, type)
end
