import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, ModalController, NavController, ToastController , ViewController } from 'ionic-angular'; 
import {   NavParams } from 'ionic-angular';
import { User } from '../../providers';
import { ListMasterPage} from '../list-master/list-master';
 
@IonicPage()
@Component({
  selector: 'page-item-updateInfo',
  templateUrl: 'updateInfo.html'
})
export class UpdateInfoPage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;
  items: any; 
  model:any;
  form: FormGroup;
  account:any={};
  selectProgramas:any;
  constructor(public toastCtrl: ToastController,public user:User,navParams: NavParams,public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera) {
    this.item =  navParams.get('item');
    this.items =  navParams.get('items');
    if(this.item){
      this.account.CALLE=  this.item.CALLE;
      this.account.Y_CALLE=  this.item.Y_CALLE;
      this.account.ENTRE_CALLE=  this.item.ENTRE_CALLE;
      this.account.NUM_EXT=  this.item.NUM_EXT;
      this.account.NUM_INT=  this.item.NUM_INT; 
      this.account.COLONIA=  this.item.COLONIA;
      this.account.LOCALIDAD=  this.item.LOCALIDAD;
      this.account.CODIGO_POSTAL=  this.item.CODIGO_POSTAL;
      this.account.CELULAR=  this.item.CELULAR;
      this.account.TELEFONO=  this.item.TELEFONO; 
      this.account.E_MAIL=  this.item.E_MAIL;
      this.account.CVE_PERSONA_PP=  this.item.CVE_PERSONA_PP;
    } else{
      console.log('no item');
      this.navCtrl.setRoot(ListMasterPage)

    }
  }

  ionViewDidLoad() {

  }

  UpdateData(){
    this.user.updateData(this.account ).subscribe((resp) => {  
     var array = JSON.stringify(resp);
     var objed=JSON.parse(array);
       console.log(resp);
       this.startNotification(objed.message);
       this.consultaUsuario();
      //this.compledData(resp[0]);
    }, (err) => {
      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
      this.startNotification(DataL.error.message); 
    });
  }

  startNotification(data) {

    const toast = this.toastCtrl.create({
      message: data,
      showCloseButton: true,
      duration: 3000,
      closeButtonText: 'Ok'
    });

    toast.present();
  }

   consultaUsuario(){
    this.user.getDataProgrmas(this.account.CVE_PERSONA_PP ).subscribe((resp) => {  
      
      this.ConsultaProgrmas(resp[0].PROGRAMAID);
     }, (err) => {
       var data = JSON.stringify(err);
       var DataL = JSON.parse(data)
       this.startNotification(DataL.error.message); 
     });

   }

   ConsultaProgrmas(id){
    this.user.getDataProgrmas(this.account.CVE_PERSONA_PP ).subscribe((resp) => {  
      var array = JSON.stringify(resp);
      var objed=JSON.parse(array);
        
         this.ConsultaProgrmasSelect(resp[0].PROGRAMAID)
     }, (err) => {
       var data = JSON.stringify(err);
       var DataL = JSON.parse(data)
       this.startNotification(DataL.error.message); 
     }); 
   }

   ConsultaProgrmasSelect(id){
    this.user.getDataProgrmasSelect(id ).subscribe((resp) => {  
      var array = JSON.stringify(resp);
      var objed=JSON.parse(array);
      this.selectProgramas=objed;
     this.listaBeneficios(resp);
     }, (err) => {
       var data = JSON.stringify(err);
       var DataL = JSON.parse(data)
       this.startNotification(DataL.error.message); 
     }); 
   }

   listaBeneficios(data) { 
    this.navCtrl.push('BeneficioPage', { 
      items:data
    }); 
  }
}
