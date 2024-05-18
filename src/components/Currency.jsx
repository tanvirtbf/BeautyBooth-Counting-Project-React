const Currency = ({setCurrency}) => {
  return (
    <div style={{display:'flex',gap:'37px',alignItems:'center'}}>
      <span style={{display:'block'}}>Change Currency </span>
      <select className="select" onChange={(e)=> setCurrency(e.target.value)}>
        <option value="bd">BD</option>
        <option value="qa">QA</option>
      </select>
    </div>
  );
};

export default Currency;
