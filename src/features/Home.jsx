import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [count, setCount] = useState(0)

    return (
        <div className='container'>
            <div>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>)
}

export default Home