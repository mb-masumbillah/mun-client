import learningHands from '@/assets/images/learningHands.png';
import Instructor from '@/assets/images/Instructor.png';
import curriculum from '@/assets/images/curriculum.png';
import growth from '@/assets/images/growth.png';
import upCurve from '@/assets/images/upCurve.png';
import downCurve from '@/assets/images/downCurve.png';
import { Link } from 'react-router-dom';


const Study = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="wrapper">
        <h2 className="text-primary text-2xl font-semibold ml-4 sm:ml-12 mt-10">
          Why Study with us?
        </h2>

        {/* studies card start */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center sm:items-start sm:w-[calc(25%-1.5rem)] bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-400">
            <div className="flex gap-2 mb-4">
              <img src={learningHands} alt="" className="w-10 h-10" />
              <img src={upCurve} alt="" className="w-6 h-6" />
            </div>
            <h3 className="py-2 text-xl font-semibold">Hands-On learning</h3>
            <p className="text-center sm:text-left">Real skills through practical, lab-based education.</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center sm:items-start sm:w-[calc(25%-1.5rem)] bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-400">
            <div className="flex gap-2 mb-4">
              <img src={Instructor} alt="" className="w-10 h-10" />
              <img src={downCurve} alt="" className="w-6 h-6" />
            </div>
            <h3 className="py-2 text-xl font-semibold">Expert Instructor</h3>
            <p className="text-center sm:text-left">Learn from experienced, supportive professionals.</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center sm:items-start sm:w-[calc(25%-1.5rem)] bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-400">
            <div className="flex gap-2 mb-4">
              <img src={curriculum} alt="" className="w-10 h-10" />
              <img src={upCurve} alt="" className="w-6 h-6" />
            </div>
            <h3 className="py-2 text-xl font-semibold">Industry-Ready Curriculum</h3>
            <p className="text-center sm:text-left">Programs aligned with today’s job market.</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center sm:items-start sm:w-[calc(25%-1.5rem)] bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-400">
            <div className="flex gap-2 mb-4">
              <img src={growth} alt="" className="w-10 h-10" />
            </div>
            <h3 className="py-2 text-xl font-semibold">Career-Focused Growth</h3>
            <p className="text-center sm:text-left">We prepare you for jobs, higher studies, and success.</p>
          </div>
        </div>
        {/* studies card end */}

        <div className="flex justify-center mt-8 sm:ml-12">
            <Link to='/student-register' className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">Admission Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Study;
