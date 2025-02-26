let count = 0;

function display(){
    const div = document.querySelector(".number").innerText = count;
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
        fetchQuotes();
    });
   
}


function fetchQuotes(){
    let host = "http://localhost:5555/data";
    fetch(host).then(res => res.json()).then(res => console.log(res));
}



counter();


