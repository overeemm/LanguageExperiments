# errors made
# - forgot about stop condition: when did we not find the needle?
# - some typo's in updating upper/lower and currentindex

class LoopBinarySearcher
 
  public
    def chop(needle, stack)
      foundindex = -1
      
      if(stack.length > 0)
        lowerindex = 0
	upperindex = stack.length - 1
        currentindex = stack.length / 2

        while(true)
          if(stack[currentindex] == needle)
	    foundindex = currentindex
	    break
	  elsif lowerindex == upperindex
	    break
	  else
	    if(stack[currentindex] > needle)
	      upperindex = currentindex
	    else 
	      lowerindex = currentindex + 1
	    end
	    currentindex = lowerindex + ( (upperindex - lowerindex) / 2 )
	  end
	end
      end
      return foundindex
    end

end
