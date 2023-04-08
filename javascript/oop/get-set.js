const data = {
    locations: [],
    get location() {
        return this._location;
    },
    set location(value) {
        value = value.trim();
        this._location = value.trim();
        this.locations.push(this._location);
    }
}

data.location = ' Chennai   ';
data.location = '           New Delhi   ';
console.log(data);