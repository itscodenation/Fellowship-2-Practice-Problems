# Guided Practice 3.5
1. Read through the starter code
2. Answer these questions
   1. What are the components in this app?
   2. How will you pass state from parent to child components?
   3. How is this similar to the Trivia app?
3. Store this string in the `apiKey` variable: `eCLr0aYcPt2PJvPUPgcqR5PZP9eRd8HC`
4. Store a string like `dogs` in the `searchTerm` variable.
5. Pass the data in your App component’s state `(this.state)` down to your Giphy component so it can display an `<img>` element on the page.
6. Create a click handler on your Giphy component to select a new, random GIF from the API data.

# Guided Practice 3.5 Solution
1. Components in this app
	* App
	* Giphy
1. Update src/index.js with instructions #3, #4 and #5
1. For #6, I created a onClick function in App and passed it down into Giphy using arrow syntax. I also had to update fetch-gif.js to use a random value instead of index 0 each time.