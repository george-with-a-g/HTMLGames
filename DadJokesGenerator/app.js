const jokeEl = document.getElementById('joke');
const get_joke_btn = document.getElementById('get_joke');


get_joke_btn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke(){
    const jokeResult = await fetch('https://icanhazdadjoke.com',{
        headers: {
            'Accept': 'application/json'
        }
        
    });

    const joke = await jokeResult.json();
    console.log(joke)
    jokeEl.innerText = joke.joke;
}
