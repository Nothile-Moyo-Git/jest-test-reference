import { render, screen } from '@testing-library/react';
import Greetings from './Greetings';
import userEvent from '@testing-library/user-event';

// Describe keyboard, used to create a test suite with all the tests inside of it. 
describe('Greeting Component', () => {

    // Check if the "Hi I'm rando"
    test("Renders text bound to a child component", () => {

        // arrange
        // Render the component with the component being passed through it
        render(<Greetings string="Hi I'm rando"/>);

        // assert
        // See if our rando text was passed through
        const textElement = screen.getByText(/rando/i);

        // 
        expect(textElement).toBeInTheDocument();
    });

    // Check if text is set to changed or it's good to see you
    test("Check text default", () => {

        // arrange
        // 
        render(<Greetings string="Hi I'm rando"/>);

        // assert
        const textElement = screen.getByText(`It's good to see you`, {exact : false});

        // act
        expect(textElement).toBeInTheDocument();

    });

    // Check if the text changes after the user clicks on the button
    test("Check if text changes after button has been clicked", () => {

        // arrange
        render(<Greetings string="Hi I'm rando"/>);

        // assert
        const button = screen.getByTestId("greetings-button-test");

        // act
        userEvent.click(button);

        const textElement = screen.getByText("changed", {exact : false});

        expect(textElement).toBeInTheDocument();

    });

    // Check if the original text is hidden after the 
    test("Does not render 'It's good to see you' if button is not clicked", () => {

        // arrange
        render(<Greetings string="Hi I'm rando"/>);

        // act
        const button = screen.getByTestId("greetings-button-test");

        userEvent.click(button);

        const textElement = screen.queryByText(`It's good to see you`, {exact : false});

        // assert
        expect(textElement).toBeNull();

    });

});

