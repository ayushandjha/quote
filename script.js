const quoteDis = document.querySelector('.quote');
const authorDis = document.querySelector('.author');
const newBtn = document.querySelector('.new');
const tweet = document.querySelector('.icon');



let quoteText ="";
let quoteAuthor = "";

const quoteGen = async()=>{
    try {
        const randN = Math.floor(Math.random()*1000)
        const api = 'https://type.fit/api/quotes';
        const quoteFetch = await fetch(api);
        const quoteJ = await quoteFetch.json();
        quoteText = quoteJ[randN].text
        quoteAuthor = quoteJ[randN].author
        quoteDis.innerHTML = quoteText;
        authorDis.innerHTML = quoteAuthor;
    } catch (error) {
        console.log(error);
    }
}

tweet.addEventListener('click',()=>{
    const tweetPost = `https://twitter.com/intent/tweet?text=${quoteText}`;
    window.open(tweetPost)
})

const anim = ()=>{
    tweet.classList.toggle('anim');
    tweet.classList.toggle('anim1');

}
newBtn.addEventListener('click', ()=>{
     anim();
     quoteGen();
})

quoteGen();









