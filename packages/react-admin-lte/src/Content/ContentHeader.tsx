import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  className?: string;
  title?: string;
  description?: string;
};

const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

const ContentHeader: React.StatelessComponent<Props> = ({
  className,
  title,
  description,
  children,
}) => {
  const classes = {
    'content-header': true,
  };

  return (
    <div className={classNames(className, classes)}>
      <h1>
        {title}
        <small>{description}</small>
      </h1>
      {children}
    </div>
  );
};

ContentHeader.propTypes = propTypes;

export default ContentHeader;
