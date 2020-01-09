import { Route } from '@angular/router';
import { AnalyticsAmgComponent } from './analytics-amg.component';

export const routing: Route[] = [
  { path: '**', component: AnalyticsAmgComponent }
];
