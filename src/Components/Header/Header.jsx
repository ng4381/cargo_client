import React from "react"
import cl from './Header.module.css'
export const Header = (props) => {
    return (
        <div className={cl.header}>
            {props.headerText}
        </div>
    )
}