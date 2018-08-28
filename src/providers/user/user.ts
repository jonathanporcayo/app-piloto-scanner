import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api'; 
@Injectable()
export class User {
  _user: any;
  session = JSON.parse(localStorage.getItem('session'));
  constructor(public api: Api) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {

    let postData = {
      "username": accountInfo.email,
      "password": accountInfo.password
    };

    let seq = this.api.post('Auth', postData).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }


  getDependencia(id) {

    let postData = {
      "dependenciaID": id.DEPENDENCIAID
    };


    let seq = this.api.post('Dependencia', postData).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  geProgramas(id) {

    let postData = {
      "dependenciaID": id.GX_USUARIOSID
    };

    let seq = this.api.post('DependenciaProgramas', postData).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  getDataUserQr(part) { 
    let postData = {
      "primerApellido": part[1],
      "segundoApellido": part[2],
      "nombre": part[3],
      "fechaNacimiento": part[4],
      "EntidadNacimiento": part[6]
    }; 
    console.log(postData)

    let seq = this.api.post('getDataUserQr', postData).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }


  getDataUserBar(id) { 
    let postData = {
      "FOLIO": id 
    }; 
    console.log(postData)

    let seq = this.api.post('ScannerCodeBar', postData).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }


  getDataUserBeneficio(folio) { 
    let postData = {
      "folioUser": folio.CVE_PERSONA, 
    }; 

    let seq = this.api.post('getDataUserBeneficio', postData).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }



  updateData(data) { 
    let postData = {
      "CALLE":data.CALLE,
      "NUM_EXT":data.NUM_EXT,
      "NUM_INT":data.NUM_INT,
      "ENTRE_CALLE":data.ENTRE_CALLE,
      "Y_CALLE":data.Y_CALLE,
      "OTRA_REFERENCIA":data.OTRA_REFERENCIA,
      "COLONIA":data.COLONIA,
      "LOCALIDAD":data.LOCALIDAD,
      "CODIGO_POSTAL":data.CODIGO_POSTAL,
      "TELEFONO":data.TELEFONO, 
      "CELULAR":data.CELULAR,
      "E_MAIL":data.E_MAIL,
      "CVE_PERSONA_PP":data.CVE_PERSONA_PP
    }; 
    console.log(postData)

    let seq = this.api.post('UpdateUser', postData).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }





  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }


  getDataProgrmas(id) { 
    let postData = {
      "FOLIO": id
      
    }; 
    console.log(postData)

    let seq = this.api.post('ProgrmasUserQr', postData).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }



  getDataProgrmasSelect(id) { 
    let postData = {
      "FOLIO": id
      
    }; 
    console.log(postData)

    let seq = this.api.post('ProgramasUserSelect', postData).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
}
