class Task {

   constructor(title,deadline,status='Open'){
       this.title=title;
       this.status=status;
       this.deadline = deadline;
       this.isOverdue=true;
   }


    set deadline(date) {
       if(date<new Date()){
           throw new Error('')
       }
        this._deadline = date;
    }
    get deadline() {
        return this._deadline;
    }

    get isOverdue(){
       return this._isOverdue;
    }
    set isOverdue(date){
        if(this.deadline>Date.now() && (this.status!=='Completed')){
            this._isOverdue=false;
        }

    }
    static comparator(a,b){
        return this.status.localeCompare(a)
    }
    toString(){
        let symbol;
        let output=''
        if(this.status==='Open'){
            symbol='\u2731'
        }else if(this.status==="In Progress"){
            symbol="\u219D"
        }else if(this.status==="Complete"){
            symbol="\u2714"
        }else{
            symbol="\u26A0"
        }
        if(this.isOverdue){
            output=`[${symbol}] ${this.title} (overdue)`
        }else{
            output=`[${symbol}] ${this.title} {(deadline: ${this.deadline})}`
        }
        return output
    }


}
let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later
// should throw an Error
let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// should throw an Error
task1.deadline = new Date(2005, '4', '20');