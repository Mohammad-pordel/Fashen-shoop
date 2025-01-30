import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (text, aclassName) => {
  toast(text, {
    className: `${aclassName}`
  });
};

export default showToast;
