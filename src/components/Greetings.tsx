/**
 * Greetings component for testing with Jest
 */

import { useState } from "react";
import Output from "./Output";

const Greetings = (props : any) => {

    // String to test to see how testing works with binding
    const boundString = props?.string; 

    // State to test how testing works with user states
    const [changedText, setChangedText] = useState<boolean>(false);

    const changeTextHandler = (event : any) => {

        event.preventDefault();

        setChangedText((previousState : boolean) => {
            return !previousState;
        });

    };

    return(
        <div>
            <p>{`Bound statement : ${boundString}`}</p>
            <Output text={changedText ? "Changed" : `It's good to see you`}></Output>
            <button data-testid="greetings-button-test" onClick={changeTextHandler}>Change Text</button>
        </div>
    ); 
};

export default Greetings;