import React from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';
import { getDurationDisplayString } from '../../utils/value-format-utils';

const propTypes = {
  value: PropTypes.number,
  format: PropTypes.string,
  containerClassName: PropTypes.string,
};

class DurationFormatter extends React.Component {

  render() {
    let { value, containerClassName, format } = this.props;
    let classname = cn('dtable-ui cell-formatter-container duration-formatter', containerClassName);

    return (
      <div className={classname}>{getDurationDisplayString(value, format)}</div>
    );
  }
}

DurationFormatter.propTypes = propTypes;

export default DurationFormatter;
