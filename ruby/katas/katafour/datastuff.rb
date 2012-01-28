# so, what should I do when I want to include the football stuff
# 1. make a base class
# 2. make properties/methods for getting the right lines from the files
# 3. ...

class WeatherAnalyzer
  # read the file, store every line in a record
  # create an iterator
  # find through some predicate the right line

  attr_reader :filepath
  attr_reader :stats

  def initialize(filepath)
    @filepath = filepath
    @stats = []
  end

  def analyze()
   headerfound = false
   tablefound = false

   lines = File.readlines(@filepath) 
   lines.each{ |line| 
     if(line[0,4] == "  Dy")
       headerfound = true
     elsif(headerfound && line[0,4] == "   1")
       tablefound = true
     elsif(line[0,4] == "  mo")
       tablefound = false
     end

     if(tablefound)
       stats << WeatherStats.new(line)
     end
   }
  end

  def findsmallestspread()
   # i would like to do a findfirst or predicate-like search 
  end
end

class WeatherStats
  
  attr_reader :data
  
  def initialize(data)
    @data = data.split( /\s+/ )
  end

  def getdaynumber()
    return @data[1].chomp(' ').to_i
  end

  def gettemperaturespread()
    return @data[2].chomp(' ').to_i - @data[3].chomp(' ').to_i
  end
end

stats = WeatherAnalyzer.new("/Users/overeem/Documents/Code/rubykatas/katafour/weather.txt")
stats.analyze()
