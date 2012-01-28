input2 = "/Users/overeem/Dropbox/Ereader/deboekenlijst-archive.txt"

def parseTweet(line)
  parts = line.scan(/michielovereem (. )?@deboekenlijst (.*) "(.*)"( - (.*))?/i)
  if parts.size == 1
    boek = {
      "auteur" => parts[0][1],
      "title" => parts[0][2],
      "comment" => parts[0][4],
      "line" => line }
  else
    boek = {}
  end
end

def parseDatum(line)
  parts = line.scan(/^(.+) (PM|AM) (.*) from/i)
  if (parts.size == 1)
    parts[0][2]
  else
    ""
  end
end

boeken = []

file = File.new(input2, "r")
while (line = file.gets)
  if line == ""
    puts "leeg"
  elsif line.match(/^michielovereem/) 
    b = parseTweet(line)
    boeken.push(b)
  elsif line.match(/^[0-9]/)
    boeken.last["datum"] = parseDatum(line)
  end
end

# Create a new file and write to it  
File.open('test.csv', 'w') do |f2|  
#   # use "\n" for two lines of text  
#     f2.puts "Created by Satish\nThank God!"  
  boeken.each{ |b| 
    auteur = b["auteur"]
    title = b["title"]
    comment = b["comment"]
    datum = b["datum"]

    f2.puts "\"#{auteur}\", \"#{title}\", \"#{comment}\", \"#{datum}\""
  }
end 

puts boeken.size

