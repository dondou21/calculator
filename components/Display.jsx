import '../src/App.css'

export default function Display(props) {
    return (
        <div className='display-container'>
            <h2>{props.value}</h2>
        </div>
    )
}