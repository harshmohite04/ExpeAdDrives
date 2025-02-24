function PutData() {
  return (
    <div className="bg-zinc-800 h-screen">
      <div className="text-4xl text-white">Ad Analytics Parameters</div>
      <div className="bg-zinc-600 px-10 py-5 w-2/3 mx-10 ">
        <div className="text-white text-2xl">Vehicle Performance</div>
        <input
          type="number"
          name=""
          id=""
          placeholder="total_distance_covered_per_vehicle_monthly"
          className="border-2 text-white placeholder-white px-10"
        />
        <input
          type="number"
          name=""
          id=""
          placeholder="total_distance_covered_per_vehicle_daily"
          className="border-2 text-white placeholder-white px-10"
        />
        <div className="bg-zinc-500">
          <div className="text-xl">Route Patterns Per Vehicle</div>
          <input
            type="text"
            name=""
            id=""
            placeholder="total_distance_covered_per_vehicle_daily"
            className="border-2 text-white placeholder-white"
          />
        </div>
      </div>
    </div>
  );
}

export default PutData;
