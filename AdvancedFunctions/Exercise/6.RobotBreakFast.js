function solve() {

    let carbohydrate = 0;
    let protein = 0;
    let fat = 0;
    let flavour = 0;

   return function (command) {
        let data = command.split(' ');
        let action = data[0];
        let ingredient = data[1];
        let quantity = Number(data[2]);
        let result = undefined;

        let carbNeeded = 0;
        let fatNeeded = 0;
        let proteinNeeded = 0;
        let flavourNeeded = 0;

        function isLacking() {
            let lacking = '';
            if (carbNeeded > carbohydrate) lacking = 'carbohydrate';
            else if (fatNeeded > fat) lacking = 'fat';
            else if (proteinNeeded > protein) lacking = 'protein';
            else if (flavourNeeded > flavour) lacking = 'flavour';
            result = `Error: not enough ${lacking} in stock`;
        }

        if (action === 'restock') {
            switch (ingredient) {
                case 'carbohydrate':
                    carbohydrate += quantity;
                    break;
                case 'fat':
                    fat += quantity;
                    break;
                case 'protein':
                    protein += quantity;
                    break;
                case 'flavour':
                    flavour += quantity;
                    break;
                default:
                    break;

            }
            result = 'Success';
        }else if (action === 'prepare') {
            let meal = data[1];
            switch (meal) {
                case 'apple':
                    carbNeeded = quantity;
                    flavourNeeded = 2 * quantity;
                    if (carbohydrate >= carbNeeded && flavour >= flavourNeeded) {
                        carbohydrate -= carbNeeded;
                        flavour -= flavourNeeded;
                        result = 'Success';
                    } else {
                        isLacking();
                    }
                    break;
                case 'burger':
                    carbNeeded = 5 * quantity;
                    flavourNeeded =3*quantity;
                    fatNeeded = 7 * quantity;
                    if (carbohydrate >= carbNeeded && flavour >= flavourNeeded && fat >= fatNeeded) {
                        carbohydrate -= carbNeeded;
                        flavour -= flavourNeeded;
                        fat -= fatNeeded;
                        result = 'Success';
                    } else {
                        isLacking();
                    }
                    break;
                case 'coke':
                    carbNeeded = 10 * quantity;
                    flavourNeeded = 20 * quantity;
                    if (carbohydrate >= carbNeeded && flavour >= flavourNeeded) {
                        carbohydrate -= carbNeeded;
                        flavour -= flavourNeeded;
                        result = 'Success';
                    } else {
                        isLacking();
                    }
                    break;
                case 'omelet':
                    proteinNeeded = 5 * quantity;
                    flavourNeeded = quantity;
                    fatNeeded = quantity;
                    if (protein >= proteinNeeded && flavour >= flavourNeeded && fat >= fatNeeded) {
                        protein -= proteinNeeded;
                        flavour -= flavourNeeded;
                        fat -= fatNeeded;
                        result = 'Success';
                    } else {
                        isLacking();
                    }
                    break;
                case 'cheverme':
                    proteinNeeded=10*quantity;
                    flavourNeeded=10*quantity;
                    fatNeeded=10*quantity;
                    carbNeeded=10*quantity;
                    if(protein>=proteinNeeded && flavour>=flavourNeeded && fat>=fatNeeded && carbohydrate >= carbNeeded){
                        protein-=proteinNeeded;
                        flavour-=flavourNeeded;
                        fat-=fatNeeded;
                        carbohydrate -= carbNeeded;
                        result='Success';
                    }else {
                        isLacking();
                    }
                    break;


            }
        }else if('report'){
            return (`protein=${protein} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`)
        }
        return result;


    }


}
console.log(solve.toString());


