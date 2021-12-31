import './nav.css'

export default function Nav(props) {
    const {logo,company,lastLink} = props;
    return (
        <nav>
            <ul>
                <li><span className='bold'>{logo.slice(0,2)}</span>{logo.slice(2)}</li>
                <li>{company}</li>
                <li>{lastLink}</li>
            </ul>
        </nav>
    )
}