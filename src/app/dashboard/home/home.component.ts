import { Component, OnInit } from '@angular/core';

import {} from 'googlemaps';
import { Router } from '@angular/router';
import { CrimedataService } from '../../shared/crimedata.service';
import * as dat from '../../../assets/crime_data.json';
import * as latlong from '../../../assets/lat_long.json';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title = 'Crimeanalysis';
  data: any;
  crimedata: any = (dat as any).default ;
  crimeType: any ;
  crimeArea: any ;
  latlongdata: any = (latlong as any).default;
  lookup = {};
  types: string[] = [] ;
  areas: string[] = [] ;
  crimeTypeData: any ;
  lookup_crimeType = {};
  dataChart3: any ;
  dhirajGraphData: any;

  baseServerURL = 'http://192.168.0.255:8080';
  apiMap = {areaVsCount: {baseAPI: `${this.baseServerURL}/data/crime/rate`,
                            changeAPI: 'http://192.168.0.255:8080/data/crime/area/',
                            lables: undefined,
                            datasets: [{label: 'Area Wise Crime',
                            backgroundColor: '#42A5F5', borderColor: '#1E88E5', data: undefined}]
                          },
  particultTypeVsCount: {baseAPI: 'http://192.168.0.255:8080/data/crime/rate',
                            changeAPI: 'http://192.168.0.255:8080/data/crime/type/',
                            lables: undefined,
                            datasets: [{label: 'Particular Crime Type Statistics',
                            backgroundColor: '#42A5F5', borderColor: '#1E88E5', data: undefined}]
                          },
  crimeTypeVsMaxArea: {baseAPI: 'http://192.168.0.255:8080/data/crimetype/maxarea',
                        lables: undefined,
                        datasets: [{label: 'Areas with Max Crime Type Statistics',
                        backgroundColor: '#42A5F5', borderColor: '#1E88E5', data: undefined}]
                      }
            };

  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map ;
  // constructor( private crimedataService: CrimedataService) {
    constructor( private router: Router, private http: HttpClient) {
      this.http.get('http://192.168.0.255:8080/data/crime/rate')
      .subscribe(data => {
        this.crimedata = data;
        this.processAPIData();
        this.processAPIData2() ;
      }); 

    

      this.http.get('http://192.168.0.255:8080/data/crimetype')
      .subscribe(data => {
        this.crimeType = data;
        this.processCrimeType();
      });

      this.http.get('http://192.168.0.255:8080/data/area')
      .subscribe(data => {
        this.crimeArea = data;
        this.processArea();
      });

      this.http.get('http://192.168.0.255:8080/data/crimetype/maxarea')
      .subscribe(data => {
        this.processDhirajChart(data);
      });

      /*
      this.http.get('http://192.168.0.255:8080/data/crime/rate')
      .subscribe(data => {
        this.crimedata = data;
        this.processAPIData();
      });
      
      */
  }

  processDhirajChart(data) {
    const lookup = {}
    for (const eachCrimDataItem of data) {
      lookup[eachCrimDataItem.ctype] = eachCrimDataItem.maxFreq;
    }
    this.dhirajGraphData = {
      labels: Object.keys(lookup),
      datasets: [
        {
          label: 'Max crime type area',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: Object.values(lookup)
        }
      ]
    };
    console.log(this.dhirajGraphData);
  this.lookup = {};
  }
  processAPIData(): void {
    for (const eachCrimDataItem of this.crimedata) {
      this.lookup[eachCrimDataItem.year] = eachCrimDataItem.crimeCount;
    }
    this.data = {
      labels: Object.keys(this.lookup),
      datasets: [
        {
          label: 'Area Wise Crime',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: Object.values(this.lookup)
        }
      ]
    };
    console.log(this.data);
  }

  processAPIData2(): void {
    for (const eachCrimDataItem of this.crimedata) {
      this.lookup_crimeType[eachCrimDataItem.year] = eachCrimDataItem.crimeCount;
    }
    this.crimeTypeData = {
      labels: Object.keys(this.lookup),
      datasets: [
        {
          label: 'CrimeType Wise Crime',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: Object.values(this.lookup)
        }
      ]
    };

    this.lookup_crimeType = {}
  }

  processAPIData_chart2(): void {
    for (const eachCrimDataItem of this.crimedata) {
      this.lookup_crimeType[eachCrimDataItem.year] = eachCrimDataItem.crimeCount;
    }
    this.crimeTypeData = {
      labels: Object.keys(this.lookup),
      datasets: [
        {
          label: 'CrimeType Wise Crime',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: Object.values(this.lookup)
        }
      ]
    };

    this.lookup_crimeType = {}
  }

    processCrimeType(): void {
      for (const eachCrimTypeItem of this.crimeType) {
       this.types.push(eachCrimTypeItem.crimeType) ;
      }
    }

    processArea(): void {
        for (const eachCrimAreaItem of this.crimeArea) {
          this.areas.push(eachCrimAreaItem.street_address) ;
        }
      }

      public onChangeArea(event): void {
          this.http.get(`http://192.168.0.255:8080/data/crime/area/${event.target.value}`)
          .subscribe(data => {
            this.crimedata = data;
            this.processAPIData();
          });
      }

      public onChangeCrimeType(event): void {
        this.http.get(`http://192.168.0.255:8080/data/crime/type/${event.target.value}`)
        .subscribe(data => {
          this.crimedata = data;
          this.processAPIData_chart2();
        });
    }

      

  ngOnInit(): void {

    const mapProperties = {
         center: new google.maps.LatLng(29.651634, -82.324829),
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    
    var newdata = this.latlongdata;
 
    console.log(newdata)

    let lookup = {};
    let items = this.latlongdata;
    let result = [];
    let heatmapData = [];

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

