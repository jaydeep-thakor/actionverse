import React, { useState } from "react";
import BlurCircle from "./BlurCircle";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DateSelect = ({ dateTime, id }) => {

  const navigate = useNavigate();

  const [selected, setSelected] = useState(null);

  const onBookHandler = () => {
    if(!selected){
      return toast("Please select a date");
    }else{
      navigate(`/movies/${id}/${selected}`);
      scrollTo(0,0);
    }
  }

  return (
    <div className="pt-30" id="dateSelect">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" left="0px" />

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Choose Date</h4>

          <div className="flex items-center gap-4">
            <button>
              <ChevronLeftIcon width={28} />
            </button>

            <div className="grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4">
              {Object.keys(dateTime).map((date) => {
                const d = new Date(date);
                return (
                  <button onClick={()=>{setSelected(date)}}
                    key={date}
                    className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded duration-300 cursor-pointer transition ${selected === date ? "bg-primary" : "border hover:bg-primary/20"}`}>
                    <span className="text-lg font-bold">{d.getDate()}</span>
                    <span className="text-sm">
                      {d.toLocaleDateString("en-US", { month: "short" })}
                    </span>
                  </button>
                );
              })}
            </div>

            <button>
              <ChevronRightIcon width={28} />
            </button>
          </div>
        </div>

        <button onClick={onBookHandler} className="flex items-center text-xs font-medium bg-primary hover:bg-primary-hover cursor-pointer transition duration-300 rounded-md py-3 px-5 gap-2">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
