/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react'

function Console() {
    useEffect(() => {
        console.log('Hello from Console')
    }, [])

    return (
        <div>
        </div>
    )
}

export default Console