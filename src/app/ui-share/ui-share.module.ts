import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiShareRoutingModule } from './ui-share-routing.module';
import { TopicSearchComponent } from './components/topic-search/topic-search.component';
import { HomeComponent } from './home/home.component';
import { SelectedTopicsComponent } from './components/topic-search/selected-topics/selected-topics.component';
import { IntrestTopicsComponent } from './components/topic-search/intrest-topics/intrest-topics.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TagMatchesComponent } from './components/tag-matches/tag-matches.component';
 import { PrefferedLanguageComponent } from './components/preffered-language/preffered-language.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { HeaderComponent } from './layout/header/header.component';
import { DevelopmentPlanComponent } from './components/development-plan/development-plan.component';
import { ManageFiltersComponent } from './components/manage-filters/manage-filters.component';
import { AllChannelsComponent } from './components/all-channels/all-channels.component';
import { MySubscriptionComponent } from './components/my-subscription/my-subscription.component';
import { MyStudioComponent } from './components/my-studio/my-studio.component';
import { SharedWithMeComponent } from './components/shared-with-me/shared-with-me.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { TreeviewModule } from 'ngx-treeview';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    HomeComponent,
     TopicSearchComponent, 
     SelectedTopicsComponent, 
     IntrestTopicsComponent, 
     TagMatchesComponent,
      PrefferedLanguageComponent,
      ManageFiltersComponent,
      AllChannelsComponent,
      MySubscriptionComponent,
      MyStudioComponent,
      SharedWithMeComponent,
      DevelopmentPlanComponent,
      RecommendedComponent,
      //HeaderComponent
      
    ],
  imports: [
    CommonModule,
    UiShareRoutingModule,
    NgSelectModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxStarRatingModule,
    TooltipModule.forRoot(),
   // TreeviewModule.forRoot()
  SlickCarouselModule
  ],
  exports: [
    IntrestTopicsComponent,
     TagMatchesComponent, 
     PrefferedLanguageComponent,
     ManageFiltersComponent,
      AllChannelsComponent,
      MySubscriptionComponent,
      MyStudioComponent,
      SharedWithMeComponent,
      DevelopmentPlanComponent,
      RecommendedComponent,

    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class UiShareModule { }
