/*
What is a JSX file vs JS?
JS is simply a scripting language, adding functionality into your website. 
JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript. 
Both JS and JSX are interchangeable but JSX makes the code easier to understand for users.
*/

import  "./styles.css"

export default function App() {
/*In React class is a reserved word for a class, 
so it is necessary to call it className ot other*/
/*Components inside of React can return only one element*/
/*
Here we were returning 2 elements, the form and h1, that's why of the error 
Two ways to solve, everything inside a div
Or fragments, these are <> without not tag at all
*/

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item"/>
        </div>
      </form>
      <h1 className="header"> Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}
