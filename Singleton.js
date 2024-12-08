// In Singleton pattern, we check if the instance is already created, if it is we will use the existing instance else we will create a new one.
// It helps in ensuring that a class has only one instance and acts as a global point of access to it.
// It is used when we need to control the number of instances of a class. For example, in logging, we can have a single logger instance that can be accessed globally.
// Database connections, configuration settings, etc.

class Singleton {
    constructor() {
        // Return the instance if it already exists
        if (Singleton.instance) {
            console.log('Instance already exists');
            return Singleton.instance;
        }
        // Create the instance
        Singleton.instance = this;

        this.name = 'Singleton';
    }

    getName() {
        return this.name;
    }
}

const instance = new Singleton();
console.log(instance.getName());

const instance2 = new Singleton();
console.log(instance2.getName());
