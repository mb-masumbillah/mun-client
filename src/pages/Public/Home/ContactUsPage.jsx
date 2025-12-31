import Instructor from '@/assets/images/Instructors.png';
import Study from '@/components/Home/Study';

const ContactUsPage = () => {
  return (
    <section className="wrapper px-4 sm:px-6 md:px-10">
      {/* Banner */}
      <div
        className="relative w-full h-60 sm:h-72 md:h-96 flex justify-center items-center bg-cover bg-center rounded-2xl overflow-hidden hover:scale-105 duration-400 mt-5"
        style={{ backgroundImage: `url(${Instructor})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h2 className="text-xl sm:text-3xl md:text-6xl text-gray-100 font-semibold text-center px-2">
          Contact with us!
        </h2>
      </div>

      {/* Study Section */}
      <div className="mt-10">
        <Study />
      </div>
    </section>
  );
};

export default ContactUsPage;
