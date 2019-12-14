import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

type PanelFooterProps = {
  // className: React.ReactNode;
  className: JSX.IntrinsicElements['div']
}

export const PanelFooter = ({ className, ...props }: PanelFooterProps) => {
  return <div className={cx('panel-footer', className)}>{...props}</div>;
};

// PanelFooter.propTypes = {
//   className: PropTypes.string,
// };
