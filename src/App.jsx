import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import img18 from './assets/image 18.png'
import img19 from './assets/image 19.png'
import img20 from './assets/image 20.png'

const App = () => {
  const data = [
    {
      id: 1,
      image: img18,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      linkText: "Readmore →",
      linkUrl: "#",
    },
    {
      id: 2,
      image: img19,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      linkText: "Readmore →",
      linkUrl: "#",
    },
    {
      id: 3,
      image: img20,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      linkText: "Readmore →",
      linkUrl: "#",
    },
  ];
  return (
    <div>
      <Header />
      <Home data={data} />
    </div>
  );
}

export default App