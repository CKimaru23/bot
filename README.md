Galactic Bot Enlistment App

This is a simple web application built using React that allows a user to browse through a list of robots, view a robot's details, and enlist a bot into their army. The application fetches data from a local server running a JSON DB server.


Features

1. See profiles of all bots rendered in BotCollection.
2. Add an individual bot to the army by clicking on it. The selected bot should render in the YourBotArmy component.
3. Release a bot from the army by clicking on it. The bot disappears from the YourBotArmy component.
4. Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the YourBotArmy on the frontend.
5. Choose if the user wants to enlist a bot into their army or just see their data. Clicking on the card should instead display a show view (BotSpecs) for that bot, which should replace BotsCollection. BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot.
6. Sort bots by their health, damage or armor.
7. Filter bots by their class.
Only enlist one bot from each bot_class. The classes are ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].


How to Run

1. Clone the repository
2. Run npm install to install the dependencies.
3. Run npm start to start the development server.
4. Visit http://localhost:3000 to see the app in action.


Note

Please make sure that your local server is running and the data is available at the endpoint mentioned in the code before starting the application.

Conclusion

This is just a simple example of how to use React to build a web application that fetches data from a local server and displays it to the user. You can use this as a base to build more complex and feature-rich applications.



