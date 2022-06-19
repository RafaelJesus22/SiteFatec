export interface DbEvent {
  id: string;
  post: string;
  imgURl?: string;
  likes?: number;
  courseParentId?: string;
}