export interface DbEvent {
  id: string;
  title: string;
  post: string;
  createdAt: Date;
  edited: boolean;
  updatedAt?: Date;
  imgURl?: string;
  likes?: number;
  courseParentId?: string;
}