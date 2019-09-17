React application for displaying the Jobs with mocked API json-server.
Consist of two routes - 1. Jobs List 2. Job Details View

**Tech Stack:**

React, Styled components, Jest, React Testing library, Create React App

Other tools:
Prettier - code formatter

**Local Setup Steps:**

- clone repository using ``
- run `cd client && yarn install` to install UI dependencies
- run `cd server && yarn install` to install server dependencies
- run `cd server && yarn server` to start local API server
- run `cd client && yarn start` to run UI locally

To Build Production Code

- run `cd client && yarn build` to build UI code

**Test suite Steps:**
`cd client && yarn test`

**Assumptions:**

- This application is single page react application (not SSR).
- Used json-server to create mocked API server for jobs data
- Added extra fields like job location, posted date
