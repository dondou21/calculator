import '../src/App.css'

export default function Display(props) {
    return (
        <div className='display-container'>
            {props.value}
        </div>
    )
}