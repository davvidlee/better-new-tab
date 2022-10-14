$(document).ready(function() {

    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
    //DISPLAY WELCOME MESSAGE
    const d = new Date();
    var time2 = d.getTime()

    setInterval(introText, 10);

    function introText(){
        const d = new Date();
        var time = d.getTime()
        updateTime();
        document.getElementById('time').innerHTML=str;
        }
    //DISPLAY TIME
    function updateTime(){
        const d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;

        minutes = minutes < 10 ? '0'+minutes : minutes;

        let strTime = hours + ':' + minutes + ' ' + ampm;
        document.getElementById('time').innerHTML=strTime;

        y = d.getFullYear();
        m = d.getMonth() + 1;
        date = d.getDate();
        let strDate = m + "/" + date + "/" + y;
        document.getElementById("date").innerHTML=strDate;
    }

    //MOVE BACKGROUND WITH MOUSE
    const bg = document.querySelector('.background');
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5 ;

    bg.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;
    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});
    /*
    oldx = 0;
    oldy = 0;
    mousemovemethod = function (e) {
    
        //finding angle
        var angleRad = Math.atan((oldy-e.pageY)/(oldx-e.pageY));
        var angleDeg = angleRad * 180 / Math.PI;
        
        document.body.innerHTML = direction;
    
        const el = document.querySelector("#background");
        for(var x = 0; x > 5; x++){
            el.style.backgroundPositionX = e.offsetX/20 + "px";        }
        for(var y = 0; y > 5; y++){
            el.style.backgroundPositionY = e.offsetY/20 + "px";        }
        oldx = e.pageX;
        oldy = e.pageY;
        console.log(el.style.backgroundPositionX)
    }

    document.addEventListener('mousemove', mousemovemethod);
*/

});
