import React from 'react'

const Button = ({ setIsFakeDark, isFakeDark }) => {
    return (
        <div>

            <button
                onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
                className="btn-fake-dark-mode"
            >
                {isFakeDark ? "☀️" : "🌙"}
            </button>
        </div>
    )
}

export default Button