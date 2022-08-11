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
