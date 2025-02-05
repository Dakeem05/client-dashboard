import React from "react";
import { FaArrowLeft, FaVolumeUp, FaEdit } from "react-icons/fa";
import { MdContacts, MdCameraAlt, MdCreditCard } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

function SettingSideBar() {
  const navigator = useNavigate();
  function onGoToSettingHomePageFn() {
    navigator("/settings");
  }

  return (
    // Main container with flex column layout
    <div className="flex flex-col items-start justify-start gap-10 p-4">
      {/* Back arrow */}
      <FaArrowLeft
        className="w-27 h-14 cursor-pointer"
        onClick={onGoToSettingHomePageFn}
      />

      {/* Navigation links */}
      <div className="flex flex-col items-center justify-start w-305px h-344px gap-5 mx-auto">
        {/* Profile Link */}
        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive
              ? `flex items-center justify-start p-4 rounded-md border border-gray-300 cursor-pointer gap-5 w-full bg-[#70e000] `
              : `flex items-center justify-start p-4 rounded-md border border-gray-300 cursor-pointer gap-5 w-full bg-white`
          }
          end
        >
          <div className="flex items-center w-full justify-start  gap-5">
            <MdContacts className="w-18 h-18" />
            <h4 className="font-poppins text-base font-normal text-gray-800">
              Profile
            </h4>
          </div>
        </NavLink>

        {/* Camera Settings Link */}
        <NavLink
          to="camera"
          className={({ isActive }) =>
            isActive
              ? `flex items-center justify-start p-4 rounded-md border border-gray-300 cursor-pointer gap-5 w-full bg-[#70e000]`
              : `flex items-center justify-start p-4 rounded-md border border-gray-300 cursor-pointer gap-5 w-full bg-white`
          }
          end
        >
          <div className="flex items-center w-full justify-start  gap-5">
            <MdCameraAlt className="w-18 h-18" />
            <h4 className="font-poppins text-base font-normal text-gray-800">
              Camera Settings
            </h4>
          </div>
        </NavLink>

        {/* Pricing Link */}
        <NavLink
          to="price"
          className={({ isActive }) =>
            isActive
              ? `flex items-center justify-start p-4 rounded-md border border-gray-300 cursor-pointer gap-5 w-full bg-[#70e000]`
              : `flex items-center justify-start p-4 rounded-md border border-gray-300 cursor-pointer gap-5 w-full bg-white `
          }
          end
        >
          <div className="flex items-center w-full justify-start  gap-5">
            {" "}
            <MdCreditCard className="w-18 h-18" />
            <h4 className="font-poppins text-base font-normal text-gray-800">
              Pricing
            </h4>
          </div>
        </NavLink>

        {/* notifications Settings Link */}
        <NavLink
          to="notifications"
          className={({ isActive }) =>
            isActive
              ? `flex items-center justify-start p-4 rounded-md border border-gray-300 cursor-pointer gap-5 w-full bg-[#70e000] `
              : `flex items-center justify-start p-4 rounded-md border border-gray-300 cursor-pointer gap-5 w-full bg-white`
          }
          end
        >
          <div className="flex items-center w-full justify-start  gap-5 ">
            {" "}
            <FaVolumeUp className="w-18 h-18" />
            <h4 className="font-poppins text-base font-normal text-gray-800">
              Notification Settings
            </h4>
          </div>
        </NavLink>

        {/* History Link */}
        <NavLink
          to="history"
          className={({ isActive }) =>
            isActive
              ? `flex items-center justify-start p-4 rounded-md border border-gray-300 cursor-pointer gap-5 w-full bg-[#70e000] `
              : `flex items-center justify-start p-4 rounded-md border border-gray-300 cursor-pointer gap-5 w-full bg-white `
          }
          end
        >
          <div className="flex items-center w-full justify-start gap-5 ">
            {" "}
            <FaEdit className="w-18 h-18" />
            <h4 className="font-poppins text-base font-normal text-gray-800">
              History
            </h4>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SettingSideBar;
