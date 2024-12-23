import { NoticeCard } from "./NoticeCard";

export default function Hero(props) {
  return (
    <div>
      {/* greet */}
      <section>
        <div className="">
          <h1 className="uppercase font-bebas font-semibold tracking-wider text-6xl text-black leading-snug">
            Welcome,
          </h1>
          <h1 className="uppercase font-bebas font-semibold tracking-wider text-6xl text-white">
            {props.name}
          </h1>
        </div>
      </section>
      {/* board */}
      <section className="bg-[#151313e2] flex justify-between gap-4 px-1 py-2 rounded-xl mt-6 text-white font-bebas ">
        <div className="flex flex-col items-center justify-start">
          <h1 className="uppercase font-bebas font-semibold tracking-wider text-xl py-2 text-white">
            Top Rated Series
          </h1>
          <div className=" flex flex-col items-center">
            <div className="w-[295px] h-[150px] overflow-hidden rounded-lg hover:h-[200px]  ease-in-out  transition-all z-0">
              <img
                className="-translate-y-12"
                src="../../../public/svgviewer-png-output.png"
                alt=""
              />
            </div>
            <h1 className="text-3xl font-semibold tracking-widest -mt-8 z-20">
              Night Hunter
            </h1>
            <h3 className="text-sm tracking-wide">
              We go live every day from 6 PM to noon !
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div>
            <h1 className="uppercase py-2 font-bebas font-semibold tracking-wider  text-xl text-white">
              choose your best match of series, among all games.
            </h1>
          </div>
          <div className="h-[261px]  overflow-y-scroll">
            <NoticeCard initialColor={"#00AF60"} viaColor={"#B1E9D5"} finalColor={"#00FFA3"} name={"night hunter - r7"} date="06 oct" time="7:00 PM" pool="1650INR" fee="29inr" />
            <NoticeCard initialColor={"#00AF60"} viaColor={"#B1E9D5"} finalColor={"#00FFA3"} name={"smth pls work"} date="06 oct" time="8:00 PM" pool="3000INR" fee="40inr"/>
            <NoticeCard initialColor={"#00AF60"} viaColor={"#B1E9D5"} finalColor={"#00FFA3"} name={"night hunter - r7"} date="07 oct" time="9:00 PM" pool="1650INR" fee="29inr"/>
            <NoticeCard initialColor={"#00AF60"} viaColor={"#B1E9D5"} finalColor={"#00FFA3"} name={"night hunter - r7"} date="07 oct" time="10:00 PM" pool="1650INR" fee="29inr"/>
          </div> 
        </div>
      </section>
    </div>
  );
}
