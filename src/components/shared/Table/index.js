import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

export default function Table(props) {
  const { className, children, ...rest } = props;

  return (
    <table className={cx('Table', className)} {...rest}>
      {children}
    </table>
  );
}

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const Thead = (props) => {
  const { className, children: theadItems, ...rest } = props;
  return (
    <thead className={className} {...rest}>
      <Tr>
        {theadItems.map((item, index) => (
          <Th key={index}>{item}</Th>
        ))}
      </Tr>
    </thead>
  );
};

Thead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const Tbody = (props) => {
  const { className, children, ...rest } = props;
  return (
    <tbody className={className} {...rest}>
      {children}
    </tbody>
  );
};

Tbody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const TbodyRow = (props) => {
  const { className, children: trItems, rowIndex, ...rest } = props;
  return (
    <Tr className={className} {...rest}>
      {trItems.map((tdItem, index) => (
        <Td key={`${rowIndex}th-row-${index}`}>{tdItem}</Td>
      ))}
    </Tr>
  );
};

TbodyRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  rowIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const Tr = (props) => {
  const { className, children, ...rest } = props;
  return (
    <tr className={cx(['Tr', className])} {...rest}>
      {children}
    </tr>
  );
};

Tr.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const Th = (props) => {
  const { className, children, ...rest } = props;
  return (
    <th className={cx(['Tr__Th', className])} {...rest}>
      {children}
    </th>
  );
};

Th.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const Td = (props) => {
  const { className, children, ...rest } = props;
  return (
    <td className={cx(['Tr__Td', className])} {...rest}>
      {children}
    </td>
  );
};

Td.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
