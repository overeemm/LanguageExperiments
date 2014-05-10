defmodule Chat.Server do

  def start() do
    start([])
  end

  def start(clients) do
    receive do
      {:nickname, nick, pid} ->
        start([{nick, pid}|clients])
      {:bye, nick} ->
        start(List.delete_at(clients, Enum.find_index(clients, fn({n,_}) -> n == nick end)))
      {:send, sender_nick, nick, msg} ->
        {_, pid} = Enum.find(clients, fn({n,_}) -> n == nick end)
        #{_, sender_pid} = Enum.find(clients, fn({n,_}) -> n == sender_nick end)
        send(pid, {:receive, sender_nick, msg})
        start(clients)
    end
  end

end
