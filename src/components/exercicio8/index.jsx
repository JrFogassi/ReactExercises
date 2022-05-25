import BooleanJoke from "./BooleanJoke"
import JokeC from "./JokeC"

function Exercicio8() {
	return (
	<>
		<h1 className='title'>Exercicio8</h1>
		<div>
			{BooleanJoke.map((title) => {
				return(
					<>
						<h2>{title.setup}</h2>
						<p>{title.punchline}</p>
					</>
					
				)
			})}
		</div>

		<div>
			{JokeC.map((titleC) => {
				return(
					<>
						<h2>{titleC.setup}</h2>
						<p>{titleC.punchline}</p>
					</>
				)
			})}
		</div>
	</>
	)
	
}

export default Exercicio8
