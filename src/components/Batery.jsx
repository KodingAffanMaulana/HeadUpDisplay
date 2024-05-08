/* eslint-disable react/prop-types */
// import GaugeBg from '../assets/gauge-bg.png';

const gaugeWidth = 100;
const gaugeHeight = 30;
const gaugeContentWidth = gaugeWidth - 12;
const gaugeBarsNb = 10;
const gaugeBarWidth = gaugeContentWidth / gaugeBarsNb;
const gaugeBarRadius = 8;

const styles = {
  container: {
    position: 'relative',
    width: `${gaugeWidth}px`,
    height: `${gaugeHeight}px`,
  },
  barsContainer: {
    width: `${gaugeWidth}px`,
    height: `${gaugeHeight}px`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '1rem', // rounded-xl equivalent
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'white', // default color
  },
  barContainer: {
    width: `${gaugeBarWidth}px`,
    height: `${gaugeHeight - 10}px`,
    paddingLeft: '2px',
    paddingRight: '2px',
  },
  bar: {
    width: `${gaugeBarWidth * 2}px`,
    height: '100%',
    zIndex: 1,
  },
  barFirst: {
    borderTopLeftRadius: `${gaugeBarRadius}px`,
    borderBottomLeftRadius: `${gaugeBarRadius}px`,
  },
  barLast: {
    borderTopRightRadius: `${gaugeBarRadius}px`,
    borderBottomRightRadius: `${gaugeBarRadius}px`,
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
  },
  barText: {
    marginTop: `5px`,
  },
  red: {
    color: 'red',
  },
  green: {
    color: '#00FF47',
  },
};

const Battery = ({ percentage }) => {
  const percent10 = Math.round(percentage / gaugeBarsNb);
  const percentageArray = [...Array(percent10).keys()];

  const getColor = (percent) => {
    if (percent < 30) {
      return 'red';
    } else if (percent < 50) {
      return 'yellow';
    } else {
      return 'white';
    }
  };

  return (
    <>
      <div className="flex gap-3">
        {/* <img src={GaugeBg} style={styles.bg} alt="BatteryBG" /> */}
        <div
          className="border-2 rounded-xl"
          style={{ ...styles.barsContainer, borderColor: getColor(percentage) }}>
          {percentageArray.map((ele, index) => (
            <div key={index} style={styles.barContainer}>
              <div
                style={{
                  ...styles.bar,
                  backgroundColor: getColor(percentage),
                  ...(index === 0 ? styles.barFirst : {}),
                  ...(index === gaugeBarsNb - 1 ? styles.barLast : {}),
                }}
              />
            </div>
          ))}
        </div>
        <div style={styles.barText}>
          {percentage < 30 ? (
            <span style={styles.red}> {percentage}% </span>
          ) : (
            <span style={styles.green}> {percentage}% </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Battery;
