ra = rand(100)

puts "guess what the number is"

guessra = gets

puts "you guessed #{guessra}"
puts "and that is ...."
puts "to low" if ra > guessra.to_i
puts "to high" if ra < guessra.to_i
puts "precies goed!" if ra == guessra.to_i

puts ""
puts "want het was #{ra}"
