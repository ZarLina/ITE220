(function () {
   
var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		
      	document.getElementById("screenWidth").textContent = window.innerWidth;
        document.getElementById("screenHeight").textContent = window.innerHeight;
        
        document.getElementById("location").textContent = window.location.pathname;
	}, 
    resize: function() {
        window.addEventListener ("resize", this.render);
    },
    devInfo: function() {
        var btnDev = document.getElementById("dev-info");
        btnDev.addEventListener("click", function(){
            document.getElementById("dev-info-container").innerHTML = "Angelina Zaretskaya</br>IT Student</br><a target='_blank' href='http://www.github.com/ZarLina'>www.github.com/ZarLina</a>"
        });
    }
}
task1.render();
task1.resize();
task1.devInfo();
}) ();