import { Component, OnInit } from '@angular/core';

import {} from 'googlemaps';
import { Router } from '@angular/router';
import { CrimedataService } from '../../shared/crimedata.service';
import * as dat from '../../../assets/crime_data.json';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  

  title = 'Crimeanalysis';
  data: any;
  crimedata: any = (dat as any).default ;

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

    var heatmapData = [
      {location: new google.maps.LatLng(29.656589,	-82.33397), weight: 1000},
      {location: new google.maps.LatLng(29.656589,	-82.33397), weight: 1000},
      {location: new google.maps.LatLng(29.656589,	-82.33397), weight: 0.5},
      new google.maps.LatLng(29.656589,	-82.33397),
      new google.maps.LatLng(29.644885,	-82.333668),
      new google.maps.LatLng(29.659725,	-82.419549),
      new google.maps.LatLng(29.657403,	-82.304024),
      new google.maps.LatLng(29.659683,	-82.409945),
      new google.maps.LatLng(29.659423,	-82.329994),
      new google.maps.LatLng(29.6487	,-82.322372),
      new google.maps.LatLng(29.645736,	-82.336059),
      new google.maps.LatLng(29.620272,	-82.372798),
      new google.maps.LatLng(29.708614,	-82.359993),
      new google.maps.LatLng(29.659205,	-82.303291),
      new google.maps.LatLng(29.634198,	-82.373635),
      new google.maps.LatLng(29.668174,	-82.301451),
      new google.maps.LatLng(29.679854,	-82.288972),
      new google.maps.LatLng(29.625261,	-82.38359),
      new google.maps.LatLng(29.67824	,-82.303909),
      new google.maps.LatLng(29.656589,	-82.33397),
      new google.maps.LatLng(29.644885,	-82.333668),
      new google.maps.LatLng(29.659725,	-82.419549),
      new google.maps.LatLng(29.657403,	-82.304024),
      new google.maps.LatLng(29.659683,	-82.409945),
      new google.maps.LatLng(29.659423,	-82.329994),
      new google.maps.LatLng(29.6487	,-82.322372),
      new google.maps.LatLng(29.645736,	-82.336059),
      new google.maps.LatLng(29.620272,	-82.372798),
      new google.maps.LatLng(29.708614,	-82.359993),
      new google.maps.LatLng(29.659205,	-82.303291),
      new google.maps.LatLng(29.634198,	-82.373635),
      new google.maps.LatLng(29.668174,	-82.301451),
      new google.maps.LatLng(29.679854,	-82.288972),
      new google.maps.LatLng(29.625261,	-82.38359),
      new google.maps.LatLng(29.67824	,-82.303909),
      new google.maps.LatLng(29.656589,	-82.33397),
      new google.maps.LatLng(29.644885,	-82.333668),
      new google.maps.LatLng(29.659725,	-82.419549),
      new google.maps.LatLng(29.657403,	-82.304024),
      new google.maps.LatLng(29.659683,	-82.409945),
      new google.maps.LatLng(29.659423,	-82.329994),
      new google.maps.LatLng(29.6487	,-82.322372),
      new google.maps.LatLng(29.645736,	-82.336059),
      new google.maps.LatLng(29.620272,	-82.372798),
      new google.maps.LatLng(29.708614,	-82.359993),
      new google.maps.LatLng(29.659205,	-82.303291),
      new google.maps.LatLng(29.634198,	-82.373635),
      new google.maps.LatLng(29.668174,	-82.301451),
      new google.maps.LatLng(29.679854,	-82.288972),
      new google.maps.LatLng(29.625261,	-82.38359),
      new google.maps.LatLng(29.67824	,-82.303909),
      new google.maps.LatLng(29.656589,	-82.33397),
      new google.maps.LatLng(29.644885,	-82.333668),
      new google.maps.LatLng(29.659725,	-82.419549),
      new google.maps.LatLng(29.657403,	-82.304024),
      new google.maps.LatLng(29.659683,	-82.409945),
      new google.maps.LatLng(29.659423,	-82.329994),
      new google.maps.LatLng(29.6487	,-82.322372),
      new google.maps.LatLng(29.645736,	-82.336059),
      new google.maps.LatLng(29.620272,	-82.372798),
      new google.maps.LatLng(29.708614,	-82.359993),
      new google.maps.LatLng(29.659205,	-82.303291),
      new google.maps.LatLng(29.634198,	-82.373635),
      new google.maps.LatLng(29.668174,	-82.301451),
      new google.maps.LatLng(29.679854,	-82.288972),
      new google.maps.LatLng(29.625261,	-82.38359),
      new google.maps.LatLng(29.67824	,-82.303909)
    ];

    console.log(heatmapData)

    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
    
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      maxIntensity: 100,
      radius: 40,
      opacity: 1
    
    });

    heatmap.setMap(this.map);

    if (localStorage.getItem('sessionLogin') === null) {
      this.router.navigate(['/authenticator/login']);
    }
 }

}

