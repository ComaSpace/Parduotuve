import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ErrorBlockComponent } from './components/helper/error-block/error-block.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CalculatorComponent, NavigationComponent, CommonModule, ErrorBlockComponent]
})
export class AppComponent {
  title = 'front';
}
