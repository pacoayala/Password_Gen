

function keyGen(){
event.preventDefault();
 let pass =[];
 let SizePass = document.getElementById('inlineFormCustomSelect').value;
 let wordchar = 'aEs3@21fQertyFu%ioaRs21Njkl&76IA54B32Z1pDu%iopSC098TmHnbUvcLzxas3V@2Y1feJrtyWu%iopF09K8mnbvczxjkl&76M54O3098mPnbvczxjkl&7654X321';

 

 while(pass.length < SizePass){
     pass+= wordchar.charAt(Math.floor(Math.random () * wordchar.length));

 }
 document.getElementById('passgen').innerHTML =`<h3>Password generado : ${pass}</h3>`;
 
}
