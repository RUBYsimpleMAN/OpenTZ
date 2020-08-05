import React, { Component } from 'react';
import DropDown from "./DropDown";
import CounterRow from './CounterRow';
import createWordEnding from "./createWordEnding";

class HotelGuestDropdown extends Component {
  constructor(props) {
    super(props);
    this.fieldnames = [ "Взрослые", "Дети", "Младенцы" ];
    this.state = {};
    for ( const name of this.fieldnames ) {
      this.state[name] = 0;
    }
  }
  onContentClick = ( { fieldname, isreset, isconfirm }, sign /* "+" or "-" */ ) => {
    if (isreset) {
      
    }
    if (isconfirm) {
      
    }
    if (fieldname in this.state) {
      this.setState({
        [fieldname]: this.state[fieldname] + ~~( sign + "1" )
      });
    }
  }
  render() {
    const sum = Object.values(this.state).reduce((sum, current) => sum + current);
    return (
      <DropDown
        onContentClick={ this.onContentClick }
        title={ sum ? sum + " гост" + createWordEnding( sum, "ь", "я", "ей" ) : "Сколько гостей" }
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

export default HotelGuestDropdown;
