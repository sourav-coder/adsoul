import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";



// appdata 
export default function Appdata(props) {
  const [comp, setData] = React.useState([]);


  console.log(props.match);
  
  // get request 
  useEffect(() => {
    fetch("https://api.npoint.io/d734975d2aee62d197ef/" + props.match.params.id)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <>
      <div className="Appheader">
        <AppBar className="Appdata">
          <Toolbar>
            <Typography variant="h6">ADSOUL</Typography>
          </Toolbar>
        </AppBar>

        <div className="card">
          <div className="card-body">
            <Link to="/">
              <i class="fas fa-arrow-left"></i>
            </Link>
            <div className="innerlogo"></div>
            <small>{props.match.params.Appname}</small>
            <p>{props.match.params.publisherName}</p>
          </div>
        </div>
      </div>

      <table className="AppdataTable">
        <tr>
          <th>Date</th>
          <th>Revenue</th>
          <th>Ad Requests</th>
          <th>Ad Responses</th>
          <th>Impressions</th>
          <th>Click</th>
          <th>Render Rate</th>
        </tr>
        {comp.map(function (val, index) {
            var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
            var date=val.date.split("-")
            console.log(date)
            var s=date[0]+" "+mlist[parseInt(date[1])-1]+" ,"+date[2]
            console.log(s);


          return (
            <tr>
              <td>{s}</td>
              <td>&#65129;{val.revenue}</td>
              <td>{val.adRequest}</td>
              <td>{val.adResponse}</td>
              <td>{val.impressions}</td>
              <td>{val.clicks}</td>
              <td>{Math.round((val.impressions / val.adResponse) * 100)} %</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
