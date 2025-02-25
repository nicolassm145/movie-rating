export interface ActorDetails {
    id: number;
    name: string;
    biography: string;
    birthday: string;
    deathday: string | null;
    place_of_birth: string;
    profile_path: string | null;
  }
  
  export interface MovieCredit {
    id: number;
    credit_id: string;
    title: string;
    job?: string;
    character: string;
    poster_path: string | null;
    release_date: string;
    media_type: string;
  }
  