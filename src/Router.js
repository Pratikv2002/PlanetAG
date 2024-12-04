import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homelayout from './Layout/Homelayout';
import ITAssets from './Pages/ITAssets/ITAssets';
import ManageAppContent from './Pages/ManageAppContent/ManageAppContent';
import General from './Pages/General/General';
import EmailTemplates from './Pages/EmailTemplates/EmailTemplates';
import CustomSchemaManagement from './Pages/CustomSchemaManagement/CustomSchemaManagement';
import ManageNativeUser from './Pages/ManageNativeUser/ManageNativeUser';
import ManageAdminRoles from './Pages/ManageAdminRoles/ManageAdminRoles';
import SignIn from './Pages/SignIn/SignIn';
import ThemeSelector from './Pages/ThemeSelector/ThemeSelector';
export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/application/it-asset" element={<Homelayout Page={<ITAssets/>} />} />
        <Route path="/application/manage-app-content" element={<Homelayout Page={<ManageAppContent/>} />} />
        <Route path="/settings/general" element={<Homelayout Page={<General/>} />} />
        <Route path="/settings/email-templates" element={<Homelayout Page={<EmailTemplates/>} />} />
        <Route path="/settings/custom-schema" element={<Homelayout Page={<CustomSchemaManagement/>} />} />
        <Route path="/settings/manage-native-user" element={<Homelayout Page={<ManageNativeUser/>} />} />
        <Route path="/settings/manage-admin-roles" element={<Homelayout Page={<ManageAdminRoles/>} />} />
        <Route path="/settings/theme" element={<Homelayout Page={<ThemeSelector/>} />} />
        <Route path="/sign-in" element={<SignIn/>} />
      </Routes>
    </div>
  );
}
