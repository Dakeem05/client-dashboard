import filter from "../assets/filter.svg";
import notification from "../assets/notification.svg";
import hailday from "../assets/hailday.svg";
import night from "../assets/night.svg";
import heart from "../assets/heart.svg";
import chart from "../assets/chart.svg";
import warning from "../assets/warning.svg";
import search from "../assets/search.svg";
import ChartSection from "./ChartSection";
import { useState } from "react";
import "./custom.css";
import { useSelector } from "react-redux";

const DataScreen = () => {
  const [searchText, setSearchText] = useState("");
  const threatState = useSelector((state) => state.actions.threatState);
  const animalNumber = useSelector((state)=>state.actions.animalNumber);
  console.log(animalNumber);
  const handleSearch = (ev) => {
    ev.preventDefault();
    alert(searchText);
  };
  return (
    <div className="DataScreen pt-8">
      <div className="flex w-full items-center justify-between">
        <h4 className="heading text-2xl font-medium">Data Manager</h4>
        <div className="DataScreen-dates-filters flex w-1/4 md:w-1/12 items-center justify-between">
          <img
            className="w-[40px] h-[40px] border-[.1px] border-[solid] border-[rgb(142,141,141)] flex justify-center items-center px-[0] py-[2px] rounded-[10px]"
            src={notification}
            alt=""
          />

          <img
            className="w-[40px] h-[40px] border-[.1px] border-[solid] border-[rgb(142,141,141)] flex justify-center items-center px-[0] py-[2px] rounded-[10px]"
            src={filter}
            alt=""
          />
        </div>
      </div>

      <div className="DataScreen-data-filter flex items-center justify-between ">
        <div className="DataScreen-dates w-full md:w-1/3 px-7 my-5 flex  border-b  border-slate-600/25 cursor-pointer  items-center justify-between">
          <h6 className="Datascreen-date border-b-2  border-green-600 py-1 text-[15px]">
            30 Days
          </h6>
          <h6 className="Datascreen-date text-[15px]">12 Months</h6>
          <h6 className="Datascreen-date text-[15px]">7 Days</h6>
          <h6 className="Datascreen-date text-[15px]">24 Hours</h6>
        </div>
      </div>
      <div className="DataCreen-group-chart grid grid-cols-2 md:grid-cols-4 gap-[1.4rem] px-[0] py-[1.2rem]">
        <div className=" border-[1.3px] border-[solid] border-[rgb(142,141,141)] rounded-[10px] flex flex-col justify-around p-[.9rem] gap-[.6rem]">
          <img className="w-[35px]" src={hailday} alt="" />
          <h4 className="DataCreen-group-container-text text-[14px] text-[#797979]">
            Total Animal Count
          </h4>
          <h3 className="DataCreen-group-container-number text-[30px] font-extrabold">
            {animalNumber? animalNumber : 'loading...'}
          </h3>
        </div>

        <div className="DataCreen-group-container border-[1.3px] border-[solid] border-[rgb(142,141,141)] rounded-[10px] flex flex-col justify-around p-[.9rem] gap-[.6rem]">
          <img className="w-[30px]" src={night} alt="" />
          <h4 className="DataCreen-group-container-text text-[14px] text-[#797979]">
            Total Animal Count
          </h4>
          <h3 className="DataCreen-group-container-number text-[30px] font-extrabold">
          {animalNumber? animalNumber : 'loading...'}
          </h3>
        </div>

        <div className="DataCreen-group-container border-[1.3px] border-[solid] border-[rgb(142,141,141)] rounded-[10px] flex flex-col justify-between p-[.9rem] gap-[.6rem]">
          <img className="w-[30px]" src={heart} alt="" />
          <h4 className="DataCreen-group-container-text text-[14px] text-[#797979]">
            Health Status
          </h4>
          <div className="DataCreen-group-container-text-wrapper flex-col flex md:flex-row md:w-full justify-between">
            <div className="group-wrapper flex">
              {threatState?<p className="smaller-text flex">
                <img className=" w-[20px]" src={warning} alt="" />
                {threatState}
              </p>:<p className="smaller-text flex">
                <img className=" w-[20px]" src={warning} alt="" />
                Threats:<span>0</span>
              </p>}
            </div>
            <p className="smaller-text">
              Status:<span>Perfect</span>
            </p>
          </div>
        </div>

        <div className="DataCreen-group-container border-[1.3px] border-[solid] border-[rgb(142,141,141)] rounded-[10px] flex flex-col justify-around p-[.9rem] gap-[.6rem]">
          <div id="group-wrapper" className="flex items-center justify-between">
            <h4 className="DataCreen-group-container-text text-[14px] text-[#797979]">
              Feeding Status
            </h4>
            <img
              id="DataCreen-group-container-Chart"
              className="w-[70px]"
              src={chart}
              alt=""
            />
          </div>
          <div className="group-wrapper flex items-center gap-[.3rem]">
            <img className="warning-img w-[20px]" src={warning} alt="" />
            <p className="smaller-text">Animals not feeding</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 md:flex-row items-center justify-between">
        <div className="border-[1px] w-full md:w-3/5 my-5 border-[solid] border-[rgb(142,141,141)] p-[10px] md:h-[60vh] h-fit rounded-[10px]">
          <div
            className="Chart-screen-wrappers-options flex items-center justify-between w-full"
            id="Chart-screen-wrappers-with-chart"
          >
            <h4 className="chart-screen-heading text-[19px]">Analytics</h4>
            <select
              name=""
              className="chart-screen-select p-[2px] rounded-[3px] outline-[none]"
              id=""
            >
              <option value="">2023</option>
              <option value="">2024</option>
            </select>
          </div>
          <ChartSection />
        </div>
        <div
          className="Chart-screen-wrappers w-full  md:w-[450px] md:h-[60vh] h-fit  border-[1px] border-[solid] border-[rgb(142,141,141)] p-[10px] rounded-[10px]"
          id="Chart-screen-wrappers-without-chart"
        >
          <div className="flex items-center justify-between p-2">
            <h1>Threat Analytics</h1>
            <div className="flex items-center border-[1px] border-[solid] border-black rounded-[5px] p-1">
              <img
              src={notification}
              alt="date"
              />
              <p className="text-gray-800">Date</p>
            </div>
          </div>
          <div className="flex gap-5 justify-between ">

            <div className="flex flex-col items-center mb-[1px]">
          <div className="w-[7vh] h-[45vh] bg-[#D9D9D9] rounded-[10px]" style={{ transform: 'rotate(180deg)' }}>
            <div className="bg-[#01A9F2] w-7vh h-[20vh] rounded-[10px]">
            </div>
          </div>
          <p>05.02.2024</p>
          </div>

          <div className="flex flex-col items-center mb-[1px]">
          <div className="w-[7vh] h-[45vh] bg-[#D9D9D9] rounded-[10px]" style={{ transform: 'rotate(180deg)' }}>
          <div className="bg-[#01A9F2] w-7vh h-[15vh] rounded-[10px]">
            </div>
          </div>
          <p>06.02.2024</p>
          </div>

          <div className="flex flex-col items-center mb-[1px]">
          <div className="w-[7vh] h-[45vh] bg-[#D9D9D9] rounded-[10px]" style={{ transform: 'rotate(180deg)' }}>
          <div className="bg-[#01A9F2] w-7vh h-[10vh] rounded-[10px]">
            </div>
          </div>
          <p>07.02.2024</p>
          </div>

          <div className="flex flex-col items-center mb-[1px]">
          <div className="w-[7vh] h-[45vh] bg-[#D9D9D9] rounded-[10px]" style={{ transform: 'rotate(180deg)' }}>
          <div className="bg-[#01A9F2] w-7vh h-[25vh] rounded-[10px]">
            </div>
          </div>
          <p>08.02.2024</p>
          </div>

        </div>
        </div>
      </div>
      <div className="DataScreen_History mt-8 flex flex-col border-[.1px] border-[solid] border-[rgb(142,141,141)] p-[1.2rem] rounded-[10px]">
        <div className="data_screen-container md:flex-1 flex flex-wrap md:flex-nowrap  items-center justify-between">
          <h4 className=" text-[19px] font-bold md:w-3/5">Data History</h4>
          <div className="data-screen-select-date flex md:order-last items-center border-[.1px] md:w-1/5 border-[solid] border-[rgb(142,141,141)] pt-[3px] pb-[3px] pl-[4px] pr-[4px] rounded-[10px] gap-[5px]">
            <img className="h-[25px] w-[25px]" src={notification} alt="" />
            <select
              name=""
              className="chart-screen-history-select text-xs w-full outline-none border-none"
              id=""
            >
              <option className="text-base" value="">Select Date</option>
              <option className="text-base" value="">2024</option>
            </select>
          </div>
          <form
            onSubmit={handleSearch}
            className="data-screen-search relative self-center sm:w-full flex my-5 items-center  sm:mx-auto"
          >
            <img className="absolute" src={search} alt="" />
            <input
              className="data-screen-history-input outline-none py-2 h-[45px] pl-8 rounded-l-lg border-[.1px] border-[solid] border-[rgb(142,141,141)]"
              id="data-screen-history-input"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="data-screen-history-input outline-none py-3 h-[45px] px-2 text-[white] bg-[#a3ff47] border-none text-[15px] rounded-tl-[0] rounded-br-[5px] cursor-pointer rounded-tr-[5px] rounded-bl-[0] uppercase"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className=" w-full overflow-x-scroll">
          <table className="border-b flex flex-col w-full">
            <tr className=" border-b flex items-center  justify-between px-6">
              <th className="font-light">Date</th>
              <th className="font-light">Animals Count (Day)</th>
              <th className="font-light">Animals Count (Night)</th>
              <th className="font-light">Threats</th>
              <th className="font-light">Health Status</th>
            </tr>

            <tr className="table-shape  ">
              <td className="font-semibold  underline pl-1">25/01/2024</td>
              <td className="pl-4">260</td>
              <td className="">250</td>
              <td className="pl-2">No threats</td>
              <td className="pl-1">Perfect</td>
            </tr>
            <tr className="table-shape  ">
              <td className="font-semibold underline pl-1 ">25/01/2024</td>
              <td className="pl-4">260</td>
              <td className="">250</td>
              <td className="pl-2">No threats</td>
              <td className="pl-1">Perfect</td>
            </tr>
            <tr className="table-shape  ">
              <td className="font-semibold underline  pl-1">25/01/2024</td>
              <td className="pl-4">260</td>
              <td className="">250</td>
              <td className="pl-2">No threats</td>
              <td className="pl-1">Perfect</td>
            </tr>
            <tr className="table-shape  ">
              <td className="font-semibold underline pl-1 ">25/01/2024</td>
              <td className="pl-4">260</td>
              <td className="">250</td>
              <td className="pl-2">No threats</td>
              <td className="pl-1">Perfect</td>
            </tr>
            <tr className="table-shape  ">
              <td className="font-semibold  underline pl-1">25/01/2024</td>
              <td className="pl-4">260</td>
              <td className="">250</td>
              <td className="pl-2">No threats</td>
              <td className="pl-1">Perfect</td>
            </tr>
            <tr className="table-shape  ">
              <td className="font-semibold underline pl-1 ">25/01/2024</td>
              <td className="pl-4">260</td>
              <td className="">250</td>
              <td className="pl-2">No threats</td>
              <td className="pl-1">Perfect</td>
            </tr>
          </table>
        </div>
        <div className="flex items-center mt-6">
          <p className="font-light text-sm">
            Showing data entry of 1 to 6 of 100k entries
          </p>
          <div className="">Will Add Pagination before</div>
        </div>
      </div>
    </div>
  );
};

export default DataScreen;