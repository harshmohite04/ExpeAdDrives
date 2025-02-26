
function TeamCards(props:any) {
  return (
    <div className="w-2/3 grid bg-black py-10 rounded-2xl" data-aos="fade-up">
      <div className="flex px-10">
        <div className="w-1/3 " data-aos="fade-up-right">
          <img
            src={props.image}
            alt="No Image Found"
            // className="w-100 justify-self-center rounded-4xl"
            className="w-50 justify-self-center rounded-full"
          />
          <div className="text-center text-2xl">{props.name} </div>
          <div className="text-center text-2xl">{props.role} </div>
        </div>
        <div className="w-2/3  py-10 px-5 text-center" data-aos="fade-up-left">
          {props.description}
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
