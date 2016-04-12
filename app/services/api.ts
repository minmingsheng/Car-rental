import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class ApiService {
    constructor(private http: Http) {
    }
    
    getRepos(username) {
        let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
        return repos;
    }
    
    getDetails(repo) {
        let headers = new Headers();
        headers.append('Accept','application/vnd.github.VERSION.html');
        
        return this.http.get(`${repo.url}/readme`, { headers: headers });
    }

    getLcboLocation(){
        var sheridan = new google.maps.LatLng(
            43.4689561,
            -79.6985519999999
        );
        let headers = new Headers();
        // headers.append('Authorization','Token MDozNDkxYjE0YS0wMDJlLTExZTYtOWQ0OC04YjgyOWYwYjQ5NWE6WTJIYWxGMnBaUUtDQTJtcmZ6T3U4NDRFN1RqdmJiTFVqQ2lh');
        // let text  = this.http.get('http://lcboapi.com/stores?lat='+sheridan.lat()+'&lon='+sheridan.lng()+'&access_key='+"MDozNDkxYjE0YS0wMDJlLTExZTYtOWQ0OC04YjgyOWYwYjQ5NWE6WTJIYWxGMnBaUUtDQTJtcmZ6T3U4NDRFN1RqdmJiTFVqQ2lh");
        // console.log( text.map(res=> res.json()) );
        
        // var data = "lat="+sheridan.lat()+'&lon='+sheridan.lng()+'&access_key='+"MDozNDkxYjE0YS0wMDJlLTExZTYtOWQ0OC04YjgyOWYwYjQ5NWE6WTJIYWxGMnBaUUtDQTJtcmZ6T3U4NDRFN1RqdmJiTFVqQ2lh";
        // console.info(data);
        // var xhr = new XMLHttpRequest();
        // xhr.open( 'GET', 'http://lcboapi.com/stores' );
        // // xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        // xhr.send( data );
        // xhr.onreadystatechange = function() {
        //   // if everything worked out, then..
        //     if( xhr.readyState == 4 && xhr.status == 200 ) {
        //           console.log(xhr.responseText);
        //     }
        // };

        $.ajax({
            url: 'https://lcboapi.com/stores?lat='+sheridan.lat()+'&lon='+sheridan.lng(),
            // url: 'https://api.github.com/users/minmingsheng',
            headers: {
                'Authorization' : 'Token MDowNTFlOTliYS0zNTVkLTExZTUtODRhZi1jNzMwYTY0ZDcwYWY6ODlBYmd3eDYxZWs1bVhmTE1QR3F2SEdWanlxMmtBZ0pvaXA5'
            }
        }).success(function(data){
            console.log(data);
            
        })
        
    }
}