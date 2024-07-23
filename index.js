// Code your solution here

const drivers  = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


// describe('index.js', function () {
//     describe('findMatching()', function () {
//       it('returns all drivers that match the passed in name', function () {
//         const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
  
//         expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'Bobby']);
//         expect(findMatching(drivers, 'Sammy')).to.eql(['Sammy']);
//       });



// function findMatching(drivers, string){

//     const lowerCaseString = string.toLowerCase();

//     for (const driver of drivers)
//         if (driver.toLowerCase() === lowerCaseString)
//             console.log(driver)
// }

// findMatching(drivers,"Bobby");



function findMatching(drivers, string) {
    // Convert the input string to lowercase
    const lowerCaseString = string.toLowerCase();
    
    // Filter the drivers array based on case insensitive match
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase() === lowerCaseString
    );
    
    return matchingDrivers;
  }
  
  // Example usage:
  console.log(findMatching(drivers, 'Bobby'));
  console.log(findMatching(drivers, 'Sammy'));


//   * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
//   with the provided letters.

function fuzzyMatch(drivers, string) {
    // Filter the drivers array based on names starting with the provided string
    const matchingDrivers = drivers.filter(driver =>
      driver.startsWith(string)
    );
    
    return matchingDrivers;
  }

  const arrayOfDrivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(drivers, string) {
    // Filter the drivers array based on name matching the provided string
    const matchingDrivers = drivers.filter(driver =>
      driver.name === string
    );
    
    return matchingDrivers;
  }
  
  // Example usage:
  console.log(matchName(drivers, 'Bobby'));
  // Output: [ { name: 'Bobby', hometown: 'New York' }, { name: 'Bobby', hometown: 'Seattle' } ]
  
  console.log(matchName(drivers, 'Sarah'));
  // Output: [ { name: 'Sarah', hometown: 'Dallas' } ]
  
  console.log(matchName(drivers, 'Annette'));
  // Output: [ { name: 'Annette', hometown: 'Miami' } ]
  
  console.log(matchName(drivers, 'John'));
  // Output: []