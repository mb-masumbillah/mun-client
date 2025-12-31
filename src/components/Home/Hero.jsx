import banner from '@/assets/images/banner.png';


const Hero = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <img
        src={banner}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover -z-50"
      />

      <div className="wrapper">
        <div className="py-[100px] px-4 sm:py-[120px] sm:px-8 md:py-[150px] md:px-[60px] max-w-[1200px]">
          <h3 className="text-gray-300 py-3 text-lg sm:text-xl md:text-2xl">
            Welcome to!
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-6xl leading-snug sm:leading-snug md:leading-tight font-bold text-white">
            Munshiganj Polytechnic Institute
          </h1>
          <p className="text-gray-300 py-4 sm:py-6 text-sm sm:text-base md:text-lg max-w-[600px] sm:max-w-[700px] md:max-w-[800px] tracking-wide">
            Empowering future professionals through practical technical education and industry-ready
            skills.
          </p>
          <div className="mt-4 sm:mt-6">
            <button className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition">About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
