import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const DefaultBookNew = (props) => {
  return (
    <>
      {props.item ? (
        <div className={props.class} key={props.item.id}>
          <NavLink
            to={`/booknew/${props.item.id}`}
            style={{ textDecoration: "none" }}
          >
            <img src={props.item.image} alt="" />
          </NavLink>
          <div className="cus">
            <NavLink
              to={`/booknew/${props.item.id}`}
              style={{ textDecoration: "none" }}
            >
              <h3>{props.item.title}</h3>
            </NavLink>
            {props.showDes && (
              <p className="des__mid">{props.item.description}</p>
            )}
          </div>
        </div>
      ) : (
        props.data.map((item) => (
          <div className={props.class} key={item.id}>
            <NavLink
              to={`/booknew/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <img src={item.image} alt="" />
            </NavLink>
            <div className="cus">
              <NavLink
                to={`/booknew/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <h3>{item.title}</h3>
              </NavLink>
              {props.showDes && <p className="des__mid">{item.description}</p>}
            </div>
          </div>
        ))
      )}
    </>
  );
};
export default DefaultBookNew;
