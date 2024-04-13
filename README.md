# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Weather App

This is a simple weather app that allows users to check the current weather conditions for a specific location.

## Features
### Location Input:
Users can enter a location manually or use geolocation to detect their current location.
###Autocomplete Suggestions:
Provides autocomplete suggestions as the user types in the location input field.
### Current Weather Display:
Displays the current weather conditions, including temperature and weather icon.
### Responsive Design:
The app is responsive and works well on various devices.
## Technologies Used
* **React:** JavaScript library for building user interfaces. 
* **Redux:** State management library for managing application state.
* **React-places-autocomplete:** Library for implementing location autocomplete suggestions.
* **Yahoo Weather API:** API for fetching weather data based on location.
## Installation
* **Clone the repository:**
> git clone https://github.com/your-username/weather-app.git

* **Install dependencies:**
```
cd weather-app
npm install
```

* **Start the development server:**

```
npm start
```

* **Open the app in your browser:**
http://localhost:3000
## Usage
+ Enter a location in the input field to check the current weather conditions for that location.
+ Use the geolocation button to detect your current location automatically.
+ Explore the weather information displayed on the screen.
Contributing
+ Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or bug fixes.

* **License**
This project is licensed under the MIT License.
