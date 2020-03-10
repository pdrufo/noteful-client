export const findFolder = (folders=[], folderId) =>
  folders.find(folder => folder.folderId === folderId)

export const findNote = (notes=[], noteid) =>
  notes.find(note => note.noteid+''=== noteid)

export const getNotesForFolder = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folderId+'' === folderId)
)

export const countNotesForFolder = (notes=[], folderId) =>
  notes.filter(note => note.folderId === folderId).length
