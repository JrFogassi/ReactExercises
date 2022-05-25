import './style.css'

function Button({number, name}){
    function handleClick(){
        alert(`You clicked on ${number}`)
    }
     return (
     <>
     <button className="buttonsClicked" onClick={handleClick}>{name}</button>
     </>
     )
     
}

export default Button;