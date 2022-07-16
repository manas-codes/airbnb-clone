import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 23 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>

        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/fbc39cb9-774f-47f3-86e4-6781c896bcc1.jpg?im_w=960"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.15}
        price="$ 30/night"
        total="$ 118 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/724790de-f0fe-4020-91d4-9a5e4ed0d70a.jpg?im_w=960"
        location="The enclave society"
        title="Enjoy the luxury of Royal House"
        description="1 guest . 3 bedroom . 3 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.75}
        price="$ 563/night"
        total="$ 2250total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/b54ade79-0acc-4c34-87d7-5e23b7c37c9d.jpg?im_w=960"
        location="Shrivandham palace club room"
        title="Private club room in london"
        description="12 guest . 10 bedroom . 15 bed . 12 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star={4.22}
        price="$ 152/night"
        total="$ 1208 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-48134060/original/972b366d-3e8d-4243-9bcc-723209bd4941.jpeg?im_w=960"
        location="Cousine palace near laeing tower"
        title="Enjoy the hanging tree house"
        description="2 master bed . 2 hall . 2 room . Free Parking"
        star={3.99}
        price="$ 49/night"
        total="$ 520 total"
      />
    </div>
  );
}

export default SearchPage;
