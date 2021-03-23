import {MainAction, MainState} from './interfaces/main.reducer.interface'
import {aa, userReducer} from './user.reducer'
import {useImmerReducer} from 'use-immer'

export function MainReducer(state: MainState, action: MainAction): MainState {
  return {
    user: userReducer(state.user, action),
  }
}

aa

function Counter() {
  const states = {
    user: undefined,
  }
  const [state, dispatch] = useImmerReducer(MainReducer, states)
  return (
      <>
        Count: {state.user}
        <button onClick={() => dispatch()}>Reset</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      </>
  )
}
