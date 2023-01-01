/**
 * Mock Service Worker handlers
 */

import { rest } from 'msw'

export const handlers = [

    // Handles a GET / request
    rest.get("/", (request : any, result : any, context : any) => {
        return result(
            context.body([{
                userId : 1,
                id : 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
            }])
        );
    }),
];