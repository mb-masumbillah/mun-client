import computer from '@/assets/images/computer.png';
import Electrical from '@/assets/images/Electrical.png';
import Mechanical from '@/assets/images/Mechanical.png';
import Civil1 from '@/assets/images/Civil1.png';
import Electronics from '@/assets/images/Electronics.png';
import RAC from '@/assets/images/RAC.png';
import ElectroMedical from '@/assets/images/Electro-Medical.png';


const OurDepartment = () => {

  return (
    <section className="wrapper">
      <h2 className="text-primary text-2xl font-semibold my-10 pl-3 sm:pl-0">
        Our Departments!
      </h2>

      {/* Department card start */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* CST */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={computer} alt="" className="mx-auto" />
          <h3 className="py-6 font-semibold text-center">
            Computer Science and Technology
          </h3>
          <div className="w-full flex justify-center">
            <button className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">View Details</button>
          </div>
        </div>

        {/* ET */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={Electrical} alt="" className="mx-auto" />
          <h3 className="py-6 font-semibold text-center">Electrical Technology</h3>
          <div className="w-full flex justify-center">
              <button className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">View Details</button>
            
          </div>
        </div>

        {/* MT */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={Mechanical} alt="" className="mx-auto" />
          <h3 className="py-6 font-semibold text-center">Mechanical Technology</h3>
          <div className="w-full flex justify-center">
              <button className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">View Details</button>
          </div>
        </div>

        {/* CIVIL */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={Civil1} alt="" className="mx-auto" />
          <h3 className="py-6 font-semibold text-center">Civil Technology</h3>
          <div className="w-full flex justify-center">
              <button className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">View Details</button>
          </div>
        </div>

        {/* Electronics */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={Electronics} alt="" className="mx-auto" />
          <h3 className="py-6 font-semibold text-center">Electronics Technology</h3>
          <div className="w-full flex justify-center">
              <button className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">View Details</button>
          </div>
        </div>

        {/* RAC */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={RAC} alt="" className="mx-auto" />
          <h3 className="py-3 font-semibold text-center">
            Refrigeration & Air Conditioning Technology
          </h3>
          <div className="w-full flex justify-center">
              <button className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">View Details</button>
          </div>
        </div>

        {/* ElectroMedical */}
        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 duration-400 shadow-2xl p-4">
          <img src={ElectroMedical} alt="" className="mx-auto" />
          <h3 className="py-6 font-semibold text-center">Electro-medical Technology</h3>
          <div className="w-full flex justify-center">
              <button className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">View Details</button>
          </div>
        </div>
      </div>
      {/* Department card end */}
    </section>
  );
};

export default OurDepartment;
