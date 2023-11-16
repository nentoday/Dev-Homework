class Vector {
    constructor(components) {
        this.components = components;
    }

    add(b) {
        if (this.components.length === b.components.length) {
            const result = [];

            for (let i = 0; i < this.components.length; i++) {
                result[i] = this.components[i] + b.components[i];
            }

            return new Vector(result);
        } else {
            throw new Error("Vectors must have the same length for addition.");
        }
    }
    subtract(b) {
        if (this.components.length === b.components.length) {
            const result = [];

            for (let i = 0; i < this.components.length; i++) {
                result[i] = this.components[i] - b.components[i];
            }

            return new Vector(result);
        } else {
            throw new Error("Vectors must have the same length for addition.");
        }
    }
    dot(b) {
        if (this.components.length === b.components.length) {
            let result = 0;

            for (let i = 0; i < this.components.length; i++) {
                result += this.components[i] * b.components[i];
            }

            return result;
        } else {
            throw new Error("Vectors must have the same length for addition.");
        }
    }
    norm() {
        let result = 0;
        for (let i = 0; i < this.components.length; i++) {
            result += this.components[i] ** 2;
        }
        return Math.sqrt(result);
    }
    equals(otherVector) {
        return this.components.every((value, index) => value === otherVector.components[index]);
    }
    toString(){
        return "(" + this.components.join(", ") + ")";
    }
}