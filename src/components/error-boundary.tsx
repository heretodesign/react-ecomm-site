import PropTypes from 'prop-types';
import React, { ErrorInfo } from 'react';
import { Panel, PanelBody, PanelHeading } from './panel';

type ErrorBoundaryProps = {
  children: React.ReactNode;
  onError?: () => void;
};

type ErrorBoundaryState = {
  state: {
    hasError: false
  }
};

/**
 * `ErrorBoundary` catches error in component tree.
 *
 * @see https://reactjs.org/docs/error-boundaries.html
 */
export class ErrorBoundary extends React.Component <ErrorBoundaryProps>{
  state = {
    hasError: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState(
      {
        hasError: true,
      },
      () => {
        console.group(`Error caught in ErrorBoundary`);
        console.error(error);
        console.error(errorInfo);
        console.groupEnd();

        const { onError } = this.props;
        if (onError) {
          onError();
        }
      }
    );
  }

  render() {
    return this.state.hasError ? (
      <Panel color="danger">
        <PanelHeading>Error</PanelHeading>
        <PanelBody>Something goes wrong.</PanelBody>
      </Panel>
    ) : (
      <>{this.props.children}</>
    );
  }
}
