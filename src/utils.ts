
class utils {
 

// // function to return promise with delay
// delay(ms: number): Promise<void> {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }


      getRandomInt(): number {
        return Math.floor(Math.random() * (100 - 900 + 1)) + 60;}


}


export default utils;