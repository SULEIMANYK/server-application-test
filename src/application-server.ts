import Application from "./appplication";
import Server from "./server";

class Calculate {
  applications: Application[]; // 3 , 2 ,3 ,4 ,2
  server: Server; //5 gb
  constructor(apps: Application[], server: Server) {
    this.applications = apps;
    this.server = server;
  }

  calculate(server: Server, apps: Application[]): number {
    let servers: Server[] = [];
    apps.forEach((app: Application, index: number) => {
      if (servers.length == 0) {
        servers.push(
          new Server(server.cpu, server.ram, server.disk, "server" + index, [
            app,
          ])
        );
      } else if (servers.length > 0)
        if (
          server.cpu / app.cpu <= 1 ||
          server.cpu / app.cpu < 2 ||
          server.ram / app.ram <= 1 ||
          server.ram / app.ram < 2 ||
          server.disk / app.disk <= 1 ||
          server.disk / app.disk < 2
        ) {
          servers.push(
            new Server(server.cpu, server.ram, server.disk, "server" + index, [
              app,
            ])
          );
        } else {
          let usedRam = 0,
            usedCPU = 0,
            usedDisk = 0;
          servers.forEach((element: Server, i) => {
            element.apps.forEach((e) => {
              usedRam = +e.ram;
              usedCPU = +e.cpu;
              usedDisk = +e.disk;
            });

            if (
              app.cpu <= element.cpu - usedCPU &&
              app.ram <= element.ram - usedRam &&
              app.disk <= element.disk - usedDisk
            ) {
              element.apps.push(app);
            } else {
              servers.push(
                new Server(server.cpu, server.ram, server.disk, "server" + i, [
                  app,
                ])
              );
            }
          });
        }
    });
    console.table(servers);
    return servers.length;
  }
}

// expected 3 as number of servers
export default Calculate;
