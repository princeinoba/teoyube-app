import React, {useReducer, useRef} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const inputRef = useRef()
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          {
            id: state.length * Math.random(),
            name: action.name
          }
        ]
      // Bonus: Remove a todo from the list.
      case 'remove':
        return state.filter(item => item.id !== action.id)
      default:
        return state
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'add',
      name: inputRef.current.value
    })
    inputRef.current.value = ''
  }

  return (
    <div className="container text-center">
      <h1>Create a Todo List!</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Start typing what you need to do..."
        />
        <button className="btn btn-success mt-3 mb-5" type="submit">
        <FontAwesomeIcon icon={faPlus} /> New task
        </button>
      </form>
      <ul className="list-group">
        {items.map(item => (
          <li className="list-group-item" key={item.id}>
            {item.name}
            {/* <Col lg="6" xl="3">
              <Lane name="Upcoming" onContainerLoaded={this.onContainerReady}>
                <Task
                  id="1"
                  avatar={avatar7}
                  text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
                  checked
                />
                <Task
                  id="2"
                  avatar={avatar8}
                  text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
                  checked
                />
                <Task
                  id="3"
                  avatar={avatar9}
                  text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
                />
                <Task
                  id="4"
                  avatar={avatar10}
                  text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
                />
                <Task
                  id="5"
                  avatar={avatar11}
                  text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
                />
              </Lane>
            </Col> */}
            <button
              className="btn btn-danger ml-5"
              onClick={() => dispatch({type: 'remove', id: item.id})}
            >
              X Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
