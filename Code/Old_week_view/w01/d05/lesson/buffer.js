<html>
<header>
  <style>
    body {
      text-align: center;
    }
    canvas {
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    }
    h1 {
      text-align: center;
    }
  </style>
</header>
<body>
  <h1> My Game! </h1>
<canvas id="the_canvas" width="400" height="400"></canvas>
<h3> Rules of the game </h3>
<ul>
  <li> Use the arrow keys to control the red square </li>
  <li> Get the square to the yellow line without
    touching any blue</li>
    <li> Press enter to restart</li>
</ul>
<script>
  var canvas = document.getElementById('the_canvas');
  var ctx = canvas.getContext('2d');

  // sets the speed of the box by setting how many pixels
  // the player box moves everytime a button is pressed
  var speed = 6;

  // updates the position of player box when arrow
  // keys are pressed
  var handleKeyDown = function(evt) {
    if (evt.keyCode === 39) {
      //Left arrow was pressed
      x+=speed;
    } else if (evt.keyCode === 37) {
      //Left arrow was pressed
      x-=speed;
    }else if (evt.keyCode === 40){
      // down key pressed
      y+=speed;
      // up key pressed
    }else if (evt.keyCode === 38){
      y-=speed;
    }else if (evt.keyCode === 13){
    }
  }
  window.addEventListener('keydown',handleKeyDown,true);

  // initialize x-axis and y-axis variable for player square
  var start_x = 300;
  var start_y = 25
  var x = 300;
  var y = 25;

  // initialize level  and losses counter
  var level = 4;
  var losses = 0;

  //create array for the height of each line
  var height = [100, 200, 300, 70, 135, 230];

  // create array for the x value of each block in each line
  // for level 1, level 2, and level 3
  var level_1_a = [0, 100, 200, 300];
  var level_1_b = [50, 150, 250, 350];
  var level_1_c = [50, 100, 200, 250, 350];
  var level_1_d = [160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380];
  var level_1_e = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240]
  var level_1_f = [160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380];
  var level_1_all = [level_1_a, level_1_b, level_1_c, level_1_d, level_1_e, level_1_f];

  // arrays for level 3
  var level_3_a = [0, 100, 200, 300];
  var level_3_width = [200];


  // resets board with updated values
  //Level 1
  var level_1 = function() {
    //clear background
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 380, 400, 20);

    //make sure player doesn't go off the screen
    if (x > (canvas.width - 20)) {
      x %= canvas.width;
      x = canvas.width-20;
    }
    if(x <= 0){
      x = 0;
    }
    if (y > (canvas.width - 20)) {
      y %= canvas.width;
      y = start_y;
      x = start_x
      level++;
    }
    if(y <= 0){
      y = 0;
    }

    /*
    // ** updates all lines: not in use but did not want to lose 
    // this code just in case I want to use later. **
    for (var i = 0; i < all.length; i++) {
      for (var count = 0; count < all[i].length; count++) {
        if (i%2 === 0){
          all[i][count]++;
          if (all[i][count] > canvas.width) {
            all[i][count] %= canvas.width;
            all[i][count] = 0;
          }
        } else{
            all[i][count]--;
            if(all[i][count] + 20 < 0){
              all[i][count] = canvas.width -20; 
            }
          }
      }
    };
    */

    // updates first line
    for (var i = 0; i < level_1_a.length; i++) {
      level_1_a[i]++;
      if (level_1_a[i] > canvas.width) {
        level_1_a[i] %= canvas.width;
        level_1_a[i] = 0;
      }
    };

    //updates 2nd line
    for (var i = 0; i < level_1_b.length; i++) {
      level_1_b[i]-=1;
      if(level_1_b[i] + 20 < 0){
        level_1_b[i] = canvas.width -20;      
      }
    };

    //updates 3rd line
    for (var i = 0; i < level_1_c.length; i++) {
      level_1_c[i]+=1;
      if (level_1_c[i] > canvas.width) {
        level_1_c[i] %= canvas.width;
        level_1_c[i] = 0;
      }
    };

    //draw player in new position
    ctx.fillStyle = "red";
    ctx.fillRect (x, y, 20, 20);

    // draws each line
    ctx.fillStyle = "blue";
    for (var i = 0; i < level_1_all.length; i++) {
      for (var count = 0; count < level_1_all[i].length; count++) {
        ctx.fillRect(level_1_all[i][count], height[i], 20, 20)
      };
    };



    // draws original square
    ctx.fillStyle = "blue";
    //ctx.fillRect(z, a[2], 20, 20);

     // collision detection:
     //  level_1_all[i][count] = x corners
     //  height[i] = y corners
     for (var i = 0; i < level_1_all.length; i++) {
      for (var count = 0; count < level_1_all[i].length; count++) {
        if( (y>=height[i]) && (y<=height[i]+20) && (x >= level_1_all[i][count]) && (x <= level_1_all[i][count]+20) ||
          (y+20>=height[i]) && (y+20<=height[i]+20) && (x >= level_1_all[i][count]) && (x <= level_1_all[i][count]+20) ||
          (y>=height[i]) && (y<=height[i]+20) && (x+20 >= level_1_all[i][count]) && (x+20 <= level_1_all[i][count]+20) ||
          (y+20>=height[i]) && (y+20<=height[i]+20) && (x+20 >= level_1_all[i][count]) && (x+20 <= level_1_all[i][count]+20) ){
          x= start_x;
          y= start_y;
          losses++;
        }
      };
    };

    // draws which level and how many losses
    ctx.font = '10pt Calibri';
    var message = "Level: " + level;
    ctx.fillText(message, 5, 15);
    ctx.font = '10pt Calibri';
    var message = "Losses: " + losses;
    ctx.fillText(message, 320, 15);

  }

  // Level 2:
  var level_2 = function() {
    //clear background
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 380, 400, 20);

    //make sure player doesn't go off the screen
    if (x > (canvas.width - 20)) {
      x %= canvas.width;
      x = canvas.width-20;
    }
    if(x <= 0){
      x = 0;
    }
    if (y > (canvas.width - 20)) {
      y %= canvas.width;
      y = start_y;
      x = start_x
      level++;
    }
    if(y <= 0){
      y = 0;
    }

    // updates first line
    for (var i = 0; i < level_1_a.length; i++) {
      level_1_a[i]++;
      if (level_1_a[i] > canvas.width) {
        level_1_a[i] %= canvas.width;
        level_1_a[i] = 0;
      }
    };

    //updates 2nd line
    for (var i = 0; i < level_1_b.length; i++) {
      level_1_b[i]-=3;
      if (level_1_b[i] + 20 < 0){
        level_1_b[i] = canvas.width -20;      
      }
    };

    //updates 3rd line
    for (var i = 0; i < level_1_c.length; i++) {
      level_1_c[i]+=2;
      if (level_1_c[i] > canvas.width) {
        level_1_c[i] %= canvas.width;
        level_1_c[i] = 0;
      }
    };

    //draw player in new position
    ctx.fillStyle = "red";
    ctx.fillRect (x, y, 20, 20);

    // draws each line
    ctx.fillStyle = "blue";
    for (var i = 0; i < level_1_all.length; i++) {
      for (var count = 0; count < level_1_all[i].length; count++) {
        ctx.fillRect(level_1_all[i][count], height[i], 20, 20)
      };
    };



    // draws original square
    ctx.fillStyle = "blue";
    //ctx.fillRect(z, a[2], 20, 20);

     // collision detection:
     //  all[i][count] = x corners
     //  height[i] = y corners
     for (var i = 0; i < level_1_all.length; i++) {
      for (var count = 0; count < level_1_all[i].length; count++) {
        if( (y>=height[i]) && (y<=height[i]+20) && (x >= level_1_all[i][count]) && (x <= level_1_all[i][count]+20) ||
          (y+20>=height[i]) && (y+20<=height[i]+20) && (x >= level_1_all[i][count]) && (x <= level_1_all[i][count]+20) ||
          (y>=height[i]) && (y<=height[i]+20) && (x+20 >= level_1_all[i][count]) && (x+20 <= level_1_all[i][count]+20) ||
          (y+20>=height[i]) && (y+20<=height[i]+20) && (x+20 >= level_1_all[i][count]) && (x+20 <= level_1_all[i][count]+20) ){
          x= start_x;
          y= start_y;
          losses++;
        }
      };
    };

    // draws which level and how many losses
    ctx.font = '10pt Calibri';
    var message = "Level: " +  level;
    ctx.fillText(message, 5, 15);
    ctx.font = '10pt Calibri';
    var message = "Losses: " + losses;
    ctx.fillText(message, 320, 15);

  }


  // Level 3:
  // notes: this level needs to be refined, too much code not
  // needed
  var level_3 = function() {
    //clear background
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(240, 380, 400, 20);

    //make sure player doesn't go off the screen
    if ( x > (canvas.width - 20) ) {
      x %= canvas.width;
      x = canvas.width-20;
    }
    if(x <= 0){
      x = 0;
    }
    if (y > (canvas.width - 20)) {
      if (x >= 0 && x < 240){
        y = canvas.width - 20;
      } else {
        y %= canvas.width;
        y = start_y;
        x = start_x
        level++;
      }
    }
    if(y <= 0){
      y = 0;
    }

    // updates first line
    for (var i = 0; i < level_1_a.length; i++) {
      level_1_a[i]++;
      if (level_1_a[i] > canvas.width) {
        level_1_a[i] %= canvas.width;
        level_1_a[i] = 0;
      }
    };

    //updates 2nd line
    for (var i = 0; i < level_1_b.length; i++) {
      level_1_b[i]-=3;
      if (level_1_b[i] + 20 < 0){
        level_1_b[i] = canvas.width -20;      
      }
    };

    //updates 3rd line
    for (var i = 0; i < level_1_c.length; i++) {
      level_1_c[i]+=2;
      if (level_1_c[i] > canvas.width) {
        level_1_c[i] %= canvas.width;
        level_1_c[i] = 0;
      }
    };

    // updates vertical line
    for (var i = 0; i < level_3_a.length; i++) {
      level_3_a[i]+= 1.5;
      if (level_3_a[i] > canvas.height-20) {
        level_3_a[i] = -20;
      } 
    };

    //draw player in new position
    ctx.fillStyle = "red";
    ctx.fillRect (x, y, 20, 20);

    // draws each line
    ctx.fillStyle = "blue";
    for (var i = 0; i < level_1_all.length; i++) {
      for (var count = 0; count < level_1_all[i].length; count++) {
        ctx.fillRect(level_1_all[i][count], height[i], 20, 20)
      };
    };

    // draws vertical line
    for (var i = 0; i < level_3_a.length; i++) {
      ctx.fillRect(200, level_3_a[i], 20, 20);
    };



    // draws original square
    ctx.fillStyle = "blue";
    //ctx.fillRect(z, a[2], 20, 20);

     // collision detection:
     //  all[i][count] = x corners
     //  height[i] = y corners
     for (var i = 0; i < level_1_all.length; i++) {
      for (var count = 0; count < level_1_all[i].length; count++) {
        if( (y>=height[i]) && (y<=height[i]+20) && (x >= level_1_all[i][count]) && (x <= level_1_all[i][count]+20) ||
          (y+20>=height[i]) && (y+20<=height[i]+20) && (x >= level_1_all[i][count]) && (x <= level_1_all[i][count]+20) ||
          (y>=height[i]) && (y<=height[i]+20) && (x+20 >= level_1_all[i][count]) && (x+20 <= level_1_all[i][count]+20) ||
          (y+20>=height[i]) && (y+20<=height[i]+20) && (x+20 >= level_1_all[i][count]) && (x+20 <= level_1_all[i][count]+20) ){
          x= start_x;
          y= start_y;
          losses++;
        }
      };
    };

    // collision detection for vertical line on level 3
    for (var i = 0; i < level_3_a.length; i++) {
      if( (y>=level_3_a[i]) && (y<=level_3_a[i]+20) && (x >= level_3_width[0]) && (x <= level_3_width[0]+20) ||
          (y+20>=level_3_a[i]) && (y+20<=level_3_a[i]+20) && (x >= level_3_width[0]) && (x <= level_3_width[0]+20) ||
          (y>=level_3_a[i]) && (y<=level_3_a[i]+20) && (x+20 >= level_3_width[0]) && (x+20 <= level_3_width[0]+20) ||
          (y+20>=level_3_a[i]) && (y+20<=level_3_a[i]+20) && (x+20 >= level_3_width[0]) && (x+20 <= level_3_width[0]+20) ){
          x= start_x;
          y= start_y;
          losses++;
        }
    };
    for (var i = 0; i < level_3_a.length; i++) {
      
    };

    // draws which level and how many losses
    ctx.font = '10pt Calibri';
    var message = "Level: " +  level;
    ctx.fillText(message, 5, 15);
    ctx.font = '10pt Calibri';
    var message = "Losses: " + losses;
    ctx.fillText(message, 320, 15);

  }
  
  var win_statement = function(){
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.font = '25pt Calibri';
    ctx.fillText("More levels to come!", 25,200);
  }

  var overall = function(){
    if (level === 1){
      level_1();
    }else if (level === 2){
      level_2();
    }else if (level === 3){
      level_3();
    }else {
      win_statement();
    }
  }
  setInterval(overall, 20);
</script>
</body>
