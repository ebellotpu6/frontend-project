import React from 'react';

import { numberWithCommas } from '..';

import './index.css';

const index = ({ model, manufacturer, vehicle_class, cost_in_credits, max_atmosphering_speed, length, passengers, cargo_capacity, consumables }) => {
  return (
    <>           
        <div><b>Model:</b> {model}</div>
        <div><b>Manufacturer:</b> {manufacturer}</div>
        <div><b>Class:</b> {vehicle_class}</div>
        <div><b>Cost:</b> {numberWithCommas(cost_in_credits)} credits</div>
        <div><b>Max. Speed:</b> {numberWithCommas(max_atmosphering_speed)} Km/h</div>
        <div><b>Length:</b> {numberWithCommas(length)} m</div>
        <div><b>Passengers:</b> {numberWithCommas(passengers)}</div>
        <div><b>Cargo Capacity:</b> {numberWithCommas(cargo_capacity)} kg</div>
        <div><b>Consumables:</b> {consumables}</div>
    </>
  )
}

export default index