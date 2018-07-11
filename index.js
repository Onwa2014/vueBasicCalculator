
var calculation = new Vue({
  el: '.container',
  data: {
    message: '',
    numbers:[],
    signs : []
    // message: 'Hello Vue.js!'
  },

  methods: {
    calculateAndDisplay: function (type, value) {

      //var btnClicked = e.target;
      // console.log(e.target.value);
      console.log(type);
      if(value === 'clear'){
          this.message = " ";
      }

      if(type === "number"){
          this.numbers.push(value);
          this.message += value;
       }
       else if(type === "sign" && value !== "equal" && value !== "clear"){

         if(value === "multiply"){
           this.message += "*";
           this.signs.push("*");
         }
         if(value === "minus"){
           this.message += "-";
           this.signs.push("-");
         }
         if(value === "divide"){
           this.message += "/";
           this.signs.push("/");
         }
         if(value === "plus"){
           this.message += "+";
           this.signs.push("+");
         }

            // this.message += btnClicked.value;
        }
        if(value === "equal"){
          var answer = Number(this.numbers[0]);

          for(var i = 1;i<this.numbers.length;i++){
            var currentValue = Number(this.numbers[i]);
            var currentSign = this.signs[i-1];
            if(currentSign === '+'){
              answer = answer + currentValue;
            }
            else if(currentSign=== '-'){
              answer = answer - currentValue;
            }
            else if(currentSign=== '*'){
              answer = answer * currentValue;
            }
            else if(currentSign === '/'){
               answer = answer / currentValue;
            }

          }

          this.message = answer;

      // this.message += btnClicked.value;
      // this.message2 = "Hi user";
    }
  }
}
});


//
//
//
//
// }
