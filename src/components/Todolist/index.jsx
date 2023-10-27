import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
} from "../../redux/actions/todoActions";
import { Input, Button, Card, List, Alert, DatePicker, Typography  } from "antd";
const { TextArea , Search} = Input;
const { Title } = Typography;

const TodoList = () => {
  const todos = useSelector((state) => {
    return state.TodoReducer.todos;
  });

  const dispatch = useDispatch();
  const [newNote, setNewNote] = useState({ title: "", content: "", date: "" });
  const [newDate, setNewDate] = useState("")
  const [newWarrning, setNewWarrning] = useState({
    isActive: false,
    title: "",
  });

  const handleAddNote = () => {
    if (newNote.content === "" && newNote.title === "") {
      setNewWarrning({
        isActive: true,
        title: "Please input note before press add !!!",
      });
      return;
    }
    if (newNote.content === "") {
      setNewWarrning({
        isActive: true,
        title: "Please input note content !!!",
      });
      return;
    }
    if (newNote.title === "") {
      setNewWarrning({ isActive: true, title: "Please input note title !!!" });
      return;
    }

    if (newDate === "") {
      setNewWarrning({ isActive: true, title: "Please pick note date !!!" });
      return;
    }

    if (newNote) {
      dispatch(addTodo(newNote));
      setNewNote({ title: "", content: "", date: newDate });
      setNewWarrning({ isActive: false, title: "" });
    }
  };
  const handleResetNoteInput = () => {
    setNewNote({ title: "", content: "" });
    setNewWarrning({ isActive: false, title: "" });
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const onChangeDate = (date, dateString) => {
    // let newDate = dateString;
    setNewDate(dateString)
    setNewNote({
      ...newNote,
      date: dateString,
    });
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        {newWarrning.isActive === true && (
          <Alert message={newWarrning.title} type="warning" />
        )}

        <DatePicker onChange={onChangeDate} />

        <Input
          style={{
            marginTop: 10,
          }}
          type="text"
          value={newNote.title}
          onChange={(e) =>
            setNewNote({
              ...newNote,
              title: e.target.value,
            })
          }
          placeholder="Add Note Title"
        />
        <TextArea
          style={{
            marginTop: 10,
          }}
          rows={4}
          value={newNote.content}
          placeholder="Add Note Content"
          onChange={(e) =>
            setNewNote({
              ...newNote,
              content: e.target.value,
            })
          }
        />
        <div
          style={{
            marginTop: 10,
          }}
        >
          <Button
            style={{ backgroundColor: "#86A789" }}
            type="primary"
            onClick={handleAddNote}
          >
            Add
          </Button>
          <Button
            style={{ marginLeft: 15, backgroundColor: "#86A789" }}
            type="primary"
            onClick={handleResetNoteInput}
          >
            Reset
          </Button>
        </div>
      </div>
     

      <List
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={todos}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.text.date}>
              <Title level={4}>{item.text.title}</Title>

              {item.text.content}
            </Card>
            <Button
              style={{ width: "100%" }}
              danger
              type="primary"
              onClick={() => handleDeleteTodo(item.id)}
            >
              Delete
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
