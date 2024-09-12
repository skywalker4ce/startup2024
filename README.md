# startup2024 - RATE IT!
## Specification Deliverable

### Elevator Pitch

One of my fun hobbies and pasttimes with my siblings has been to always order lemonade from places and rate how good it is on a scale from 1-10. But alas, usually it is to no avail because most of the time I can't remember the scale and what I have previously rated certain ones. So the point of this website is to grant a fun way to not only make your own rating scale for whatever items you would like, it also allows you to see the ratings of others and compare how you fare! 

### Designs

![IMG_1031](https://github.com/user-attachments/assets/cd7d9c18-83bc-4f95-a25b-b770e910d739)
![IMG_1033](https://github.com/user-attachments/assets/ce051888-ca11-4ca4-ba43-07c484468021)
![IMG_1034](https://github.com/user-attachments/assets/9e0cda07-2664-42cd-ac5c-a28d89cc0698)

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
