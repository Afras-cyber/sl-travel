import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTiktok, FaPinterest} from 'react-icons/fa'

const sections =[
    {
        title:'Srilanka',
        items: ['Tourism Hotline 1912', 'Ambulance Service 1990']
    },
    {
        title:'Quick Links',
        items: ['Terms of Use', 'Site Map', 'Subscribe', 'Contact Us', 'Investor Relations Unit', 
               'Complaints', 'Tenders', 'Important Notices', 'How to fly your Drones Legitimately', 'SLTB Progress Report']
    },
    {
        title:'Other Sites',
        items: ['SriLanka Tourism Development Authority', 'SriLanka Tourism Convention Bureau', 'Srilanka Institute of Tourism and Hotel Management',
                'Ministry of Tourism', 'Srilankan Airlines', 'Srilanka Airport and Aviation Services', 'Department of Immigration and Emmigration',
                'Electronic Travel Authorization System', 'Tourist Hotels Association of Srilanka', 'Srilanka Association of Inbound Tour Operators',
                'Srilanka Pavilion at EXPO 2020 in Dubai']
        
    }
]

const items =[
  {
    name:'Facebook',
    icon: FaFacebook,
    link: 'https://facebook.com/'
  },
  {
    name:'Instagram',
    icon: FaInstagram,
    link: 'https://instagram.com/'
  },
  {
    name:'Youtube',
    icon: FaYoutube,
    link: 'https://youtube.com/'
  },
  {
    name:'Twitter',
    icon: FaTwitter,
    link: 'https://Twitter.com/'
  },
  {
    name:'TikTok',
    icon: FaTiktok,
    link: 'https://facebook.com/'
  },
  {
    name:'Pinterest',
    icon: FaPinterest,
    link: 'https://pinterest.com/'
  }
]
const Footer = () => {
  return (
    <>
    <div className='w-full mt-24 bg-slate-900 text-gray-200 py-y px-2'>
       <div className='max-w-[1240] mx-auto grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-600 py-8 '>
         {
          sections.map((section, index)=> (
            <div key={index}>
              <h6 className='font-bold uppercase pt-2 text-center text-xl'>
                {section.title}
              </h6>
              <ul>
                {section.items.map((item, i) =>(
                  <li key={i}
                  className='py-1 text-gray-500 hover:text-white cursor-pointer text-center'>
                     {item}
                  </li>
                ))}
              </ul>

            </div>
          ))
         }
       </div>
       
       {/*Social Icons */}
       <div className='flex clex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
         <p className='py-4'>
         &#169;2024 All Rights Reserved by Sri Lanka Tourism Promotion Bureau.
         </p>
         <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
           {items.map ((x,index) => {
            return < x.icon key={index} className='hover:text-white cursor-pointer'/>
           })}
         </div>
       </div>
    </div>
    </>
  )
}

export default Footer
