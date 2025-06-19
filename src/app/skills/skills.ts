import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
  skillList = [
    { name: 'MongoDB', icon: 'bxl-mongodb' },
    { name: 'Express.js', icon: 'bxl-nodejs' },
    { name: 'Angular', icon: 'bxl-angular' },
    { name: 'Node.js', icon: 'bxl-nodejs' },
    { name: 'JavaScript', icon: 'bxl-javascript' },
    { name: 'HTML5', icon: 'bxl-html5' },
    { name: 'CSS3', icon: 'bxl-css3' },
    { name: 'C++', icon: 'bxl-c-plus-plus' },
    { name: 'Java', icon: 'bxl-java' },
    { name: 'Python', icon: 'bxl-python' }
  ];
}
