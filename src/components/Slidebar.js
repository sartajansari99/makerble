import React from 'react';
import './Styles/Slidebar.css'; // Add sidebar-specific styles

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <section className="contacts">
                <h3>Contacts</h3>
                <ul>
                    <li>Henry</li>
                    <li>Claire</li>
                    <li>sjumanjit</li>
                </ul>
            </section>

            <section className="projects">
                <h3>Projects</h3>
                <ul>
                    <li>Project A</li>
                    <li>Test 5146</li>
                    <li>Training Project</li>
                </ul>
            </section>

            <section className="albums">
                <h3>Albums</h3>
                <ul>
                    <li>2021 Portfolio</li>
                    <li>All Partners</li>
                </ul>
            </section>
        </aside>
    );
};

export default Sidebar;
