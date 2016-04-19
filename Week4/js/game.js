(function(){
  var game = {
      randomNumber: 11, 
      init: function() {
          this.bindEvent();
      },
      bindEvent: function() { // get all elements and bind event to it
         var self = this;
          var button1 = document.getElementById("one");
          button1.addEventListener("click", this.clickNumberButton);
          
          document.getElementById("two").addEventListener("click", this.clickNumberButton);
          document.getElementById("three").addEventListener("click", this.clickNumberButton);
          document.getElementById("four").addEventListener("click", this.clickNumberButton);
          document.getElementById("five").addEventListener("click", this.clickNumberButton);
          document.getElementById("six").addEventListener("click", this.clickNumberButton);
          document.getElementById("seven").addEventListener("click", this.clickNumberButton);
          document.getElementById("eight").addEventListener("click", this.clickNumberButton);
          document.getElementById("nine").addEventListener("click", this.clickNumberButton);
          document.getElementById("zero").addEventListener("click", this.clickNumberButton);
          
          var guessBtn = document.getElementById("guess");
          guessBtn.addEventListener("click", function () {
              self.guess(self);
          });
   
      },
      clickNumberButton: function(e) {
         var userNumber = document.getElementById("userNumber");
         userNumber.value += e.target.textContent;
      },
      guess: function(self) {
          //alert(self.randomNumber);
          var userNumber = document.getElementById("userNumber");
          if(userNumber.value == self.randomNumber) {
              alert("Yes")  
          }else {
              alert("No");
          }
      }
  };  
  game.init();
})();