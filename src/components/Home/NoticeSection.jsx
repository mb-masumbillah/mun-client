import Hat from '@/assets/images/hat.png';

const NoticeSection = () => {
  return (
    <section className="bg-gray-100 pt-10">
      <div className="wrapper">
        {/* Notice card start */}
        <div className="cards flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="flex gap-5 items-center shadow-hero rounded-lg px-6 py-5 md:px-12 hover:scale-105 duration-400 w-full sm:w-[48%] lg:w-auto">
            <div>
              <img src={Hat} alt="hat img" className="h-12 w-12" />
            </div>
            <div>
              <h4 className="text-primary text-2xl font-bold">7</h4>
              <p className="text-primary">Department</p>
            </div>
          </div>

          <div className="flex gap-5 items-center shadow-hero rounded-lg px-6 py-5 md:px-12 hover:scale-105 duration-400 w-full sm:w-[48%] lg:w-auto">
            <div>
              <img src={Hat} alt="hat img" className="h-12 w-12" />
            </div>
            <div>
              <h4 className="text-primary text-2xl font-bold">45000+</h4>
              <p className="text-primary">Students</p>
            </div>
          </div>

          <div className="flex gap-5 items-center shadow-hero rounded-lg px-6 py-5 md:px-12 hover:scale-105 duration-400 w-full sm:w-[48%] lg:w-auto">
            <div>
              <img src={Hat} alt="hat img" className="h-12 w-12" />
            </div>
            <div>
              <h4 className="text-primary text-2xl font-bold">150+</h4>
              <p className="text-primary">Instructor</p>
            </div>
          </div>

          <div className="flex gap-5 items-center shadow-hero rounded-lg px-6 py-5 md:px-3 hover:scale-105 duration-400 w-full sm:w-[48%] lg:w-auto">
            <div>
              <img src={Hat} alt="hat img" className="h-12 w-12" />
            </div>
            <div>
              <h4 className="text-primary text-2xl font-bold">20+</h4>
              <p className="text-primary">Years of Experience</p>
            </div>
          </div>
        </div>
        {/* Notice card end */}

        <h2 className="text-primary text-2xl font-semibold py-10 md:py-14 text-center md:text-left">
          Today's Notices
        </h2>

        {/* Notice row start */}
        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-3">
            {[
              'Exam Seat Plane Notice',
              'Registration Fee Submission Notice',
              'Semester Fee Submission Notice',
              'Admission Notice',
              'Exam Notice'
            ].map((notice, idx) => (
              <li
                key={idx}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 px-3 shadow-lg bg-white rounded-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <p className="text-xl text-gray-900">{`21-12-25`}</p>
                  <span className="hidden sm:inline">|</span>
                  <p className="text-xl text-gray-900">{notice}</p>
                </div>

                <div className="mt-2 sm:mt-0">
                  <button className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">Download</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Notice row end */}

        <div className="py-6 flex justify-center md:justify-start">
          <button className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">View All Notice</button>
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;
