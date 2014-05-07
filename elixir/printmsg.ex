defmodule PrintMsg do

  def print() do
    receive do
      :stop -> IO.puts :stop
      msg ->
        IO.puts msg
        PrintMsg.print
    end
  end

  def spawnPrint do
    spawn(PrintMsg, :print, [])
  end

end
