import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from '@cwp/shared/layout';
import { remotesAppCommunityRoute } from './remotes-app-community.routes';
import { PostComponent } from './containers/post/post.component';
import { MessageComponent } from './page/message/message.component';
import { ProfileComponent } from './page/profile/profile.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { RecentPostComponent } from './containers/recent-post/recent-post.component';
import { TrendingPostComponent } from './containers/trending-post/trending-post.component';
import { MyProfileComponent } from './containers/my-profile/my-profile.component';
import { CommunityComponent } from './page/community/community.component';
import { MyMessageComponent } from './containers/my-message/my-message.component';
import { MessageDialoguesComponent } from './containers/message-dialogues/message-dialogues.component';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(remotesAppCommunityRoute),
  ],
  declarations: [
    PostComponent,
    MessageComponent,
    ProfileComponent,
    UserProfileComponent,
    MyProfileComponent,
    RecentPostComponent,
    TrendingPostComponent,
    CommunityComponent,
    MessageComponent,
    ProfileComponent,
    MyMessageComponent,
    MessageDialoguesComponent,
  ],
  exports: [CommunityComponent, MessageComponent, ProfileComponent],
})
export class RemotesAppCommunityModule {}
