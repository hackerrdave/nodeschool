import React from 'react';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data={this.props.data}/>
        <TodoForm />
      </div>
    );
  }
}


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      titleValue: '',
      detailValue: ''
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  changeTitle(e) {
    this.setState({titleValue: e.target.value});
  }

  changeDetail(e) {
    this.setState({detailValue: e.target.value});
  }

  addTodo() {
    let updatedData = this.state.data;

    updatedData.push({
      key: Math.floor(Math.random()*1000),
      title: this.state.titleValue,
      detail: this.state.detailValue
    });

    this.setState({
      data: updatedData,
      titleValue: '',
      detailValue: ''
    });
  }

  deleteTodo(title) {
    let updatedData = this.state.data.filter((todo) => todo.title !== title);
    this.setState({data: updatedData});
  }

  render() {
    let todo = this.state.data.map((obj) => <Todo onDelete={this.deleteTodo} title={obj.title} key={obj.key}>{obj.detail}</Todo>);

    return (
      <div className="todoList">
        <div>
          Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
          Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      style: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this._onDelete = this._onDelete.bind(this);
  }

  handleChange(e) {
    var checkedState = e.target.checked ? 'checkedTodo' : 'uncheckedTodo';

    this.setState({
      checked: e.target.checked,
      style: style[checkedState]
    });
  }

  _onDelete() {
    this.props.onDelete(this.props.title);
  }

  render() {
    return (
      <tr style={this.state.style}>
        <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
        <td style={style.tableContent}>
          <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
        </td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
}

Todo.propTypes = {
  title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
  render() {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    );
  }
}

let style = {
  checkedTodo: {
    textDecoration: 'line-through'
  },
  uncheckedTodo: {
    textDecoration: 'none'
  },
  tableContent: {
    border: '1px solid black'
  }
};
