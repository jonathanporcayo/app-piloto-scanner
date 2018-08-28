import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController,NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-item-beneficio',
  templateUrl: 'beneficio.html'
})
export class BeneficioPage {
  @ViewChild('fileInput') fileInput;

   

  item: any;

 

  constructor(public navParams: NavParams,public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera) {
    this.item =  navParams.get('items'); 
  
  }

  ionViewDidLoad() {

  }

}