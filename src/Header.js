import Nav from "./nav";
import './Header.css'

export default function Header(props) {
    return (
        <header>
            <Nav {...props}/> 
            <div className="hero">
                <h1>What will be next?</h1>
                </div>
        </header>
    )
} 