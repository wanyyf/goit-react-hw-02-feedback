import Notiflix from 'notiflix';

const Notification = ({ message }) => {
  return (
    <>
      {' '}
      {message} {Notiflix.Notify.warning(message)}
    </>
  );
};

export default Notification;
