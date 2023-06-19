// import React from 'react';
// import { connect } from 'react-redux';
// import { ActionCreators as UndoActionCreators } from 'redux-undo';

// const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
//   <p>
//     <button onClick={onUndo} disabled={!canUndo}>
//       Undo
//     </button>
//     <button onClick={onRedo} disabled={!canRedo}>
//       Redo
//     </button>
//   </p>
// );

// const mapStateToProps = (state) => {
//   return {
//     canUndo: state.form.past.length > 0,
//     canRedo: state.form.future.length > 0,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onUndo: () => dispatch(UndoActionCreators.undo()),
//     onRedo: () => dispatch(UndoActionCreators.redo()),
//   };
// };

// const UndoRedoContainer = connect(mapStateToProps, mapDispatchToProps)(UndoRedo);

// export default UndoRedoContainer;
