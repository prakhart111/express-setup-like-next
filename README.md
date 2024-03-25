# express-setup-like-next

- Express Typescript boilerplate with mongoose & zod.
- API routes structured in express like Next. A clean & extensible express-ts-mongo starter setup with error handling & logs.
- Express Routes will be automatically created (in runtime) based on the files in the api folder.
- Minimal setup with maximum flexibility & scalability.
- Minimum dependencies.

## Features

- [x] Express
- [x] Typescript
- [x] Mongoose
- [x] Zod
- [x] Error Handling
- [x] Logs
- [x] Automatic API Routes (like Next.js)
- [x] Minimal Dependencies

## Getting Started

```bash
git clone <>
cd express-setup-like-next
yarn
yarn run dev
```

- Add the env
```bash
PORT=8000
MORGAN=':method :url :status (Content Length :res[content-length]) - :response-time ms :user-agent'
MONGO_URI=test
API_BASE_URL=http://localhost:8000
```

## Folder Structure

```bash
.
src
├── api // make folder/route.ts files to create more routes
│   ├── user
│   │   ├── route.ts
│   ├── somethingElse //any other routes you want
│   │   ├── route.ts
├── config
│   ├── index.ts
│   ├── config.d.ts
├── middleware
│   ├── error.ts
├── http-status
│   ├── index.ts
├── models
│   ├── user.model.ts
├── loaders
│   ├── express.ts
│   ├── mongo.ts
│   ├── index.ts
├── router
│   ├── routeGen.mjs // This file generates routes based on the folders/files in the api folder
│   ├── router.ts
├── app.ts
```

## To create a new route

- Create a new folder in the api folder with the name of the route.
- Create a route.ts file inside the folder.
- The route functions must exported as a function, which should be named with method name as prefix.

```typescript
export async function getTest(req, res) {
  res.send("getTest").status(200);
}
export async function postTest(req, res) {
  res.send("postTest").status(200);
} // etc
```

- Currently supported methods are get, post, put, delete, patch, options. You can add more methods in the routeGen.mjs file if needed (and contribute back)

- Running the dev server will automatically create the route based on the folder name.

## Thank you for checking out this repo. Feel free to contribute or suggest improvements.

- Do star the repo if you like it.
- Do share it with your friends.
- Do contribute if you can.
- Connect with me on [Twitter](https://twitter.com/PrakharTandon29) or [LinkedIn](https://www.linkedin.com/in/prakhar-tandon-dev/)
