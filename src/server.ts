import Application from "./appplication";

class Server {
    ram: number;
    cpu: number;
    disk: number;
    name: string;
    apps : Application[]
    constructor(ram: number, cpu: number, disk: number, name: string , apps : Application[]) {
        this.ram = ram,
            this.cpu = cpu,
            this.disk = disk,
            this.name = name ,
            this.apps =apps
            
    }
}

export default  Server ;