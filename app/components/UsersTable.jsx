"use client"
import {
  Table,
  Button,
  Chip,

} from "@heroui/react";

const UsersTable = ({users}) => {
    return (
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Users table">
              <Table.Header>
                <Table.Column isRowHeader>NAME</Table.Column>
                <Table.Column>EMAIL</Table.Column>
                <Table.Column>ROLE</Table.Column>
                <Table.Column>ACTIONS</Table.Column>
              </Table.Header>
              <Table.Body>
                {users.map((user) => (
                  <Table.Row key={user._id}>
                    <Table.Cell  className="font-medium">{user.name}</Table.Cell>
                    <Table.Cell className="text-default-500">{user.email}</Table.Cell>
                    <Table.Cell>
                      {user.role ? (
                        <Chip size="sm" variant="soft" color="accent">
                          {user.role}
                        </Chip>
                      ) : (
                        <span className="text-default-400 text-sm">—</span>
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-2">
                        {/* READ ONE + UPDATE */}
                        <Button
                          size="sm"
                          variant="secondary"
                          
                        >
                          Edit
                        </Button>
                        {/* DELETE */}
                        <Button
                          size="sm"
                          variant="danger"
                          
                        >
                          Delete
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
    );
};

export default UsersTable;