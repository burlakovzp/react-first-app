import React from 'react';

import { Input } from 'semantic-ui-react';


export default ({ term, data, update }) => {

    const dataSearch = e => {
        const value = e.target.value.toLowerCase();
        const filter = data.filter(user => {
       
        return user.first_name.toLowerCase().includes(value) || 
                user.last_name.toLowerCase().includes(value) ||
                user.company.toLowerCase().includes(value) ||
                user.email.toLowerCase().includes(value) ||
                user.phone.toLowerCase().includes(value)
        });

        update({
            data: filter,
            term: value
        });

    };

    if (!data) { return (<p>Loading...</p>); }
    return (
        <div className="searchbar form-group">
            <Input
                value={term}
                type="text"
                className="form-control"
                placeholder="Search user"
                onChange={dataSearch}
            />
        </div>
    );
};

