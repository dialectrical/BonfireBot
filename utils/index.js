const { Items } = require("../src/classes/mapTiles/mapTile");

const Hunger = {
    gather: 1,
    move: 2,
};

const CraftMenu = {
    Fiber: {
        materials: {
            [Items.wood]: 1,
        },
        onlyOneAllowed: false,
        isBaseItem: false,
    },
    Rope: {
        materials: {
            [Items.fiber]: 20,
        },
        onlyOneAllowed: false,
        isBaseItem: false,
    },
    Armor: {
        materials: {
            [Items.sticks]: 5,
            [Items.rope]: 5,
        },
        onlyOneAllowed: true,
        isBaseItem: false,
    },
    Shelter: {
        materials: {
            [Items.stone]: 10,
            [Items.sticks]: 20,
            [Items.wood]: 10,
            [Items.leaves]: 30,
        },
        onlyOneAllowed: true,
        isBaseItem: true,
    },
    'Drying-Rack': {
        materials: {
            [Items.stone]: 5,
            [Items.sticks]: 15,
            [Items.wood]: 5,
        },
        onlyOneAllowed: true,
        isBaseItem: true,
    },
};

const FlammableItems = {
    [Items.sticks]: 1,
    [Items.leaves]: 1,
    [Items.wood]: 5,
    [Items.rope]: 4,
    [Items.coal]: 10,
};

module.exports = {
    Hunger,
    CraftMenu,
    FlammableItems,
};
