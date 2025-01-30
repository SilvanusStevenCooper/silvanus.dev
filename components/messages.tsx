"use client";

import { Message } from "@prisma/client";
import { Button } from "./ui/button";

interface MessagesProps {
  messages: Message[];
  deleteMessage: (id: string) => void;
}

const Messages = ({ messages, deleteMessage }: MessagesProps) => {
  return (
    <div className=" p-4 xl:px-20 pt-10 xl:pt-36 min-h-screen ">
      <h1 className="text-3xl font-bold text-center mb-8 text-white/70">
        Messages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="bg-white/90 justify-between shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition"
          >
            <h2 className="text-lg font-bold text-gray-800 mb-1">
              {message.firstName} {message.lastName}
            </h2>
            <p className="text-gray-500 text-sm mb-4">{message.email}</p>
            <p className="text-gray-600 font-medium mb-2">
              <strong>Phone:</strong> {message.phone}
            </p>
            <p className="text-gray-600 font-medium mb-2">
              <strong>Service:</strong> {message.service}
            </p>
            <p className="text-gray-700">{message.message}</p>
            <div className="text-gray-400 text-xs mt-4">
              Sent on {new Date(message.createdAt).toLocaleString()}
            </div>
            <Button
              onClick={() => deleteMessage(message.id)}
              className="mt-4 bg-rose-500 hover:bg-rose-400 text-white py-2 px-4 rounded-lg w-full"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
