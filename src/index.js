

// let x = document.getElementById("overlay")
// let p = document.createElement("p")
// p.innerText = "this is test"
// p.id = "test"
// let btn = document.createElement("button")
// btn.innerText = "question"
// btn.addEventListener("click",print)
// x.appendChild(p)
// x.appendChild(btn)
//canvas.addEventListener('click', draw);
 
//let div = document.getElementById("canvas-wrap")
//div.innerText = "test"

function createBoard() {
    
    let img = new Image();
    let imgLine = new Image();
    let imgWeekOne = new Image();
    let imgWeekTwo = new Image();
    let imgWeekThree = new Image();
    let codeChallenge = new Image();
    imgLine.src = 'src/flatline.png'
    imgWeekOne.src = 'src/week1.png'
    imgWeekTwo.src = 'src/week2.png'
    imgWeekThree.src = 'src/week3.png'
    img.src = 'src/flatiron.png';
    codeChallenge.src = 'src/code.png'
    let c = document.getElementById("board");
    c.addEventListener('click', draw)
    let ctx = c.getContext("2d");
    ctx.rect(20, 20, 600, 600);
    ctx.rect(95,95,450,450);
    ctx.rect(110,110,425,425);
    img.onload = function() {
        
    ctx.drawImage(img,110,110,425,425)
    ctx.drawImage(imgLine,470,550,45,45)
    ctx.drawImage(imgLine,560,130,45,45)
    ctx.drawImage(imgLine,110,25,45,45)
    ctx.drawImage(imgLine,40,450,45,45)
    ctx.drawImage(imgWeekOne,110,540,70,50)
    ctx.drawImage(imgWeekTwo,220,540,70,50)
    ctx.drawImage(imgWeekThree,330,540,70,50)
    
    ctx.drawImage(imgWeekOne,550,460,70,50)
    ctx.drawImage(imgWeekTwo,550,345,70,50)  
    ctx.drawImage(imgWeekThree,550,235,70,50)  
    
    ctx.drawImage(imgWeekOne,20,125,70,50)  
    ctx.drawImage(imgWeekTwo,20,235,70,50)
    ctx.drawImage(imgWeekThree,20,345,70,50)
     
    ctx.drawImage(imgWeekThree,220,15,70,50)
    ctx.drawImage(imgWeekTwo,330,15,70,50)
    ctx.drawImage(imgWeekOne,440,15,70,50)  

    ctx.drawImage(codeChallenge,550,15,60,50)  
    ctx.drawImage(codeChallenge,20,15,60,50)  
    ctx.drawImage(codeChallenge,20,545,60,50)  
    ctx.drawImage(codeChallenge,555,545,60,50)  
  }
      
    ctx.rect(20,20,75,75);
    ctx.rect(20,95,75,112.5);
    ctx.rect(20,208,75,112.5);
    ctx.rect(20,320,75,112.5);
    ctx.rect(20,433,75,112.5);

    ctx.rect(545,320,75,112.5);
    ctx.rect(545,433,75,112.5);
    ctx.rect(545,95,75,112.5);
    ctx.rect(545,208,75,112.5);
    ctx.rect(545,20,75,75);

    ctx.rect(95,545,112.5,75);
    ctx.rect(208,545,112.5,75);
    ctx.rect(320,545,112.5,75);
    ctx.rect(433,545,112.5,75);
    ctx.rect(545,545,75,75);
    ctx.rect(20,545,75,75);

    ctx.rect(95,20,112.5,75);
    ctx.rect(207,20,112.5,75);
    ctx.rect(320,20,112.5,75);
    ctx.rect(433,20,112.5,75);
    ctx.rect(545,545,75,75);
    ctx.stroke();


  }

createBoard()

    
    //   function myMove() {
    //     let elem = document.createElement('img')
    //       elem.src = `src/smileyface.jpg`
    //     var pos = 100;
    //     var id = setInterval(frame, 10);
    //     function frame() {
    //       if (pos == 350) {
    //         clearInterval(id);
    //       } else {
    //         pos++; 
    //         elem.style.top = pos + 'px'; 
    //         elem.style.left = pos + 'px'; 
    //       }
    //     }
    //   }
         
    
      function draw() {

        let ctx = document.getElementById('board').getContext('2d');
        let img = new Image();
        img.id = "player1"
        img.src = currentPlayer.icon;
        img.onload = function() {
            // ctx.drawImage(img, 100, 590, 25, 25); // home position
            ctx.drawImage(img,currentPlayer.position.x, currentPlayer.position.y, 25, 25 )
        //    ctx.drawImage(img, 220,590, 25, 25); // second block at bottom
        //   ctx.drawImage(img, 325,590, 25, 25); 
        //   ctx.drawImage(img, 435,590, 25, 25);
        //   ctx.drawImage(img,550,590,25,25 )

        //   ctx.drawImage(img,550,510,25,25)
        //   ctx.drawImage(img,550,400,25,25)
        //   ctx.drawImage(img,550,290,25,25)
        //   ctx.drawImage(img,550,180,25,25)
        //   ctx.drawImage(img,550,60,25,25)
        //   ctx.drawImage(img,440,60,25,25)
        //   ctx.drawImage(img,330,60,25,25)
        //   ctx.drawImage(img,210,60,25,25)
        //   ctx.drawImage(img,100,60,25,25)
        //   ctx.drawImage(img,25,60,25,25)
            
        //   ctx.drawImage(img,25,180,25,25)  
        //   ctx.drawImage(img,25,290,25,25) 
        //   ctx.drawImage(img,25,290,25,25)  
        //   ctx.drawImage(img,25,400,25,25) 
        //   ctx.drawImage(img,25,510,25,25)
        //   ctx.drawImage(img,25,590,25,25)

          //ctx.drawImage()  
            }
          }


        

          function draw2(){
          let ctx = document.getElementById('board').getContext('2d');
        let img = new Image();
        img.src = 'src/android.png';
        img.onload = function() {
        ctx.drawImage(img, 140, 590, 25, 25); // home position
        ctx.drawImage(img, 260,590, 25, 25); // second block at bottom
        ctx.drawImage(img, 365,590, 25, 25); 
        ctx.drawImage(img, 475,590, 25, 25);
        ctx.drawImage(img,590,590,25,25 )

          ctx.drawImage(img,590,510,25,25)
          ctx.drawImage(img,590,400,25,25)
          ctx.drawImage(img,590,290,25,25)
          ctx.drawImage(img,590,180,25,25)
          ctx.drawImage(img,590,60,25,25)
          ctx.drawImage(img,480,60,25,25)
          ctx.drawImage(img,370,60,25,25)
          ctx.drawImage(img,250,60,25,25)
          ctx.drawImage(img,140,60,25,25)
          ctx.drawImage(img,65,60,25,25)
            
          ctx.drawImage(img,65,180,25,25)  
          ctx.drawImage(img,65,290,25,25) 
          ctx.drawImage(img,65,290,25,25)  
          ctx.drawImage(img,65,400,25,25) 
          ctx.drawImage(img,65,510,25,25)
          ctx.drawImage(img,65,590,25,25)

          //ctx.drawImage()  
            }
          }

          // function drawTest() {

          //   let ctx = document.getElementById('board').getContext('2d');
          //   let img = new Image();
          //   img.id = "player1"
          //   img.src = 'src/smileyface.jpg';
          //   img.onload = function() {
          //       // ctx.drawImage(img, 100, 590, 25, 25); // home position
          //      // ctx.drawImage(img,currentPlayer.position.x, currentPlayer.position.y, 25, 25 )
          //       ctx.drawImage(img, 220,590, 25, 25); // second block at bottom
          //      ctx.drawImage(img, 325,590, 25, 25); 
          //      ctx.drawImage(img, 435,590, 25, 25);
          //      ctx.drawImage(img,550,590,25,25 )
    
          //      ctx.drawImage(img,550,510,25,25)
          //     ctx.drawImage(img,550,400,25,25)
          //      ctx.drawImage(img,550,290,25,25)
          //      ctx.drawImage(img,550,180,25,25)
          //     ctx.drawImage(img,550,60,25,25)
          //      ctx.drawImage(img,440,60,25,25)
          //      ctx.drawImage(img,330,60,25,25)
          //     ctx.drawImage(img,210,60,25,25)
          //      ctx.drawImage(img,100,60,25,25)
          //      ctx.drawImage(img,25,60,25,25)
                
          //      ctx.drawImage(img,25,180,25,25)  
          //      ctx.drawImage(img,25,290,25,25) 
          //      ctx.drawImage(img,25,290,25,25)  
          //      ctx.drawImage(img,25,400,25,25) 
          //      ctx.drawImage(img,25,510,25,25)
          //      ctx.drawImage(img,25,590,25,25)
    
          //     //ctx.drawImage()  
          //       }
          //     }
        

function moveForward(currentPlayer)  {
    if (currentPlayer == player1) {
        player1.positionid = player1.positionid + 1
        player1.position = player1Positions[`block${player1.positionid}`]
       
    } else {
        player2.positionid = player2.positionid + 1
        player2.positon = player2Positions[`block${player2.positionid}`]
    }

    draw(currentPlayer)

    if (currentPlayer == player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
    
    gamePlay(currentPlayer)
}       

function clear(){
        let ctx = document.getElementById('board').getContext('2d');
        ctx.fillStyle = 'WHITE'
        ctx.fillRect(590, 510, 25, 25);
        

       }

