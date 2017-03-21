
import  {combineReducers} from 'redux'
import  todos from './todos'

/*把reducer用combineReducers方法合并成一个reducer*/
const rootReducer = combineReducers({
    todos
});

export  default rootReducer