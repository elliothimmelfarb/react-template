import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';
import IntroductionArea from './IntroductionArea';
import TaleListArea from './TaleListArea';

const HomePage = ({ editTale, removeTale, tales }) =>
  (<div className="home-page">
    <IntroductionArea />
    <TaleListArea
      editTale={editTale}
      removeTale={removeTale}
      tales={tales}
    />
  </div>);


const mapStateToProps = state => ({
  tales: state.tales,
});

const mapDispatchToProps = dispatch => ({
  removeTale: (taleId) => {
    dispatch(Actions.removeTale(taleId));
  },
  editTale: (newTale) => {
    dispatch(Actions.editTale(newTale));
  },
});

HomePage.propTypes = {
  editTale: PropTypes.func.isRequired,
  removeTale: PropTypes.func.isRequired,
  tales: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
