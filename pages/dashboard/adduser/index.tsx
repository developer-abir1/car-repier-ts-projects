import React from 'react';
import DashboarLayout from '../../../components/Dashboard/DashboarLayout';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddUser = () => {
  return (
    <DashboarLayout title="Add User" icon={faPlus}>
      <h1>This is add user</h1>
    </DashboarLayout>
  );
};

export default AddUser;
