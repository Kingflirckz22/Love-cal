
function calculatelove(){
    const name1 = document.getElementById("name1").value.trim()
    const name2 = document.getElementById("name2").value.trim()
    // console.log(name1, name2);

    if(name1 === ''|| name2=== ''){
        alert("Please enter both names")
    }else{

        const lovepercentage = Math.floor(Math.random() * 101);

        const Results = document.getElementById("Results")
        
        Results.innerHTML = `${name1} and ${name2}'s love percentage: ${lovepercentage}`

        if(lovepercentage <30){
            Results.innerHTML += "<br> Not a Great match. keep looking!"
        }else if(lovepercentage >=30 && lovepercentage<70 ){
            Results.innerHTML += "<br> Not too perfect, But you can try!"
        }else{
            Results.innerHTML += "<br> What a perfect. You found your pair!"
        }
    }
}