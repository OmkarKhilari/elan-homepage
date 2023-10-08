function Pictures(props) {
  return (
    <>
      {props.details.map((value) => (
        <div className="pic-container">
            <img src={value.img} height={144} className="pic" alt="" />
        </div>
      ))}
    </>
  );
}

export default Pictures;
