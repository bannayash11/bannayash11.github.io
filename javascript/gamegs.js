var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
	if(character.classList != "jump"){
		character.classList.add("jump");
	}

	setTimeout( function(){	
		character.classList.remove("jump");
	},500);

}


var checkDead = setInterval(function(){
	var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft =  parseInt(window.getComputedStyle(block).getPropertyValue("left")); 

	if(blockLeft < 20 && blockLeft > 0 && charactertop >=130){
		block.style.jump = "none";
		block.style.display = "none";
		alert("Game over");
		}

},10);


/*
document.addEventListener('DOMContentLoaded', () => {
const dino = document.querySelector('.dino')
const grid = document.querySelector('.grid')
const alert = document.getElementById('alert')
let isjumoing =false
let gravity = 0.9
let isGameover = false


function control(e) {
	if(e.keyCode === 32 ){
		if(isjumoing === false){
			isjumoing = true
			jump()
		}
	}
}

document.addEventListener('keyup',control)

let position = 0 
function jump(){
	let count = 0 
	let timerId = setInterval( function () {
		if(count ===  15){
			clearInterval(timerId)
			console.log('down')
			let downTimerId = setInterval(function(){
			 if(count ===0 ){
			 	clearInterval(downTimerId)
				isjumoing =false
			 }
			position -=5
			count--
			position = position * gravity
			dino.style.bottom = position + 'px'			
		},20)
}



		console.log('up')
		count ++
		position +=30
		position = position * gravity
		dino.style.bottom = position + 'px'
		console.log(dino.style.bottom)
	},20)
}


function generaterstacles() {
	let randomTime = Math.random() * 4000
	let obstacleposition = 1000
	const obstacle = document.createElement('div')
	obstacle.classList.add('obstacle')
	grid.appendChild(obstacle)
	obstacle.style.left = obstacleposition + 'px'


	let timerId = setInterval(function(){
		//code
		if(obstacleposition === 0 && obstacleposition < 60 &&position <60){
			clearInterval(timerId)
			alert.innerHTML = 'Game Over'
			isGameover =true
			while(grid.firstChild){
				grid.removeChild(grid.lastChild)
			}
		}
		obstacleposition -=10
		obstacle.style.left = obstacleposition + 'px'
	},20)
	if(!isGameover)
		setTimeout(generaterstacles, randomTime)
}
generaterstacles()

})

*/
