import React from 'react'

export default function NavigationDots({active}) {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) =>   
            <a 
                href={`#${item}`} 
                key={item + index}
                className="app__navigation-dot"
                style={active === item ? {backgroundColor: '#ea5f02'} : {}}
            >
            </a>
        )}
    </div>
  )
}
