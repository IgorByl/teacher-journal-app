import { InjectionToken } from "@angular/core";

const baseURL: string = "https://app-teacher-journal.herokuapp.com";

export const studentsAPI: InjectionToken<string> = new InjectionToken<string>("UsersAPI");

export const studentsAPIProvider: IStudentsAPIProvider = {
    provide: studentsAPI,
    useValue: baseURL,
};

interface IStudentsAPIProvider {
    provide: InjectionToken<string>;
    useValue: string;
}
