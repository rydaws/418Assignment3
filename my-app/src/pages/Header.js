import React from "react"

function Header() {
    return (
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="home">
                    <img src="/braces.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    Ryan's Website
                </a>
            </div>
        </nav>
    )
}

export default Header