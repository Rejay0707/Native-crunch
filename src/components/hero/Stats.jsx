const Stats = () => {
  return (
    <div className="flex gap-10 mt-10 flex-wrap">
      <div>
        <h3 className="text-3xl font-bold text-[#2E1E13]">100%</h3>
        <p className="text-xs uppercase tracking-wide text-gray-500">Vegan</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-[#2E1E13]">0g</h3>
        <p className="text-xs uppercase tracking-wide text-gray-500">
          Refined Sugar
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-[#2E1E13]">12+</h3>
        <p className="text-xs uppercase tracking-wide text-gray-500">
          Crafted Bars
        </p>
      </div>
    </div>
  );
};

export default Stats;
