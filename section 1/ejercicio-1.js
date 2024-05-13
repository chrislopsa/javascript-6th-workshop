

const str= `var globalVariable = "soy una variable global.";
          
            function testScope(){
                var functionVariable = "soy una variable local";
              
                if (true) {
                  
                    let blockVariable = "soy una variable de bloque."
                    console.log("Dentro del bloque:", blockVariable);
                }
                
            console.log("Dentro de la función:", functionVariable);

            } 
            console.log("Fuera de la función:", globalVariable);
            testScope();`

           

alert(`Quiz de Scope en Javascript.\nDale un vistazo al siguiente código:\n\n${str}`);
const question1 = confirm("1ra pregunta: ¿Crees que se puede acceder a la variable 'globalVariable' DENTRO de la función 'testScope?")
const question2 = confirm("2da pregunta: ¿Crees que se puede acceder a la variable 'globalVariable' DENTRO del bloque 'if'?")
const question3 = confirm("3ra pregunta: ¿Crees que se puede acceder a la variable 'functionVariable' por FUERA de la función 'testScope?")
const question4 = confirm("4ta pregunta: ¿Crees que se puede acceder a la variable 'functionVariable' DENTRO de el bloque 'if'?")
const question5 = confirm("5ta pregunta: ¿Crees que se puede acceder a la variable 'blockVariable' por FUERA del bloque 'if'?")
const question6 = confirm("6ta pregunta: ¿Crees que se puede acceder a la variable 'blockVariable' por FUERA de la función 'testScope'?")

let resultStr ="";
const varString = "una variable declarada como 'var' de manera global (fuera de toda función o bloque de código), puede ser accedida desde cualquier lugar del programa.\n"

const localVariableString = "una variable LOCAL sin importar si fue declarada como 'var', 'let' o 'const' solo puede ser accedida desde una parte del programa, ademas las variables declaradas con 'var' siempre van a tener un SCOPE de función.\nlas variables 'let' y 'const' tienen un SCOPE de bloque.\n"

const localScopeString = "una variable LOCAL declarada como 'var' puede ser accedida desde cualquier lugar de su SCOPE.\n"

if(question1){
resultStr += "1ra pregunta: Acertaste," + varString
}
else{
  resultStr += "1ra pregunta: Te equivocaste," + varString
}
if(question2){
  resultStr += "2da pregunta: Acertaste," + varString
  }
  else{
    resultStr += "2da pregunta: Te equivocaste," + varString
  }
if(question3){
  resultStr += "3ra pregunta: Te equivocas," + localVariableString
  }
  else{
    resultStr += "3ra pregunta: Acertaste," + localVariableString
  }          
  if(question4){
    resultStr += "4ta pregunta: Acertaste," + localScopeString
    }
  else{
      resultStr += "4ta pregunta: Te equivocas," + localScopeString
  } 
  if(question5){
    resultStr += "5ta pregunta: Te equivocas," + localVariableString
    }
  else{
      resultStr += "5ta pregunta: Acertaste," + localVariableString
  } 
  if(question6){
    resultStr += "6ta pregunta: Te equivocas," + localVariableString
    }
  else{
      resultStr += "6ta pregunta: Acertaste," + localVariableString
  } 
  alert(resultStr);



