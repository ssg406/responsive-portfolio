import * as Icons from 'react-icons/fa';

const DynamicIcon = ({name, iconClass}) => {
  const IconComponent = Icons[name];

  if(!IconComponent) {
    return <Icons.FaArrowAltCircleRight className={iconClass} />
  }

  return <IconComponent className={iconClass} />
}

export default DynamicIcon