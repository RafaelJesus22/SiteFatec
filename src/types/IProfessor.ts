
export interface DbProffessor {
  name: string;
  id?: string;
  title?: string;
  imgUrl: string;
  email: string;
  classes: Array<{ label: string, value: string }>;
  lattes: string;
  linkedin?: string;
  github?: string;
  whatsapp?: string;
}