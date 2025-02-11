import React from "react";

function objArrayMethods() {
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(sum); // 10
  return <div>objArrayMethods</div>;
}

export default objArrayMethods;
