import React from 'react'

function Home({ data }) {
    return (
        <div className='mainDiv grow'>

            <div className='homeDetails'>
                <h1 className='welcome'>Hello<span className='exclamation'>!</span></h1>
                <h2 className='intro'>I'm <span className='fullName'>{data[1].fullName}</span> </h2>
                <h1 className='position'>Frontend Developer</h1>
                <p>{data[2].firstPageInfo}</p>
            </div>
            <div className='bgImage'></div>
            <div className='photoButton'>
                <div className='imageWrapper'>
                    <div className='image'></div>
                </div>
                <div><button className='cvBtn'>Download CV</button></div>
            </div>
        </div>

    )
}

export default Home