import PropTypes from 'prop-types';

// ({text}) is props, instead of writing "props.text" to call the props,
// this method helps to write just waht is inside of props.
function Header({ text, bgColor, textColor }) {
  const headerSytles = { backgroundColor: bgColor, color: textColor };

  return (
    <header style={headerSytles}>
      <div>
        <h2 className="container">{text}</h2>
      </div>
    </header>
  );
}

// So now, if nothing is explicitly passed into the header, if no text are B color is passed in, then it's going to use these default props. 
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',

};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
