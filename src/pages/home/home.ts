import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

interface City {
  name: string;
  image: string;
  text: string;
}

interface CityItem {
  id: string;
  name: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  cityId: string = 'sibiu';
  citiesData: { [key: string]: City } = {
    'brasov': {
      name: 'Brasov',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Brasov%2C_Piata_Sfatului.jpg/1920px-Brasov%2C_Piata_Sfatului.jpg',
      text: 'Brasov este bla bla bla'
    },
    'sibiu': {
      name: 'Sibiu',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Sibiu_200811_800px.jpg',
      text: 'Sibiu este bla bla bla'
    },
    'bucuresti': {
      name: 'Bucuresti',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ansamblul_de_f%C3%A2nt%C3%A2ni_din_Pia%C8%9Ba_Unirii%2C_Bucure%C8%99ti.jpg/2560px-Ansamblul_de_f%C3%A2nt%C3%A2ni_din_Pia%C8%9Ba_Unirii%2C_Bucure%C8%99ti.jpg',
      text: 'Bucuresti este bal bla bla'
    }
  }

  citiesList: CityItem[] = Object.keys(this.citiesData).map(x => { let val = this.citiesData[x]; return { id: x, name: val.name }; });

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    console.log(this.citiesList, this.citiesData);
  }
}

