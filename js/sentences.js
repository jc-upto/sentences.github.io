/**
 * Story object, create a random story to display in any div element.
 */
class Story {


    constructor(firstName, storyData) {
        this.data = storyData;
        this.firstName = firstName;
    }

    /**
     * Return a generated story.
     * @returns {string}
     */
    getStory() {
        return this.firstName + " se trouve " + this.generateLocation() + ", il fait " + this.generateTemperature() +
               this.generateVerb() + " avec " + this.generateObject() + this.generateName();
    }

    /**
     * Return a location with suffix.
     */
    generateLocation() {
        let location = this.data.getRandomLocation;
        let result = "à " + location;
        if(["Batcave", "Une ile", "cave"].indexOf(location) !== -1) {
            result = "dans une " + location;
        }
        else if(["Réacteur nucléaire"].indexOf(location) !== -1) {
            result = "dans un " + location;
        }
        else if(["Martinique", "enfer"].indexOf(location) !== -1) {
            result = "en " + location;
        }
        return result;
    }

    /**
     * Return a temperature with suffix.
     */
    generateTemperature() {
        let temperature = this.data.getRandomTemperature;
        let result = temperature + " degrés, ";

        if(temperature < -36) {
            result += "c'est vachement froid !";
        }
        else if(temperature > -36 && temperature < 0) {
            result += "de quoi bien se les geler !";
        }
        else if(temperature > 30 && temperature < 40) {
            result += "le temps idéal pour un bon barbec !";
        }
        else if(temperature > 50) {
            result += "ce qui est trop chaud pour la saison !";
        }
        else if(temperature === "hot") {
            result = "super " + temperature + " !";
        }
        return result;
    }

    /**
     * Return a generated verb.
     * @returns {string}
     */
    generateVerb() {
        let action = this.data.getRandomVerb.toLowerCase();
        let result = action;
        if(action === "foutre") {
            result += " le bazard ";
        }
        else if(["frapper", "attaquer", "punir", "recoudre", "lubrifier"].indexOf(action) !== -1) {
            result += " " + this.data.getRandomName;
        }
        else if(["avoir", "prendre"].indexOf(action) !== -1) {
            result += " peur ";
        }

        result = " Il est oppcupé à " + result;

        return result;
    }

    /**
     * Return an object for the story.
     * @returns {string}
     */
    generateObject() {
        return " " + this.data.getRandomObject;
    }

    /**
     * Return an associated name ( xxx is doing something with / for generateName() ).
     */
    generateName() {
        return ", en compagnie de " + this.data.getRandomName;
    }

}


/**
 * Handle an object containing all stories data.
 */
class StoryData {

    /**
     * Class constructor.
     */
    constructor() {
        this.locations = ['Tombouctou', 'Lille', 'Sataya', 'Montcuq', 'Paris', 'Batcave', 'Maubeuge', 'Réacteur nucléaire',
            'Martinique', 'Balamb garden', "enfer", 'Montbeilard', 'Namek', 'Londres', 'Une ile', 'cave',
            'le Caire', 'New York', 'Le tampon', 'Berlaimont'];

        this.temperatures = [30, 24, -273.15, 21, 42, -38, 35, 584, -8000, 28, 20, 37.2, -30, 35, "hot", 27, -100, 55];

        this.objects = ["une valise", "un poivrier connecté", "une épée", "un cahier", "un pneu", "une table", "un godsabre",
                        "une truelle", "une madelaine", "un trident", "un pull rose", "un pc", "un tisonnier", "une guimbarde",
                        "un chandelier", "un verre", "une table bancale", "un arbre", "une souris", "une dague"];

        this.names = ["Babe", "Paul", "Clodomir", "George", "Brigitte", "Homer-Simpson", "Kylian", "Georges-Clooney", "Quintus",
            "Anais", "Styvens", "Keen-V", "Ludovic", "Yoshi", "Lucifer", "Pumba", "Eglantine", "Cayde-6", "Poutine",
            "Squall"];

        this.verbs = ['Danser', 'Frapper', 'Lubrifier', 'Trikiter', 'Procrastiner', 'Foutre', 'Prendre', 'Nager', 'Recoudre',
            'Punir', 'Attaquer', 'Coder', 'Jouer', 'Manger', 'Avoir'];
    }

    /**
     * Generate a random value from a given array.
     * @param aArray
     * @returns {String}
     */
    getRandom(aArray) {
        return aArray[Math.ceil(Math.random() * aArray.length) - 1];
    }

    /**
     * Return locations array.
     * @returns {String}
     */
    get getRandomLocation() {
        return this.getRandom(this.locations);
    }

    /**
     * Return temperatures array.
     * @returns {String}
     */
    get getRandomTemperature() {
        return this.getRandom(this.temperatures);
    }

    /**
     * Return objets array.
     * @returns {String}
     */
    get getRandomObject() {
        return this.getRandom(this.objects);
    }

    /**
     * Return verbes array.
     * @returns {String}
     */
    get getRandomVerb() {
        return this.getRandom(this.verbs);
    }

    /**
     * Return names array.
     * @returns {String}
     */
    get getRandomName() {
        return this.getRandom(this.names);
    }

    /**
     * Add a new name to StoryData
     * @param newName
     */
    addName(newName) {
        if(newName) {
            this.names.push(newName);
        }
    }

    /**
     * Add a new temperature.
     * @param newTemperature
     */
    addTemperature(newTemperature) {
        if(newTemperature && Number.isInteger(newTemperature)) {
            this.temperatures.push(newTemperature);
        }
    }

    /**
     * Add a new verb.
     * @param newVerb
     */
    addVerb(newVerb) {
        if(newVerb) {
            this.verbs.push(newVerb);
        }
    }

    /**
     * Add a new object.
     * @param newObject
     */
    addObject(newObject) {
        if(newObject) {
            this.objects.push(newObject);
        }
    }

    /**
     * Add a new location.
     * @param newLocation
     */
    addLocation(newLocation) {
        if(newLocation) {
            this.locations.push(newLocation);
        }
    }
}