import { prisma } from "./prisma";
import express from "express";

export const routes = express.Router();

//list one
routes.get("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;

    console.log({
      id,
    });

    const client = await prisma.cliente.findUnique({
      where: {
        id,
      },
    });

    return res.json({ data: [client] });
  } catch (err) {
    console.log(err);
  }
});

//list all
routes.get("/clients", async (req, res) => {
  try {
    const clients = await prisma.cliente.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return res.status(201).json({ data: clients });
  } catch (err) {
    console.log(err);
  }
});

//create
routes.post("/create", async (req, res) => {
  const { name, birthday, email, telephone } = req.body;

  const createClient = await prisma.cliente.create({
    data: {
      name,
      birthday,
      email,
      telephone,
    },
  });

  return res.status(201).json({ data: createClient });
});

//update
routes.put("/clients/:id/edit", async (req, res) => {
  const { id } = req.params;
  const { name, birthday, email, telephone } = req.body;

  const updateClient = await prisma.cliente.update({
    where: {
      id,
    },
    data: {
      name,
      birthday,
      email,
      telephone,
    },
  });

  return res.status(201).json({ data: updateClient });
});

//delete
routes.delete("/clients/:id/delete", async (req, res) => {
  const { id } = req.params;

  await prisma.cliente.delete({
    where: {
      id,
    },
  });

  return res.status(201).send("Cliente deletado.");
});
