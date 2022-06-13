# PROJECT 2 - DUNGEONS & DRAGONS CHARACTER BUILDER

Deployed [here](https://dungeons-n-dragons.netlify.app/)

This is my second project for the General Assembly Software Engineering Immersive course. This Reactathon app consumes a public API and includes a router with several pages.


### Table of contents 

1. How it works
2. Planning 
3. Build
4. Styling
5. Challenges and Wins
6. Key Learnings
7. Future improvements

## Tech Stack

React, HTML, CSS, React RouterDOM, public API.

## How it works

The Dungeons & Dragons Character Builder generates a random character for users. The race, class and skills are randomly fetched from the public API we used. It also fetches and displays further information about all 3 if the users wishes to know more.

## Planning

We started off by selecting a concept and API we would like to work with. We tested our chosen API through Insomnia and the [D&D API documentation](https://www.dnd5eapi.co/).
Once we were happy with the theme and results, we started to create a wireframe.

![planning screenshot](/src/assets/psuedo.png)

We also kept track of the things we had to do for each day and met up regularly on Zoom. As we were both working on separate things, we used the Zoom sessions to come together and share what we have done. Ava focused primarily on the design of the page and I carried out the logic. We attempted to have a look at the Favourites section together but underestimated how complicated it would be. We decided to save it as a stretch goal so we could focus on the main functions we wanted to deliver. 

![planning screenshot](/src/assets/psuedo2.png)

## Build

The project utilises React, HTML and SCSS. We started off by testing the API's behaviour using Insomnia and `console.log` to see how we could access different end points. This was proved rather difficult as the API wasn't always straight forward. 
When we fetched, say for instance, classes, we would be presented with a list of all the classes available and under each one, another endpoint to know more. This meant we had to generate another fetch request should we wish to have more information.

<img width="447" alt="Screenshot 2022-06-13 at 10 52 31" src="https://user-images.githubusercontent.com/94257616/173328456-12a799c7-25a8-49de-8ac3-143fa5a48e3c.png">
<img width="447" alt="Screenshot 2022-06-13 at 10 53 01" src="https://user-images.githubusercontent.com/94257616/173328514-495915c7-2d08-44a9-b2c5-1faa81301072.png">

So for the user to see more about the random class they got attributed, we had to create another fetch with that specific `randomClass` this way the information displayed would be accurate and not random again.

Another method we used to generate the random character and to choose from the different options within the array was the `Math.random` function.

<img width="463" alt="Screenshot 2022-06-13 at 10 56 47" src="https://user-images.githubusercontent.com/94257616/173329154-1b6289e9-087d-43e8-9a5b-25789acf18dc.png">

Once we had our results for each category stored in a variable, we used the `Math.floor(Math.random() * VARIABLE.length` method to generate a random option only within the array length.


## Styling

We wanted the styling to reflect classic D&D characteristics and aesthetics but still have a modern feel. Although I didn't concentrate too much on the styling as I did on the logic, I helped out my colleague to choose images to use as our `Races` and `Classes` and also styling the nav bar. I found a good quality background and logo and shifted the items to the right of the screen. 
My colleague then added some really cool hover effects and animations. This was also implemented throughout the project. 

![planning screenshot](/src/assets/stylescreen.png)


## Challenges and Wins

The main challenge during this project was definitely working with the API. We had to think how to tackle the different endpoints without having to create individual fetch requests. Our first approach was that we simply couldn't create so many fetch requests for essentially the same request with only one different variable. This then led us to eventually come to the conclusion we could use string concatenation for the variable to make the code DRY and easier.

## Key Learnings

We learned the most about how to work effectively in a team as this was our first pair-programming project. We combined both of our strengths and used it to our own benefit so we could achieve the best possible results. As we both compliment each other, our weaknesses were balanced by one another.

We also learnt a lot on how to work with different endpoints and still successfully fetch data through DRY code. Initially we were a bit hesitant with our API but going through the project I am very happy we kept working with it and didn't get discouraged. This helped us massively to prepare for future projects where data fetching isn't always black and white.


## Future Improvememts 

Areas to improve:

- Add a favourites section where users can save their favourite characters (up to four)
- Expansion details more concise and clear sections

Bugs to fix:

- Close the current expanded section before expanding the next one.
