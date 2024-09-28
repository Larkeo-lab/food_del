import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore_menu' id='explore_menu'>
        <h1>Explore our menu</h1>
        <p className='explore_menu_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil maxime nostrum totam esse laudantium repellat illo dolorem commodi pariatur omnis.</p>
         <div className="explore_menu_list">
            {
                menu_list.map((item, index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=> prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore_menu_list_item'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
         </div>
         <hr />
    </div>
  )
}

export default ExploreMenu
