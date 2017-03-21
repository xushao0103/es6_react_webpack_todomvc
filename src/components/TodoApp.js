import React,{PropTypes,Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import  Header from './Header'
import * as TodoActions from '../actions'/*把actions里面的变量全部赋值给TodoActionszhege对象*/
import MainSection from './MainSection'


/*定义一个App组件继承自Component组件*/
class App extends Component {
    /*规定传入App组件里的属性类型*/
    static propTypes =
    {
        todos: PropTypes.array.isRequired,
        actions:PropTypes.object.isRequired
    };

    render() {
        let todos = this.props.todos;
        let actions = this.props.actions;
        return (
            <div>
                <Header addTodo = {actions.addTodo}/>
                <MainSection todos={todos} actions={actions}/>
            </div>
        )
    }
}
/*定义一个mapStateToProps函数去监听 Redux store的变化,并把state绑定到当前到组件的props上*/
const mapStateToProps = state => ({
    todos: state.todos
});

/**/
const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators(TodoActions,dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

