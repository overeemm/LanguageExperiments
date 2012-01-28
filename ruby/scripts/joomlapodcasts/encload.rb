require 'net/ftp'
require 'xmlrpc/client'

mp3file = ARGV[0]
ftpurl = ARGV[1]
ftpusername = ARGV[2]
ftppassword = ARGV[3]
ftpdir = ARGV[4]
httpurl = ARGV[5]

joomlaurl = ARGV[6]
joomlapath = ARGV[7]
joomlaadminpassword = ARGV[8]

mp3title = ARGV[9]
mp3datetime = ARGV[10]
mp3category = ARGV[11]

tempmp3file = mp3file + "orig.mp3"
filename = File.basename(mp3file)

puts ">> encoding "+filename

File.delete(tempmp3file) if File.exists?(tempmp3file)
File.rename(mp3file, mp3file + "orig.mp3")
result = `lame -V9 -b 32 -h "#{mp3file}orig.mp3" "#{mp3file}"`

puts ">> connect to "+ftpurl

ftp = Net::FTP.new
ftp.connect(ftpurl, 21)
ftp.login(ftpusername, ftppassword)

puts ">> uploading " + filename + " to "+ftpdir

ftp.chdir(ftpdir)
ftp.put(mp3file)
ftp.close

httplocation = httpurl + filename

puts ">> done, find the file at " + httplocation 

joomlasrv = XMLRPC::Client.new(joomlaurl, joomlapath, 80)
filesize = File.size(mp3file)
post = {
  "dateCreated" => mp3datetime,
  "description" => "{enclose #{httplocation} #{filesize} audio/mpeg}",
  "title" => mp3title,
  "categories" => [ mp3category ]
 }

puts ">> publishing on joomla site " + joomlaurl + joomlapath

param = joomlasrv.call("metaWeblog.newPost", "dummy", "admin", joomlaadminpassword, post, false)

#param = server.call("metaWeblog.getCategories", "dummy", "admin", joomlaadminpassword)
#param.each do|c|
#  title = c['title']
#  puts "cat = #{title}"
#end
