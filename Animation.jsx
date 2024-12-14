import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '1 Lakh Plus Happy Customers Served',
        5000, // wait 1s before replacing "Mice" with "Hamsters"
        // '1 Lakh Plus Happy Customers Served',
        // 1000,
        // '1 Lakh Plus Happy Customers Served',
        // 1000,
        // '1 Lakh Plus Happy Customers Served',
        // 1000
      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}
    />
  );
};

export default Animation ;