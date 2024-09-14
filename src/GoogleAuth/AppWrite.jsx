import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66e56b81001ccfcdcc6f');

const account = new Account(client)

export { account, client };