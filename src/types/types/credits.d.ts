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
  
  export interface PersonCombinedCredits {
    id: number;
    cast: MovieCredit[];
    crew: MovieCredit[];
  }
  
  export interface PersonDetails{ 
    birthday: string;
    known_for_department: string;
    deathday: string | null;
    id: number;
    name: string;
    also_known_as: string[];
    profile_path: string | null;
    biography: string;
    place_of_birth: string;
  }