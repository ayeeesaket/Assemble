import { GradientText } from "../ui/GradientElements/GradientText";

export const NoticeCard = (props) => {
  return (
    <div className="bg-black rounded-2xl mb-2 w-[588px] h-[107px] flex justify-evenly items-center font-bebas px-3 gap-1 ">
      <div className=" w-[141px] h-fit flex flex-col gap-1 ">
        <GradientText
          text={"name"}
          initialColor={props.initialColor}
          viaColor={props.viaColor}
          finalColor={props.finalColor}
          size={"xl"}
        />
        <h1
          className={`font-semibold leading-7 w-[120px] tracking-wide text-3xl`}
        >
          {props.name}
        </h1>
      </div>
      <div className=" w-[100px] flex flex-col justify-center items-center ">
        <GradientText
          text={"Match Date"}
          initialColor={props.initialColor}
          viaColor={props.viaColor}
          finalColor={props.finalColor}
          size={"xl"}
        />
        <Text width="100px" text={props.date} />
      </div>
      <div className=" w-[100px] flex flex-col justify-center items-center ">
        <GradientText
          text={"Start Time"}
          initialColor={props.initialColor}
          viaColor={props.viaColor}
          finalColor={props.finalColor}
          size={"xl"}
        />
        <Text width="100px" text={props.time} />
      </div>
      <div className=" w-[100px] flex flex-col justify-center items-center ">
        <GradientText
          text={"Prize pool"}
          initialColor={props.initialColor}
          viaColor={props.viaColor}
          finalColor={props.finalColor}
          size={"xl"}
        />
        <Text width="100px" text={props.pool} />
      </div>
      <div
        className={` w-[100px] flex flex-col justify-center items-center bg-gradient-to-r from-[${props.initialColor}] via-[${props.viaColor}] to-[${props.finalColor}] rounded-md h-[69px] `}
      >
        <h1
          class={`text-black font-bebas uppercase font-semibold text-xl tracking-wide`}
        >
          Entry price
        </h1>
        <h1
          className={`font-semibold leading-7  tracking-wide text-black text-3xl`}
        >
          {props.fee}
        </h1>
      </div>
    </div>
  );
};
function Text(props) {
  return (
    <h1 className={`font-semibold leading-7  tracking-wide text-3xl`}>
      {props.text}
    </h1>
  );
}
