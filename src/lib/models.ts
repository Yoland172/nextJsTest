//src/lib/models.ts
export interface UserData {
  token: string;
  name: string;
  email: string;
  desiredJobTitle?: string;
  aboutMe?: string;
}
