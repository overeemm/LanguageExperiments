defmodule Counter do

  def counter(count) do
    receive do
      :inc ->
        Counter.counter(count + 1)
      :dec ->
        Counter.counter(count - 1)
      {:get, pid} ->
        send(pid, count)
        Counter.counter(count)
    end
  end

  def spawnCounter do
    spawn(Counter, :counter, [0])
  end

end
