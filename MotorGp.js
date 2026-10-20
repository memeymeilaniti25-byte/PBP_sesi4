var motorGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        },
        infoMotor: function() {
            return (
                "Circuit: " + this.circuit + "\n" +
                "Location: " + this.location + "\n" +
                "Winner: " + this.winner.firstName + " " + this.winner.lastName + "\n" +
                "Country: " + this.winner.country
            );
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        },
        infoMotor: function() {
            return (
                "Circuit: " + this.circuit + "\n" +
                "Location: " + this.location + "\n" +
                "Winner: " + this.winner.firstName + " " + this.winner.lastName + "\n" +
                "Country: " + this.winner.country
            );
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        },
        infoMotor: function() {
            return (
                "Circuit: " + this.circuit + "\n" +
                "Location: " + this.location + "\n" +
                "Winner: " + this.winner.firstName + " " + this.winner.lastName + "\n" +
                "Country: " + this.winner.country
            );
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        },
        infoMotor: function() {
            return (
                "Circuit: " + this.circuit + "\n" +
                "Location: " + this.location + "\n" +
                "Winner: " + this.winner.firstName + " " + this.winner.lastName + "\n" +
                "Country: " + this.winner.country
            );
        }
    }
];

var hasil = {};

for (var i = 0; i < motorGP.length; i++) {
    var negara = motorGP[i].winner.country;
    var nama = motorGP[i].winner.firstName + " " + motorGP[i].winner.lastName;
    var lokasi = motorGP[i].circuit + ", " + motorGP[i].location;

    if (hasil[negara] == undefined) {
        hasil[negara] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    hasil[negara].winningCircuits.push({
        name: nama,
        winLocation: lokasi
    });

    hasil[negara].totalWin++;
}

console.dir(hasil, { depth: null });