import classNames from 'classnames/bind';
import styles from './Square.module.scss';

const cx = classNames.bind(styles);

function Square() {
  return <button className={cx('square')}></button>;
}

export default Square;
