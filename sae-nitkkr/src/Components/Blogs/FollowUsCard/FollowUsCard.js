import React from "react";

import "./FollowusCard.css";
export default function Followus() {
  return (
    <>
      <div className="container">
        <h1 className="follow">
          Follow Us
          <span>
            <hr className="line" />
          </span>
        </h1>

        <table class="table table-bordered">
          <tbody>
            <tr>
              <th scope="row">
                <i className="fa fa-instagram fa-2x"></i>
              </th>
              <th scope="col">
                <a href="https://www.instagram.com/autokriti/">AutoKriti</a>
              </th>
            </tr>
            <tr>
              <th scope="row">
                <i className="fa fa-facebook-square fa-2x"></i>
              </th>
              <th scope="col">
                <a href="/">AutoKriti</a>
              </th>
            </tr>
            <tr>
              <th scope="row">
                <i className="fa fa-instagram fa-2x"></i>
              </th>

              <th scope="col">
                <a href="https://www.instagram.com/accelerons_nitkkr/">
                  Acceleron
                </a>
              </th>
            </tr>
            <tr>
              <th scope="row">
                <i className="fa fa-instagram fa-2x"></i>
              </th>
              <th scope="col">
                <a href="https://www.instagram.com/nitroxteam/">Nitrox</a>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
