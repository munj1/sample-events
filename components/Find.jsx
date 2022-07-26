import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRef } from "react";
import { useEffect } from "react";

const Find = (date) => {
  console.log("find is being rendered");
  const [year, setYear] = useState("2020");
  const [month, setMonth] = useState("1");
  const yearRef = useRef();
  const monthRef = useRef();

  useEffect(() => {
    if (date && yearRef.current && monthRef.current) {
      console.log("yearRef", yearRef.current.options.selectedIndex);
      yearRef.current.options.selectedIndex = parseInt(date.year) - 2020;
      monthRef.current.options.selectedIndex = parseInt(date.month) - 1;
    }
  }, [date, yearRef, monthRef]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="flex items-center p-3">
        <label
          htmlFor="year"
          className="hidden sm:block text-sm font-medium text-gray-700"
        >
          Year
        </label>
        <select
          id="year"
          name="year"
          className="ml-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue="2020"
          ref={yearRef}
          onChange={(e) => {
            let selectedYear = e.target.options[e.target.selectedIndex].value;
            console.log(typeof selectedYear);
            setYear(selectedYear);
          }}
        >
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
      <div className="flex items-center ml-5 p-3">
        <label
          htmlFor="month"
          className="hidden sm:block text-sm font-medium text-gray-700"
        >
          Month
        </label>
        <select
          ref={monthRef}
          id="month"
          name="month"
          className="ml-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue="Canada"
          onChange={(e) => {
            let selectedMonth = e.target.options[e.target.selectedIndex].value;
            console.log(selectedMonth);
            setMonth(selectedMonth);
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </div>
      <div className="ml-5 w">
        <button
          type="button"
          className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Link
            href={{
              pathname: "/events/[year]/[month]/",
              query: {
                year,
                month,
              },
            }}
          >
            Find Events
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Find;
