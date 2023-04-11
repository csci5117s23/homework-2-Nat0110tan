/*
 * Auto generated Codehooks (c) example
 * Install: npm i codehooks-js codehooks-crudlify
 */
import { date, object, string, bool } from "yup";
import { app } from "codehooks-js";
import { crudlify } from "codehooks-crudlify";

// test route for https://<PROJECTID>.api.codehooks.io/dev/


// async function getOne(req, res) {
//     const conn = await Datastore.open();
//     const id = {req.params};
//     const data = await conn.getOne('customer', id);
//     res.json(data)
// }
// app.get('/todos/:id', getOne);

const todoYup = object({
  content: string().required(),
  category: string().required(),
  createdOn: date().default(() => new Date()),
  completed: bool().required().default(false),
});

// Use Crudlify to create a REST API for any collection
crudlify(app, { todolist: todoYup });

// bind to serverless runtime
export default app.init();
