## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run server`

Launches the API/websocket server on `http://localhost:3001`


## API docs

### `/api/lists`

List schema:
```typescript
  id: string;
  title: string;
```

`GET /api/lists` - returns an array of `List` objects<br>
`GET /api/lists/:id` - returns a single `List` object<br>
`PUT /api/lists/:id` - updates and returns a single `List` object<br>
`POST /api/lists/:id` - creates and returns a single `List` object<br>
`DELETE /api/lists/:id` - removes a single `List` object<br>

### `/api/cards`

Card schema:
```typescript
  id: string;
  title: string;
  list_id: string;
  user?: string; // owner of the card
```

`GET /api/cards` - returns an array of `Card` objects<br>
`GET /api/cards/:id` - returns a single `Card` object<br>
`PUT /api/cards/:id` - updates and returns a single `Card` object<br>
`POST /api/cards/:id` - creates and returns a single `Card` object. If the request has `x-access-token` header set, the user will be assigned as the owner of the card

`DELETE /api/cards/:id` - removes a single `Card` object<br>

### `/api/users`

User schema:
```typescript
  id: string;
  name: string;
  username: string;
  password: string;
```

`GET /api/users` - returns an array of `User` objects<br>
`PUT /api/users` - updates and returns the current `User` object, based on the `x-access-token`<br>
`POST /api/users` - creates and returns a single `User` object<br>
`DELETE /api/users` - removes a single `User` object, based on the `x-access-token`<br>


### Authentication

`POST /api/token` - send `{ username: string, password: string }` to authenticate as a user<br>
`GET /api/me` - get currently logged user based on the `x-access-token`


## Websockets
Websockets URL: `ws://localhost:3001`. The websocket will emit following actions:

- `CARD_UPDATE`
- `CARD_CREATE`
- `CARD_REMOVE`
- `LIST_UPDATE`
- `LIST_REMOVE`
- `LIST_CREATE`
