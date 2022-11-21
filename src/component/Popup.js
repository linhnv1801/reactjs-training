import React from 'react';
import Button from './Button';

function Popup({Props, trigger, Return}) {

    return (trigger) ? (
    <div className='popup'>
        <div>
        { Object.keys(Props).map((key, i) => (
            <div key={i}>
            <label>{key}</label><br/>
            <input type="text" defaultValue={Props[key]}></input>
            </div>
        ))}
            <div>
            <Button title="Save" handle={handleSave}/>
            <Button title="Cancel" handle={() => Return(false)}/>   
            </div>
        </div>
    </div>
    ) : "";
}
function handleSave() {
    alert('Đã lưu');
}
export default Popup