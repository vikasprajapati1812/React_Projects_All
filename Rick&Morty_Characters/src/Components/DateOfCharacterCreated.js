const DateOfCharacterCreated = ({ created }) => {
  const characterDate = new Date(created);
  const currentDate = new Date();
  const createdYear = currentDate.getFullYear() - characterDate.getFullYear();
  return <span>Created {createdYear} years ago</span>;
};
export default DateOfCharacterCreated;
