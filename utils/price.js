export default function price(string){

    let number = Number(string);

    if(number === NaN){
        return "";
    }

    number = number.toFixed(0);

    let num_str = number.toString();
    let new_str = "";

    let c = 0;
    for(let i = num_str.length-1; i>=0; i--){

        new_str += num_str[i];

        if(c === 2){
            if(i != 0){
                new_str += ",";
            }
            c = 0;
        }else{
            c++;
        }
    }

    let new_str2 = "";
    for(let i = new_str.length-1; i>=0; i--){
        new_str2 += new_str[i];
    }

    return new_str2;
}