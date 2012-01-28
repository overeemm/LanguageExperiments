# errors made while coding
# - forgot the need for the offset to thread through the recursive calls
# - the offset needs to be corrected when recursive checking the second half
# - the second half starts at half + 1, not half

class RecursiveBinarySearcher
  private
    def chop_with_offset(needle, offset, stack)
      if(stack.length == 0)
        return -1
      end

      half = (stack.length) / 2
    
      if(stack[half] == needle)
        return offset+half
      elsif (stack[half] < needle)
        return chop_with_offset(needle, half+1+offset, (stack[half + 1, stack.length]))
      else
        return chop_with_offset(needle, offset, (stack[0, half]))
      end
    end
    
  public
    def chop(needle, stack)
      chop_with_offset(needle, 0, stack)
    end
end
