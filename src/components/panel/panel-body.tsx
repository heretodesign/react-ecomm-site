import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

type PanelBodyProps = {
  className: React.ReactNode;
  children: JSX.IntrinsicElements['div']
}

export const PanelBody = ({ children, className }: PanelBodyProps) => {
  return <div className={cx('panel-body', className)}>{children}</div>;
};

// PanelBody.propTypes = {
//   className: PropTypes.string,
// };
