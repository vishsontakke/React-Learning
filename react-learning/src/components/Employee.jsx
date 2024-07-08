import axios from "axios";
import React, { useEffect, useState } from "react";
import './Employee.css';

const Employee = () => {
    const [employee, setEmployee] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const reposnse = await axios.get('http://127.0.0.1:8000/api/v1/employee/');
                setEmployee(reposnse.data);
                setIsLoading(false);
                console.log(reposnse.data);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        }

        setTimeout(()=>{
            fetchEmployee();
        },2000);
       
    }, []);
    return (
        <>
            <div className="container">
                {isLoading ?
                    <table className="table">
                        <thead>
                            <tr className="bg-primary">
                                <th style={{ textAlign: 'center' }}>Id</th>
                                <th style={{ textAlign: 'center' }}>Name</th>
                                <th colSpan="1" style={{ textAlign: 'center' }}>Email</th>
                                <th colSpan="1" style={{ textAlign: 'center' }}>Role</th>
                                <th colSpan="1" style={{ textAlign: 'center' }}>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="skeleton-loader">
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                            </tr>
                            <tr className="skeleton-loader">
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                            </tr>
                            <tr className="skeleton-loader">
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                            </tr>
                            <tr className="skeleton-loader">
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                                <td>
                                    <div className="skeleton-cell"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table> :
                    <table className="table">
                        <thead>
                        <tr className="bg-primary">
                                <th style={{ textAlign: 'center' }}>Id</th>
                                <th style={{ textAlign: 'center' }}>Name</th>
                                <th colSpan="1" style={{ textAlign: 'center' }}>Email</th>
                                <th colSpan="1" style={{ textAlign: 'center' }}>Role</th>
                                <th colSpan="1" style={{ textAlign: 'center' }}>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.map(repo => (
                                <tr key={repo.id}>
                                    <td style={{ textAlign: 'center' }}>{repo.id}</td>
                                    <td style={{ textAlign: 'center' }}>{repo.name}</td>
                                    <td style={{ textAlign: 'center' }}>{repo.email}</td>
                                    <td style={{ textAlign: 'center' }}>{repo.role}</td>
                                    <td style={{ textAlign: 'center' }}>{repo.mobile_no}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </>
    )
}
export default Employee;