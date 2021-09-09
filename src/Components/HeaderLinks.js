import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { faAngrycreative } from '@fortawesome/free-brands-svg-icons'

function HeaderLinks() {
    return (
        <div class="m-1">
            <nav class="bg-purple-500">
                <div class="sm:flex items-center lg:justify-items-start">
                    <div class="px-10 xs:flex justify-center">
                        <Link to="/">
                            <FontAwesomeIcon icon={faAngrycreative} class="xs:h-10 sm:h-16 md:h-32 lg:h-46 hover:text-white transition duration-700 ease-in-out" />
                        </Link>
                    </div>
                    <div class="flex justify-center lg:ml-20 ">
                        <ul class="xss:hidden xs:flex text-xs space-x-3 sm:text-sm space-x-4 md:space-x-4 lg:space-x-8">

                            <li class="sm:text-sm md:text-base lg:text-xl hover:text-white transition duration-700 ease-in-out">
                                <Link to="/">Home</Link>
                            </li>

                            <li class="sm:text-sm md:text-base lg:text-xl hover:text-white transition duration-700 ease-in-out">
                                <Link to="/alltasks">My Task</Link>
                            </li>

                            <li class="sm:text-sm md:text-base  lg:text-xl hover:text-white transition duration-700 ease-in-out">
                                <Link to="/complete">Completed Task</Link>
                            </li>

                            <li class="sm:text-sm md:text-base  lg:text-xl hover:text-white transition duration-700 ease-in-out">
                                <Link to="/pending">Pending Task</Link>
                            </li>

                            <li class="sm:text-sm md:text-base lg:text-xl hover:text-white transition duration-700 ease-in-out">
                                <Link to="/inprogress">InProgress Task</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="flex justify-center py-5  xs:hidden">
                        <Link to="/toggle">
                            <FontAwesomeIcon icon={faBars} class="h-9" />
                        </Link>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default HeaderLinks
