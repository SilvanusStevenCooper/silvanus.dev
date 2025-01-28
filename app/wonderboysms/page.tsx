import { revalidatePath } from "next/cache";
import db from "../../lib/prismadb";
import Messages from "@/components/messages";
import deleteMessage from "@/actions/delete/page";
import { Button } from "@/components/ui/button";

export default async function MessagesPage() {
  // Fetch messages from the database
  const messages = await db.message.findMany({
    orderBy: { createdAt: "desc" }, // Show the latest messages first
  });

  const deletemessage = async (id: string) => {
    "use server";
    await deleteMessage(id);
  };

  return <Messages messages={messages} deleteMessage={deletemessage} />;
}
