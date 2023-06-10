import React from 'react'

function NavigateBtn({ setCurrentItem, currentItem, item, name, color }) {

    function hoverHandler(item) {
        setCurrentItem(item);
    }

    return (
        <div >
            <div className='navigate'>
                <a
                    href=""
                    style={{ color: color }}
                    className="icons"
                    onMouseEnter={() => hoverHandler(item)}
                    onMouseLeave={() => hoverHandler("")}
                >
                    <ion-icon name={`${name}-outline`} ></ion-icon>
                </a>
                <div className='box'>{currentItem == item ? item : ""}&nbsp;</div>
            </div>
        </div>
    )
}

export default NavigateBtn