function tickets(ticketsArr,sortingCriteria) {
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }
    let unsortedTickets=[];
    for (let ticket of ticketsArr) {
        let destination=ticket.split('|')[0];
        let price=Number(ticket.split('|')[1]);
        let status=ticket.split('|')[2];
        unsortedTickets.push(new Ticket(destination,price,status))
    }
    return unsortedTickets.sort((a,b)=>a[sortingCriteria]> b[sortingCriteria])
    // let sortedTickets;
    // if(sortingCriteria==='destination'){
    //     sortedTickets=unsortedTickets.sort((a,b)=>a.destination.localeCompare(b.destination));
    // }else if(sortingCriteria==='price'){
    //     sortedTickets=unsortedTickets.sort((a,b)=>a.price-b.price)
    // }else if(sortingCriteria==='status'){
    //     sortedTickets=unsortedTickets.sort((a,b)=>a.status.localeCompare(b.status))
    // }
    // return sortedTickets;
}
console.log(tickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'price'
));