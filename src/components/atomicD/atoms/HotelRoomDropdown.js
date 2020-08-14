import React, { Component } from "react";
import DropDown from "./DropDown";
import CounterRow from "./CounterRow";
import createWordEnding from "./createWordEnding";

class HotelRoomDropdown extends Component {
  constructor(props) {
    super(props);
    this.fieldnames = [ "Спальни", "Кровати", "Ванные комнаты" ];
    this.state = {};
    for ( const name of this.fieldnames ) {
      this.state[name] = 0;
    }
  }
  onContentClick = ( { fieldname }, sign /* "+" or "-" */ ) => {
    if (fieldname in this.state) {
      this.setState({
        [fieldname]: this.state[fieldname] + ~~( sign + "1" )
      });
    }
  }
  createTitleText = () => {
    let countOfShowedNames = 0;
    let titleText = "";
    if ( this.state["Спальни"] ) {
      titleText += this.state["Спальни"] + " Спал" + createWordEnding( this.state["Спальни"], "ьня", "ьни", "ен" ) + ", ";
      countOfShowedNames++;
    }
    if ( this.state["Кровати"] ) {
      titleText += this.state["Кровати"] + " Кроват" + createWordEnding( this.state["Спальни"], "ь", "и", "ей" ) + ", ";
      countOfShowedNames++;
    }
    if ( countOfShowedNames < 2 && this.state["Ванные комнаты"] ) {
      titleText += this.state["Ванные комнаты"]  + createWordEnding( this.state["Ванные комнаты"], "Ванная комната", "Ванных комнаты", "Ванных комнат" );
    }
    return titleText;
  }
  render() {
    return (
      <DropDown
        onContentClick={ this.onContentClick }
        title={ this.createTitleText() }
      >
        { this.fieldnames.map( name => (
          <CounterRow
            value={ this.state[name] }
            fieldname={ name }
            key={ name }
          />
        ))}
      </DropDown>
    );
  }
}

export default HotelRoomDropdown;
