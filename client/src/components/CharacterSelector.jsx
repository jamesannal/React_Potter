var React = require('react');

var CharacterSelector = React.createClass({

  getInitialState: function(){
    return { selectedIndex: undefined };
  },

  render: function () {
    var options = this.props.characters.map(function(character, index){
      return <option value={index} key={index}>{character.actor}</option>
    });

    return (
      <select 
        id="characters" 
        value={this.state.selectedIndex} 
        onChange={this.handleChange}>
        {options}
      </select>
    );
  },

  handleChange: function(event){
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});

    var selectedCharacter = this.props.characters[newIndex];
    this.props.didSelectCharacter(selectedCharacter);
  }
});

module.exports = CharacterSelector;
