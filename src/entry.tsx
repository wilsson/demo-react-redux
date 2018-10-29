import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { configureStore } from './configureStore';
import { addTask, deleteTask } from './app';

const store = configureStore();

const node = document.createElement('div');
document.body.appendChild(node);

interface Props {
    tasks?: any;
    handleAddTask?: any;
    handleDeleteTask?: any;
}
class Component extends React.Component<Props> {
    myRef;
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return(
            <div>
                <input name="task" ref={this.myRef}/>
                <button onClick={() => {
                    let value = this.myRef.current.value;
                    console.log('>>', value);
                    this.props.handleAddTask(value);
                    this.myRef.current.value = '';
                }}>
                    add task
                </button>
                {this.props.tasks.map((task, i) => (
                    <li key={i}>
                        {task}
                        <button onClick={() => {
                            console.log('>>', task);
                            this.props.handleDeleteTask(task)
                        }}>remove</button>
                    </li>
                ))}
            </div>
        )
    }
}

const mapState = state => {
    return {
        tasks: state
    }
};

const mapDispatch = dispatch => {
    return {
        handleAddTask(task) {
            dispatch(addTask(task));
        },
        handleDeleteTask(task) {
            dispatch(deleteTask(task));
        }
    }
};

const App = connect(
    mapState,
    mapDispatch
)(Component)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, node);