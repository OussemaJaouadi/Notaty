const baseUrl = "http://localhost:3000";
async function addNote(noteData) {
    const response = await fetch(`${baseUrl}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringfy(noteData)
    });
    return response.json();
}
async function updateNote(noteData) {
    const response = await fetch(`${baseUrl}/notes`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringfy(noteData)
    });
    return response.json();
}
async function deleteNote(noteID) {
    const response = await fetch(`${baseUrl}/notes/${noteID}`, {
        method: "DELETE"
    });
    return response.json();
}
async function getNoteById(noteID) {
    const response = await fetch(`${baseUrl}/notes/${noteID}`, {
        method: "GET",
    });
    return response.json();
}
async function getNotes(noteTitle) {
    let url = `${baseUrl}/notes`;
    if (noteTitle) {
        url += `?title=${noteTitle}`;
    };
    const response = await fetch(url, {
        method: "GET"
    });
    return response.json();
}