import { Heart, Home, Library, LogIn, Plus, Search } from "lucide-react";
import { BsFillHeartFill } from "react-icons/bs";

export const loginData = [
  {
    name: "Sign in",
  },
  {
    name: "Sign up",
  },
];

export const leftSide = {
  topLinks: [
    {
      n: "Home",
      icon: <Home />,
    },
    {
      n: "Search",
      icon: <Search />,
    },
    {
      n: "Your Library",
      icon: <Library />,
    },
  ],
  topBottomLinks: [
    {
      n: "Create Playlist",
      icon: <Plus size={20}/>,
      bg:'bg-white text-black p-[4px]'
    },
    {
      n: "Liked Songs",
      icon: <BsFillHeartFill />,
      bg: 'bg-gradient-to-br from-[#400CF1] to-white text-white p-[7px] text-sm '
    },
  ],

  music: [
    'Plane',
    'Beater',
    'RockHeart Studio',
    'Phonk',
    'House',
    'gym/ workout mix',
    'chill v2',
    'Fhonky',
    'Techno',
    'UK',
    'Miflki',
    'I wanna feel you, i want it all',
    'chill',
    'head bobbin',
    '3am',
    ';)',
    
  ]
};


export const dropdownMenu = {
  links: [
    {
      n: 'Account',
      icon: <LogIn size={17}/>
    },
    {
      n: 'Profile',
      icon: '',
    },
    {
      n: 'Private Session',
      icon: '',
    },
    {
      n: 'Settings',
      icon: '',
    }
  ]
}


export const firstSetCards = {
  cards: [
    {
      img: 'Lil Baby',
      name: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/ylqcty2rfxn4e0wjikct/baby-its-only-me-cover.jpg',
      style: '',
      heart: false
    },
    {
      img: 'Liked Songs',
      name: '',
      style: 'flex-center px-[25.5px] rounded-l-md bg-gradient-to-br from-[#400CF1] to-white text-white p-[7px] text-sm',
      heart: true
    },
    {
      img: 'Lil Baby Mix',
      name: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/ylqcty2rfxn4e0wjikct/baby-its-only-me-cover.jpg',
      style: '',
      heart: false
    },
    {
      img: 'Nle Choppa',
      name: 'https://upload.wikimedia.org/wikipedia/en/a/a0/NLE_Choppa_-_Top_Shotta.png',
      style: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-[7px] text-sm',
      heart: false
    },
    {
      img: 'Head Bobbin',
      name: 'https://i.imgflip.com/14prwc.jpg',
      style: '',
      heart: false
    },
    {
      img: 'Trap19 Connection',
      name: 'https://cdns-images.dzcdn.net/images/cover/6c5a745d651750de643f5c9c912c5b98/264x264.jpg',
      style: '',
      heart: false
    },
  ]
}



export const secondSetCards = {
  cards: [
    {
      img: 'Trap19 Connection',
      name: 'https://cdns-images.dzcdn.net/images/cover/6c5a745d651750de643f5c9c912c5b98/264x264.jpg',
      p:"Garjoka, FYRE, GJAANY",
      album: false
    },
    {
      img: '2000s Mix',
      name: 'https://i.scdn.co/image/6f0da41419b31d9d2ba55d2df212f59ad0668118',
      p:"50 cent, Chris Brown, The Crumpster and more",
      album: true
    },
    {
      img: '2010s Mix',
      name: 'https://media.gq.com/photos/6255cb4ce2859f694bf0b1db/master/w_1600%2Cc_limit/GQ0522_Future_03.jpg',
      p:"Future, BlocBoy JB, Lil Baby and more",
      album: false
    },
    {
      img: 'Chill Mix',
      name: 'https://upload.wikimedia.org/wikipedia/en/a/af/Pop_Smoke_in_2020_%281%29_%282%29_%281%29.jpg',
      p:"Pop Smoke, J. Cole, Lil Tecca and more",
      album: false
    },
    {
      img: 'Moody Mix',
      name: 'https://media.pitchfork.com/photos/64adbcfa6945bf05902b493b/master/pass/YNW-Melly-vs-Melvin.jpg',
      p:"YNM Melly, Lil Baby, emm1tt and more",
      album: false
    },
    {
      img: 'Hip Hop Mix',
      name: 'https://pbs.twimg.com/media/EQsSmlQW4AImR4o?format=jpg&name=900x900',
      p:"Joyner Lucas, 50 cent, 21 Savage and more",
      album: false
    },
  ]
}