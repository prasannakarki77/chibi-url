import prisma from "@/lib/prisma";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.post("/create-url", async (c) => {
  const body = await c.req.parseBody();
    const newUrl = await prisma.url.create({
      data: {body
    });
});

app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});

export const GET = handle(app);
