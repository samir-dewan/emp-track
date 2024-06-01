"use server";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { and, eq, inArray } from "drizzle-orm";
import { highlight, images, techStack } from "./db/schema";
import { redirect } from "next/navigation";
import analyticsServerClient from "./analytics";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorised");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}

export async function getHighlightsByExpId(expId: number) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorised");

  const highlightsById = await db.select().from(highlight).where(eq(highlight.expId, expId));

  console.log("highlight found: ", highlightsById);
  return highlightsById;
}

export async function getTechStackByExpId(expId: number) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorised");

  const findexp = await db.select({techStackIds: images.techStackIds}).from(images).where(eq(images.id, expId));

  if (findexp) {
    const techStackArray = findexp[0]?.techStackIds;
    
      const techStackIds = techStackArray &&
      await db.select().from(techStack).where(inArray(techStack.id, techStackArray));

      return techStackIds;
  }
  throw new Error("couldn't find techStackIds");
}


export async function getImage(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorised");

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) throw new Error("Image not found");

  if (image.userId !== user.userId) throw new Error("Unauthorised");

  return image;
}

export async function deleteImage(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorised");

  await db.delete(images).where(and(eq(images.id, id), eq(images.userId, user.userId)));


  analyticsServerClient.capture({
    distinctId: user.userId,
    event: "delete image",
    properties: {
        imageId: id,
    }
  })
  redirect("/");
}
