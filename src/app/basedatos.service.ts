import { Injectable } from '@angular/core';
import {  Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  constructor(public platform: Platform,private sqlite: SQLite) { 

    this.platform.ready().then(() => {      
      console.log("antes de ingresar al metodo para crear BD    ");           
      this.createDatabase2();  
    });

  }

  private async createDatabase2(){ //async await

    await this.crearBD();
  }

  async crearBD()
{
      return await new Promise((resolve,reject)=>{

        this.sqlite.create({ name: 'Miplata.db',location: 'default' // the location field is required
        }).then(async(db)=>{
          //this.db= db;
          //console.log("objeto SQLiteObject" +JSON.stringify(db));
          //this.persistencia.setDatabase(db);
          console.log("se creo la bd");
        resolve(db);
      },(error)=>{
        console.log("error al crear la base de datos"+ JSON.stringify(error));
        reject(error);

      });
    })
}
}
