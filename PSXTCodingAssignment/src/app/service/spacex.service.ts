import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpServiceService } from './http-service.service';
import { ResultModel } from '../model/resultmodel';

@Injectable({
    providedIn: 'root'
})
export class SpaceXService {

    constructor(
        private apiService: HttpServiceService,
    ) { }

    getAllSpaceXProgram(): Observable<ResultModel> {
        return this.apiService.get(`https://api.spaceXdata.com/v3/launches?limit=100`)
            .pipe(map(
                data => {
                    return data;

                }
            ));
    }
    //Filters
    getLaunchSuccess(launch_success): Observable<ResultModel> {
        //console.log('launch_success on service', launch_success);
        return this.apiService.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_success}`)
            .pipe(map(
                data => {
                    return data;

                }
            ));
    }
    getLaunchLand(launch_success, land_success): Observable<ResultModel> {
        //   console.log('getLaunchLand on service', launch_success, land_success);
        return this.apiService.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_success}&land_success=${land_success}`)
            .pipe(map(
                data => {
                    return data;

                }
            ));
    }
    getAllLaunchLandYear(launch_year, launch_success, land_success): Observable<ResultModel> {
        //   console.log('getAllLaunchLandYear on service', launch_year, launch_success, land_success);
        return this.apiService.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_success}&land_success=${land_success}&launch_year=${launch_year}`)
            .pipe(map(
                data => {
                    return data;

                }
            ));
    }



}
