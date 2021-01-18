import React from 'react';


const Personal = ({icon}) => (

    <div className="special">

        <div className="special__single">
            <div className="special__checkmark">
            <input type="checkbox" name="cb" id="checkbox_4" />
            <label htmlFor="checkbox_4" id="checkbox">
            <svg viewBox="0 0 100 100">
                <path className="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                <polyline className="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
            </svg>
            </label>
            </div>
            <img src={icon}/>
            <div className="special__content">
                <h3 className="special__pro-title"><span> I would like a personal</span> Packaging.</h3>
            </div>
        </div>
                
    </div> 
  
);

export default Personal;