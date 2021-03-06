import { MaterialModule } from './../material.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormDebugComponent } from './../form-debug/form-debug.component';


@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    TemplateFormComponent
  ]
})
export class TemplateFormModule { }
