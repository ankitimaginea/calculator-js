// Create a static 'extends' method on the Object class
// This allows us to extend existing classes
// for classical object-oriented inheritance
Object.extend = function(superClass, definition) {
    var subClass = function() {};
    // Our constructor becomes the 'subclass'
    if (definition.constructor !== Object)
        subClass = definition.constructor;
    subClass.prototype = new superClass();
    for (var prop in definition) {
    	if (prop != 'constructor')
            subClass.prototype[prop] = definition[prop];
    }
    // Keep track of the parent class
    // so we can call its constructor too
    subClass.superClass = superClass;
    return subClass;
};