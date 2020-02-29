# 3.6 Debugging Practice Assignment

## Do this first

1. Run `npm install`
2. Run `npm start`
3. Open Visual Studio Code to this folder

## The assignment - what you need to do

1. Before changing any code, answer these questions.
   1. What is the name of the root component?
   2. What are the names of the root's child components?

2. The starter code contains 3 syntax errors that prevent the code from building.  Use the browser to fix an error.  We'll do the first one together.

3. Now that your webpage builds, there are some other errors!  Test out the code by using the page.
There are 3 problems with the page's functionality.  Work with a partner to find the 3 problems.

4. Take 5 minutes to fix the 3 problems.  If you fix all 3, HOORAY!!!!!


## Do this after

1. Run `git commit -m "Updated the application to search Giphy for dog gifs and display them."`
   1. Feel free to get creative with this message. It's for your benefit.

If anything goes wrong here, please ask for assistance.

# 3.6 Debugging Practice Solution

Rather than uploading the working code and making you, the reader, figure out the diff, I'll list the errors here.

## Compile Errors:

1. No Closing tag for DecreaseCounterButton on line 36 in index.js
2. No export statement in DecreaseButtonComponent.
3. Index.js is missing import statements for DecreaseCounterButton and Counter.

## Functionality Errors:

1. IncreaseCounter says this.handleClick, instead of this.props.handleClick.
2. increase_counter_button.js has quotes instead of brackets.
3. initial value is 10 instead of globalCounter.