let num1,num2,sum,sub,mul,div,rem;


let addition = function(){
     num1 = parseFloat(prompt("enter the first Number"))
     num2 = parseFloat(prompt("enter the second number"))
    sum = num1 + num2;
    return sum    
}
let subtraction = function(){
    num1 = parseFloat(prompt("enter the first Number"))
    num2 = parseFloat(prompt("enter the second number"))
    sub = num1 - num2;
    return sub    
}
let multiplication = function(){
    num1 = parseFloat(prompt("enter the first Number"))
    num2 = parseFloat(prompt("enter the second number"))
    mul = num1 * num2;
    return mul   
}
let division = function(){
    num1 = parseFloat(prompt("enter the first Number"))
    num2 = parseFloat(prompt("enter the second number"))
    div = num1 / num2;
    return div    
}
let reminder = function(){
    num1 = parseFloat(prompt("enter the first Number"))
    num2 = parseFloat(prompt("enter the second number"))
    rem = num1 % num2;
    return rem    
}

while(true){
    let i = prompt("enter the number for perform such calculation; 1)sum )sub 3)mul 4)div 5)rem 6)exit")
    if(i==6){
        break;
    }
    switch(i){
        case "1":
            console.log(addition())
            break;
            case "2":
                console.log(subtraction())
                break;
                case "3":
                    console.log(multiplication())
                    break;
                    case "4":
                        console.log(division())
                        break;
                        case "5":
                            console.log(reminder())
                            break;
                            default:
                                console.log("invalid output")
    }
}

