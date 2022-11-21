import React from 'react';

function Search({ userText, setUserText }) {
    
    function handleOnChange(event) {
        setUserText(event.target.value)
    }

    return (
        <div>
            <form className="example" action="action_page.php" onSubmit={(event) => {event.preventDefault()}}>
                <input type="text" 
                placeholder="Sort by Greek Name" 
                name="search" 
                value={userText} 
                onChange={handleOnChange}
                />
            </form>
        </div>
    )
}

export default Search