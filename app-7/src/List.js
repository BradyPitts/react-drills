import React, {Component} from 'react';
import Todo from './Todo'
import './App.css';

class List extends Component {
  constructor(props){
    super(props);
  }


  render(){
    let displayList = this.props.todo.map((ndx) => {
      return <Todo todo={ndx} />
    });
    return (
      <div className="App">
        {displayList}
      </div>
    );
  }
}

export default List;


// render() {
//   let list = this.props.tasks.map((element, index) => {
//     return <Todo key={index} task={element} />;
//   });
  
//   return <div>{list}</div>;
// }
// }