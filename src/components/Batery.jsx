/* eslint-disable react/prop-types */

const gaugeWidth = 80;
let gaugeHeight = 30; // Initialize gaugeHeight

// Untuk menyesuaikan gaugeHeight menjadi 20 saat digunakan di perangkat mobile
if (window.innerWidth <= 667) {
  // Angka 640 di sini dapat disesuaikan sesuai dengan breakpoint untuk perangkat mobile
  gaugeHeight = 24;
}

const gaugeContentWidth = gaugeWidth - 10;
const gaugeBarsNb = 10;
const gaugeBarWidth = gaugeContentWidth / gaugeBarsNb;
const gaugeBarRadius = 9;

const styles = {
  container: {
    position: 'relative',
    width: `${gaugeWidth}px`,
    height: `${gaugeHeight}px`,
  },
  barsContainer: {
    width: `${gaugeWidth}px`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '12px', // rounded-xl equivalent
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'white', // default color
  },
  barContainer: {
    width: `${gaugeBarWidth}px`,
    height: `${gaugeHeight}px`,
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
      <div className="flex gap-1 lg:gap-3">
        <div
          className="border-2 rounded-xl "
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
        <div className="flex items-center">
          {percentage < 30 ? (
            <span className="text-red-500 animate-pulse"> {percentage}% </span>
          ) : percentage < 50 ? (
            <span className="text-yellow-200"> {percentage}% </span>
          ) : (
            <span className="text-green-500"> {percentage}% </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Battery;
