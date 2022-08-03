String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

let start_text = "Hello World!"
let end_text = "Bye George!"
let show_text = start_text

const randomCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+='

    /*
         If start text is undefined and end text isn't. Start text is shorter than end text.
         If end text is undefined and start text isn't. End text is shorter than start text.
        let dummy_text = "HahaHaHa";
        dummy_text = dummy_text.replaceAt(2, "!!")
        console.log(dummy_text)

     */
for (let i =0; i < end_text.length; i++){


    let character = getRandomCharacter();
    let end_char = end_text[i];

    show_text = show_text.replaceAt(i, end_char);
    //var show_text_array = show_text_array.split("");
    //show_text_array[i] = end_char;
    //show_text = show_text_array.join("");

    let numberOfCharactersLeft = end_text.length - i;
    let randomCharactersGenerated = '';
    let show_char_loop_count = i + 1;

    while (show_char_loop_count < numberOfCharactersLeft){
        character = getRandomCharacter()
        randomCharactersGenerated = randomCharactersGenerated + character

        //var show_text_array = show_text_array.split("");
        //show_text_array[show_char_loop_count] = character;
        //show_text = show_text_array.join("");

        show_char_loop_count++;
    }

    show_text = show_text.replaceAt(i+1, randomCharactersGenerated)
    console.log(show_text)
}


function getRandomCharacter(){
    let randomInt = Math.random() * randomCharacters.length;
    randomInt = parseInt(randomInt)
    let randomCharacter = randomCharacters[randomInt];
    return randomCharacter;
}
