import './style.css'

function Exercicio2() {
	const fuiClicado = () => {
		alert("Clicked!")
	}
	return (
	<>
	<h1 className='title'>Exercicio2</h1>
	<button className="button" onClick={fuiClicado}>Click Me!</button>
	</>
	)
}

export default Exercicio2
