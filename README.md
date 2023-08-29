# awesome-twitter-app

This project is a simple Twitter-like web application built using React, TypeScript, RxJS, StoryBook, and styled with TailwindCSS.

## Live Demo

You can view the live application here: [https://awesome-twitter-app.vercel.app](https://awesome-twitter-app.vercel.app)

You can view my cv here: [https://awesome-twitter-app.vercel.app/profile](https://awesome-twitter-app.vercel.app/profile)
## Features

1. **Simulated Tweet Stream**: The application simulates a stream of tweets and displays them in descending order based on their timestamp.
2. **Tweet Expiry**: Tweets older than 30 seconds are automatically removed from the list.
3. **Like/Unlike Tweets**: Users can like or unlike tweets. Liked tweets are visually distinct from regular tweets.
4. **Liked Tweets Counter**: A counter displays the number of liked tweets.
5. **Toggle Display**: Users can toggle between viewing all tweets and only liked tweets.
6. **Clear Tweets**: Users can clear the entire list of tweets with a single click.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AlitalipSever/awesome-twitter-app.git
   cd awesome-twitter-app
   ```


1. **Clone the Repository with GitFront**:
   ```bash
   git clone https://gitfront.io/r/user-2057111/v6SXC9auG2EN/awesome-twitter-app.git
   cd awesome-twitter-app
   ```

2. **Install Dependencies**:
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**:

   We use `.env` files to manage environment-specific configurations. Based on your needs, you can set up:

   - `.env.development` for development environment.
   - `.env.staging` for staging environment.
   - `.env.production` for production environment.

   Here's a sample structure for `.env` files:
   ```
   REACT_APP_ENV=dev          # .env.development
   REACT_APP_ENV=staging      # .env.staging
   REACT_APP_ENV=prod         # .env.production
   REACT_APP_SOME_CONFIG=value
   ```

   Replace the placeholders with your actual values. Please ensure that you never commit sensitive information in these files. Add them to your `.gitignore` to prevent accidental commits.

## Running the Application

1. **Development Mode**:
   ```bash
   yarn start:dev
   ```

2. **Staging Mode**:
   ```bash
   yarn start:staging
   ```

3. **Production Mode**:
   ```bash
   yarn start:prod
   ```

## Building the Application

1. **Development Build**:
   ```bash
   yarn build:dev
   ```

2. **Staging Build**:
   ```bash
   yarn build:staging
   ```

3. **Production Build**:
   ```bash
   yarn build:prod
   ```

---

## Docker & Docker Compose Usage

Our application is designed to be containerized using Docker. Additionally, we utilize Docker Compose for orchestrating multi-container applications.

### Building the Docker Images

For each environment, we have tailored Docker commands:

1. **Development Docker Build**:
   ```bash
   yarn docker:build:dev
   ```

2. **Staging Docker Build**:
   ```bash
   yarn docker:build:staging
   ```

3. **Production Docker Build**:
   ```bash
   yarn docker:build:prod
   ```

Each build command uses the `--build-arg` option to pass environment-specific values to the Docker build process.

### Running the Application with Docker Compose

After building the Docker images, you can utilize Docker Compose to run the containers. The provided `docker-compose.yml` file defines services for each environment.

To start a specific environment using Docker Compose:

1. **Development**:
   ```bash
   docker-compose up app-development
   ```
   - Image: `awesome-twitter-app:dev`
   - Exposed Port: `3000`
   - Accessible at: `http://localhost:3000`

2. **Staging**:
   ```bash
   docker-compose up app-staging
   ```
   - Image: `awesome-twitter-app:staging`
   - Exposed Port: `3001`
   - Accessible at: `http://localhost:3001`

3. **Production**:
   ```bash
   docker-compose up app-production
   ```
   - Image: `awesome-twitter-app:prod`
   - Exposed Port: `3002`
   - Accessible at: `http://localhost:3002`

> **Note**: Ensure you have Docker installed and running on your machine before executing the above commands.


## Design Decisions

1. **State Management with RxJS**: Given the real-time nature of the application, RxJS was chosen for state management. It allows for a reactive approach, especially when dealing with streams of data like tweets.

2. **Component Structure**: The application follows the atomic design principle, breaking down the UI into atoms, molecules, and organisms. This ensures reusability and modularity of components.

3. **TailwindCSS for Styling**: TailwindCSS provides utility-first classes that make it easy to build responsive and maintainable UIs. It's integrated into the project to ensure a consistent and modern design.

4. **TypeScript for Type Safety**: TypeScript ensures type safety, making the codebase more robust and easier to maintain.

5. **Custom Hooks**: Custom hooks like `useTweets` are used to encapsulate and manage the application's state and side effects.

## Future Enhancements

1. **Persistent State**: Integrate with local storage or a backend to make the liked state of tweets persistent.
2. **User Authentication**: Implement user authentication to allow users to have personalized experiences.
3. **Reply to Tweets**: Allow users to reply to tweets and view tweet threads.

---

## Development Tooling

This project is equipped with several tools to ensure code quality, visual testing, and formatting:

1. **Testing with Jest**: The application uses Jest for unit and component testing. Tests can be run using the script:
   ```bash
   yarn test
   ```

2. **Linting with ESLint**: ESLint is set up to ensure code quality and consistency. To lint the codebase, run:
   ```bash
   yarn lint
   ```

3. **Formatting with Prettier**: Prettier ensures that the codebase remains formatted consistently. To format the codebase, run:
   ```bash
   yarn format
   ```

4. **Component Visualization with Storybook**: Storybook is integrated into the project for developing and visualizing components in isolation. To start Storybook, use:
   ```bash
   yarn storybook
   ```
   To build a static version of the storybook, use:
   ```bash
   yarn build-storybook
   ```

---

## Wireframes

The wireframes for the application provide a visual representation of the user interface and flow. They serve as a blueprint for the application's structure and layout.

You can view the wireframes for the home page [here](https://github.com/AlitalipSever/awesome-twitter-app/blob/main/docs/wireframes/home-page.drawio.html).

> **Note**: Since the wireframes are in HTML format, you might need to download and open them in a browser to view them properly.

---

## Profile & CV

Interested in learning more about the developer behind this application? Visit the [profile page](https://awesome-twitter-app.vercel.app/profile) of the web application to access the CV and get a deeper insight into the developer's skills and experiences.

---

## License

[MIT](https://choosealicense.com/licenses/mit/)

---
