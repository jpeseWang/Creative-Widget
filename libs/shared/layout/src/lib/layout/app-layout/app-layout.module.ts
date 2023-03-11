import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppLayoutComponent } from './app-layout.component';
import { RouterModule } from '@angular/router';
import { ContentSectionComponent } from '../../components/content-section/content-section.component';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { FooterSectionComponent } from '../../components/footer-section/footer-section.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { LogoSectionComponent } from '../../components/logo-section/logo-section.component';
import { PricingSectionComponent } from '../../components/pricing-section/pricing-section.component';
import { HeaderSectionComponent } from '../../components/header-section/header-section.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    AppHeaderComponent,
    AppLayoutComponent,
    HeroSectionComponent,
    ContentSectionComponent,
    FooterSectionComponent,
    FaqSectionComponent,
    LogoSectionComponent,
    HeaderSectionComponent,
    PricingSectionComponent,
  ],
  exports: [
    AppHeaderComponent,
    AppLayoutComponent,
    HeroSectionComponent,
    ContentSectionComponent,
    FooterSectionComponent,
    FaqSectionComponent,
    LogoSectionComponent,
    HeaderSectionComponent,
    PricingSectionComponent,
  ],
})
export class AppLayoutModule {}
