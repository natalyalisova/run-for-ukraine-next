import { format, parseISO } from "date-fns";
import React from "react"; // Ensure React is imported when using JSX in TypeScript

// Define a type for the component's props
type DateProps = {
  dateString: string;
};

const Date: React.FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;
