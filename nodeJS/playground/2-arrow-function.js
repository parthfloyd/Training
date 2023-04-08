const event = {
    name: 'Birthday Party',
    guestList: ['Andrew','Jen', 'Mike'],
    printGuestList() {
        console.log('Guest List for ' + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

event.printGuestList();

const abc = () {
    console.log('HELLO');
}