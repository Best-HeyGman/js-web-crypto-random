None of this code was written by me. This was a test I did with the Codestral LLM. That's the exact Prompt I used:

```
Hi, please create a website (.html) with javascript that has the following properties:

First, create a function in javascript that takes a min. value integer and a max value integer and returns a random integer in between, inclusive of the min number and the max number. The Function shall use the web crypto api random number generator for the operation.

The visible website has two parts. The first part consists of 2 input fields, where a min integer and a max integer can be inserted and a button, that calls the previously written random function and presents the resulting number to the user.

The second section consists of a text input field, where the user can insert items line by line and a button, which has the effect, that all the lines in the text input field are taken and assigned line numbers sequentially. Then, the random function is called and the lowest line number and the highest line number are are given to the random function as min value and max value and a random integer is returned. The website shall then present the user with the text at the line number which corresponds to the random number returned by the function.

Also, make the website look good with css.
```
