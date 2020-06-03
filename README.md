# # # # Refactoring of Tap Room Using React and Redux - Independent Project

#### A React web application that represents a `Tap room Tracker` where a `Soda Fountain store` can track their kegs. Application lets store track the remaining amount in each Soda Keg & following are the main features of this application...

- Render list/menu of all available kegs. For each keg, `Name`,  `Brand`,  `Price`  and  `Flavor`  are displayed.

-  User can submit a form to add a new keg to list.

-  User can click on a keg to see its detail page.

-  User can see how many pints are left in a keg. **PS:**  A keg is hardcoded to 15 pints for ease of use (so that one can demonstrate emptying of keg).

-  User can click a button next to a keg whenever a pint is sold. Each click will decrease the number of pints left by 1. Once pint hits 0, further reduction is prevented by disabling the button.

-  **All**  state in application is handled by Redux (includes Local and Shared).

-   All reducers were tested and all tests pass.

-   Action creators and constants were used.

## Component Tree Diagram

![alt text](https://github.com/Rekjal/projTapRoomReactWithRedux/blob/master/src/img/Component_tree_diagram.png)

            
##### Date: **05/22/2020**

#### By **Salim Mayan**

## Specifications:

* Spec 1: Creation of `New Keg`

    + Input: On `landing page`, click on `Add New Keg` button

    + Output: The app shall display below component. ![alt text](https://github.com/Rekjal/projTapRoomReactWithRedux/blob/master/src/img/Add_New_Keg.png)

When above form is submitted, a flex box gets created with entered information (see image below)

![alt text](https://github.com/Rekjal/projTapRoomReactWithRedux/blob/master/src/img/Tap_Room_with_1_Keg.png)

* Spec 2: Display `Keg Details`

    + Input: Click anywhere inside a flex box

    + Output: User gets navigated to `Keg Details page` from where one can either `Delete` entire keg or `Update` data pertaining to current keg.

![alt text](https://github.com/Rekjal/projTapRoomReactWithRedux/blob/master/src/img/Keg_Details_page.png)

* Spec 3: Rendering of unlimited number of cards in an evenly spaced manner

    + Input: Add multiple kegs
    
    + Output: UI will render multiple kegs in an evenly spaced manner

![alt text](https://github.com/Rekjal/projTapRoomReactWithRedux/blob/master/src/img/Tap_Room_with_many_Kegs.png)

* Spec 4: Track remaining pint in a Keg and display alert messages when quantity edges closer to 0

    + Input: Click `Sell` button on a keg box
    
    + Output: Each click of button will decrease the number of pints left by 1.

		+ Once pint hits 0, further reduction is prevented by disabling the button.

		+ Keg gets updated with a message `"Out of Stock"` once it's empty.

		+ When pints left in a keg is under 10, keg gets updated with a message `"Almost Empty"`.

![alt text](https://github.com/Rekjal/projTapRoomReactWithRedux/blob/master/src/img/Tap_Room_tracking_multiple_kegs_its_pints_and_alert_Messages.png)

## Setup/Installation Requirements

1. Clone this repository.

2. To run program, do `npm install --save-exact react-scripts@3.2.0', `npm install' and `npm run start'

## Known Bugs

* No known bugs at this time.

## Technologies Used

* React

* Redux
* HTML

* CSS

* Flex

* JS

* Bootstrap

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2020 **_{Salim Mayan}_**

