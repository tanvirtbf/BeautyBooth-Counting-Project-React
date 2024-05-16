const Currency = ({setCurrency}) => {
  return (
    <div>
      <select className="select" onChange={(e)=> setCurrency(e.target.value)}>
        <option value="bd">BD</option>
        <option value="qa">QA</option>
      </select>
    </div>
  );
};

export default Currency;
