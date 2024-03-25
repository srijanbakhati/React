import Jokes from './components/Joke.jsx'
import jokesData from './components/jokesData.jsx'
function App() {
  const jokeElements = jokesData.map(joke => {
    return <Jokes key={joke.index} setup={joke.setup} punchline={joke.punchline} />
})
  return (
    <div className="body">
      {jokeElements}
    </div>
  
  )
}

export default App
