import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, deleteBot }) {
  
  const botItem = bots.map((bot) => {
    return (

      <BotCard 
        key={bot.id}
        bot={bot}
        clickEvent={enlistBot}
        deleteBot={deleteBot}
      />
    );
  });
  return (
    <div>
      <div className="flex-container">
        {botItem}
      </div>
    </div>
  );
}

export default BotCollection;