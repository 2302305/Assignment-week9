var quotes =[
{
    q:"“Be yourself; everyone else is already taken.”",author:"― Oscar Wilde"
},
{
    q:"“A room without books is like a body without a soul.”",author:"― Marcus Tullius Cicero"
}
,
{
    q:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",author:"― Marilyn Monroe"
}
,
{
    q:"“So many books, so little time.”",author:"― Frank Zappa"
}
,
{
    q:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",author:"― Albert Einstein"
}

,
{
    q:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",author:"― Bernard M. Baruch"
}

]








function generateQuote(){
    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML=quotes[randomIndex].q
    document.getElementById("author").innerHTML=quotes[randomIndex].author
}