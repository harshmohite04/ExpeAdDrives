import OverViewPage from "./dashboard/OverViewPage";
import Logo2 from "../assets/logo3.jpg"
function DashboardWhenlogIn() {
  return (

      <div className="bg-gradient-to-r from-[#1765C1] to-[#EA2222] h-screen pt-20" >
       <div className="">
         <img src={Logo2} alt="" className="w-1/12 ml-20 "/>
        </div>
      <OverViewPage />;
    </div>
)
}

export default DashboardWhenlogIn;
