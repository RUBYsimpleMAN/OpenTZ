import React, { Component } from 'react';
import H1 from './components/atomicD/atoms/H1';
import H2 from './components/atomicD/atoms/H2';
import H3 from './components/atomicD/atoms/H3';
import DropDown from './components/atomicD/atoms/DropDown';
import Input from './components/atomicD/atoms/Input';
import EmailInput from './components/atomicD/atoms/EmailInput';
import Button from './components/atomicD/atoms/Button';
import RadioButton from './components/atomicD/atoms/RadioButton';
import CounterRow from './components/atomicD/atoms/CounterRow';
import HotelGuestDropdown from "./components/atomicD/atoms/HotelGuestDropdown";

class App extends Component {
  render() {
    return (
      <div>
        <H1>
          Next one is the item title inside widgets
        </H1>
        <H2>
          Next one is the item title inside widgets
        </H2>
        <DropDown>
          <li>asdf</li>
          <li>asdfa</li>
          <li>sdf</li>
        </DropDown>
        <H3>
          This is the body text which is used for most<br/>
          of the design, like paragraphs, lists, etc.
        </H3>
        <Input
          type="text"
          placeholder="asdasd"
        />
        <EmailInput/>
        <Button >click me</Button>
        <Button filled>click me</Button><br/><br/>
        <form>
          <RadioButton id="asdasd1" name="asdasd" value="Мужчина" defaultChecked />
          <RadioButton id="asdasd2" name="asdasd" value="Женщина" />
          <RadioButton id="asdasd3" name="asdasd" value="Иное">
            Инопланетянин
          </RadioButton>
          <RadioButton id="asdasd4" name="asdasd" value="Иное">
            <H2 as="span"> Robot </H2>
          </RadioButton>
        </form>
        <CounterRow
          value={ 0 }
          min={ 0 }
          max={ 5 }
          fieldname="qwe123"
        />
        <HotelGuestDropdown/>
      </div>
    );
  }
}
export default App;
