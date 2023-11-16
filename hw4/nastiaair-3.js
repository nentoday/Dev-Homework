const rankTiers = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror",
    "Champion", "Master", "Greatest"];
class Warrior {
    constructor() {
        this._level = 1;
        this._experience = 100;
        this._rank = "Pushover";
        this._achievements = [];
    }

    level() {
        this._level = Math.floor(this._experience / 100);
        return Math.min(this._level, 100)
    }

    experience() {
        return this._experience;
    }

    rank() {
        this._rank = rankTiers[Math.floor(this._level / 10)] || rankTiers[rankTiers.length - 1];
        return this._rank;

    }

    achievements() {
        return this._achievements;
    }

    training(trainingData) {
        const [description, experiencePoints, minLevel] = trainingData;

        if (this._level >= minLevel) {
            this._experience += experiencePoints;
            this._achievements.push(description);
            this._level = Math.floor(this._experience / 100);
            return description;
        } else {
            return "Not strong enough";
        }
    }

    battle(enemyLevel) {
        if (enemyLevel < 1 || enemyLevel > 100) {
            return "Invalid level";
        }

        const levelDifference = this._level - enemyLevel;
        const experienceGained = this.calculateExperienceGained(levelDifference);
        return this.updateExperience(experienceGained, enemyLevel);
    }

    calculateExperienceGained(levelDifference) {
        if (levelDifference >= -1 && levelDifference <= 1) {
            return levelDifference === 0 ? 10 : 5;
        } else if (levelDifference > 1) {
            return 20 * levelDifference ** 2;
        } else {
            return 0;
        }
    }

    updateExperience(experienceGained, enemyLevel) {
        this._experience += experienceGained;

        if (this._experience >= 100 && this._level < 100) {
            this._level++;
            // this._experience = this._experience % 100;
            this.updateRank();
        }

        if (this._level === 100) {
            this._experience = 10000;
            this._rank = "Greatest";
        }

        if (experienceGained === 0) {
            return "You've been defeated";
        } else if (this._level - 2 >= enemyLevel) {
            return "Easy fight";
        } else if (this._level - 1 >= enemyLevel) {
            return "A good fight";
        } else {
            return "An intense fight";
        }
    }
    updateRank() {
        this._rank = rankTiers[Math.floor(this._level / 10)];
    }
}


const Goku = new Warrior();
console.log(Goku.level());        // => 1
console.log(Goku.experience());   // => 100
console.log(Goku.rank());         // => "Pushover"
console.log(Goku.achievements()); // => []
console.log(Goku.training(["Defeated Chuck Norris", 9000, 1])); // => "Defeated Chuck Norris"
console.log(Goku.experience());   // => 9100
console.log(Goku.level());        // => 91
console.log(Goku.rank());         // => "Master"
console.log(Goku.battle(90));     // => "A good fight"
console.log(Goku.experience());   // => 9105
console.log(Goku.achievements()); // => ["Defeated Chuck Norris"]
