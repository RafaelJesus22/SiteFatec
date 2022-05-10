import { IFilePath } from "../types/IDocument";

export const FilePathContants: FilePathContantsProps = {
  index: {
    name: 'Documentos',
    path: '/'
  },
  ads: {
    name: 'Análise e desenvolvimento de sistemas',
    path: '/ads/'
  },
  gcom: {
    name: 'Gestão de comercial',
    path: '/gcom/'
  },
  segInfo: {
    name: 'Segurança da informação',
    path: '/segInfo/'
  },
  cienciaDeDados: {
    name: 'Ciência de dados',
    path: '/cienciaDeDados/'
  },
};

interface FilePathContantsProps {
  index: IFilePath;
  ads: IFilePath;
  gcom: IFilePath;
  segInfo: IFilePath;
  cienciaDeDados: IFilePath;
}