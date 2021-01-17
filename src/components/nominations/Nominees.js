import Styles from "./nominee.module.scss";

const Nominees = ({ nominees, removeNominee }) => {
  return (
    <>
      {!nominees.length < 1 ? (
        <div className={Styles.container}>
          <div>
            <p>Your Nominees!</p>
          </div>
          {nominees.map((nominee) => (
            <div className={Styles.nominee} key={nominee.imdbID}>
              <div>{nominee.Title}</div>
              <button onClick={() => removeNominee(nominee)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Nominees;
