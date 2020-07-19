import React, { Component } from 'react';
import H1 from './components/atomicD/atoms/H1';
import H2 from './components/atomicD/atoms/H2';
import H3 from './components/atomicD/atoms/H3';
import DropDown from './components/atomicD/atoms/DropDown';

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
        <H3>
          This is the body text which is used for most<br/>
          of the design, like paragraphs, lists, etc.<br/>
        </H3>
        <input type="text" placeholder="asdasdasd"/><br/><br/>
        <DropDown>
          <li>asdf</li>
          <li>asdfa</li>
          <li>sdf</li>
        </DropDown><br/><br/>
        hello<br/><br/>
        <H3>
          This is the body text which is used for most<br/>
          of the design, like paragraphs, lists, etc.
        </H3>
      </div>
    );
  }
}
export default App;
