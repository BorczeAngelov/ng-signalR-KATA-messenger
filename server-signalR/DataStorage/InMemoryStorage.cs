using server_signalR.DataModels;
using System;
using System.Collections.Generic;

namespace server_signalR.DataStorage
{
    internal class InMemoryStorage
    {
        private static Lazy<InMemoryStorage> _instance => new Lazy<InMemoryStorage>(() => new InMemoryStorage());
        internal static InMemoryStorage GetInstance => _instance.Value;

        private InMemoryStorage()
        {
            this.ChatRoom = new ChatRoom()
            {
                RoomName = "The Chatroom",
                Messages = new List<string>
                {
                    "Hardcoded demo message 01",
                    "Hardcoded demo message 02",
                }
            };
        }

        internal ChatRoom ChatRoom { get; }
    }
}
