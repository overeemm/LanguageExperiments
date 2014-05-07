defmodule EchoMsg do

  def echo() do
    receive do
      {sender, :stop} -> send(sender, :stop)
      {sender, msg} ->
        send(sender, msg)
        EchoMsg.echo
    end
  end

  def spawnEcho do
    spawn(EchoMsg, :echo, [])
  end

end
