import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {
  usuarios: any[] = [];
  constructor() {
    this.set();
  }

  set() {
    this.usuarios = [
      { nombre: "Sistema", apellidop: "Registro", apellidom: "", email: "cancela@", id: "1" },
      { nombre: "Nelson", apellidop: "Ramírez", apellidom: "Guido", email: "nelson.ramirez@", id: "121" },
      { nombre: "Ahuitzotl", apellidop: "Ancelmo", apellidom: "Luna", email: "ahuitzotl.ancelmo@", id: "192" },
      { nombre: "HugoSiquiem", apellidop: "Carachure", apellidom: "Lobato", email: "hugo.carachure@", id: "210" },
      { nombre: "Edgar", apellidop: "López", apellidom: "Gasca", email: "edgar.lopez@", id: "311" },
      { nombre: "Ramiro", apellidop: "Sánchez", apellidom: "-", email: "ramiro.sanchez@", id: "322" },
      { nombre: "Erika Susana ", apellidop: "Luna", apellidom: "Cerrillo", email: "erika.luna@", id: "326" },
      { nombre: "Noé Cesar", apellidop: "Pérez", apellidom: "Loza", email: "noe.perez@", id: "337" },
      { nombre: "Juan Luis", apellidop: "Ruiz", apellidom: "Serrano", email: "juan.ruiz@", id: "961" },
      { nombre: "Erick", apellidop: "Maldonado", apellidom: "Nava", email: "erick.maldonado@", id: "1038" }
    ];
  }
  get() {

    return this.usuarios;
  }

}
