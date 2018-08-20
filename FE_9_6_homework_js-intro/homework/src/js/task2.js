var a1 =window.prompt("What's length of first side?");
var b1 =window.prompt("What's length of second side?");
var angle1=window.prompt("What's angle between sides?");

var a = parseFloat(a1);
var b =parseFloat(b1);
var angle=parseFloat(angle1);
var epsilon=0.009;


if ((a > 0)&& (b>0) && ((angle > 0) && (angle < 180)))
{
    var _c=Math.sqrt(a*a+b*b-2*a*b*Math.cos(angle/180*Math.PI));
    var c=parseFloat(_c);
    var _perimeter=a+b+c;
    var perimeter=parseFloat(_perimeter);
    var _square=0.5*a*b*Math.sin(angle/180*Math.PI);
    var square=parseFloat(_square);
        if  ((c % 1) < epsilon){ c=Math.trunc(c);}  
              else  { c=parseFloat(Math.round(c * 100) / 100).toFixed(2);
                  if ((c % 1) < epsilon) {c=Math.trunc(c)}
                    }  
    
        if ((perimeter % 1) < epsilon) {perimeter=Math.trunc(perimeter);}
            else  { perimeter=parseFloat(Math.round(perimeter * 100) / 100).toFixed(2);
               if ((perimeter % 1) < epsilon) {perimeter=Math.trunc(perimeter) }
               }
        if ((square % 1) < epsilon) {square=Math.trunc(square);}
              else  {square=parseFloat(Math.round(square * 100) / 100).toFixed(2);
                     if ((square % 1) < epsilon) {square=Math.trunc(square);}
                    }
       console.log(" c length:" + c + '\n',
          "Triangle square:" + square + '\n',
        "Triangle perimeter:" + perimeter + '\n'
                   );
  }
else {console.log("Invalid data"); }

