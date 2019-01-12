import React, { Component } from 'react';
import './App.css';
import ContentList from './ContentList.js';
import shortArray from '../short-array.json';
import longArray from '../long-array.json';
import TextArea from './TextArea.js';
//import ContentRow from './ContentRow.js'

class App extends Component {
  constructor(props){
    super();
    this.state = {
      lenghtList: 'short',
      myCallback: 0
    }    
    this.BtnClick = BtnClick.bind(this);
  }
  updateData = (value) => {
    this.setState({ myCallback: value })
  }
  render() {
    var btnName;
    var array;
    if (this.state.lenghtList == 'short'){
      array = shortArray;
      btnName = 'Show long list'
    } else 
    if(this.state.lenghtList == 'long') {
      array = longArray;
      btnName = 'Show short list'
    }
    if (window.$g != undefined){var i = window.$g; }
    var i = this.state.myCallback; //переменная для принятия данных из дочернего компонента contentrow после onclick 
//    alert(this.state.myCallback+ ' index')
    return (
      <div className="App">
        <div className="App-table_headerBorder">
        </div>
        <div className="tableWrapper">
          <table cellPadding="5" cellSpacing="0" className="App-table">
            <thead className="App-table_header">
              <tr>
                <th><div>id</div></th>
                <th><div>firstName</div></th>
                <th><div>lastName</div></th>
                <th><div>email</div></th>
                <th><div>phone</div></th>
                <th><div>adress</div></th>
                <th><div>description</div></th>
              </tr>
            </thead>
            <ContentList arr = {array} updateData={this.updateData}/>
          </table>
        </div>
        
        <div className="App-content">
          <button onClick={this.BtnClick} className="App-content_button">{btnName}</button>
          <TextArea array = {array[i]} />  
        </div>
      </div>
    );
  }
}
  
function BtnClick(){
  if (this.state.lenghtList == 'short'){
    this.setState({lenghtList: 'long'});
  } else 
  if (this.state.lenghtList == 'long'){
    this.setState({lenghtList: 'short'})
  }
}

export default App;
