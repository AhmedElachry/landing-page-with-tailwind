import box from "../../assets/box.svg";
import calendar from "../../assets/calendar.svg";
import statistics from "../../assets/statistics.svg";

const Proccess = () => {
  return (
    <div className="container mx-auto py-[110px] flex flex-col gap-[50px] md:gap-[70px]">
      <section className="flex items-center  gap-1 flex-col">
        <header className="font-bold text-[22.5px] md:text-[45px] text-primary leading-[55px]">
          How it works
        </header>
        <p className="text-paragraph text-center md:max-w-[431px]">
          Businesses generally promote their brand, products, and services by
          identifying audience.
        </p>
      </section>
      <div className="flex gap-8 flex-wrap md:flex-row justify-center xl:justify-between  ">
        <section className="rounded-xl border-[#0606400a] flex flex-col  items-center xl:items-start border-2 w-[280px] xs:w-[370px] max-h-[308px] bg-white p-7 ">
          <div className="w-[70px] h-[70px] mb-12 bg-section1-bg rounded-xl flex justify-center items-center">
            <img src={box} />
          </div>

          <header className="md:text-2xl mb-3 text-primary font-medium	">
            Choose packages
          </header>
          <p className="text-base text-center xl:text-left  text-paragraph max-w-[280px]">
            Businesses generally promote their brand, products, and services by
            identifying audience or users.
          </p>
        </section>
        <section className="rounded-xl border-[#0606400a] flex flex-col  items-center xl:items-start border-2 w-[280px] xs:w-[370px] max-h-[308px] bg-white p-7  shadow-[0_30px_50px_0px_rgba(3,3,37,0.04)]">
          <div className=" w-[70px] h-[70px] mb-12 bg-section1-bg rounded-xl flex justify-center items-center">
            <img src={calendar} />
          </div>
          <header className="md:text-2xl mb-3 text-primary font-medium	">
            Schedule appointment
          </header>
          <p className="text-base text-center xl:text-left text-paragraph ">
            When you have important information to pass onto your people, text
            messaging can be a great way to do it.
          </p>
        </section>
        <section className="rounded-xl border-[#0606400a] flex flex-col items-center xl:items-start border-2 w-[280px] xs:w-[370px] max-h-[308px] bg-white p-7">
          <div className=" w-[70px] h-[70px] mb-12 bg-section1-bg rounded-xl flex justify-center items-center">
            <img src={statistics} />
          </div>

          <header className="md:text-2xl mb-3 text-primary font-medium	">
            Grow together
          </header>
          <p className="md:text-base text-center xl:text-left text-paragraph max-w-[280px]">
            Texting can sometimes come across as an impersonal way to
            communicate, it can be highly beneficial.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Proccess;
