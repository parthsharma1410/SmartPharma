# SmartPharma

## The proposed solution is to use Temperature and Humidity Sensors inside the storage cabinets of medicines. 
•	These sensors will be linked to the air conditioning and dehumidifying system of the pharmacy using IoT Technology. \
•	The Sensors will continually monitor the the temperature and humidity conditions inside the storage cabinets. \
•	The system will then check whether the the current conditions are within the allowed parameters which have been set by pharmacy manager. \
•	If there is a deviation in the temperature or humidity, the sytem will automatically adjust the air conditioning and humidifier to rectify the conditions and a notification will be sent to the manager. Once the conditions have been stabilized the air conditioning and humidifying sytem will be re- adjusted and the manager will receive another message stating that all parameters are normal. \
•	If the conditions are not stabilized within a set time limit, the manager will receive a notification to manually go check the system. ( This is in case of a malfunction )\
# COMPONENTS USED
• Humidity and Temperature Sensor DHT11: 
The DHT11 is a basic, ultra-low-cost digital temperature and humidity sensor. It uses a capacitive humidity sensor and a thermistor to measure the surrounding air and spits out a digital signal on the data pin (no analog input pins needed). It’s simple to use but requires careful timing to grab data. DHT11 Temperature and Humidity Sensor features a calibrated digital signal output with the temperature and humidity sensor capability. It is integrated with a high-performance 8-bit microcontroller. 
Its technology ensures the high reliability and excellent long-term stability. This sensor includes a resistive element and a sensor for wet NTC temperature measuring devices. \
• Arduino Uno: 
Arduino is a single-board microcontroller meant to make the application more accessible which are interactive objects and its surroundings. The hardware features with an open source hardware board designed around an 8-bit Atmel AVR microcontroller or a 32- bit Atmel ARM. 
The Arduino Uno board is a microcontroller based on the ATmega328. It has 14 digital input/output pins in which 6 can be used as PWM outputs, a 16 MHz ceramic resonator, an ICSP header, a USB connection, 6 analog inputs, a power jack and a reset button. This contains all the required support needed for microcontroller. \
• Wi-Fi Module ESP8266: 
The ESP8266 is capable of either hosting an application or offloading all Wi-Fi networking functions from another application processor. Each ESP8266 module comes pre programmed with an AT command set firmware, meaning, you can simply hook this up to your Arduino device and get about as much WiFi-ability as a WiFi Shield offers. 
The ESP8266 module is an extremely cost-effective board with a huge, and ever growing, community.

# Circuit Diagram
![circuit](https://github.com/parthsharma1410/SmartPharma/blob/main/public/ss6.png)

## UI-Screenshots

![cloud](https://github.com/parthsharma1410/SmartPharma/blob/main/public/ss1.png)
![home](https://github.com/parthsharma1410/SmartPharma/blob/main/public/ss2.png)
![temp](https://github.com/parthsharma1410/SmartPharma/blob/main/public/ss3.png)
![data](https://github.com/parthsharma1410/SmartPharma/blob/main/public/ss4.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
