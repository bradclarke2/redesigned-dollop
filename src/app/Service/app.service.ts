import { envVariable } from '../Enums/envVariable';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {
  }

  getFootballInfo() {
    return this.http.get(`http://api.football-data.org/v1/competitions/438/leagueTable`,
      {headers: {'X-Auth-Token': envVariable.ACCESS_TOKEN}});
  }

}
