# Color Craze App Project
This is a project of an educational website that teaches kids to combine primary colors and create new colors. It consists of the following components:
- **Intro Page** - When launching the website this page pops up
- **Profiles Page** -Which simulates kids profiles out of which a user chooses one profile to access the game. This page has **Single Profiles** as child components.
- **Game Page** -Implements the core logic of the code. A user can select two colors; change there RGB values and mix them to create new colors. The color mixture is displayed and can be bookmarked on the **Results Page**.
- **Bookmarks Page** - After saving a color mixture, it is displayed in a list on this page

The website imports a list of dummy data in [this data file](src/assets/objects.json) to display details about a kid's profile such as the **id**, their **name** and **images**.


## Prerequisites
Ensure you have installed NodeJS and NPM on your machine:

- **Node.js** (version 16 or later recommended)
- **npm**

To check if Node.js and npm are installed, run the following commands in the root directory of your machine:

```bash
node -v
npm -v
```

Fork [this repository](https://github.com/joshua-odero/color-craze-app.git) , then clone it to your preferred folder with the following command:

```bash
git clone <your SSH/Http path>
```

## Installing dependencies
Switch to the app directory using the **cd** command, Use **npm** to install the project dependencies:

```bash
cd react-components-props-vite-lab
```

```bash
npm install
```

## Other Dependencies

### React Router
Install React Router library to enable navigation capabilities of the website:

```bash
npm install react-router-dom
```
### FontAwesome
Install FontAwesome library to display icons such as the star icons on the **Bookmarks Page**:

```bash
npm i --save @fortawesome/react-fontawesome@latest
npm i --save @fortawesome/free-solid-svg-icons
```

### CSS Styling
Install TailwindCSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

## Running the project
In the app directory, run the following command to run your app:

```bash
npm run dev
```

Test if your app is working by opening the browser via the link provided after running **npm run dev** command. The link resembles:

```bash
http://localhost:<port>/
```

## Task assignment instructions
We have assigned project tasks as follows:

- **Creation of data objects** - by Kennedy Mutisya
- **Intro page** - by Joshua Odero
- **Profiles page** - by Ronaldo Nyakwama
- **Game page** - by Samantha Bora
- **Bookmarks page** - by Joshua Odero
- **Routing** - by Samantha Bora


