class Building {
    constructor(name, height, country) {
        this.name = name; 
        this.height = height; 
        this.country = country; 
    }
}

export const allBuildings = [
    new Building('Burj Khalifa', 828, 'ARE'), 
    new Building('Shanghai Tower', 632, 'CHN'),
    new Building('Makkah Royal Clock Tower', 601, 'SAU'), 
    new Building('Ping An Finance Center', 599, 'CHN'), 
    new Building('Lotte World Tower', 554, 'KOR')
];

export function getRandomBuilding() {
    return allBuildings[Math.floor(Math.random() * allBuildings.length)];
}
