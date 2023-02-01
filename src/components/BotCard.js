import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, clickEvent, deleteBot }) {
  return (
    // <div style={{display:'flex', flexDirection:'column', border: '1px solid', borderColor:'blue', maxWidth:'40%'}}>
    
      <Card>
        <Card.Body>
          <div style={{textAlign: 'center'}}>
            <Card.Img  className="card-image" variant="top" src={bot.avatar_url} onClick={() => clickEvent(bot)}/>
          </div>
        
        
          <div className="card-text-body">
            <Card.Text className="card-title">{bot.id}</Card.Text>
            <Card.Title className="card-title">{bot.name}</Card.Title>
            <Card.Text className="card-title">{botTypeClasses[bot.bot_class]} </Card.Text>
            <Card.Text className="card-title">{bot.health}</Card.Text>
            <Card.Text className="card-title">{bot.damage}</Card.Text>
            <Card.Text className="card-title">{bot.armor}</Card.Text>
            <Card.Text className="card-title">{bot.catchphrase}</Card.Text>
            <Button className="card-title" onClick={(event) => {
                  event.stopPropagation();
                  deleteBot(bot);
                  }}
              style={{fontSize:'2rem', fontWeight:'0.5rem'}}
            > 
              Click here to delete the above bot
            </Button>
           
          </div>
        </Card.Body>
      </Card>
    
  );
}

export default BotCard;

