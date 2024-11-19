import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Matkul from '../pages/Matkul/Matkul';
import Classes from '../pages/Classes/Classes';
import FormAddClasses from '../pages/Classes/FormAddClasses';
import FormAddMatkul from '../pages/Matkul/FormAddMatkul';
import Siswa from '../pages/Siswa/Siswa';
import FormAddSiswa from '../pages/Siswa/FormAddSiswa';
import ImportSiswa from '../pages/Siswa/ImportSiswa';
import Ujian from '../pages/Ujian/Ujian';
import FormAddUjian from '../pages/Ujian/FormAddUjian';
import ImportUjian from '../pages/Ujian/ImportUjian';
import DetailUjian from '../pages/Ujian/DetailUjian';
import Dashboard from '../pages/Admin/Dashboard';

import Login from '../pages/Login/Login';

const AppRoutes = () => (
    <Router>
        <Routes>
            {/* <Route path="/login" element={<Login />} /> */}

            <Route path="/dashboard" element={
                <AdminLayout>
                    <Dashboard />
                </AdminLayout>
            } />

            <Route path="/kelas-add" element={
                <AdminLayout>
                    <FormAddClasses />
                </AdminLayout>
            } />

            <Route path="/kelas" element={
                <AdminLayout>
                    <Classes />
                </AdminLayout>
            } />

            <Route path="/matkul-add" element={
                <AdminLayout>
                    <FormAddMatkul />
                </AdminLayout>
            } />

            <Route path="/matkul" element={
                <AdminLayout>
                    <Matkul />
                </AdminLayout>
            } />

            <Route path="/siswa-import" element={
                <AdminLayout>
                    <ImportSiswa />
                </AdminLayout>
            } />

            <Route path="/siswa-add" element={
                <AdminLayout>
                    <FormAddSiswa />
                </AdminLayout>
            } />


            <Route path="/siswa" element={
                <AdminLayout>
                    <Siswa />
                </AdminLayout>
            } />

            <Route path="/ujian-detail" element={
                <AdminLayout>
                    <DetailUjian />
                </AdminLayout>
            } />


            <Route path="/ujian-import" element={
                <AdminLayout>
                    <ImportUjian />
                </AdminLayout>
            } />

            <Route path="/ujian-add" element={
                <AdminLayout>
                    <FormAddUjian />
                </AdminLayout>
            } />

            <Route path="/ujian" element={
                <AdminLayout>
                    <Ujian />
                </AdminLayout>
            } />
            <Route path="/" element={
                <Login />
            } />
        </Routes>
    </Router>
);

export default AppRoutes;
