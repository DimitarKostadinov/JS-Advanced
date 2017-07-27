function solve(arrCommands) {
    let processor=(function () {
        let list=[];
        function add(string) {
            list.push(string)
        }
        function remove(string) {
            list=list.filter(e=>e!==string)
            
        }
        function print() {
            console.log(list.toString())
        }
        return{
            add,
            remove,
            print
        }
    })();
    for (let command of arrCommands) {
        let commandsTokes=command.split(' ');
        processor[commandsTokes[0]](commandsTokes[1]);
    }
}

