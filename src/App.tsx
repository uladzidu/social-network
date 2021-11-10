import React from 'react';
import './App.css'


export const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://static.wirtualnemedia.pl/media/top/volvo-logonowe-655.jpg' alt={'volvo'}/>
            </header>
            <nav className='nav'>
                <div>
                    <a href="#3">Profile</a>
                </div>
                <div>
                    <a href="#3">Messages</a>
                </div>
                <div>
                    <a href="#3">News</a>
                </div>
                <div>
                    <a href="#3">Music</a>
                </div>
                <div>
                    <a href="#3">Settings</a>
                </div>

            </nav>
            <div className='content'>
                <div>
                    <img
                        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        alt="ou"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
