import { createStore , combineReducers} from 'redux';
import { composeWithDevtools} from 'redux-devtools-extension';
const reducer = combineReducers({
  todos: todoReducers
})


const store = createStore(
     reducer , 
)