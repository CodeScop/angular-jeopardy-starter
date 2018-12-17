# Jeopardy Starter
This starter provides a service to talk to the jeopardy api. It already
displays the results from the api call on the main component.

* Display the question, category, and point value, and the users score
* Provide a way for the user to submit an aswer
* If the answer is correct then add the point value to the to the users score,
  If it's wrong, subtract the point value from the users score.
* After the user answers a question, display another random question from the
  API.

## Advanced Mode
Use two components.

* Use app.component.ts to get and display the data
* create an answer component to do the scoring and pass the needed data to the parent to update the score display

## Nightmare Mode
 Use two components.

* Instead of displaying a random question, display 3 random categories.
* Display the question for the category selected
* The rest of the application should work the same