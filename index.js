const  stringLength = (string) => string.length >= 1 && string.length <= 10 ? string.length:'Error'

const  reverseString = (string) => string.split('').reverse().join('');

class calculator {
    // Constructor
    constructor(a,b) {  
      this.a = a;
      this.b = b;
    }
    
    //Add methode
    add(){
      return this.a + this.b;
    }
    
    //subtract methode
    subtract(){
      return this.a - this.b;
    }
    
    //divide methode
    divide(){
      if(this.b == 0){
        return 'Impossible';
      }else{
        return this.a / this.b;
      }
      
    }
    
    //multiply methode
    multiply(){
      return this.a * this.b;
    }
  }

  const capitalize = (string) =>  string.charAt(0).toUpperCase() + string.slice(1);
  


module.exports = {stringLength,reverseString,calculator,capitalize};