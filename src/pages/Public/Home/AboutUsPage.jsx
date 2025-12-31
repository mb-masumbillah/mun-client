import Instructor from '@/assets/images/Instructors.png';
import gridImage1 from '@/assets/images/gridImage1.png';
import gridImage2 from '@/assets/images/gridImage2.png';
import gridImage3 from '@/assets/images/gridImage3.png';
import gridImage4 from '@/assets/images/gridImage4.png';
import gridImage5 from '@/assets/images/gridImage5.png';
import gridImage6 from '@/assets/images/gridImage6.png';
import gridImage7 from '@/assets/images/gridImage7.png';
import gridImage8 from '@/assets/images/gridImage8.png';
import gridVideo from '@/assets/images/gridVideo.png';
import AboutUs from '@/components/Home/AboutUs';

const AboutUsPage = () => {
  const baseGridClass =
    'rounded-2xl flex items-center justify-center text-white font-bold overflow-hidden hover:scale-105 duration-400 transition-transform';
  const baseGridImageClass = 'h-full w-full object-cover object-center';

  return (
    <section className="wrapper px-4 sm:px-6 md:px-10">
      {/* Banner */}
      <div
        className="relative w-full h-60 sm:h-72 md:h-96 flex justify-center items-center bg-cover bg-center rounded-2xl overflow-hidden hover:scale-105 duration-400 mt-5"
        style={{ backgroundImage: `url(${Instructor})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h2 className="text-xl sm:text-3xl md:text-6xl text-gray-100 font-semibold text-center px-2">
          Learn more about us!
        </h2>
      </div>

      {/* AboutUs Section */}
      <div className="mt-10">
        <AboutUs />
      </div>

      {/* Gallery */}
      <h2 className="text-primary text-2xl sm:text-3xl font-semibold py-8 mx-2 sm:mx-5">
        MUPI <span className="font-extrabold text-primary text-3xl sm:text-4xl">Gallery</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className={`${baseGridClass} md:row-span-3 h-48 sm:h-60 md:h-auto`}>
          <img src={gridImage1} alt="GridImage" className={`${baseGridImageClass}`} />
        </div>
        <div className={`${baseGridClass} md:col-span-2 h-48 sm:h-60 md:h-auto`}>
          <img src={gridImage2} alt="GridImage" className={`${baseGridImageClass}`} />
        </div>
        <div className={`${baseGridClass} md:row-span-2 h-48 sm:h-60 md:h-auto`}>
          <img src={gridImage3} alt="GridImage" className={`${baseGridImageClass}`} />
        </div>
        <div className={`${baseGridClass} md:col-span-2 md:row-span-2 h-48 sm:h-60 md:h-auto`}>
          <img src={gridImage4} alt="GridImage" className={`${baseGridImageClass}`} />
        </div>
        <div className={`${baseGridClass} h-48 sm:h-60 md:h-auto`}>
          <img src={gridImage5} alt="GridImage" className={`${baseGridImageClass}`} />
        </div>
        <div className={`${baseGridClass} h-48 sm:h-60 md:h-auto`}>
          <img src={gridImage6} alt="GridImage" className={`${baseGridImageClass}`} />
        </div>
        <div className={`${baseGridClass} md:col-span-2 h-48 sm:h-60 md:h-auto`}>
          <img src={gridImage7} alt="GridImage" className={`${baseGridImageClass}`} />
        </div>
        <div className={`${baseGridClass} h-48 sm:h-60 md:h-auto`}>
          <img src={gridImage8} alt="GridImage" className={`${baseGridImageClass}`} />
        </div>
      </div>

      {/* History Section */}
      <div className="history flex flex-col md:flex-row gap-8 md:gap-20 py-10 justify-between mt-10">
        {/* left text */}
        <div className="md:w-1/2">
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-semibold py-4">
            History of <span className="font-extrabold text-primary text-3xl sm:text-4xl md:text-5xl">MUPI</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Munshiganj Polytechnic Institute is a center of technical excellence, empowering
            students with practical skills, industry-relevant knowledge, and a future-ready mindset.
            We focus on hands-on learning, modern technology, and professional development to help
            students build strong careers and contribute confidently to the nation’s growth. Munshiganj Polytechnic Institute is a center of technical excellence, empowering
            students with practical skills, industry-relevant knowledge, and a future-ready mindset.
            We focus on hands-on learning, modern technology, and professional development to help
            students build strong careers and contribute confidently to the nation’s growth.
          </p>
        </div>

        {/* right image */}
        <div className="md:w-1/2 hover:scale-105 duration-400 mt-5 md:mt-0">
          <img src={gridVideo} alt="MUPI Video" className="w-full rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
