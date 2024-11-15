# startup2024 - RATE IT!
## Specification Deliverable

### Elevator Pitch

One of my fun hobbies and pasttimes with my siblings has been to always order lemonade from places and rate how good it is on a scale from 1-10. But alas, usually it is to no avail because most of the time I can't remember the scale and what I have previously rated certain ones. So the point of this website is to grant a fun way to not only make your own rating scale for whatever items you would like, it also allows you to see the ratings of others and compare how you fare! 

### Designs

<img src="https://github.com/user-attachments/assets/cd7d9c18-83bc-4f95-a25b-b770e910d739" width="400">
<img src="https://github.com/user-attachments/assets/ce051888-ca11-4ca4-ba43-07c484468021" width="400">
<img src="https://github.com/user-attachments/assets/9e0cda07-2664-42cd-ac5c-a28d89cc0698" width="400">


### Key features

- Secure login over HTTPS
- Ability to choose a category to rate, input the subcategory, and then choose the rating on the item
- Displays the rating scale visually
- Ability to see other's rating scales when another user's username is put in and category chosen
- Results are persistently stored
- Ability to interact a little with the rating scale

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Three HTML pages. One for login, one for selecting or editing rating scale, and one for seeing and interacting with the scale.
- **CSS** - Application styling that looks good on webpage screen, uses good whitespace, color choice and contrast.
- **React** - Provides login, category and subcategory displays with rating scales, display other users rating scales, and use of React for routing and components.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving rating scales
  - submitting a new rating scale or new ratings for a scale
- **DB/Login** - Store users, and rating scale data in database. Register and login users. Credentials securely stored in database. Can't rate or see other's ratings unless authenticated.
- **WebSocket** - As each user adds new ratings to their scale, their ratings should be updated on other's screens.

## HTML deliverable

- [x] **HTML pages**
    - 5 Total pages created
      - One for logging in
      - One for the main page
      - One for interacting with the scale created
      - One for the Database
      - One for the about info  
- [x] **Links** - Each page properly links to the correct page except the about page which links back to the login page.
                  Most of them link using the submit button forms or the back/logout buttons at the top of each page
- [x] **Text** - Text is used to describe what certain buttons do and to make the user feel welcome
- [x] **Images** - Embedded a placeholder image for my Rating scale for right now. This might change later
- [x] **DB/Login** - A whole page linked as a database placeholder. Submit boxes will be used to submit data
- [x] **WebSocket** - Hard to show how this will work, but in reality users will see other's updated rating scales when they update them

## CSS deliverable

For this deliverable I properly styled the application into it's final appearance. Depending on the javascript used later on will determine if anything else needs to be adjusted.

- [x] **Header, footer, and main content body** - centered all the content and moved it to look better on the page
- [x] **Navigation elements** - Buttons looks clean.
- [x] **Responsive to window resizing** - Should work with flex implementation
- [x] **Application elements** - Looks very clean and very simplestic design
- [x] **Application text content** - Consistent fonts and colors
- [x] **Application rating scale** - Although the rating scale looks good and was finished. It could be improved with further knowledge of react

## React deliverable

For this deliverable I used JavaScript and React so that the application works.

- [x] **Bundled and transpiled** - done!
- [x] **Components** - Everything converted to React. Have some spots for where I will implement other things later on
  - [x] **login** - When you press enter or the login button it takes you to the create page.
  - [x] **database** -This currently just has access to another page but will eventually store actual data
  - [x] **application logic** - Nothing added to the scale yet, waiting for database implementation
- [x] **Router** - Routing between login and creating a rating scale.
- [x] **Hooks** - Vue uses class properties instead of `UseState` to track login and switch pages. More of this will come as well once database access can be used

## Service deliverable


For this deliverable I added backend endpoints that receives categories and ratings and returns the categories.

- [x] **Node.js/Express HTTP service** - done!
- [x] **Static middleware for frontend** - done!
- [x] **Calls to third party endpoints** - I placed only a placeholder for this one for right now. Depending on how the database will work will help me know if I need to change this one
- [x] **Backend service endpoints** - Placeholders for getting the categories and rating. I left the login ones for next phase and I might add more later depending on how the database works
- [x] **Frontend calls service endpoints** - I did this using the fetch function. This generates a random example category for the first rating page
