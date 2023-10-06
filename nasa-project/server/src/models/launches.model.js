const launches = new Map();

let lastFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Deep Space I',
    rocket: 'Endevour ZX5',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442b',
    costumers: ['NASA', 'SSH'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    launches.set(
        ++lastFlightNumber,
        Object.assign(launch, {
            flightNumber: lastFlightNumber,
            customers: ['No Self Department', 'NASA'],
            upcoming: true,
            success: true,
        }));
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
};