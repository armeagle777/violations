import { BsBarChartFill } from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';

import { Link } from 'react-router-dom';

export const jkkTableDefaultColumns = ['company_legal_address', 'company_title', 'id', 'name_am'];

export const menuItems = [
  {
    label: <Link to="/">Գլխավոր</Link>,
    key: '1',
    icon: <BsBarChartFill />,
  },
  {
    label: 'Խախտումներ',
    key: 'sub1',
    icon: <FaTools />,
    children: [
      { label: <Link to="/violations/jkk">ԺԿԿ</Link>, key: '2' },
      { label: <Link to="/violations/eatm">ԵԱՏՄ</Link>, key: '3' },
    ],
  },
];

export const loaderText = 'Բեռնում․․․․';
export const messages = {
  upload: {
    downloadError: 'Փորձեք ավելի ուշs',
  },
  shops: {
    deleteError: 'Ինչ որ բան այնպես չէ',
    editError: 'Չհաջողվեց ղմբագրել',
    editSuccess: 'Հաջողությամբ ղմբագրվեց',
    deleteSuccess: 'Հաջողությամբ հեռացվել է',
  },
};
