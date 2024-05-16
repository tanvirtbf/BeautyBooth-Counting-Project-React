const Currency = ({setCurrency}) => {
  return (
    <div>
      <select className="select" onChange={(e)=> setCurrency(e.target.value)}>
        <option value="bdt">BDT</option>
        <option value="qta">QTA</option>
      </select>
    </div>
  );
};

export default Currency;
