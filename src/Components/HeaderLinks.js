import React from 'react'
import { Link } from 'react-router-dom'
function HeaderLinks() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/alltasks">My Task</Link>
                    </li>

                    <li>
                        <Link to="/complete">Completed Task</Link>
                    </li>

                    <li>
                        <Link to="/pending">Pending Task</Link>
                    </li>

                    <li>
                        <Link to="/inprogress">InProgress Task</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderLinks
