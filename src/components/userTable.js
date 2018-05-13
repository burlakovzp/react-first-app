import React from 'react';

import { Header, Image, Table } from 'semantic-ui-react';

function UsersTable (props) {

    return (
        <Table basic='very' celled color="black">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>User</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Company</Table.HeaderCell>
                    <Table.HeaderCell>Phone</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {props.data.map((user) => {
                    return (
                        <Table.Row key={user.id}>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src={user.avatar} rounded />
                                    <Header.Content>
                                        {user.first_name} {user.last_name}
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user.company}</Table.Cell>
                            <Table.Cell>{user.phone}</Table.Cell>
                        </Table.Row>
                    );
                }
                )}
            </Table.Body>
        </Table>
    )
   
}

export default UsersTable;
