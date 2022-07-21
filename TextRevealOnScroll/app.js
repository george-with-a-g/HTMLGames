let listItems = [...document.querySelectorAll('li')];

let options = {
    rootMargin: '-10%',
    threshold: 0.0
}

let observer = new IntersectionObserver(showItem, options)

function showItem(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let letters = [...entry.target.querySelectorAll('span')];
            letters.forEach((letter,index) => {
                setTimeout(() =>{
                    letter.classList.add('active')
                },index * 10)
            })
            entry.target.children[0].classList.add('active')
        }
    })
}

listItems.forEach(item => {
    let newString ='';
    let itemText = item.children[0].innerText.split('');
    itemText.map(letter => (newString += letter == ' ' ? `<span class='gap'>&nbsp;</span>` : `<span>${letter}</span>`))
    item.innerHTML = newString;
    observer.observe(item);
})
