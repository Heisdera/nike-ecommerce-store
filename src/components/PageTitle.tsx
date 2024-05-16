import React from "react";
import { FiChevronsRight } from "react-icons/fi";

interface props {
  title: string | undefined;
}

const PageTitle: React.FC<props> = (props) => {
  return (
    <div className="mb-3 ml-1 flex items-center gap-1 font-medium text-gray-900">
      <FiChevronsRight className="self-center text-gray-500" />
      <h2 className="text-lg xl:text-xl">{props.title}</h2>
    </div>
  );
};

export default PageTitle;
