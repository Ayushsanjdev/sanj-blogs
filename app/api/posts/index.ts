import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const posts = prisma.post.findMany();
    res.status(200).json(posts);
}