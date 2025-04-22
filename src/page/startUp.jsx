
import { useState, useEffect } from "react";
import { SideBar } from "../component/sideBar";

export default function StartUp() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []); // empty dependency array = run once on mount

//   return <h1>The Running Time Is {time}</h1>;
  return <SideBar/>
}