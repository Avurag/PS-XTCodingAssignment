import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SpaceXService } from '../service/spacex.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Years, Lands, Launchs } from '../model/resultmodel';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-spacexprogram',
  templateUrl: './spacexprogram.component.html',
  styleUrls: ['./spacexprogram.component.css']
})
export class SpacexprogramComponent implements OnInit {
  // Year: Years[] = [
  //   { launch_year: 2006, name: '2006' },
  //   { launch_year: 2007, name: '2007' },
  //   { launch_year: 2008, name: '2008' },
  //   { launch_year: 2009, name: '2009' },
  //   { launch_year: 2010, name: '2010' },
  //   { launch_year: 2011, name: '2011' },
  //   { launch_year: 2012, name: '2012' },
  //   { launch_year: 2013, name: '2013' },
  //   { launch_year: 2014, name: '2014' },
  //   { launch_year: 2015, name: '2015' },
  //   { launch_year: 2016, name: '2016' },
  //   { launch_year: 2017, name: '2017' },
  //   { launch_year: 2018, name: '2018' },
  //   { launch_year: 2019, name: '2019' },
  //   { launch_year: 2020, name: '2020' },
  // ];
  // Land: Lands[] = [
  //   { land_success: 'True', name: 'True' },
  //   { land_success: 'False', name: 'False' },
  // ];
  // Launch: Launchs[] = [
  //   { launch_success: 'True', name: 'True' },
  //   { launch_success: 'False', name: 'False' },
  // ];

  baseUrl: any;

  programs: any;
  launch_year: number;
  launch_success: string;
  land_success: string;
  constructor(
    private route: ActivatedRoute,
    private spacexservice: SpaceXService,
  ) {

    this.programs = this.route.queryParams.pipe(switchMap(params => {
      const filters = {
        land_success: params.land_success || "",
        launch_success: params.launch_success || "",
        launch_year: params.launch_year || ""
      };
      return this.spacexservice.getAllLaunchLandYear(this.launch_year, this.launch_success, this.land_success);
    }));

  }

  ngOnInit() {

    this.getAllSpaceXProgram();
    this.route.queryParams.subscribe(queryParams => {
      this.launch_year = queryParams.launch_year;
      this.launch_success = queryParams.launch_success;
      this.land_success = queryParams.land_success;
      // console.log('Filters land success value', this.land_success);
      // console.log('Filters launch success value', this.launch_success);
      // console.log('Filters launch year value', this.launch_year);
      if (this.launch_success != null && this.launch_year == null && this.land_success == null) {
        this.getLaunchSuccess(this.launch_success);
      }
      if (this.launch_year == null && this.launch_success != null && this.land_success != null) {
        this.getLaunchLand(this.launch_success, this.land_success);
      }
      if (this.launch_year != null && this.launch_success != null && this.land_success != null) {
        this.getAllLaunchLandYear(this.launch_year, this.launch_success, this.land_success);
      }
    });

  }

  getAllSpaceXProgram() {
    this.spacexservice.getAllSpaceXProgram().subscribe(res => {
      if (res) {
        this.programs = res;
        // console.log('All Programs', this.programs);
      }
    }, error => {
      // console.log('error', error);
    })
  }

  getLaunchSuccess(launch_success) {
    // console.log('launch_success on api', launch_success);
    if (launch_success != null) {
      this.spacexservice.getLaunchSuccess(launch_success).subscribe(res => {
        if (res) {
          this.programs = res;
          //     console.log('Launch Success', this.programs);
        }
      }, error => {
        //    console.log('error', error);
      })
    }
    else {
      this.getAllSpaceXProgram();
    }
  }
  getLaunchLand(launch_success, land_success) {
    //  console.log('getLaunchLand on function', launch_success, land_success);
    this.spacexservice.getLaunchLand(launch_success, land_success).subscribe(res => {
      if (res) {
        this.programs = res;
        //   console.log('Launch Success', this.programs);
      }
    }, error => {
      //  console.log('error', error);
    })
  }

  getAllLaunchLandYear(launch_year, launch_success, land_success) {
    //  console.log('getAllLaunchLandYear on function', launch_year, launch_success, land_success);


    this.spacexservice.getAllLaunchLandYear(launch_success, land_success, launch_year).subscribe(res => {
      if (res) {
        this.programs = res;
        // console.log('Launch Land Year', this.programs);
      }
    }, error => {
      //  console.log('error', error);
    })
  }
}
