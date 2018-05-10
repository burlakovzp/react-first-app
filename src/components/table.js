import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Header,
    Image,
    Table
} from 'semantic-ui-react';

const users = [{
    "id": 1,
    "first_name": "Anthiathia",
    "last_name": "Geggie",
    "email": "ageggie0@nba.com",
    "company_title": "Mydeo",
    "avatar": "https://robohash.org/rerumexplicabout.bmp?size=50x50&set=set1"
}, {
    "id": 2,
    "first_name": "Gothart",
    "last_name": "Corlett",
    "email": "gcorlett1@weibo.com",
    "company_title": "Wikizz",
    "avatar": "https://robohash.org/oditassumendavoluptatum.png?size=50x50&set=set1"
}, {
    "id": 3,
    "first_name": "Alvera",
    "last_name": "Treadgall",
    "email": "atreadgall2@alexa.com",
    "company_title": "Thoughtstorm",
    "avatar": "https://robohash.org/recusandaeesteos.bmp?size=50x50&set=set1"
}, {
    "id": 4,
    "first_name": "Amii",
    "last_name": "Gately",
    "email": "agately3@canalblog.com",
    "company_title": "Wikizz",
    "avatar": "https://robohash.org/solutanecessitatibusut.jpg?size=50x50&set=set1"
}];

const UsersTable = () => (
    <Table basic='very' celled color="black">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>User</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {users.map((user) => {
                return (
                    <Table.Row key={user.id}>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src={user.avatar} rounded size='mini' />
                                <Header.Content>
                                    {user.first_name} {user.last_name}
                                    <Header.Subheader>{user.company_title}</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                    </Table.Row>
                    );
                }
            )}
        </Table.Body>
    </Table>
)

export default UsersTable;
