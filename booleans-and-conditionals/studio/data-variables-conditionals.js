// Initialize Variables below
let date = ("Monday 2019-03-18");
console.log(date);
let time = ("10:05:34AM");
let astronautCount = (8);
let astronautStatus = ("ready");
let averageAstronautMassKg = (80.7);
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = (760000);
let shuttleMassKg = (74842.31);
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = (850000);
let fuelTempCelsius = (-225);
let minimumFuelTemp = (-300);
let maximumFuelTemp = (-150);
let fuelLevel = ("100%");
let weatherStatus = ("clear");
let preparedForLiftOff = (true);



// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7){
    console.log("Go!")}
    else {console.log("astronaut is not ready")
preparedForLiftOff = false};

if (astronautStatus === "ready"){
    console.log("Astronauts Ready")}
    else {console.log("Wait")
preparedForLiftOff = false};

if (totalMassKg <= maximumMassLimit){
    console.log("OK")}
    else {console.log("decrease")
preparedForLiftOff = false};

if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150){
    console.log("fuel temp ok")}
    else {console.log("not safe")
preparedForLiftOff = false};

if (fuelLevel === "100%"){
    console.log("full")}
    else {console.log("fill up")
preparedForLiftOff = false};

if (weatherStatus === "clear"){
    console.log("clear day")}
    else {console.log("not safe")
preparedForLiftOff = false};

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions


if (preparedForLiftOff === true){
    console.log("liftoff")
}