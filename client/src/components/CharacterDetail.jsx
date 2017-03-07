var React = require('react');

var CharacterDetail = function(props) {
  if (!props.character){
    return <h4>No character selected.</h4>
  }
  return <div><h4>Actor: {props.character.actor}</h4>
  Name: {props.character.name}
  <br/>
  House: {props.character.house}
  <br/>
  Wand: {props.character.wand.wood}, {props.character.wand.core}, {props.character.wand.length} inches
  </div>
};

module.exports = CharacterDetail;
