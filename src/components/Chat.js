import React, { useEffect, useState } from "react";
import Image from "next/image";
import { doc, getDoc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "@/firebase"; // Replace with appropriate Firebase imports

const Chat = ({ senderID, receiverID }) => {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");

	useEffect(() => {
		const fetchMessages = async () => {
			try {
				const messageDocRef = doc(db, "Messages", `${senderID}_${receiverID}`);
				const messageDocSnap = await getDoc(messageDocRef);

				if (messageDocSnap.exists()) {
					const messagesData = messageDocSnap.data();
					setMessages(messagesData.messages || []);
				} else {
					console.error("Document not found");
					setMessages([]);
				}
			} catch (error) {
				console.error("Error fetching messages:", error);
				setMessages([]);
			}
		};

		fetchMessages();
	}, [senderID, receiverID]);

	const handleSendMessage = async () => {
		if (newMessage.trim() !== "") {
			try {
				const messageDocRef = doc(db, "Messages", `${senderID}_${receiverID}`);
				const timestamp = Timestamp.now();

				const updatedMessages = [
					...(messages || []),
					{
						senderId: senderID,
						text: newMessage,
						timestamp: timestamp,
					},
				];

				await updateDoc(messageDocRef, { messages: updatedMessages });
				setMessages(updatedMessages);

				setNewMessage("");
				console.log("Message added successfully!");
			} catch (error) {
				console.error("Error adding message:", error);
			}
		}
	};

	return (
		<div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
			<div
				className="bg-letter-grey rounded-sm border border-black-button"
				style={{ height: "700px", overflowY: "auto" }}
			>
				{Array.isArray(messages) && messages.length > 0 ? (
					messages.map((message, index) => (
						<div
							key={index}
							className={`chat-message ${
								message.senderId === senderID ? "items-end" : "items-start"
							}`}
						>
							<div
								className={`flex ${
									message.senderId === senderID
										? "justify-end"
										: "justify-start"
								}`}
							>
								<div
									className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
										message.senderId === senderID
											? "order-1 items-end"
											: "order-2 items-start"
									}`}
								>
									<div>
										<span
											className={`mt-5 px-4 py-2 rounded-lg inline-block ${
												message.senderId === senderID
													? "rounded-br-none bg-gray-300 text-gray-600"
													: "rounded-bl-none bg-white text-black"
											}`}
										>
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
					onClick={handleSendMessage}
				>
					Send
				</button>
			</div>
		</div>
	);
};

export default Chat;
