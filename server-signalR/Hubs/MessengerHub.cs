using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace server_signalR.Hubs
{
    public class MessengerHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            Clients.Caller.SendAsync("onConnected", "Testing: you are connected.");
            Clients.Others.SendAsync("onConnected", "Testing: another client has connected.");
            return base.OnConnectedAsync();
        }
    }
}
