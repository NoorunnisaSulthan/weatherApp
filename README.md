
# Weather App Documentation

The Weather App is a web application that provides current weather information for a given city.

## Features

The Weather App includes the following features:

- Search for a city and display its current weather conditions.
- Display the temperature, humidity, and wind speed of the selected city.
- Show a weather icon representing the current weather condition.
- Handle invalid city names and display an error message.

## Installation

1. Clone the repository: `git clone https://github.com/NoorunnisaSulthan/weatherApp`
2. Navigate to the project directory: `cd weatherApp`
3. Install dependencies: `npm install`
4. Start the application: `npm start`


## API Key Requirement
In order to use this application and access the weather data, you will need to obtain your own API key from the weather service provider. The API key is required to authenticate and authorize your requests to their API.

## Obtaining an API Key
To obtain an API key, please follow these steps:

Visit the weather service provider's website ( https://www.weatherbit.io/) and sign up for an account.
Once you have successfully registered, navigate to your account settings or developer dashboard.
Look for the section related to API keys or application access.
Generate a new API key specifically for this application.
Copy the generated API key to your clipboard.

## Integrating Your API Key
To integrate your API key into the application, follow these instructions:

Open the configuration file (e.g. weatherApp.html ) in the root directory of the application.
Locate the apiKey variable in the file.
Replace the placeholder value with your own API key that you obtained from the weather service provider.
Save the configuration file.
Note
Keep your API key secure: Treat your API key as a sensitive piece of information. Do not share it publicly or expose it in any public repositories or code snippets.
API usage limits: Be aware of the usage limits and terms of service imposed by the weather service provider. Ensure that your usage complies with their guidelines to avoid service disruptions or additional charges.

## Usage

1. Open the Weather App in a web browser.
2. Enter the name of a city in the search input field.
3. Click the search button or press Enter to retrieve the weather information for the entered city.
4. The current weather conditions for the city will be displayed, including the temperature, humidity, wind speed, and a weather icon representing the weather condition.
5. If an invalid city name is entered, an error message will be shown.

## Code Structure

The Weather App codebase is organized as follows:

- `index.html`: The main HTML file that includes the structure of the web page.
- `weatherApp.css`: The CSS file that styles the Weather App.
- `script.js`: The JavaScript file that handles the functionality of the Weather App.

## API Integration

The Weather App integrates with the OpenWeatherMap API to retrieve weather data for a given city. The API key is stored in the `apiKey` constant in `script.js`.

## Dependencies

The Weather App uses the following dependencies:

- None

## Contributing

Contributions to the Weather App are welcome! If you find any bugs, have feature requests, or want to contribute enhancements, please open an issue or submit a pull request on the GitHub repository.
