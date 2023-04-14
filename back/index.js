
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import {app, Datastore} from 'codehooks-js'
import {crudlify} from 'codehooks-crudlify'
import { date, object, string, bool } from "yup";
import jwtDecode from "jwt-decode";
// test route for https://<PROJECTID>.api.codehooks.io/dev/
app.get('/', (req, res) => {
  res.send('CRUD server ready')
})

const todoYup = object({
  content: string().required(),
  category: string().required(),
  createdOn: date().default(() => new Date()),
  completed: bool().required().default(false),
  userid: string().required()
});

const catesYup = object({
  cates: string().required(),
  userid: string().required()
})


const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.replace("Bearer ", "");
      // NOTE this doesn't validate, but we don't need it to. codehooks is doing that for us.
      const token_parsed = jwtDecode(token);
      req.user_token = token_parsed;
    }
    next();
  } catch (error) {
    next(error);
  }
};
app.use(userAuth);



// Use Crudlify to create a REST API for any collection
crudlify(app, { todolist: todoYup, cateslist: catesYup});

// bind to serverless runtime
export default app.init();
