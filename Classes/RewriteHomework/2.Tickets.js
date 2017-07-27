function tickets(arr,criteria){
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }

    }
    let result=[];
    for (let elements of arr) {
        let [destination,price,status]=elements.split("|")
        result.push(new Ticket(destination,price,status));
    }
    return result.sort((a,b)=>a[criteria] > b[criteria]);
}
console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));

