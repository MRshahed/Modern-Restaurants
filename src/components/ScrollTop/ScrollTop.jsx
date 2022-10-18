// import React,{useEffect, useState} from "react";
// import images from "../../constants/images";

// const ScrollTop = ()=>{
   
//     const {showButton, setShowbutotn} = useState(false);
//    useEffect(() => {
//      const handleScrollButton = ()=>{
//         window.pageYOffset>300 ? setShowbutotn(true) : setShowbutotn(false);
//      }
//      window.addEventListener("scroll", handleScrollButton);
   
//      return () => {
//        window.removeEventListener("scroll", handleScrollButton);
//      }
//    }, [])
   
//    const handleScrollToTopButton = ()=>{
//     window.scrollTo({top: 0, behavior: "smooth"});
//    }

//     return (
//         <div>
//     {showButton && (
         
//         <div className="scroollToTop">

//         <button  
//         className="app__scrollButton"
//         onClick={handleScrollToTopButton}
//         >
//         <img src={images.UpArrow} alt="scrool button"/>

//         </button>

//         </div>

//         )
//     }
// </div>
//     );
// }

// export default ScrollTop;