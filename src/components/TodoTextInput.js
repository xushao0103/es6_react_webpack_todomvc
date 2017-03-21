import  React,{Component,PropTypes} from 'react'
import  classnames from 'classnames'

export default class  TodoTextInput extends  Component {
    /*控制父组件传过来的属性类型和是否必须*/
    static propTypes = {
        onSave:PropTypes.func.isRequired,
        text:PropTypes.string,
        placeholder:PropTypes.string,
        editing:PropTypes.bool,
        newTodo:PropTypes.bool
    };

    /*初始状态*/
    state = {
        text:this.props.text || ''
    };

    /*按回车键时触发的函数*/
    handleSubmit = e => {
        const text = e.target.value.trim();/*trim()去两边空格的方法*/
        if(e.which === 13) {
            this.props.onSave(text);
            if(this.props.newTodo) {
                this.setState({text:''})
            }
        }
    };

    /*每次输入都调用的函数*/
     handleChange = e => {
         this.setState({text:e.target.value})
     };

    /*失去焦点时调用的函数*/
    handleBlur = e => {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value)
        }
    };

    render() {
        return (
            <input
                className={
                    classnames({
                    edit:this.props.editing,
                    'new-todo':this.props.newTodo
                    })            }
                type="text"
                placeholder={this.props.placeholder}
                autoFocus={true}
                value={this.state.text}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}

            />
        )
    }
}