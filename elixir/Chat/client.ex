defmodule Chat.Client do

  def start(server, name) do
    send(server, {:nickname, name, self})
    chat(server, name)
  end

  def chat(server, name) do
    receive do
      {:sendto, receiver, msg} ->
        send(server, {:send, name, receiver, msg})
        chat(server, name)
      {:receive, sender_nick, msg} ->
        IO.puts name <> ": " <> msg <> " from " <> sender_nick
        send(server, {:send, name, sender_nick, "back at you"})
        chat(server, name)
    end
  end
end
