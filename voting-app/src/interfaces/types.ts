export interface Card {
    name: string;
    description: string;
    category: string;
    picture: string;
    dateDescription:string;
    lastUpdated: string;
    votes: {
        positive: number;
        negative: number;
    };
}

export interface RootState {
    voting: {
      data: Card[];
    };
  }

  export enum FieldType {
    Small = 500,
    Medium =  768,
    Large = 1100,
  }
  