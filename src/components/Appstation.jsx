import React from "react";
import { Link} from "react-router-dom";
import names from "../names";

export default function Appstation() {

 
  return (
    <div className="Appstation">
      <div className="head">
        <p>Apps</p>
        <i class="fas fa-cog"></i>
      </div>

      <div className="applist">
        {names.map(function (element, index) {
          var s=element.appName.split('-')
          return (
            <div class="card">
              <div class="card-body">
                <div className="logo"></div>
                <small>{s[0]}</small>
                <p>{element.publisherName}</p>

                <table>
                  <tr>
                    <th>Revenue</th>
                    <th>Ad Requests</th>
                    <th>Ad Response</th>
                    <th>Impressions</th>
                  </tr>
                  <tr>
                    <td>&#65129;345</td>
                    <td>345 M</td>
                    <td>10 M</td>
                    <td>10 M</td>
                  </tr>
                </table>
                
                <Link to={"/Appdata/"+element.id+"/"+element.appName+"/"+element.publisherName}>
                  <i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
