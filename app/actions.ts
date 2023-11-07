'use server'

export async function reserveUsernameServer(username: string) {
    console.log(`Processing username "${username}" on the server`)
    if (username.length < 3) {
      return "username must be longer than 2 characters";
    }
    if (username === 'Bennett') {
      return "this username is reserved"
    }
  }