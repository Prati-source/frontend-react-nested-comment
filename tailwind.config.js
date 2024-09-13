/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/leaflet/dist/leaflet.css"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'plant-pattern': "url('/public/wimp.jpg')",
        'red-space': "url('/public/red-space.jpg')",
        'space-pattern':"url('/public/space.jpg')",
        'sea_view':"url('/public/sea_view1.jpg')",
        'Sky':"url('/public/sky.png')",
        'Cloud':"url('/public/clouds.png')",
        "Login-cloud":"url('/public/cloud-login.png')",
        "mario":"url('/public/mario.svg')"
       
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin'),
  ],
  
}
