import React from "react";
import "./support.scss";
import Counter from "../counter/Counter";

const Support = () => {
  return (
    <div className="support_wrapper">
      <div className="support_overlay"></div>
      <div className="support_notes">
        <Counter
          fromval={0}
          toval={500}
          symbol={"+"}
          text={"HAPPY CLIENTS"}
          key={0}
        />
        <Counter
          fromval={0}
          toval={70}
          symbol={""}
          text={"ONLINE COURSES"}
          key={1}
        />
        <Counter
          fromval={0}
          toval={100}
          symbol={"%"}
          text={"SATISFACTION"}
          key={2}
        />
        <Counter
          fromval={0}
          toval={100}
          symbol={"%"}
          text={"SUPPORT"}
          key={3}
        />
      </div>
    </div>
  );
};

export default Support;
