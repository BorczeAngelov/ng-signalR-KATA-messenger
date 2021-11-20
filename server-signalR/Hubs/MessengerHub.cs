using Microsoft.AspNetCore.SignalR;
using server_signalR.DataStorage;
using System.Threading.Tasks;

namespace server_signalR.Hubs
{
    public class MessengerHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            Clients.Caller.SendAsync("onConnected", InMemoryStorage.GetInstance.ChatRoom);
            return base.OnConnectedAsync();
        }

        public Task SendMessage(string message)
        {
            InMemoryStorage.GetInstance.ChatRoom.Messages.Add(message);
            return Clients.All.SendAsync("onUpdatedChatRoom", InMemoryStorage.GetInstance.ChatRoom);
        }
    }
}
