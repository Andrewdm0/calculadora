function calcular(fun){
    switch (fun) {
        case 1:
            numText.innerHTML = ''
            resultText.innerHTML = ''
            passada.innerHTML = ''
            break;
        case 2:
            numText.innerHTML += '/'
            break;
        case 3:
            numText.innerHTML += '*'
            break;
        case 4:
            numText.innerHTML += '-'
            
            break;
        case 5:
            numText.innerHTML += '7'
            
            break;
        case 6:
            numText.innerHTML += '8'
            
            break;
        case 7:
            numText.innerHTML += '9'
            
            break;
        case 8:
            numText.innerHTML += '+'
            
            break;
        case 9:
            numText.innerHTML += '4'
            
            break;
        case 10:
            numText.innerHTML += '5'
            
            break;
        case 11:
            numText.innerHTML += '6'
            
            break;
        case 12:
            numText.innerHTML += '.'
            
            break;
        case 13:
            numText.innerHTML += '1'
            break;
        case 14:
            numText.innerHTML += '2'
            
            break;
        case 15:
            numText.innerHTML += '3'
            
            break;
        case 16:
            numText.innerHTML += '0'
            
            break;
        case 17:
            resultado()
            break;
        case 18:
            numText.innerHTML = numText.innerHTML.slice(0,-1)
            break;
        default:
            break;
    }
}