import React from 'react';

const Answar = () => {
    return (
        <div  className="answar-container">
            <h1>What is the difference between props vs state</h1> <br></br>
            <p> <li>We use props to pass data from one component to another but state can not be passed to another component.</li>
            <li>props is immutable but state is mutable.  </li>
            <li>props are read only state is both read and write.  </li>
            <li>Props are used to communicate between components.State can be used for rendering dyanamic changes.  </li>
            <li>Props make component reusable but state can not make component reusable.  </li>
            <li>Props can be accessed by the child component but state can not be accessed by the child component</li></p>
            <br></br>

            <h1>How use state works?</h1>
            <p>useState is a hook which returns two items.We have to import it from react.It gives us current state.  It allows us to declare one or more state variables in function component. It returns a variable with the current state value and anothe function to update value. </p>
        </div>
    );
};

export default Answar;