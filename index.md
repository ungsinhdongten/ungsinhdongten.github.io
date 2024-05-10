---
layout: page
title: Nhà Ứng sinh
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPButton
} from 'vitepress/theme'

import StartLayout from '.vitepress/theme/layouts/StartLayout.vue';

const members = [
  {
    avatar: 'images/phuongdien/nb.jpg',
    name: 'Nhân bản',
    title: 'Nhằm đào tạo ứng sinh nên một Con Người Trưởng Thành. Ứng sinh cần cố gắng để có được trí năng tốt, ý chí vững vàng, quân bình tâm lí và sức khỏe tốt.',
  },
  {
    avatar: 'images/phuongdien/tl.jpg',
    name: 'Thiêng liêng',
    title: 'Nhằm giúp ứng sinh nhận biết và có một tình yêu cá vị với Đức Giêsu Ki-tô. Từ đó, ứng sinh lắng nghe tiếng Chúa mời gọi và xác tín ơn gọi sống đời dâng hiến của mình.',
  },
  {
    avatar: 'images/phuongdien/cd.jpg',
    name: 'Cộng đoàn',
    title: 'Nhằm giúp ứng sinh có khả năng sống chung và cộng tác với người khác với một tinh thần quảng đại, rộng mở và khiêm tốn phục vụ.',
  },
  {
    avatar: 'images/phuongdien/tt.jpg',
    name: 'Tri thức',
    title: 'Nhằm giúp ứng sinh trau dồi kiên thức để có thể phục vụ Chúa và các linh hồn một cách hữu hiệu và đắc lực hơn.',
  },
  {
    avatar: 'images/phuongdien/td.jpg',
    name: 'Tông đồ',
    title: 'Nhằm giúp ứng sinh có một tinh thần tông đồ theo cách thế dòng Tên.',
  }
];
</script>

<style>
.arrow {
    border: solid black;
    opacity: 0.5;
    border-width: 0 10px 10px 0;
    display: inline-block;
    padding: 10px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
</style>

<VPTeamPage>
  <StartLayout></StartLayout>
  <div align="center">
    <VPButton theme='brand' font-size='40px' text="Liên hệ" href="/dongten"
    />
  </div>
  <VPTeamPageTitle>
    <template #title>
      Mục đích và khuôn mẫu
    </template>
    <template #lead>
      Nhà Ứng sinh Dòng Tên tạo cơ hội và điều kiện thuận lợi nhằm ươm mầm ơn gọi cho các bạn trẻ đang có ước muốn theo đuổi lý tưởng tận hiến.
      <br><br>
      Đảm nhận việc đào luyện các ứng sinh theo chiều hướng phát triển toàn diện bao gồm: Nhân Bản, Thiêng Liêng, Cộng Đoàn, Trí Thức và Tông Đồ.
      <br><br>
      Chính gia đình thánh của Chúa Giê-su ở Na-da-rét là khuôn mẫu sống động nhất của Nhà Ứng Sinh Dòng Tên. Nơi gia đình thánh, “Người ngày càng khôn lớn và được Thiên Chúa cũng như mọi người thương mến.” (Lc 2, 52)
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium"
    :members="members"
  />
</VPTeamPage>
