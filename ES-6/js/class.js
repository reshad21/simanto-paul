class Instructor {
    name;
    designation = "web course instructor";
    team = 'web team';
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location
    }
    stratSupportSession(time) {
        console.log(`strat the support session at ${time}`)
    }
    createQuize(module) {
        console.log(`please create quiz for module ${module}`);
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedBack`);
    }
}

class developer {
    name;
    designation = "web course instructor";
    team = 'web team';
    location;
    constructor(name, location, tech) {
        this.name = name;
        this.location = location;
        this.tech = tech
    }
    developerFeature(){
        console.log(`Please develop the ${feature}`);
    }
    release(version) {
        console.log(`please release at ${version}`);
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedBack`);
    }
}

let sharmin = new Instructor();
sharmin.name = "develloper";
