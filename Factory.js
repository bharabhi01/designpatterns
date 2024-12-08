// In Factory pattern, we create an object without specifying the exact class of object that will be created.
// We can use it to create objects without having to specify the exact class of object that will be created.
// For example, we can have a superclass Shape and subclasses like Circle, Square, etc. We can use the factory to create objects of any shape without specifying the exact class.

class WebButton {
    render() {
        console.log('Rendering a web button');
    }
}

class MobileButton {
    render() {
        console.log('Rendering a mobile button');
    }
}

class ButtonFactory {
    static createButton(type) {
        if (type === 'web') {
            return new WebButton();
        } else if (type === 'mobile') {
            return new MobileButton();
        }

        throw new Error('Invalid button type');
    }
}

const webButton = ButtonFactory.createButton('web');
webButton.render();

const mobileButton = ButtonFactory.createButton('mobile');
mobileButton.render();
