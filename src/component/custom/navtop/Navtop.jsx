import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navtop = () => {

     const [open,Isopen] = useState(false);

    const navlist = [
        {id:1,name:'home',path:'/'},
        {id:2,name:'listino',path:'/listino'},
        {id:3,name:'blog',path:'/blog'},
        {id:4,name:'elements',path:'/elements'},
    ];

  return (
    <div>
       <div className="navbar  sm:flex justify-around m-8">
          <div className="navmanu">
             <label htmlFor="logo" className=' font-bold text-2xl'>Turb🅾️</label>
          </div>
          <div className="navitems">
           <button className=' lg:hidden md:hidden' onClick={()=>Isopen(!open)}>click</button>
            <nav>
                 <ul>
                   {
                    navlist.map(items => <Link key={items.id} className=' p-2 text-gray-600 capitalize ' to={items.path}>{items.name}</Link>)
                   }
                 </ul>
             </nav>      
          </div>
       </div>
    </div>
  )
}

export default Navtop;


