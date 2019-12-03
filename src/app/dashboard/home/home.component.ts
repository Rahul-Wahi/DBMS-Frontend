import { Component, OnInit } from '@angular/core';

import {} from 'googlemaps';
import { Router } from '@angular/router';
import { CrimedataService } from '../../shared/crimedata.service';
import * as dat from '../../../assets/crime_data.json';
import * as latlong from '../../../assets/lat_long.json';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { ViewChild } from '@angular/core';
import { NgxDrpOptions, PresetItem, Range } from 'ngx-mat-daterange-picker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title = 'Crimeanalysis';
  data: any;
  crimedata: any = (dat as any).default ;
  latlongdata: any = (latlong as any).default ;

  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map ;
  // constructor( private crimedataService: CrimedataService) {
    constructor( private router: Router) {debugger;

    let lookup = {};
    let items = this.crimedata;
    let result = [];

    for (let item, i = 0; item = items[i++];) {
      let name = item.a_id;

      if (!(name in lookup)) {
        lookup[name] = 1;
        result.push(name);
      }else{
        lookup[name]++;
      }
    }

    console.log("aid",Object.keys(lookup));

    this.data = {
      
      labels: Object.keys(lookup),
      datasets: [
        {
          label: 'Area Wise Crime',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: Object.values(lookup)
        }
      ]
    };

  }

  ngOnInit(): void {debugger;

    const mapProperties = {
         center: new google.maps.LatLng(29.651634, -82.324829),
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    debugger;
    var newdata = this.latlongdata;
    debugger;
    console.log(newdata)

    let lookup = {};
    let items = this.latlongdata;
    let result = [];
    var heatmapData = [];

    for (let item, i = 0; item = items[i++];) {
      let lat = item.Latitude;
      let long = item.Longitude;
      heatmapData.push(new google.maps.LatLng(lat, long))
    }

    console.log(heatmapData)

    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
    
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      maxIntensity: 100,
      radius: 10,
      opacity: 1
    });

    heatmap.setMap(this.map);

    if (localStorage.getItem('sessionLogin') === null) {
      this.router.navigate(['/authenticator/login']);
    }
 }

 

}

