import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(
    private firesore: AngularFirestore
  ) {}
  agregarRegistro(registro: any) : Promise<any> {
    return this.firesore.collection('registros').add(registro); 
  }
  getRegistros() :  Observable <any>{
    return this.firesore.collection('registros').snapshotChanges()
  }
  getRegistro(id: string) : Observable <any>{
    return this.firesore.collection('registros').doc(id).snapshotChanges()
  }

}
