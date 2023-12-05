import { useState } from "react";
import Image from "next/image";

const Chat = ({ messages }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      // Placeholder pour la logique d'envoi du message
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
      <div
        className="bg-letter-grey rounded-sm border border-black-button"
        style={{ height: "700px", overflowY: "auto" }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${
              index % 2 === 0 ? "items-start" : "items-end"
            }`}
          >
            <div
              className={`flex ${
                index % 2 === 0 ? "items-end" : "justify-end"
              }`}
            >
              <div
                className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
                  index % 2 === 0 ? "order-2 items-start" : "order-1 items-end"
                }`}
              >
                <div>
                  <span
                    className={`px-4 py-2 rounded-lg inline-block ${
                      index % 2 === 0
                        ? "rounded-bl-none bg-gray-300 text-gray-600"
                        : "rounded-br-none bg-blue-600 text-white"
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              </div>
              <Image
                height={10}
                width={10}
                // src={message.senderAvatar}
                src={
                  "https://res.cloudinary.com/dgkp7pkly/image/upload/v1701357443/zikepu77hb07nhuxkjqd.jpg"
                }
                alt="Profile"
                className="w-8 h-8 rounded-full order-1"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          className="text-letter-orange w-3/4 px-5 py-5 rounded-full"
          type="text"
          placeholder="Write your message!"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="bg-letter-orange bg-opacity-80 text-letter-grey border  hover:bg-letter-grey hover:text-black-body font-bold py-2 px-16 rounded-full"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
