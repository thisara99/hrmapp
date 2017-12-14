import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HrmappRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { HrmappCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { HrmappLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { HrmappDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { HrmappTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { HrmappEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { HrmappJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { HrmappJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        HrmappRegionMySuffixModule,
        HrmappCountryMySuffixModule,
        HrmappLocationMySuffixModule,
        HrmappDepartmentMySuffixModule,
        HrmappTaskMySuffixModule,
        HrmappEmployeeMySuffixModule,
        HrmappJobMySuffixModule,
        HrmappJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HrmappEntityModule {}
