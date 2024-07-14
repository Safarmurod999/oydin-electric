import React from 'react'

const Container = ({ style, children }) => {
    return (
        <div className={`container px-[15px] mx-auto  ${style}`}>{
            children
        }
        </div>
    )
}

export default Container