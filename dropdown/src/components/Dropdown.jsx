const menuData = [
  { label: "Andra Pardesh" },
  {
    label: "Tamil Nadu",
    dist: [
      { label: "Salem" },
      { label: "Coimbatore" },
      { label: "Ooty" },
      {
        label: "Chennai",
        dist: [
          { label: "Solinganallur" },
          { label: "Tambara" },
          { label: "Chromepet" },
        ],
      },
    ],
  },
  {
    label: "Karnataka",
    dist: [
      { label: "Bangalore" },
      { label: "Udupi" },
      { label: "Mangalore" },
      { label: "Shimogha" },
    ],
  },
  {
    label: "Kerala",
    dist: [
      { label: "Kozhikode" },
      {
        label: "Thrissur",
        dist: [
          { label: "Chalakudy" },
          { label: "Aloor" },
          {
            label: "Tirur",
            dist: [
              { label: "Phase 1" },
              { label: "Phase 2" },
              { label: "Phase 3" },
            ],
          },
        ],
      },
      { label: "Malappuram" },
    ],
  },
];

import React from "react";
import "../App.css";

function Dropdown() {
  const toggledist = (e) => {
    e.stopPropagation();

    let dist = e.target.querySelector("ul");

    if (!dist) return;

    if (dist.style.display === "none" || !dist.style.display) {
      dist.style.display = "block";
    } else {
      dist.style.display = "none";
    }
  };

  const renderdist = (dist) => {
    return (
      <ul className="dist">
        {dist.map((subItem, index) => (
          <li key={index} onClick={toggledist}>
            {subItem.label}
            {subItem.dist && renderdist(subItem.dist)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <ul>
        {menuData.map((item, index) => (
          <li key={index} onClick={toggledist}>
            {item.label}
            {item.dist && renderdist(item.dist)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
