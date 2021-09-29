import React, { useEffect, useRef} from 'react'

import './SmoothScrolling.css'
import useWindowSize from '../hooks/useWindowSize'

const SmoothScrolling = ({ children }) => {
    // 1
    const windowSize = useWindowSize()

    // 2
    const scrollingContainerRef = useRef()

    // 3
    const data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0
    }

    // 4
    useEffect(() => {
        setBodyHeight()
    },[windowSize.hight])

    const setBodyHeight = () => {
        document.body.style.height = `${
            scrollingContainerRef.current.getBoundingClientRect().height
        }px`
    }

    // 5
    useEffect(() => {
        requestAnimationFrame(() => SmoothScrollingHandler())
    }, [])

    const SmoothScrollingHandler = () => {
        data.current = window.scrollY
        data.previous += (data.current - data.previous) * data.ease
        data.rounded = Math.round(data.previous * 100) / 100

        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`
        
        // Recursive call
        requestAnimationFrame(() => SmoothScrollingHandler())
    }



    return(
        <div className="parent">
            <div ref={scrollingContainerRef}>{children}</div>
        </div>
    )
}

export default SmoothScrolling