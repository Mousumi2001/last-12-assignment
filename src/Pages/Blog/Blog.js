import React from 'react';

const Blog = () => {
    return (
        <div>

            {/* question no-1 */}
            <div>
                <h1>
                    What are the different ways to manage a state in a React application?
                </h1>
                <p>
                    When we have to pass data from one component to another then it can be done easily, but if we want to pass our data in nested states then it becomes complicated which is called prop drilling i.e. passing the data as props from parent component to child component.

                    To avoid prop drilling we have to manage our state in such a way that it can be used by every component without prop drilling
                </p>
            </div>

            {/* question no-2 */}
            <div>
                <h1>
                    How does prototypical inheritance work?
                </h1>
                <p>
                    In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage. All the JavaScript objects inherit properties and methods from a prototype (like Date objects inherit properties from Date.prototype and so on).
                    When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype .
                </p>
            </div>

            {/* question no-3 */}
            <div>
                <h1>
                    What is a unit test? Why should we write unit tests?
                </h1>
                <p>
                    A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.
                    When you write unit tests you think about all the edge cases of every function in your application carefully. You give various inputs to the functions and you make sure that it behaves as you expect. Before you write the code you also need to think through design and what it must accomplish.

                </p>
            </div>

            {/* question no-4 */}
            <div>
                <h1>
                    React vs. Angular vs. Vue?
                </h1>
                <p>
                    React’s architecture is easier to scale than Angular, but developing a web app in Angular is faster than React. For rendering a relatively complex UI with some user interaction, all three frameworks are a great choice. But, if you are looking for something that you can add to your app instantly, Vue is an excellent choice.
                </p>
            </div>
        </div>
    );
};

export default Blog;