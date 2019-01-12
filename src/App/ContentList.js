import React, {Component} from 'react';
import ContentRow from './ContentRow.js'

class ContentList extends Component {
  constructor(props){
    super();
    this.state = {
      myCallback: 10,
    }    
  }
  
  updateData = (value) => {
    this.setState({ myCallback: value})
  }
  
   componentDidUpdate() {}
  render(){
//    alert(this.state.myCallback + ' list')
    
    var array = this.props.arr;
    var allLists = array.map(
      arr => <ContentRow 
        row = {arr} 
        key = {arr.phone} 
        ind = {array.indexOf(arr)} 
        updateData = {this.updateData}
      />
    );
    return(
      <tbody className="App-table_body" onClick={() => {this.props.updateData(this.state.myCallback);}}>
        {allLists}
      </tbody>
    )
  }
}

export default ContentList;