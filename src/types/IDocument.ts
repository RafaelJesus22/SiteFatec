import { StorageReference } from "firebase/storage";

export interface DbDocument {
  id: string;
  name: string;
  path: string;
  url: string;
}

export interface IFilePath {
  name: string;
  path: string;
}

export interface DbDirectoryPath {
  id: string;
  name: string;
  path: string;
}

export interface StorageFile {
  name: string;
  file: StorageReference;
  url: string;
}

export interface FileListItem  {
  file: StorageFile;
  category: string;
}