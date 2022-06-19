import React from 'react'

import { numberWithCommas } from '..';

import './index.css';

const index = ({ model, manufacturer, starship_class, cost_in_credits, max_atmosphering_speed, hyperdrive_rating, MGLT, length, passengers, cargo_capacity }) => {
  return (
    <>           
        <div><b>Model:</b> {model}</div>
        <div><b>Manufacturer:</b> {manufacturer}</div>
        <div><b>Class:</b> {starship_class}</div>
        <div><b>Cost:</b> {numberWithCommas(cost_in_credits)} credits</div>
        <div><b>Max. Speed:</b> {numberWithCommas(max_atmosphering_speed)} Km/h</div>
        <div><b>Hyperdrive Rating:</b> {hyperdrive_rating}</div>
        <div><b>MGLT:</b> {MGLT}</div>
        <div><b>Length:</b> {numberWithCommas(length)} m</div>
        <div><b>Passengers:</b> {numberWithCommas(passengers)}</div>
        <div><b>Cargo Capacity:</b> {numberWithCommas(cargo_capacity/1000)} metric tons</div>
    </>
  )
}

export default index