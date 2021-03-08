 
 var artist_sentence="Hello, Your Keyboard is Mine. Your Computer But My Rule."
 
 var i=0;
            function setupKeyControls() {
    document.onkeydown = function(e) {
       
        var currenttext=document.getElementById("demo").innerHTML;
        
        console.log(artist_sentence.length);
        if(e.key){ 
                  currenttext+=artist_sentence[i];
            i++;
            if(i==artist_sentence.length){currenttext+='<br />';i=0;}
                 };
        document.getElementById("demo").innerHTML=currenttext;
      };
                
    }

setupKeyControls();
