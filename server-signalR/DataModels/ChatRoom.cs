using System.Collections.Generic;

namespace server_signalR.DataModels
{
    public class ChatRoom
    {
        public string RoomName { get; set; }
        public List<string> Messages { get; set; } //TODO: add extra info in messages like userName, timestamp etc.
    }
}
