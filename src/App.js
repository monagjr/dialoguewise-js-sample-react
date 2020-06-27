import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DialogueWiseService } from 'dialoguewise';

class App extends React.Component {
  constructor() {
    super();
    this.state = { heroContent: '' };
  }
  async componentDidMount(){
    let request = {
      slug: 'hero-section',
      apiKey: 'b1266377591c4f2a9494c3abdd2cac5381D6Z825D26CEBAE8B6rn',
      emailHash: '/kgmM46s1xC56BOFWRZp4j+0bdU19URpXdNT9liAX50=',
    };
  
    let dialogueWiseService = new DialogueWiseService();
    let res = await dialogueWiseService.getDialogue(request);
    this.setState({heroContent: res['dialogue'][0]['hero-content']});
  }
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div dangerouslySetInnerHTML={{__html: this.state.heroContent}}></div>
      </header>
    </div>
  );
}
}

export default App;
