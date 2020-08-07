let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        console.log(`Seats Left: ${seatsLeft}`);
        return partySize <= seatsLeft;
    },
    seatParty: function(partySize) {
        if(this.checkAvailability(partySize)){
            this.guestCount += partySize;
            console.log(`${partySize} people added to the guest count!`);
        }
        else {
            console.log("Sorry the people cannot be seated");
        }
    },
    removeParty : function(partySize) {
        if (partySize <= this.guestCount) {
            this.guestCount -= partySize;
            console.log(`${partySize} people removed from the guest count!`);
        }
        else {
            this.guestCount=0;
            console.log("Guest count is zero now!");
        }
    }
}

let status = restaurant.checkAvailability(40);
console.log(status);
console.log(restaurant.guestCount);
restaurant.seatParty(40);
console.log(restaurant.guestCount);
restaurant.checkAvailability(45);
restaurant.removeParty(10);
console.log(restaurant.guestCount);
console.log(restaurant.checkAvailability(45));

