import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    { id: 0, name: 'Sample VueJS3 App', summary: 'Vue3 is a popular JavaScript framework that comes packed with many advanced features...', description: '', projectLink: 'https://baallou-hicham.github.io/vu3-cli-api/', tags: [Tag.VUE, Tag.JAVASCRIPT, Tag.TYPESCRIPT], pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'] },
    { id: 1, name: 'Sample Angular App', summary: 'Fullstack web app developed using Angular and Node.JS', description: '', projectLink: '//www.github.com', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.JAVASCRIPT], pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'] },
    { id: 2, name: 'Sample ReactJS App', summary: 'Web API Project that was develped for a calss project.', description: '', projectLink: '//www.github.com', tags: [Tag.LARAVEL, Tag.ASPNET], pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'] },
    { id: 3, name: 'Sample LARAVEL API SERVER', summary: 'LARAVEL API project that analyzes stock market data.', description: '', projectLink: 'https://github.com/baallou-hicham/laravel_api_server', tags: [Tag.REACT, Tag.LARAVEL, Tag.ASPNET], pictures: ['assets/Laravel_Fortfy.png', 'assets/Throttle.png', 'assets/PHP_Doc.png', 'assets/Unit_Testing.png', 'assets/Laravel_Mail.png', 'assets/Event_Listner.png', 'assets/Ressource.png', 'assets/ElequentORM.png', 'assets/Controller.png', 'assets/api_router.png', 'assets/Middleware.png'] },
    { id: 4, name: 'Sample Filament App', summary: 'Develped a chrome extension that tracks the prices of furniture.', description: '', projectLink: '//www.github.com', tags: [Tag.JAVASCRIPT], pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'] },
    { id: 5, name: 'Mobile App', summary: 'Mobile app developed in java that tracks the departure and arrival of trains.', description: '', projectLink: '//www.github.com', tags: [Tag.LIVEWIRE], pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'] },
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  GetProjectByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
