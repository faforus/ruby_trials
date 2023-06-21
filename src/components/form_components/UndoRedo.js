import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div className='space-x-2'>
    <button
      className='p-4 bg-orange-400 disabled:bg-gray-400 hover:bg-orange-500 rounded-xl shadow-md text-white font-semibold tracking-widest'
      onClick={onUndo}
      disabled={!canUndo}
    >
      Undo
    </button>
    <button
      className='p-4 bg-orange-400 disabled:bg-gray-400 hover:bg-orange-500 rounded-xl shadow-md text-white font-semibold tracking-widest'
      onClick={onRedo}
      disabled={!canRedo}
    >
      Redo
    </button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    canUndo: state.form.past.length > 0,
    canRedo: state.form.future.length > 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);
