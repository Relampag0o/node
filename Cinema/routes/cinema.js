const express = require('express');
const router = express.Router();
const https = require("https");

class Seat {
    constructor(row, column, isTaken) {
        this.row = row;
        this.column = column;
        this.isTaken = isTaken;
    }
}

const seats = [];

function fillSeats() {
    let visual = "Here is the current seating arrangement:\n";
    for (let i = 0; i < 10; i++) {
        seats[i] = [];
        let row = "";
        for (let j = 0; j < 10; j++) {
            seats[i][j] = { isTaken: false };
            if (seats[i][j].isTaken) {
                row += "[ X ]";
            } else {
                row += "[  ]";
            }
        }
        visual += row + "\n";
    }
    return visual;
}

function printSeats() {
    let visual = "Here is the current seating arrangement:\n";
    for (let i = 0; i < 10; i++) {
        let row = "";
        for (let j = 0; j < 10; j++) {
            if (seats[i][j].isTaken) {
                row += "[ X ]";
            } else {
                row += "[  ]";
            }
        }
        visual += row + "\n";
    }
    return visual;
}

function checkAvailability() {

    for (let i =0; i<10; i++){
        for (let j=0; j<10; j++){
            if (!seats[i][j].isTaken){
                return true;
            }
        }
    }

    return false;
}


fillSeats();




function reserveSeats(row, column) {
    if (seats[row][column].isTaken) {
        console.log("Seat already reserved");
    } else {
        seats[row][column].isTaken = true;
        console.log("Seat reserved");
    }
}

router.get("/seating", (req, res) => {
    if (!checkAvailability()){
        res.send("Seats are not available");
    }else{
        res.send(printSeats());
    }
    
});


router.post("/reserve", (req, res) => {
        var row = req.body.row;
        var column = req.body.column;
        reserveSeats(row, column);
        
});




module.exports = router;