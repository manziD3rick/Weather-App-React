# ⛅ Weather App React

A beautiful, responsive weather application built with React and Vite that displays real-time weather information for any city in the world.

## Features

- **Real-time Weather Data**: Fetch current weather information using the OpenWeatherMap API
- **Search Functionality**: Search for weather in any city worldwide
- **Responsive Design**: Clean, modern UI with a gradient background and smooth styling
- **Temperature Display**: Shows temperature in Celsius with weather conditions
- **Error Handling**: Graceful error handling with user-friendly messages

## Technologies Used

- **Frontend**: React 18 with Hooks (useState, useEffect)
- **Build Tool**: Vite for fast development and optimized builds
- **HTTP Client**: Axios for API requests
- **Styling**: CSS3 with gradients and animations
- **API**: OpenWeatherMap API for weather data

## Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx      # Search input component
│   │   └── WeatherCard.jsx    # Weather display card
│   ├── App.jsx                # Main application component
│   ├── App.css                # Application styles
│   ├── index.css              # Global styles
│   ├── main.jsx               # Entry point
│   └── index.html             # HTML template
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Usage

1. Open the application in your browser
2. Enter a city name in the search bar
3. Click the search button to fetch weather data
4. View the current weather conditions for the selected city

## Environment Variables

The application uses the OpenWeatherMap API. The API key is currently embedded in the code. For production use, consider moving this to an environment variable:

```
VITE_API_KEY=your_api_key_here
```

## Features in Development

- Extended forecast (5-day, 7-day predictions)
- Multiple unit systems (Celsius, Fahrenheit, Kelvin)
- Weather alerts and notifications
- City favorites/bookmarks
- Geolocation support

## Styling

The app features:
- Gradient background (teal to purple)
- Clean white card layout with shadows
- Responsive design for mobile and desktop
- Smooth button hover effects
- Professional typography

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Author

Created by manziD3rick
