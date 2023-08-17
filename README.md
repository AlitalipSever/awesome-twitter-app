# awesome-twitter-app

This project is a simple Twitter-like web application built using React, TypeScript, RxJS, StoryBook, and styled with TailwindCSS.

## Live Demo

You can view the live application here: [https://awesome-twitter-app.vercel.app](https://awesome-twitter-app.vercel.app)

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
   git clone https://github.com/AlitalipSever/awesome-twitter-app
   cd awesome-twitter-app
   ```

2. **Install Dependencies**:
   ```bash
   yarn install
   ```

3. **Run the Application**:
   ```bash
   yarn start
   ```

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
