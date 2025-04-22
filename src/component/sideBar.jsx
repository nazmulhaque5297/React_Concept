// // export function SideBar() {
// //     const menuName = ['Home', 'About', 'Resume', 'Blog Writing', 'Gallary'];
  
// //     return (
// //         <div className="h-screen w-1/6 flex  items-center justify-center ml-[2.5%] ">
// //           <div className="h-1/2 w-full bg-gray-900  flex rounded-[5%] flex flex-col items-center  p-2 space-y-2">
// //         {menuName.map((e, i) => (
// //           <div key={i} className="h-full w-full bg-amber-900 hover:bg-amber-200 hover:text-black hover:text-3xl hover:font-black transform hover:scale-105 transition duration-150 cursor-pointer rounded-[5%] flex items-center justify-center ">
// //             <h1 className="text-white text-sm font-bold hover:text-black ">{e}</h1>
// //           </div>
// //         ))}
// //       </div>
// //         </div>
      
// //     );
// //   }
  
// import homeIcon from '../assets/icon/home.png';
// import aboutIcon from '../assets/icon/info.png';
// import resumeIcon from '../assets/icon/resume.png';
// import writingIcon from '../assets/icon/writing.png';
// import gallaryIcon from '../assets/icon/gallary.png';
// // import img2 from '../assets/img2.jpg';

// export function SideBar() {
//     const menuItems = [{barName:'Home',icon:homeIcon},{barName:'About',icon:aboutIcon},{barName:'Resume',icon:resumeIcon},{barName:'Writing',icon:writingIcon},{barName:'Gallery',icon:gallaryIcon}]  
//     return (
//       <div className="h-screen w-1/6 min-w-[150px] flex items-center justify-center ml-[2.5%]">
//         <div className="h-2/5 w-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-4 space-y-3 shadow-lg">
//           {menuItems.map((item, index) => (
//             <div className='w-full flex flex-row'>
//             <div
//             key={index}
//             className="w-1/3 bg-amber-50  text-white hover:font-extrabold rounded-md flex items-center justify-center py-3 transition-all duration-150 transform hover:scale-105 cursor-pointer"
//           >
//             <img
//               src={item.icon}
//               className="w-7 h-7 rounded-full mx-auto  object-cover"
//         />
//           </div>
//             <div
//               key={index}
//               className="w-2/3 ml-2 bg-amber-900 hover:bg-amber-200 text-white hover:text-black text-base font-semibold hover:font-extrabold rounded-md flex items-center justify-center py-3 transition-all duration-150 transform hover:scale-105 cursor-pointer"
//             >
//               {item.barName}
//             </div> </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  
import { useState } from 'react';
import homeIcon from '../assets/icon/home.png';
import aboutIcon from '../assets/icon/info.png';
import resumeIcon from '../assets/icon/resume.png';
import writingIcon from '../assets/icon/writing.png';
import gallaryIcon from '../assets/icon/gallary.png';

export function SideBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { barName: 'Home', icon: homeIcon },
    { barName: 'About', icon: aboutIcon },
    { barName: 'Resume', icon: resumeIcon },
    { barName: 'Writing', icon: writingIcon },
    { barName: 'Gallery', icon: gallaryIcon },
  ];

  return (
    <div
      className={`h-screen ${
        isExpanded ? 'w-1/6 min-w-[180px]' : 'w-[75px]'
      } flex items-center justify-center ml-[2.5%] transition-all duration-300`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="h-2/5 w-full bg-gray-900 rounded-[5%] flex flex-col items-center justify-center p-4 space-y-3 shadow-lg">
        {menuItems.map((item, index) => (
          <div key={index} className="w-full flex flex-row">
            <div
              className="w-1/3 bg-amber-50 rounded-[5%] flex items-center justify-center py-3 transition duration-150 transform hover:scale-105 cursor-pointer"
            >
              <img
                src={item.icon}
                className="w-7 h-7 rounded-full object-cover"
              />
            </div>
            <div
              className={`${
                isExpanded ? 'w-2/3 ml-2' : 'w-0 ml-0 opacity-0'
              } bg-amber-900 hover:bg-amber-200 text-white hover:text-black text-base font-semibold hover:font-extrabold rounded-[5%] flex items-center justify-center py-3 transition-all duration-150 transform hover:scale-105 cursor-pointer overflow-hidden`}
            >
              {item.barName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
