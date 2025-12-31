import cstBanner from '../../assets/cstBanner.png'
import cstClassRoom from '../../assets/cstClassRoom.png'
import Button1 from '../../components/ui/Buttons/Button1'
import DownloadBtn from '../../components/ui/Buttons/DownloadBtn'



const CSTPage = () => {
  return (
    <section className='wrapper '>
      <picture
        className=" mt-10  relative w-full h-100 flex justify-center bg-cover items-center  overflow-hidden bg-center rounded-2xl hover:scale-102 duration-400  mt-5 "
        style={{ backgroundImage: `url(${cstBanner})` }}
      >
        <div className="overlay h-full w-full bg-black/10 absolute"></div>
        <h2 className="text-6xl text-gray-100">Computer Science And Technology ((CST))</h2>
      </picture>


      <div className="flex gap-30 py-20">
        {/* left text */}
        <div className=" text-left w-1/2 py-20 pl-5">
          <h2 className="text-5xl font-bold to-gray-900">About CST Department</h2>
          <p className="py-6 text-gray-400 leading-8">
            CST Department is the on of the best Department in our Campus. Polytechnic Institute is a center of technical excellence, empowering students
            with practical skills, industry-relevant knowledge, and a future-ready mindset. We focus
            on hands-on learning, modern technology, and professional development to help students
            build strong careers and contribute confidently to the nation’s growth.
          </p>

          <Button1 text="Learn More" />
        </div>
        {/* Right image */}
        <div
          className="w-1/2 hover:scale-105 duration-400 py-10 
      "
        >
          <img src={cstClassRoom} alt="MUPI" className="  rounded-lg shadow-2xl w-[90%] h-[90%] " />
        </div>

      </div>


      <h2 className='text-5xl text-primary py-8 '>DEPARTMENT <span className='font-bold'>INFORMATION :</span></h2>

      {/* Notice row start */}
      <div className="">
        <ul>
          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                <p className="px-5 text-gray-900 text-xl"> Web Development Guideline.</p>
              </div>
            </div>

            <div className="">
              <DownloadBtn text="Download" />
            </div>
          </li>

          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                <p className="px-5 text-gray-900 text-xl">  Networking Guideline.</p>
              </div>
            </div>
            <div className="">
              <DownloadBtn text="Download" />
            </div>
          </li>

          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                <p className="px-5 text-gray-900 text-xl">  Graphic Design Guideline. </p>
              </div>
            </div>

            <div className="">
              <DownloadBtn text="Download" />
            </div>
          </li>

          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                <p className="px-5 text-gray-900 text-xl"> Machine Learning Guideline.</p>
              </div>
            </div>

            <div className="">
              <DownloadBtn text="Download" />
            </div>
          </li>

          <li className="flex justify-between items-center py-3 px-3 shadow-lg my-2 bg-white rounded-lg">
            <div className="flex ">
              <div className=" flex  py-4  ">
                <p className="px-5 text-xl text-gray-900">21-12-25</p> |{' '}
                <p className="px-5 text-gray-900 text-xl">Artificial Intelligence Guideline.</p>
              </div>
            </div>
            <div className="">
              <DownloadBtn text="Download" />
            </div>
          </li>
        </ul>
      </div>

      {/* Notice row end */}





    </section>
  )
}

export default CSTPage