import "./index.css"

const EachOrganDetail = (props) => {
  const { detail } = props;
  const { date, imageUrl, organ, status } = detail;
  
  const InsideColor = status === "bad"? "bad": "good"


  return (
    <div className="EachOrganDetailContainer">
      <div className="ImgAndTitle">
        <img src={imageUrl} alt={organ} />
        <p>{organ}</p>
      </div>
      <p className="EachDate">{date}</p> 
       <div className="MainLine"><div className={`Inside${InsideColor}`}></div></div>
    </div>
  );
};

export default EachOrganDetail;
