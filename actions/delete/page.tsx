"use server";

import db from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

const deleteMessage = async (id: string) => {
  if (!id) {
    return { message: "ID is Missing" };
  }

  try {
    await db.message.delete({
      where: {
        id,
      },
    });

    revalidatePath("/wonderboysms");
  } catch (error) {
    return { message: "something went wrong while trying to delete message" };
  }
};

export default deleteMessage;
