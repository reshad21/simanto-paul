/*

  .find out large frind name in an array


*/

let frindsName = ['chinku', 'minku', 'hasi', 'mrigoya', 'iktiar uddin', 'kolzi','iktiar uddin mohammad bin boktiar kolzi', 'hopper'];

function largeFrind(frindsName) {
    var large = frindsName[0].length;
    var largefrindname = frindsName[0];
    for (let i = 0; i < frindsName.length; i++) {
        const element = frindsName[i];
        const frind = element.length;

        if (large < frind) {
            large = frind;
            largefrindname = element;
        }
    }
    return largefrindname;

}

let findlargefrind = largeFrind(frindsName);
console.log(findlargefrind);
