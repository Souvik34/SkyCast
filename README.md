## SkyCast

SkyCast is a sleek and responsive weather web app that provides real-time weather updates and forecasts for any location worldwide. Built with modern web technologies, it delivers accurate data with an intuitive user interface. Whether you're planning your day or checking conditions for your next adventure, SkyCast has you covered.

### Tech Stack
- **React 18**: JavaScript library for building user interfaces
- **Vite**: Next generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Tailwind CSS component library
- **React Query**: Data fetching and caching
- **Axios**: Promise-based HTTP client
- **Phosphor Icons**: Beautiful icon set
- **React Router**: Client-side routing

### Features
- Real-time weather updates
- 3-day weather forecasts
- Automatic location detection
- Detailed weather metrics:
  - Temperature
  - Humidity
  - Wind speed
  - UV index
- Responsive design
- Interactive search
- Error handling and loading states

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` file with your WeatherAPI key:
   ```
   VITE_WEATHER_API=your_api_key_here
   ```
4. Start development server: `npm run dev`

### Project Structure
```
skycast/
├── public/
├── src/
│   ├── assets/
│   ├── Component/
│   │   ├── Console.jsx
│   │   ├── Navbar.jsx
│   │   └── WeatherApp.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
├── tailwind.config.js
└── vite.config.js
