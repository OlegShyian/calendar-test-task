import removeButton from '../../resources/images/removeButton.svg';
import defaultUserIcon from '../../resources/images/defaultUserIcon.svg';
import './styles.module.scss';

const icons = {
  remove: { src: removeButton },
  defaultUser: { src: defaultUserIcon },
};

export const IconImage = ({ icon, ...props }) => {
  const iconRecord = icons[icon];
  return <img src={iconRecord.src} {...props} alt='' />;
};
