import React, {Component} from 'react';
import Todo from './Todo'
import './App.css';

class List extends Component {
  constructor(props){
    super(props);
  }


  render(){
    console.log(this.props.todoList)
    let displayList = this.props.todoList.map((ndx, key) => {
      return <Todo listItem={ndx} key={key}/>
    });
    return (
      <div>
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