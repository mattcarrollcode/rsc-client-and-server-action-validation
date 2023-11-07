"use client"

import { reserveUsernameServer } from "./actions"
import { useFormState } from "react-dom";

export default function Home() {
  const [errMessage, formAction] = useFormState(reserveUsername, null);
  return (
    <form action={formAction}>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" id="username" />
      <button type="submit">Submit</button>
      { !!errMessage && <p>{errMessage}</p>}
    </form>
  );
}

async function reserveUsername(prevState: any, queryData: FormData | undefined) {
  const username = queryData?.get('username') as string;
  console.log(`Processing username "${username}" on the client`)
  if (username.length < 3) {
    return "username must be longer than 2 characters"
  }
  return reserveUsernameServer(username)
}

