let count = 0;

function display(){
     document.querySelector(".number").innerText = count;
    const quote = document.getElementById("quote");
    let url = "http://localhost:5555/data";
    if(count % 50 == 0){
        quote.style.display = "block";
        fetch(url).then(data => data.text()).then(data => {
           quote.innerText =  `"${data} "`;
        });
    }else{
        quote.style.display = "none";
    }
  
   
}



function counter(){
    document.querySelector(".btns").addEventListener('click', (e) => {
        if(e.target.id == "inc"){
            count++;
        }

        if(e.target.id == "dec"){
            count--;
            if(count < 0){
                count = 0;
            }
        }
        display();
    });
   
}



counter();


