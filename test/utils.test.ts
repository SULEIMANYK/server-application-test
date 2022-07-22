import Calculate from "../src/application-server";
import Application from "../src/appplication";
import Server from "../src/server";


describe("utils functions", () => {
  it("get random number", () => {


    let app1 = new Application(3, 2, 100, "app1");
    let app2 = new Application(3, 2, 100, "app2");
    let app3 = new Application(3, 2, 100, "app3");
    let app4 = new Application(3, 2, 100, "app4");
    let app5 = new Application(1, 2, 100, "app3");
    let app6 = new Application(1, 2, 100, "app4");


    let server = new Server(5, 5, 500, "myserver" , []) ;

    const calculate = new Calculate([app1, app2, app3, app4 , app6 , app5], server); /*  */


     const result  =    calculate.calculate(server ,[app1, app2, app3, app4]);
    expect(result).toEqual(4);

   
  });
});
