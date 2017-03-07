var React = require('react');
var CharacterSelector = require('../components/CharacterSelector');
var CharacterDetail = require('../components/CharacterDetail');

var PotterContainer = React.createClass({

  componentDidMount: function () {
    var url = 'http://hp-api.herokuapp.com/api/characters';
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function () {
      if (request.status !== 200) return;
      var data = JSON.parse(request.responseText);
      this.setState({characters: data, focusCharacter: data[0]});
    }.bind(this);

    request.send();
  },


  getInitialState: function () {
    return { characters: [], focusCharacter: null };
  },

  render: function () {
    return (
      <div>
        <h2>Which Potter Character?</h2>
        <CharacterSelector 
          characters={this.state.characters} 
          didSelectCharacter={this.didSelectCharacter}/>
        <CharacterDetail 
          character={this.state.focusCharacter}/>
      </div>
    );
  },

  didSelectCharacter: function(character) {
    this.setState({focusCharacter: character});
  }

});

module.exports = PotterContainer;