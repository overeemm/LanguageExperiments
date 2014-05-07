defmodule Test do

# c("test.ex")
# Test.concat([1,2,3], [4,5,6])

  def concat(xs, ys) do
    xs ++ ys
  end

  def sum(xs) do
    List.foldl(xs, 0, (fn(x,y) -> x + y end))
  end

  def sumlists(xs, ys, zs) do
    Test.sum.(xs) + Test.sum.(ys) + Test.sum.(zs)
  end

  def sum3(x,y,z) do
    x + y + z
  end

  def matchPair({a,a}) do
    {a,a} = {42,42}
  end

#  {_, tweede, _} = {:foo, :bar, :baz}


# X  [x, y, x] = [1, 2, 3]
#   [x, y, x] = [1, 2, 1]
#   [_, _, _] = [1, 2, 3]
# X [_, _, _] = [1, 2, 3, 4]
#   [x | _] = [1, 2, 3]
#   [x | _] = [1, 2, 3, 4]
# X [x] = []
# X [_] = []
#   {x, :bar} = {:foo, :bar}
#   {x, :bar} = {:bar, :bar}

  def fromTupleToList({x,y}) do
    [x,y]
  end

end
