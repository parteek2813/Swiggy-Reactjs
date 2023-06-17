import {useState} from "react";


const Section = ({title, description, isVisible, setisVisible})=>{


//  const [isVisible , setisVisible ] = useState(false);
    


    return (
        <div className="border border-black p-2 m-2">
            <h3>{title}</h3>

            {
                isVisible ? (
                <button onClick={()=>{setisVisible
                    (false)}} 
                    className="cursor-pointer underline"> Hide </button>
                    ) 
                    :  
                    (
                    <button onClick={()=>{setisVisible

                        (true)}}
                         className="cursor-pointer underline"> Show     
                         </button>
                        )
            }
            
            { 
            isVisible && <p className="text-bold m-2 p-2"> {description}    </p> 
        }   

        </div>
    )
}


const Instamart=()=>{


const[visibleSection, SetisVisibleSection]= useState("about");


    return (
        <div>

            <h1 className="text-3xl p-2 m-2 font-bold"> Instamart </h1>

            <Section 
            title={"About Instamart"} 
            description={" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}  
         
            isVisible={visibleSection == "about"}
            setisVisible={()=>SetisVisibleSection("about")}
             />

            <Section 
            title={"Team Page"} 
            description={" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}
       
            isVisible={visibleSection == "team"}
            setisVisible={()=>SetisVisibleSection("team")}
             />
            <Section 

            title={"Contact Us Instamart"} 
            description={" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "} 
          
            isVisible={visibleSection == "contact"}
            setisVisible={()=>SetisVisibleSection("contact")}
             />
        </div>
    )

}

export default Instamart;