"use client";
import { PlaylistI } from "@/utils/data";
import { Button, FieldInput } from "../ui";
import styles from "./createform.module.css";
import { useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export function CreateForm() {
  const [fields, setFields] = useState<PlaylistI>({
    email: "",
    creator_name: "",
    recipient_name: "",
    title: "",
    url: "",
    theme: 1,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch(`${baseUrl}/playlist/v1/createPlaylist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <FieldInput
        name="email"
        type="email"
        placeholder="Email"
        value={fields.email}
        onChange={handleChange}
      />
      <FieldInput
        name="title"
        placeholder="Title"
        value={fields.title}
        onChange={handleChange}
      />
      <FieldInput
        name="creator_name"
        placeholder="Creator Name"
        value={fields.creator_name}
        onChange={handleChange}
      />
      <FieldInput
        name="recipient_name"
        placeholder="Recipient Name"
        value={fields.recipient_name}
        onChange={handleChange}
      />
      <FieldInput
        name="url"
        type="url"
        placeholder="Link to playlist"
        value={fields.url}
        onChange={handleChange}
      />
      {/* <FieldInput
        name="Playlist theme"
        placeholder="Theme"
        value={fields.theme}
        onChange={handleChange}
      /> */}
      <Button type="submit" intent="tertiary">
        Create Playlist
      </Button>
    </form>
  );
}
