function TwoTeamCard(props: any) {
  return (
    <div className="w-2/3 grid bg-black py-10 rounded-2xl" data-aos="fade-up">
      <div className="px-10 ">
            <div className="text-center text-3xl font-bold">Software Developer</div>
        <div className="flex flex-row items-center justify-around">
          <div className="justify-items-center w-1/2">
            <img
              src={props.image1}
              className="rounded-full w-1/2"
              alt="No Image Found"
            />
            <div className="text-center text-2xl">{props.name1}</div>
          </div>
          <div className="justify-items-center w-1/2">
            <img
              src={props.image2}
              className="rounded-full w-1/2"
              alt="No Image Found"
            />
            <div className="text-center text-2xl">{props.name2}</div>
          </div>
        </div>
        <div className="w-5/6 justify-self-center text-center mt-10">
          {props.description}
        </div>
      </div>
    </div>
  );
}

export default TwoTeamCard;
