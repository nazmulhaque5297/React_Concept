import { useState } from 'react'
import TeamMemberComponent from '../component/teamMember'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';


function Home() {
  const [count, setCount] = useState(0)
  const imageInfo = [{src:img1,name:'Leslie Alexander',designation:'Co-Founder / CEO',area:'Toronto, Canada'},
    {src:img2,name:'Leslie Alexander',designation:'Co-Founder / CEO',area:'Toronto, Canada'},
    {src:img1,name:'Leslie Alexander',designation:'Co-Founder / CEO',area:'Toronto, Canada'},
    {src:img1,name:'Leslie Alexander',designation:'Co-Founder / CEO',area:'Toronto, Canada'},
    {src:img1,name:'Leslie Alexander',designation:'Co-Founder / CEO',area:'Toronto, Canada'},
    {src:img1,name:'Leslie Alexander',designation:'Co-Founder / CEO',area:'Toronto, Canada'}
  ]

  return (
    
    <div className="bg-gray-900 w-full h-screen flex ">
      <div className=' ml-4'>
        <h1 className=' mt-10  text-amber-50 text-4xl font-serif'>Our Team</h1>
        <p className=' mt-2 text-amber-50 font-serif' >We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>

      </div>

      <div className="flex flex-wrap justify-center">
        {imageInfo.map((member, index) => (
          <TeamMemberComponent
            key={index}
            src={member.src}
            name={member.name}
            designation={member.designation}
            area={member.area}
          />
        ))}
      </div>
    </div>
    
  )
}

export default Home
