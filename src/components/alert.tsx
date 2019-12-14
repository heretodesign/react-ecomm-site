import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

type AlertProps = {
  /**
   * You're required to specify the color because "default alert" doesn't make too much sense.
   */
  color: 'success' | 'info' | 'warning' | 'danger';
  dismissible?: boolean;
  children: React.ReactNode;
  className?: string,
}

export const Alert = ({ color, children, dismissible, className }: AlertProps) => {
  const [show, setShow] = React.useState(true);

  return show ? (
    <div
      className={cx(
        `alert alert-${color}`,
        dismissible && 'alert-dismissible',
        className
      )}
      role="alert"
    >
      {dismissible && (
        <button
          onClick={() => setShow(false)}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
      {children}
    </div>
  ) : null;
};

// Alert.propTypes = {
  /**
   * You're required to specify the color because "default alert" doesn't make too much sense.
   */
//   color: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
//   dismissible: PropTypes.bool,
//   children: PropTypes.node,
//   className: PropTypes.string,
// };
