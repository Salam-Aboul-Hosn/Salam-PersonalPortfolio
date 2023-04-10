import { TypeAnimation } from 'react-type-animation';

const HeaderAnimation = () => {
    return (
      <TypeAnimation
        sequence={[
          'Software Engineer.', 
          1000, 
          'Full Stack Developer.', 
          1000, 
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style = {{color: "rgb(135, 65, 216)"}}
      />
    );
  };

  export default HeaderAnimation;