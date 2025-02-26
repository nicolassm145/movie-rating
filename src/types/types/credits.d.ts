export interface CastMember {
    id: number;
    name: string;
    character: string;
    profile_path?: string;
    credit_id: string;
  }
  
  export interface CrewMember {
    id: number;
    name: string;
    job: string;
    profile_path?: string;
    credit_id: string;
  }
  
  export interface Credits {
    cast: CastMember[];
    crew: CrewMember[];
  }