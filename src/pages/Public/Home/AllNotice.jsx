import banner from '@/assets/images/banner.png';


const AllNotice = () => {
  return (
    <section className="wrapper px-4 sm:px-6 md:px-10">
      {/* Banner */}
      <div
        className="relative h-60 sm:h-72 md:h-96 w-full bg-center bg-cover rounded-2xl flex items-center justify-center hover:scale-105 duration-400 mt-5"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h3 className="text-center text-gray-300 text-2xl sm:text-4xl md:text-6xl font-semibold px-2">
          Here is our All Notices
        </h3>
      </div>

      {/* Notices Section */}
      <div className="bg-gray-100 pt-10">
        <h2 className="text-primary text-2xl font-semibold py-8 sm:py-12 text-center sm:text-left">
          All Notices
        </h2>

        <ul className="flex flex-col gap-4">
          {[
            'Exam Seat Plane Notice',
            'Registration Fee Submission Notice',
            'Semester Fee Submission Notice',
            'Admission Notice',
            'Exam Notice',
            'Semester Fee Submission Notice',
            'Admission Notice',
            'Exam Notice',
            'Semester Fee Submission Notice',
            'Admission Notice',
            'Exam Notice',
          ].map((notice, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 px-4 shadow-lg bg-white rounded-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <p className="text-gray-900 text-lg sm:text-xl font-medium">21-12-25</p>
                <span className="hidden sm:inline">|</span>
                <p className="text-gray-900 text-lg sm:text-xl">{notice}</p>
              </div>
              <div className="mt-2 sm:mt-0">
                  <button className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">Download</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AllNotice;
