const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}


const stories = "stories";
const address = "address"
const constructionDate = "constructionDate";
const cost = "cost";
const owner = "owner";
const architect = "architect";


console.log("Height: " + empireStateBuilding.height, "Square Feet: " + empireStateBuilding.squareFeet, "East/West Length: " + empireStateBuilding.eastWestLength, "North/South Length: " + empireStateBuilding.northSouthLength);
console.log(empireStateBuilding[stories], empireStateBuilding[address], empireStateBuilding[constructionDate], empireStateBuilding[cost], empireStateBuilding[owner], empireStateBuilding[architect]);

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

const andy = nashvilleSoftwareSchool.instructors.fullTime[4];
const zoe = nashvilleSoftwareSchool.instructors.partTime[0];

for (let i = 0; i < nashvilleSoftwareSchool.instructors.fullTime.length; i++) {
    console.log(nashvilleSoftwareSchool.instructors.fullTime[i]);
}
for (let i = 0; i < nashvilleSoftwareSchool.instructors.partTime.length; i++) {
    console.log(nashvilleSoftwareSchool.instructors.partTime[i]);
}

console.log(andy);
console.log(zoe);

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name}` + ' was in the Beatles from ' + `${beatles.history.formed}` + ` to ${beatles.history.disbanded}.` + ` He was born in ${beatles.members[1].birth}.` + ` He contributed heavily to the ${beatles.albums[3]} album.`);