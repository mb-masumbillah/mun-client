import computer from '@/assets/images/computer.png';
import Electrical from '@/assets/images/Electrical.png';
import Mechanical from '@/assets/images/Mechanical.png';
import Civil1 from '@/assets/images/Civil1.png';
import Electronics from '@/assets/images/Electronics.png';
import RAC from '@/assets/images/RAC.png';
import ElectroMedical from '@/assets/images/Electro-Medical.png';
import banner from '@/assets/images/banner.png';

const AcademicPage = () => {

  const departments = [
    { img: computer, name: 'Computer Science and Technology', link: '/cst' },
    { img: Electrical, name: 'Electrical Technology', link: null },
    { img: Mechanical, name: 'Mechanical Technology', link: null },
    { img: Civil1, name: 'Civil Technology', link: null },
    { img: Electronics, name: 'Electronics Technology', link: null },
    { img: RAC, name: 'Refrigeration & Air Conditioning Technology', link: null },
    { img: ElectroMedical, name: 'Electro-medical Technology', link: null },
  ];

  return (
    <section className="wrapper px-4 sm:px-6 md:px-10">
      {/* Banner */}
      <div
        className="relative w-full h-60 sm:h-72 md:h-96 flex justify-center items-center bg-cover bg-center rounded-2xl hover:scale-105 duration-400 mt-5"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-6xl text-gray-200 font-semibold text-center px-2">
          Here is our All Departments
        </h2>
      </div>

      <h2 className="text-primary text-2xl font-semibold my-8 sm:my-10 text-center sm:text-left">
        Our Departments !
      </h2>

      {/* Department Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="hover:scale-105 duration-300 shadow-2xl p-4 rounded-lg flex flex-col justify-between"
          >
            <img src={dept.img} alt={dept.name} className="mx-auto w-28 h-28 object-contain" />
            <h3 className="py-4 font-semibold text-center text-lg">{dept.name}</h3>
            <div className="w-full flex justify-center">
                <button className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicPage;
