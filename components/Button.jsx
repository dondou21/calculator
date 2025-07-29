
export default function Button( { onButtonClick, onClear } ) {

    function handleClick(event) {
        const value = event.target.value

        if(value === "AC"){
            onClear()
        }else{
        onButtonClick(value)
        }
    }

    return (
        <div className="btn-container">
            <div className="btn-sub-container">
                <input type="button" value="AC" onClick={handleClick} />
                <input type="button" value="+/-" onClick={handleClick} />
                <input type="button" value="%"  onClick={handleClick} />
                <input id="right-side" type="button" value="÷" onClick={handleClick} />
            </div>
            <div className="btn-sub-container">
                <input type="button" value="7" onClick={handleClick} />
                <input type="button" value="8" onClick={handleClick} />
                <input type="button" value="9" onClick={handleClick} />
                <input id="right-side" type="button" value="x" onClick={handleClick} />
            </div>
            <div className="btn-sub-container">
                <input type="button" value="4" onClick={handleClick} />
                <input type="button" value="5" onClick={handleClick} />
                <input type="button" value="6" onClick={handleClick} />
                <input id="right-side" type="button" value="-" onClick={handleClick} />
            </div>
            <div className="btn-sub-container">
                <input type="button" value="1" onClick={handleClick} />
                <input type="button" value="2" onClick={handleClick} />
                <input type="button" value="3" onClick={handleClick} />
                <input id="right-side" type="button" value="+" onClick={handleClick} />
            </div>
            <div className="btn-sub-container">
                <input id="zero-btn" type="button" value="0" onClick={handleClick} />
                <input type="button" value="." onClick={handleClick}/>
                <input id="right-side" type="button" value="=" onClick={handleClick} />
            </div>
        </div>
    )
}