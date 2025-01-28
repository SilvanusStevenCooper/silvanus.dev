import { NextResponse } from "next/server";
import db from "@/lib/prismadb";

export async function DELETE(request: Request, params: { id: string }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  try {
    const deletedItem = await db.message.delete({
      where: { id: id }, // Pass the ID as a string
    });

    return NextResponse.json({
      message: "Item deleted successfully",
      deletedItem,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting item", error },
      { status: 500 }
    );
  }
}
