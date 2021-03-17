import React from 'react'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>Frameworks</h1>
      {
        list.map(
          ({ title, author, objectID }) => (
            <div key={objectID}>
              <h2>{title}</h2>
              <p>author: {author}</p>
            </div>
          )
        )
      }
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />
    </div>
  );
}

export default App;