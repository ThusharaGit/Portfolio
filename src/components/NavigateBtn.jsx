import React from 'react'




function NavigateBtn({ setCurrentItem, currentItem, item, name, color, navigate, path}) {

    function hoverHandler(item) {
        setCurrentItem(item);
    }

    return (
        <div >
            <div className='navigate'>
                <button onClick={() => navigate(path)}

                    style={{ color: color }}
                    className="icons navigateBtn"
                    onMouseEnter={() => hoverHandler(item)}
                    onMouseLeave={() => hoverHandler("")}
                >
                    <ion-icon name={`${name}-outline`} ></ion-icon>
                </button>
                <div className='box'>{currentItem == item ? item : ""}&nbsp;</div>
            </div>
        </div>
    )
}

export default NavigateBtn