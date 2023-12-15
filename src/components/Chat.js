import React, { useEffect, useRef, useState } from "react";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  Timestamp,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase";

const Chat = ({ senderID, receiverID }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesBoxRef = useRef(null);

  useEffect(() => {
    const messageCollectionRef = collection(db, "Messages");
    const combinedId1 = `${senderID}_${receiverID}`;
    const combinedId2 = `${receiverID}_${senderID}`;

    const unsubscribe = onSnapshot(
      query(
        messageCollectionRef,
        where("__name__", "in", [combinedId1, combinedId2])
      ),
      (querySnapshot) => {
        const fetchedMessages = [];
        querySnapshot.forEach((doc) => {
          fetchedMessages.push(doc.data());
        });
        setMessages(fetchedMessages[0]?.messages);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [senderID, receiverID]);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      try {
        const timestamp = Timestamp.now();
        const senderReceiverDocRef = doc(
          db,
          "Messages",
          `${senderID}_${receiverID}`
        );
        const receiverSenderDocRef = doc(
          db,
          "Messages",
          `${receiverID}_${senderID}`
        );

        const senderReceiverDocSnap = await getDoc(senderReceiverDocRef);
        const receiverSenderDocSnap = await getDoc(receiverSenderDocRef);

        let updatedMessages;
        let selectedDocRef;

        if (senderReceiverDocSnap.exists()) {
          updatedMessages = [
            ...(senderReceiverDocSnap.data().messages || []),
            {
              senderId: senderID,
              text: newMessage,
              timestamp: timestamp,
            },
          ];
          selectedDocRef = senderReceiverDocRef;
        } else if (receiverSenderDocSnap.exists()) {
          updatedMessages = [
            ...(receiverSenderDocSnap.data().messages || []),
            {
              senderId: senderID,
              text: newMessage,
              timestamp: timestamp,
            },
          ];
          selectedDocRef = receiverSenderDocRef;
        } else {
          updatedMessages = [
            {
              senderId: senderID,
              text: newMessage,
              timestamp: timestamp,
            },
          ];
          selectedDocRef = senderReceiverDocRef; // You can choose any of the two for a new document
          await setDoc(selectedDocRef, { messages: updatedMessages });
        }

        await updateDoc(selectedDocRef, { messages: updatedMessages });
        setNewMessage("");
        console.log("Message added successfully!");
      } catch (error) {
        console.error("Error adding message:", error);
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesBoxRef.current) {
      messagesBoxRef.current.scrollTop = messagesBoxRef.current.scrollHeight;
    }
  };

  return (
    <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
      <div
        ref={messagesBoxRef}
        className="bg-letter-grey rounded-sm border border-black-button"
        style={{ height: "700px", overflowY: "auto" }}>
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${
                message.senderId === senderID ? "items-end" : "items-start"
              }`}>
              <div
                className={`flex ${
                  message.senderId === senderID
                    ? "justify-end"
                    : "justify-start"
                }`}>
                <div
                  className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
                    message.senderId === senderID
                      ? "order-1 items-end"
                      : "order-2 items-start"
                  }`}>
                  <div>
                    <span
                      className={`mt-5 px-4 py-2 rounded-lg inline-block ${
                        message.senderId === senderID
                          ? "rounded-br-none bg-gray-300 text-gray-600"
                          : "rounded-bl-none bg-white text-black"
                      }`}>
                      {message.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-gray-500">No messages yet</p>
          </div>
        )}
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
          className="bg-letter-orange bg-opacity-80 text-letter-grey border hover:bg-letter-grey hover:text-black-body font-bold py-2 px-16 rounded-full"
          onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
