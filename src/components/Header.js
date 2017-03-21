
import React, {Component, PropTypes} from 'react'
import TodoTextInput from './TodoTextInput'


class Header extends Component {
    static propTypes =
        {
            addTodo: PropTypes.func.isRequired,
        };

    handleSave= text => {
        if(text.length !== 0) {
            this.props.addTodo(text);
        }
    }


    render() {
        return(
            <header className="header">
                <h1>
                    todos
                </h1>
                <TodoTextInput
                    onSave={this.handleSave}
                    placeholder="请添加一个todo"
                    newTodo={true}
                />

            </header>
        )
    }
};
export default Header;