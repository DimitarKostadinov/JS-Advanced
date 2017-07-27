function contacts() {


    class Contact {
        constructor(firstName, lastName, phone, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this.online = false;

        }
        render(id){
            let article=$('<article>')
                .append(`<div class=title>${this.firstName} ${this.lastName}<button>&#8505;</button></div>`)
                .append(`<div class="info">
            <span>&phone; ${this.phone}</span>
        <span>&#9993; ${this.email}</span>
        </div>`);
            $('#main').append(article);

        }

    }
}
