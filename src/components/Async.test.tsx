/**
 * Testing async functionality
 */

import { render, screen } from '@testing-library/react';
import Async from './Async';
import { setupServer } from "msw/node";
import { RestContext, rest } from "msw";


describe("Test for async functionality", () => {

    // Creating a test server using mock service worker in order to implement tests
    const server = setupServer(

        rest.get("https://jsonplaceholder.typicode.com/posts", (request : any, response : any, context : RestContext) => {
            return response(context.json([
                {
                    userId : 1,
                    id : 1,
                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    userId : 1,
                    id : 2,
                    title: "qui est esse",
                    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
                }
            ]));
        }),

    );

    // Server handlers
    beforeAll(() => { 

        // Establish requests interception layer before all tests.
        server.listen(); 
    });

    afterEach(() => { 

        // Clean up after all tests are done, preventing this
        // interception layer from affecting irrelevant tests.
        server.resetHandlers(); 
    });

    afterAll(() => { 
        server.close(); 
    });

    test("See if list items render", async () => {

        // arrange
        render(<Async/>);

        // check if list elements render after the API call
        const listElement = await screen.findAllByRole("listitem");

        expect(listElement).not.toHaveLength(0);

    });

    test("Query the placeholder posts and see if they render", async () => {

        // arrange
        render(<Async/>);

        // assert
        // Get an element that would be passed through an api call based on expected text
        const listElement = await screen.findByText("sunt aut facere", {exact : false});

        // act
        expect(listElement).toBeInTheDocument();

    });


});