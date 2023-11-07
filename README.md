## React Server Action Client and Server Validation Example

1. Install dependencies: `pnpm install`
1. Start the dev server: `pnpm run dev`
1. Go to [http://localhost:3000](http://localhost:3000)
1. Try queries to see different error messages:
   1. "12" will show a client error indicating you usernames need to be more than 2 characters. If you bypass client side validate, the same check is performed on the server.
   1. "Bennett" will show a server error indicating the username is reserved