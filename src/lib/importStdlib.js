const StandardFn = require("../structures/standardFn.js");
const EguaModule = require("../structures/module.js");

require("./tempo.js");
require("./matematica.js");

const loadModule = function (moduleName, modulePath) {
    let moduleData = require(modulePath);
    let newModule = new EguaModule(moduleName);

    let keys = Object.keys(moduleData);
    for (let i = 0; i < keys.length; i++) {
        let currentItem = moduleData[keys[i]];

        if (typeof currentItem === "function") {
            newModule[keys[i]] = new StandardFn(currentItem.length, currentItem);
        } else {
            newModule[keys[i]] = currentItem;
        }
    }

    return newModule;
};

module.exports = function (name) {
    switch (name) {
        case "tempo":
            return loadModule("tempo", "./tempo.js");
        case "matematica":
            return loadModule("matematica", "./matematica.js");
    }

    return null;
};
