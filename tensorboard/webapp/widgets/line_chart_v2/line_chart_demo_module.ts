/* Copyright 2020 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LineChartDemoComponent} from './line_chart_demo_component';
import {LineChartModule} from './line_chart_module';

@NgModule({
  declarations: [LineChartDemoComponent],
  exports: [LineChartDemoComponent],
  imports: [CommonModule, LineChartModule, BrowserModule],
  bootstrap: [LineChartDemoComponent],
})
export class LineChartDemoModule {}
