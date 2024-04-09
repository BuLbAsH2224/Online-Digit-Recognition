let canvas = document.querySelector("canvas");
let button = document.querySelector("button");
let net = null;
net = new brain.NeuralNetwork();
let net2 = null;


    net.fromJSON(model);
    setInterval(() => {document.querySelector("h1").innerText = brain.likely(getImg(),net);
    
    console.log(net.run(getImg()))
    document.querySelector("h2").innerHTML = `<h2> 0: ${net.run(getImg())[0]} <br> 1: ${net.run(getImg())[1]} <br> 2: ${net.run(getImg())[2]} <br> 3: ${net.run(getImg())[3]} <br> 4: ${net.run(getImg())[4]} <br> 5: ${net.run(getImg())[5]} <br> 6: ${net.run(getImg())[6]} <br> 7: ${net.run(getImg())[7]} <br> 8: ${net.run(getImg())[8]} <br> 9: ${net.run(getImg())[9]} <br> </h2>`

},10)

canvas.width = 28; 
canvas.height = 28;
let ctx = canvas.getContext('2d');
let mouseisdown = false;
button.addEventListener("click",clear)
function clear(){
    ctx.beginPath();
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, 28, 28);
   ctx.closePath()
}
clear();
document.addEventListener("mousedown", () => {mouseisdown = true;   })
document.addEventListener("mouseup", () => {mouseisdown = false;    })
canvas.addEventListener("mousemove", (event) => {draw(event)})
function draw(event){
    
    if(mouseisdown == true){
        ctx.fillStyle = "white"
       
        ctx.beginPath();
        ctx.arc(event.pageX / 18, event.pageY / 18, 1, 0, Math.PI*2, false);
        ctx.fill();
      
    }


}

function getImg(){
    let img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = img.data;
    let newData = [];
    for(let i = 0; i < 784;i++){
       
        newData.push(data[i*4] / 255);
    }
 
    return newData;
}
