# Getting Started

- Copy `.env.example` file to a `.env` one.
- Run `yarn install && yarn start` to run the app.

# Code and Design Decisions

## Folder structure

Decided to separate components from pages to have a better separation of concerns and a way to differenciate page specific code from reusable components.
Inside each page folder we can have the page component itself and it could also have other files for hooks, sub-components, utils, etc.
We also have a utils folder that is meant to store the utility functions that can be used throughout the app.

## Theming and styled components

Styles are applied through styled components, this way is really easy to pass figma requeriments into react code & style. It also provides support for themes, this is great to keep the styles scalable and customizable. We can improve this more by creating custom mixins for example to avoid the media tag with always same breakpoints... we could create one for mobile, another for tablet and other one for desktop or higher resolutions.

## Data management

Used custom hooks for each page query that encapsulates the logic to get the required data to fill the page with. Also used a custom Local Storage hook that allows saving into local storage and also trigger re-renders when a local storage item gets updated.

## Routing

Used `react-router` and defined a main route for the Home page that displays Property Listing, and a wildcard one to get all the other possible paths to show a not found error to the user in case they navigate there by mistake.

## Testing

Created some sample test cases for the two more emblematic components Card and Home. For them we need different approaches, for Card I've created a unit test using `react-test-library` that goes through some of the possible scenarios based on the props sent by the user and to check if the rendered output is valid. For Home I've used an integration test approach to validate the overall user experience and interactions like validating the behaviour of the favorite button, this was made with `cypress`.
