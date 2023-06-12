import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ErrorKeys } from '../../core/models/config.model';
import { getValidationErrorMessage } from '../../core/utilities/validation';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnChanges {
  @Input() control = new FormControl();
  errorMessage = '';
  $subscription = new Subscription();

  ngOnChanges(): void {
    this.$subscription.unsubscribe();

    this.$subscription = this.control.valueChanges.subscribe(() => {
      this.errorMessage = this.control.errors ? getValidationErrorMessage(Object.keys(this.control.errors)[0] as ErrorKeys) : '';
    })
  }

  ngOnDestroy(): void{
    this.$subscription.unsubscribe();
  }
}
