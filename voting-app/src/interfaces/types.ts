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