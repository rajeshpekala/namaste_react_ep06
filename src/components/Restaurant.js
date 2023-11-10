import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
    const {resdata} = props;
    const {cloudinaryImageId,
      name,
      cuisines,
      avgRating
     } = resdata?.info;
     const {deliveryTime
     
     } = resdata?.info.sla;

    return(
        <div className ="res_card">
            
            <div>
                <img className = "res_img" src ={CDN_URL+ 
             cloudinaryImageId
                }/>
            </div >
            <div  className ="he">
            <h3 >{name}</h3>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime + "minutes"}</h4>
            </div>

        </div>
    )
}

export default Restaurant;