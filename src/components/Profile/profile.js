import React, { useState } from "react";
import { useSelector, connect, shallowEqual } from "react-redux";
import { changeName, toggleCheckbox } from "../../store/profile/actions";
import { selectName } from "../../store/profile/selector";
import {Card} from "react-bootstrap";

export const Profile = ({checkboxValue, setName, changeChecked}) => {
  const name = useSelector(selectName, shallowEqual);
  const [value, setValue] = useState(name);

  const handleChangeText = (e) => {
    setValue(e.target.value);
  };

  const handleChange = () => {
    changeChecked();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(value);
  };

  return (
    <>
      <br />
      <Card border="info" style={{ width: '18rem' }}>
        <Card.Header>Мой профиль</Card.Header>
        <Card.Body>
          <Card.Title>{value}</Card.Title>
          <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChangeText} />
            <input type="submit" />
          </form>
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.profile.name,
  checkboxValue: state.profile.checkbox,
});

const mapDispatchToProps = (dispatch) => ({
  changeChecked: () => dispatch(toggleCheckbox),
  setName: (newName) => dispatch(changeName(newName)),
});

export const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
