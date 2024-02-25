import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ludosport-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
