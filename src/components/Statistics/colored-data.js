import statisticalData from '../../data/statistics.json';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const coloredStatisticalData = statisticalData.reduce((acc, item) => {
  item.color = getRandomColor();
  acc.push(item);
  return acc;
}, []);

export default coloredStatisticalData;
